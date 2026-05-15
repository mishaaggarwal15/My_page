import React, { useState, useEffect } from "react";
import Hero, { Solutions, PipelineEngine } from "./components/MainSections";
import { FoundingLog, Consult } from "./components/ExtraSections";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { STRATEGIC_LINKS } from "./constants";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Founding Log", href: "#founding-log" },
    { name: "Consult", href: "#consult" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg border-b border-slate-100 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter">
          STRATEGIC <span className="text-slate-400 font-light">ARCHITECT</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-slate-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={STRATEGIC_LINKS.LINKEDIN} 
            target="_blank" 
            rel="noreferrer"
            className="text-sm font-medium hover:text-slate-500 transition-colors"
          >
            LinkedIn
          </a>
          <a href="#consult" className="h-10 px-6 bg-brand-primary text-white text-xs font-bold rounded-sm flex items-center justify-center hover:bg-slate-800 transition-colors">
            Partner with Me <ArrowUpRight className="w-3 h-3 ml-1" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <h3 className="text-xl font-display font-bold tracking-tighter mb-4">Strategic Architect</h3>
            <p className="text-brand-muted font-light text-sm leading-relaxed mb-6">
              Bridging business logic and technical execution for the next generation of AI-driven companies.
            </p>
            <div className="flex gap-4">
              <span className="text-xs font-bold bg-slate-50 px-2 py-1 rounded border border-slate-100">Bain & Co</span>
              <span className="text-xs font-bold bg-slate-50 px-2 py-1 rounded border border-slate-100">Checkout.com</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] mb-6 text-slate-400">Services</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#solutions" className="hover:text-slate-500">RevOps Audit</a></li>
                <li><a href="#solutions" className="hover:text-slate-500">Agentic AI</a></li>
                <li><a href="#solutions" className="hover:text-slate-500">Strategy Advisory</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] mb-6 text-slate-400">Connect</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href={STRATEGIC_LINKS.LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-slate-500">LinkedIn</a></li>
                <li><a href="#founding-log" className="hover:text-slate-500">Founding Log</a></li>
                <li><a href={`mailto:${STRATEGIC_LINKS.EMAIL}`} className="hover:text-slate-500">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2026 Strategic Architect. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" /> System Online v2.4.0
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Solutions />
        <PipelineEngine />
        <FoundingLog />
        <Consult />
      </main>
      <Footer />
    </div>
  );
}
