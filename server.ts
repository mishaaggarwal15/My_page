import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Initialize Resend
let resend: Resend | null = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

/**
 * Lead Scoring API
 * Uses Gemini to analyze lead data and return a professional score & rationale.
 */
app.post("/api/score-lead", async (req, res) => {
  const { name, email, phone, company, role, decisionAuthority, aiReadiness, timeline, currency, revenue, techStack, painPoints } = req.body;

  if (!name || !email || !company || (!role && !decisionAuthority)) {
    return res.status(400).json({ error: "Missing required lead information." });
  }

  try {
    const prompt = `
      Act as a world-class Revenue Operations (RevOps) Expert and Strategic Architect with a Bain & Company background.
      Score the following inbound lead based on their potential for elite strategic advisory (RevOps Audit, Agentic AI, Growth Strategy).
      
      Lead Details:
      - Name: ${name}
      - Email: ${email}
      - Phone: ${phone || "Not provided"}
      - Company: ${company}
      - Role/Authority: ${decisionAuthority || role}
      - AI Readiness: ${aiReadiness}
      - Timeline for Results: ${timeline}
      - Annual Revenue: ${currency} ${revenue}
      - Tech Stack: ${techStack || "Not specified"}
      - $1M Pain Point: ${painPoints}
      
      Scoring Criteria (Strategic Architect Priorities):
      - High Score (8-10): MUST be a decision-maker (Founder/CEO) OR high-revenue entity (Series B+, revenue > $5M). 
      - Immediate timelines and needs for "Agentic AI" or "Global RevOps" should result in near-perfect scores.
      - Fits the LBS/Bain/Checkout.com pedigree.
      - Medium Score (5-7): Established SMEs or startups with clear technical gaps and 1-3 month timelines.
      - Low Score (1-4): Early-stage, "Exploring" AI, or 6+ month timelines with limited budget.
      
      Return a JSON object with:
      - score: A number from 1 to 10 (Weight heavily: Founder/CEO = +3, Immediate = +2).
      - tier: "Elite", "High Fit", "Nurture", or "Low Alignment".
      - rationale: EXACTLY 2 professional sentences explaining the strategic alignment with my LBS/Bain/Checkout.com background.
      - quickWin: A 1-sentence analytical tactic I can use to build immediate authority on the call.
      - strategy: A brief internal action plan.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            tier: { type: Type.STRING },
            rationale: { type: Type.STRING },
            quickWin: { type: Type.STRING },
            strategy: { type: Type.STRING },
          },
          required: ["score", "tier", "rationale", "quickWin", "strategy"]
        }
      }
    });

    const result = JSON.parse(response.text);

    // Send Email Notification
    if (resend) {
      try {
        await resend.emails.send({
          from: 'Strategic Architect <onboarding@resend.dev>',
          to: 'misha.aggarwal75@gmail.com',
          subject: `Briefing: ${name} (${result.score}/10) - ${company}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #1a1a1a; padding: 40px; color: #010101; background: #fff;">
              <h2 style="font-weight: 800; text-transform: uppercase; letter-spacing: -0.01em; border-bottom: 2px solid #000; padding-bottom: 15px; margin-top: 0;">Executive Summary: Inbound Lead</h2>
              
              <div style="margin: 25px 0;">
                <p style="text-transform: uppercase; font-size: 9px; font-weight: 800; color: #999; letter-spacing: 0.15em; margin-bottom: 8px;">1. Lead & Company Overview</p>
                <h3 style="margin: 0; font-size: 20px; font-weight: 700;">${name} | ${company}</h3>
                <p style="margin: 5px 0; font-size: 14px; color: #555;">${decisionAuthority || role} (${currency} ${revenue})</p>
                <p style="margin: 5px 0; font-size: 12px; color: #888;">Timeline: ${timeline} | AI Readiness: ${aiReadiness}</p>
                <p style="margin: 5px 0; font-size: 12px; color: #888;">Email: ${email} | Phone: ${phone || "N/A"}</p>
              </div>

              <div style="margin: 25px 0;">
                <p style="text-transform: uppercase; font-size: 9px; font-weight: 800; color: #999; letter-spacing: 0.15em; margin-bottom: 8px;">2. Strategic Score & Rationale</p>
                <div style="display: inline-block; background: #000; color: #fff; padding: 5px 12px; font-size: 18px; font-weight: 900; margin-bottom: 15px;">
                  SCORE: ${result.score}/10 [${result.tier.toUpperCase()}]
                </div>
                <p style="font-size: 14px; line-height: 1.6; color: #333; margin: 0; font-style: italic;">"${result.rationale}"</p>
              </div>

              <div style="margin: 25px 0;">
                <p style="text-transform: uppercase; font-size: 9px; font-weight: 800; color: #999; letter-spacing: 0.15em; margin-bottom: 8px;">3. Tech Stack & Pain Point Analysis</p>
                <p style="margin: 0 0 10px 0; font-size: 13px; color: #555;"><strong>Current Stack:</strong> ${techStack || "Not specified"}</p>
                <p style="font-size: 14px; line-height: 1.6; color: #333; margin: 0; background: #fbfbfb; padding: 15px; border: 1px solid #eee;">${painPoints}</p>
              </div>

              <div style="margin: 25px 0; background: #000; padding: 25px; color: #fff;">
                <p style="text-transform: uppercase; font-size: 9px; font-weight: 800; color: #aaa; letter-spacing: 0.15em; margin-bottom: 8px;">4. Suggested 'Quick Win' Strategy</p>
                <p style="font-size: 15px; font-weight: 600; color: #fff; margin: 0; line-height: 1.4;">${result.quickWin}</p>
              </div>

              <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px;">
                <p style="font-size: 10px; color: #aaa; margin: 0;">Internal Briefing. Strategic Architect Intelligence Engine.</p>
              </div>
            </div>
          `
        });
      } catch (err) {
        console.error("Failed to send email notification:", err);
      }
    }

    res.json(result);
  } catch (error: any) {
    console.error("Lead scoring error:", error);
    res.status(500).json({ error: "Failed to score lead. " + error.message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
