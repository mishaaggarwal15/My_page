import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Calendar, Star, Loader2, Send, Target } from "lucide-react";

import { STRATEGIC_LINKS } from "../constants";

export function FoundingLog() {
  const [selectedReport, setSelectedReport] = React.useState<any>(null);

  const reports = [
    {
      title: "Scaling K-12 Revenue Engines",
      role: "Brand & RevOps Advisory Consultant",
      impact: "Commercial Blueprint",
      description: "Leading the strategic design for a new school launch. I am building the commercial frameworks and go-to-market strategy required to establish a K-12 institution from 'zero-to-one'.",
      metric: "Ready for Scale",
      details: `
        ### The Mandate
        Leading the strategic design for a new school launch. I am building the commercial frameworks and go-to-market strategy required to establish a K-12 institution from 'zero-to-one'.

        ### Core Interventions
        - **Commercial Framework Design**: Architecting the end-to-end enrollment funnel, from brand awareness to final registration.
        - **Go-To-Market Strategy**: Defining the regional market positioning and competitive landscape analysis for high-premium educational offerings.
        - **RevOps Infrastructure**: Establishing the technical and operational guardrails required for sustainable enrollment growth.

        ### Strategic Outcome
        Constructed a repeatable commercial engine that bridges the gap between educational vision and sustainable operational revenue.
      `
    },
    {
      title: "Zero-to-One Organic Pipelines",
      role: "Revenue Strategy Architect",
      impact: "Self-Sustaining Inbound",
      description: "Orchestrated the pivot from high-volume cold calling to a sophisticated organic inbound engine. Built the automation workflows that capture and score leads without manual intervention.",
      metric: "400% Inbound Lift",
      details: `
        ### The Mandate
        Orchestrated the pivot from high-volume cold calling to a sophisticated organic inbound engine. Built the automation workflows that capture and score leads without manual intervention.

        ### Core Interventions
        - **Authority-Led Acquisition**: Shifting acquisition strategy from interruptive outbound to high-authority inbound content engines.
        - **Intelligence Layer**: Implementing lead scoring models that prioritize accounts based on behavioral intent and dark-social signals.
        - **Automated Lifecycle**: Engineering touchless workflows that nurture leads through the education phase without manual SDR overhead.

        ### Strategic Outcome
        Reduced total reliance on cold-outreach by 80% while increasing qualified lead velocity through systemic automation.
      `
    },
    {
      title: "AI-Driven Efficiency Workflows",
      role: "Technical Automation Lead",
      impact: "Operational Optimization",
      description: "Leveraging my engineering background to drive operational gains. Developed custom Python and SQL scripts that automate repetitive tasks, resulting in a 40% reduction in manual team effort.",
      metric: "ROI via Code",
      details: `
        ### The Mandate
        Leveraging my engineering background to drive operational gains. Developed custom Python and SQL scripts that automate repetitive tasks, resulting in a 40% reduction in manual team effort.

        ### Core Interventions
        - **Custom Automation Pipelines**: Built localized scripts to bridge gaps between legacy CRM data and modern analytical tools.
        - **Algorithmic Sanitization**: Developed SQL-based cleaning logic that eliminates manual data entry errors and stale records.
        - **Technical Debt Reduction**: Replacing labor-intensive manual spreadsheets with automated, serverless data workflows.

        ### Strategic Outcome
        Recovered 15+ hours per week for core operational staff, directly translating technical efficiency into increased strategic bandwidth.
      `
    }
  ];

  return (
    <section id="founding-log" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-muted mb-4 block">Proof of Work</span>
            <h2 className="text-5xl font-bold mb-6">The Founding Log</h2>
            <p className="text-brand-muted max-w-2xl text-lg font-light leading-relaxed">
              A live journal documenting strategic interventions across revenue operations, AI implementation, and startup scale.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {reports.map((report, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedReport(report)}
            >
              <div className="mb-8 overflow-hidden bg-slate-50 aspect-[4/3] flex items-center justify-center border border-slate-100 rounded-sm relative">
                <div className="p-8 text-center">
                   <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-tighter">{report.role}</div>
                   <div className="text-lg font-display font-medium text-brand-primary">{report.impact}</div>
                </div>
                <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase bg-white px-4 py-2 border border-brand-primary/10">Read Briefing</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold tracking-tight text-slate-500 rounded uppercase">{report.metric}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-slate-600 transition-colors uppercase tracking-tight leading-none">{report.title}</h3>
              <p className="text-brand-muted font-light leading-relaxed text-sm">{report.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedReport && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReport(null)}
              className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-3xl bg-white rounded-sm shadow-2xl relative z-10 overflow-hidden max-h-[85vh] flex flex-col"
            >
               <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                  <div className="max-w-[80%]">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted mb-1 block">Full Case Briefing</span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{selectedReport.title}</h3>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{selectedReport.role}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedReport(null)}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-colors text-slate-400 hover:text-brand-primary"
                  >
                    ×
                  </button>
               </div>
               <div className="p-8 md:p-12 overflow-y-auto text-brand-primary">
                  <div className="grid md:grid-cols-2 gap-8 mb-12 border-b border-slate-100 pb-12">
                     <div>
                        <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase mb-2 block">Executive Directives</span>
                        <p className="text-sm font-medium tracking-tight leading-relaxed">{selectedReport.description}</p>
                     </div>
                     <div className="flex gap-12">
                        <div>
                          <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase mb-2 block">Primary Metric</span>
                          <p className="text-sm font-bold">{selectedReport.impact}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase mb-2 block">Status</span>
                          <p className="text-sm font-bold">{selectedReport.metric}</p>
                        </div>
                     </div>
                  </div>
                  
                  <div className="prose prose-slate max-w-none prose-h3:text-xl prose-h3:font-bold prose-p:text-brand-muted prose-p:font-light prose-li:text-brand-muted prose-li:font-light">
                     {selectedReport.details.split('\n').map((line: string, i: number) => {
                       if (line.trim().startsWith('###')) {
                         return <h3 key={i} className="text-xl font-bold mb-4 mt-8 uppercase tracking-tight">{line.replace('###', '').trim()}</h3>
                       }
                       if (line.trim().startsWith('-')) {
                         return <li key={i} className="ml-4 mb-2">{line.replace('-', '').trim()}</li>
                       }
                       if (line.trim().length > 0) {
                         return <p key={i} className="mb-4 leading-relaxed font-light">{line.trim()}</p>
                       }
                       return null;
                     })}
                  </div>
               </div>
               <div className="p-8 border-t border-slate-100 bg-slate-50 flex justify-end">
                  <button 
                    onClick={() => {
                      setSelectedReport(null);
                      document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="h-12 px-8 bg-brand-primary text-white text-xs font-bold uppercase tracking-widest rounded-sm"
                  >
                    Discuss similar architecture
                  </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function Consult() {

  const [formData, setFormData] = useState({ 
    name: "", 
    email: "",
    phone: "",
    company: "", 
    role: "", 
    decisionAuthority: "",
    aiReadiness: "",
    timeline: "",
    currency: "USD",
    revenue: "",
    techStack: "",
    painPoints: "" 
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  const handleScoreLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRedirecting(true);
    try {
      const response = await fetch("/api/score-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data);
      setShowBooking(true);
      
      // Auto-redirect if fit is reasonable
      if (data.score >= 5) {
        setTimeout(() => {
          window.open(STRATEGIC_LINKS.CALENDLY, '_blank');
        }, 3000); // 3 second buffer for high-end professional feel
      }
    } catch (err) {
      console.error(err);
      setRedirecting(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consult" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-muted mb-6 block">Engagement</span>
            <h2 className="text-6xl font-bold mb-8 leading-[0.95]">Strategic Partnership.</h2>
            <p className="text-xl text-brand-muted font-light mb-12 leading-relaxed max-w-lg">
              Advisory windows are strictly limited to ensure quality of partnership for current founding commitments. 
            </p>
            
            <div className="space-y-8 mb-16">
              <div className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-sm">
                <div className="p-2 bg-slate-50 text-brand-primary">
                   <Target className="w-5 h-5" />
                </div>
                <div>
                   <h4 className="font-bold text-sm mb-1 uppercase tracking-tight">Audit-First Approach</h4>
                   <p className="text-xs text-brand-muted font-light">We don't pitch before we diagnose. Every partnership starts with a forensic RevOps audit.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-sm">
                <div className="p-2 bg-brand-primary text-white">
                   <Star className="w-5 h-5" />
                </div>
                <div>
                   <h4 className="font-bold text-sm mb-1 uppercase tracking-tight">Tier-1 Experience</h4>
                   <p className="text-xs text-brand-muted font-light">Direct advisory from an LBS & Bain alumnus. No agency middle-men or junior associates.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {!showBooking ? (
                <motion.div
                  key="consult-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-12 rounded-sm shadow-2xl shadow-slate-200/50 border border-slate-100 relative z-10"
                >
                  <h3 className="text-2xl font-bold mb-8 italic">Application for Advisory</h3>
                  {redirecting && !result ? (
                    <div className="py-12 text-center">
                      <div className="flex justify-center mb-6">
                        <Loader2 className="w-8 h-8 animate-spin text-brand-primary" />
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-brand-primary uppercase tracking-wider">
                        Thank you. Our AI is currently analysing your profile to ensure a strategic fit. If approved, you will be redirected to the booking calendar momentarily.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleScoreLead} className="space-y-6">
                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          required
                          className="w-full h-12 px-0 border-b border-slate-200 focus:border-brand-primary focus:outline-none transition-colors text-sm bg-transparent"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block">
                            Contact Email <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="email" 
                            required
                            className="w-full h-12 px-0 border-b border-slate-200 focus:border-brand-primary focus:outline-none transition-colors text-sm bg-transparent"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block">Phone Number</label>
                          <input 
                            type="tel" 
                            className="w-full h-12 px-0 border-b border-slate-200 focus:border-brand-primary focus:outline-none transition-colors text-sm bg-transparent"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block">
                            Company <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text" 
                            required
                            className="w-full h-12 px-0 border-b border-slate-200 focus:border-brand-primary focus:outline-none transition-colors text-sm bg-transparent"
                            placeholder="Organization"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block">
                            Decision Authority <span className="text-red-500">*</span>
                          </label>
                          <select 
                            required
                            className="w-full h-12 px-0 border-b border-slate-200 focus:border-brand-primary focus:outline-none transition-colors text-sm bg-transparent"
                            value={formData.decisionAuthority}
                            onChange={(e) => setFormData({...formData, decisionAuthority: e.target.value, role: e.target.value})}
                          >
                            <option value="">Select Level</option>
                            <option value="Founder/CEO">Founder/CEO</option>
                            <option value="Head of Operations">Head of Operations</option>
                            <option value="CTO/CIO">CTO/CIO</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block">AI Readiness Check</label>
                          <select 
                            className="w-full h-12 px-0 border-b border-slate-200 focus:border-brand-primary focus:outline-none transition-colors text-sm bg-transparent"
                            value={formData.aiReadiness}
                            onChange={(e) => setFormData({...formData, aiReadiness: e.target.value})}
                          >
                            <option value="">Do you use AI daily?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Exploring">Exploring</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block">Project Timeline</label>
                          <select 
                            className="w-full h-12 px-0 border-b border-slate-200 focus:border-brand-primary focus:outline-none transition-colors text-sm bg-transparent"
                            value={formData.timeline}
                            onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          >
                            <option value="">Target timeline for results?</option>
                            <option value="Immediate">Immediate</option>
                            <option value="1-3 months">1-3 months</option>
                            <option value="6+ months">6+ months</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-1">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block">Currency</label>
                          <select 
                            required
                            className="w-full h-12 px-0 border-b border-slate-200 focus:border-brand-primary focus:outline-none transition-colors text-sm bg-transparent"
                            value={formData.currency}
                            onChange={(e) => setFormData({...formData, currency: e.target.value})}
                          >
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="EUR">EUR</option>
                            <option value="INR">INR</option>
                            <option value="AED">AED</option>
                            <option value="SAR">SAR</option>
                            <option value="SGD">SGD</option>
                            <option value="AUD">AUD</option>
                            <option value="HKD">HKD</option>
                            <option value="JPY">JPY</option>
                          </select>
                        </div>
                        <div className="col-span-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block">Annual Revenue</label>
                          <select 
                            required
                            className="w-full h-12 px-0 border-b border-slate-200 focus:border-brand-primary focus:outline-none transition-colors text-sm bg-transparent"
                            value={formData.revenue}
                            onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                          >
                            <option value="">Select Range</option>
                            <option value="<1M">&lt; 1M</option>
                            <option value="1M-5M">1M - 5M</option>
                            <option value="5M-20M">5M - 20M</option>
                            <option value="20M+">20M+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block">Current CRM / Tech Stack</label>
                        <input 
                          type="text" 
                          className="w-full h-12 px-0 border-b border-slate-200 focus:border-brand-primary focus:outline-none transition-colors text-sm bg-transparent"
                          placeholder="e.g., HubSpot, Salesforce, Snowflake"
                          value={formData.techStack}
                          onChange={(e) => setFormData({...formData, techStack: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block">
                          Main Operational Friction <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                          required
                          className="w-full py-4 px-0 border-b border-slate-200 focus:border-brand-primary focus:outline-none transition-colors text-sm h-24 resize-none bg-transparent"
                          placeholder="e.g., Manual ERP data entry, leaking revenue funnels, or lack of automated reporting."
                          value={formData.painPoints}
                          onChange={(e) => setFormData({...formData, painPoints: e.target.value})}
                        />
                      </div>

                      <button 
                        type="submit"
                        disabled={loading}
                        className="w-full h-16 bg-brand-primary text-white font-bold rounded-sm flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-slate-800 transition-colors uppercase tracking-widest text-xs"
                      >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Application"}
                      </button>
                    </form>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="booking-gated"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-12 rounded-sm shadow-2xl border border-slate-100 text-center"
                >
                  <div className="w-20 h-20 bg-brand-primary text-white rounded-full flex items-center justify-center text-3xl font-bold font-display mx-auto mb-8">
                    {result?.score}/10
                  </div>
                  <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight italic">Strategic Analysis Complete.</h3>
                  <p className="text-brand-primary font-medium mb-8 text-sm leading-relaxed uppercase tracking-widest">
                    Our AI is currently analyzing your strategic fit. If approved, you will be redirected to the booking calendar momentarily.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-sm mb-10 text-left border-l-4 border-brand-primary">
                    <p className="text-xs italic text-slate-600 leading-relaxed font-light">
                      "{result?.rationale}"
                    </p>
                  </div>

                  <a 
                    href={STRATEGIC_LINKS.CALENDLY} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full h-16 bg-brand-primary text-white font-bold rounded-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors uppercase tracking-widest text-xs"
                  >
                    <Calendar className="w-4 h-4" /> Finalize Booking Manually
                  </a>
                  <button 
                    onClick={() => {
                      setShowBooking(false);
                      setRedirecting(false);
                      setResult(null);
                    }}
                    className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-brand-primary"
                  >
                    Edit Information
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Background geometric accents */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-slate-100 rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
