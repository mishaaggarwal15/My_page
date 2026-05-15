import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight, Binary, Target, Zap, Layout, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-brand-muted text-xs font-medium tracking-wide uppercase mb-8 border border-slate-200">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
              Strategic Architect & RevOps Expert
            </span>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] text-brand-primary mb-10">
              Strategic Partnership for <span className="text-slate-400 italic">High-Impact</span> Growth.
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-muted font-light leading-relaxed mb-12 max-w-2xl">
              I architect autonomous revenue engines for Series B+ startups. Bridging London Business School logic with deep technical execution to unlock massive operational gains.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button onClick={() => document.getElementById('consult')?.scrollIntoView({behavior: 'smooth'})} className="h-16 px-10 bg-brand-primary text-white font-bold rounded-sm inline-flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors uppercase tracking-widest text-xs">
                Partner with Me <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <button onClick={() => document.getElementById('founding-log')?.scrollIntoView({behavior: 'smooth'})} className="h-16 px-10 border border-slate-200 text-brand-primary font-bold rounded-sm inline-flex items-center justify-center hover:bg-slate-50 transition-colors uppercase tracking-widest text-xs">
                View Proof of Work
              </button>
            </div>
          </motion.div>
        </div>

        {/* Featured logos / Social Proof Mockup */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-10 border-t border-slate-100 flex flex-wrap items-center gap-x-12 gap-y-6 grayscale opacity-40"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted">Legacy Impact</span>
          <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">Checkout.com</div>
          <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">Bain & Company</div>
          <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">AlixPartners</div>
          <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">LBS</div>
        </motion.div>
      </div>
    </section>
  );
}

export function Solutions() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const verticals = [
    {
      title: "Revenue Operations Audit",
      shortDescription: "A forensic analysis of your commercial engine. We identify systemic leakage points, tech-stack redundancies, and workflow inefficiencies.",
      fullContent: "Leveraging my experience at Checkout.com, I identify operational leaks in global commercial engines. I specialize in optimizing incentive structures and data-driven workflows to maximize revenue retention and growth.",
      icon: Target,
      tag: "Efficiency",
      strategicValue: "Forensic analysis leading to lean, 'Bain-level' operational stability."
    },
    {
      title: "Agentic AI Implementation",
      shortDescription: "Beyond basic automation. We architect custom, autonomous AI agents that handle research, scoring, and multi-channel outreach.",
      fullContent: "I design and deploy custom, no-code AI agents and agentic workflows that automate high-friction business processes. My focus is on reducing manual effort by up to 40% while ensuring technical scalability.",
      icon: Binary,
      tag: "Innovation",
      strategicValue: "Custom autonomous agents that turn passive tools into proactive revenue drivers."
    },
    {
      title: "Growth Strategy Advisory",
      shortDescription: "Dedicated partnership for Series B+ startups seeking market diversification and technical execution for sustainable scaling.",
      fullContent: "Combining Engineering logic with my Bain & Company and London Business School pedigree, I provide strategic counsel for Series B+ startups. This includes cost-saving audits, market diversification strategies, and 'zero-to-one' pipeline architecture.",
      icon: Zap,
      tag: "Scale",
      strategicValue: "Strategic counsel bridging boardroom logic with high-velocity technical execution."
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-muted mb-4 block">Strategic Verticals</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Productized Advisory Services</h2>
          <p className="text-brand-muted max-w-2xl text-lg font-light leading-relaxed">
            High-impact interventions designed to bridge the gap between business strategy and autonomous execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {verticals.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(v)}
              className="p-12 bg-white border border-slate-100 rounded-sm hover:shadow-2xl hover:shadow-slate-200/40 transition-all group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <v.icon className="w-24 h-24" />
              </div>
              <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-sm mb-10 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <v.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted mb-4 block">
                {v.tag}
              </span>
              <h3 className="text-2xl font-bold mb-6">{v.title}</h3>
              <p className="text-brand-muted leading-relaxed mb-10 font-light text-sm">{v.shortDescription}</p>
              <button className="inline-flex items-center text-sm font-bold gap-2 text-brand-primary border-b border-brand-primary/10 pb-1 group-hover:border-brand-primary transition-colors">
                View Briefing <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-white rounded-sm shadow-2xl relative z-10 overflow-hidden max-h-[85vh] flex flex-col"
            >
               <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted mb-1 block">Solution Briefing</span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight">{selectedService.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-colors text-slate-400 hover:text-brand-primary"
                  >
                    ×
                  </button>
               </div>
               <div className="p-8 md:p-12 overflow-y-auto text-brand-primary">
                  <div className="mb-10">
                     <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase mb-4 block">Strategic Mandate</span>
                     <p className="text-lg font-medium tracking-tight leading-relaxed text-brand-primary italic">
                        "{selectedService.fullContent}"
                     </p>
                  </div>
                  
                  <div className="bg-slate-50 p-8 border-l-4 border-brand-primary rounded-sm mb-10">
                     <span className="text-[10px] font-bold tracking-widest text-brand-muted uppercase mb-2 block">Foundational ROI</span>
                     <p className="text-sm font-medium leading-relaxed">{selectedService.strategicValue}</p>
                  </div>

                  <div className="prose prose-slate max-w-none">
                     <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Service Integration</h4>
                     <ul className="space-y-4 text-sm font-light text-brand-muted">
                        <li className="flex items-start gap-3">
                           <div className="mt-1.5 w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0" />
                           Direct advisory access to strategic architectural sessions.
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="mt-1.5 w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0" />
                           Technical audit of current growth workflows and leakage points.
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="mt-1.5 w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0" />
                           Repeatable commercial blueprint for Series B+ scaling.
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="p-8 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">Engagement status: Open for Q3/Q4</span>
                  <button 
                    onClick={() => {
                      setSelectedService(null);
                      document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="h-12 px-8 bg-brand-primary text-white text-xs font-bold uppercase tracking-widest rounded-sm w-full sm:w-auto"
                  >
                    Consult on this vertical
                  </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function PipelineEngine() {
  return (
    <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6 block">Architecture</span>
            <h2 className="text-5xl font-bold mb-10 leading-tight">The "Organic Pipeline" Engine</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold font-display">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Omnichannel Extraction</h4>
                  <p className="text-slate-400 leading-relaxed font-light">LinkedIn micro-stories & AI-Optimisation (AIO) that convert dark social intent into structured lead data.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold font-display">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Automated Nurture Sequence</h4>
                  <p className="text-slate-400 leading-relaxed font-light">A no-code stack (Vite → CRM → AI) that automates follow-ups while maintaining "Bain-level" personalization.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold font-display">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">AI Scoring & Routing</h4>
                  <p className="text-slate-400 leading-relaxed font-light">Zero manual input. Leads are scored by Gemini and routed directly to your calendar or high-priority queue.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-panel text-brand-primary p-8 rounded-sm shadow-2xl skew-x-1 -rotate-2">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                <Terminal className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-mono text-slate-400 uppercase">System Intelligence / Lead Analysis</span>
              </div>
              <div className="space-y-4 font-mono text-[13px]">
                <div className="flex justify-between border-b border-slate-50 py-2">
                  <span className="text-slate-400">INPUT_NAME</span>
                  <span className="font-bold">Misha Aggarwal</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 py-2">
                  <span className="text-slate-400">ORGANIZATION</span>
                  <span className="font-bold">Fortune 500 / Seed Inc</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 py-2">
                  <span className="text-slate-400">REV_FIT_SCORE</span>
                  <span className="text-emerald-600 font-bold">98/100 (Tier A)</span>
                </div>
                <div className="bg-slate-50 p-4 mt-4 rounded-sm italic text-slate-600 text-xs leading-relaxed">
                  "Lead exhibits high intent signals on Agentic AI. Recommended action: Strategic Architect Audit."
                </div>
              </div>
            </div>
            {/* Background floating elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border border-white/10 rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
