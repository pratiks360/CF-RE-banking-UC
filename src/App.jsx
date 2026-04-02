import React, { useState } from 'react';
import { 
  Building2, 
  ShieldAlert, 
  Server, 
  Activity, 
  ArrowRight, 
  Database, 
  Cloud, 
  Cpu, 
  Lock, 
  TrendingDown, 
  Clock, 
  Wallet,
  CheckCircle2,
  Menu,
  X,
  Zap,
  ShieldCheck,
  Layers
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Logo file paths from public folder
  const mainLogo = "/redington.png";
  const confluentLogo = "/confluent.png";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center gap-6">
              {/* Main Logo - Resized for optimal visibility */}
              <img 
                src={mainLogo} 
                alt="Partner Logo" 
                className="h-12 md:h-16 w-auto max-w-[200px] object-contain"
              />
              
              <div className="h-12 w-px bg-slate-200 hidden sm:block mx-1"></div>
              
              {/* Confluent Logo */}
              <div className="flex items-center gap-2">
                <img 
                  src={confluentLogo} 
                  alt="Confluent" 
                  className="h-12 md:h-16 w-auto max-w-[200px] object-contain"
                />
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-10">
              <a href="#overview" className="text-slate-500 hover:text-red-600 text-sm font-bold uppercase tracking-widest transition-colors">Overview</a>
              <a href="#modernization" className="text-slate-500 hover:text-red-600 text-sm font-bold uppercase tracking-widest transition-colors">Modernization</a>
              <a href="#architecture" className="text-slate-500 hover:text-red-600 text-sm font-bold uppercase tracking-widest transition-colors">Architecture</a>
              <a href="#services" className="text-slate-500 hover:text-red-600 text-sm font-bold uppercase tracking-widest transition-colors">Services</a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-8 space-y-6 shadow-2xl">
            <a href="#overview" className="block text-slate-900 font-bold text-lg uppercase">Overview</a>
            <a href="#modernization" className="block text-slate-900 font-bold text-lg uppercase">Modernization</a>
            <a href="#architecture" className="block text-slate-900 font-bold text-lg uppercase">Architecture</a>
            <a href="#services" className="block text-slate-900 font-bold text-lg uppercase">Services</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="overview" className="relative pt-44 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-red-50/50 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-red-50 text-red-700 text-xs font-black uppercase tracking-[0.2em] border border-red-100">
              <ShieldCheck size={14} /> BFSI Strategy & Innovation
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95]">
              Set Data in Motion with <span className="text-red-600">Confluent.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mx-auto max-w-2xl">
              Modernize core banking workloads on <strong>Temenos Transact</strong> using Confluent—the world's leading data streaming platform. Unlock real-time processing, eliminate technical debt, and reduce TCO by up to 60%.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
              <div className="flex items-center gap-4 px-2">
                <div className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center overflow-hidden bg-slate-50">
                  <Activity size={20} className="text-slate-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Powered by</p>
                  <p className="text-sm font-black text-slate-900">Kora Engine Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem - Modernization Section */}
      <section id="modernization" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl font-black tracking-tight text-slate-900">Break the Batch-Processing Barrier</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Legacy banking systems rely on batch ETL, creating "data silos" that hold your business back. In a competitive digital landscape, waiting for end-of-day reports is no longer an option.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  { title: "High MIPS Costs", desc: "Constant polling of IBM MQ and Mainframes drives up expensive MIPS and CHINIT costs." },
                  { title: "Fragile Point-to-Point", desc: "Rigid integrations create a 'Data Mess' that is slow to change and expensive to maintain." },
                  { title: "Siloed Core Data", desc: "Temenos core data is trapped, preventing real-time fraud detection and customer 360 insights." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                      <Zap size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="bg-slate-900 p-8 rounded-[32px] text-white">
                    <TrendingDown className="text-red-500 mb-4" size={32} />
                    <p className="text-3xl font-black">50%</p>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Reduction in MIPS</p>
                  </div>
                  <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-xl">
                    <Clock className="text-red-600 mb-4" size={32} />
                    <p className="text-3xl font-black text-slate-900">75%</p>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Faster Time-to-Market</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-xl">
                    <ShieldAlert className="text-red-600 mb-4" size={32} />
                    <p className="text-3xl font-black text-slate-900">99%</p>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Faster Fraud Interception</p>
                  </div>
                  <div className="bg-slate-900 p-8 rounded-[32px] text-white">
                    <Wallet className="text-emerald-400 mb-4" size={32} />
                    <p className="text-3xl font-black">60%</p>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Lower Infrastructure TCO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section - Central Nervous System */}
      <section id="architecture" className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-white text-5xl font-black tracking-tight mb-6">The Central Nervous System for Modern Banking</h2>
            <p className="text-slate-400 text-xl leading-relaxed">
              Decouple your architecture using <strong>Confluent Cloud</strong> or <strong>Confluent Platform</strong> to enable real-time communication between <strong>Temenos Transact</strong> and your digital ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Sources */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 h-full flex flex-col items-center justify-center text-center">
                <Server className="text-red-500 mb-6" size={48} />
                <h3 className="text-white font-black text-xl mb-2 tracking-tight">Legacy & Core</h3>
                <p className="text-slate-400 text-sm mb-6">Temenos Transact, Mainframes, IBM MQ</p>
                <div className="w-full h-px bg-slate-700 my-4"></div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">CDC Connectors</div>
              </div>
            </div>

            {/* Central Hub */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-red-600/10 blur-[100px]"></div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-[40px] border-2 border-red-600/30 shadow-[0_0_50px_rgba(220,38,38,0.1)] h-full flex flex-col justify-between relative z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <Activity className="text-red-500" size={32} />
                  </div>
                  <div className="text-right">
                    <img 
                      src={confluentLogo} 
                      alt="Confluent" 
                      className="h-12 w-auto ml-auto brightness-1"
                    />
                    <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1">Data Streaming Platform</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 my-10">
                  {['ksqlDB Processing', 'Schema Registry', 'Cluster Linking', 'Stream Governance'].map((feat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                      <p className="text-white text-xs font-bold uppercase tracking-widest">{feat}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-red-600/10 border border-red-600/20 p-5 rounded-2xl text-center">
                  <p className="text-slate-300 text-sm italic">"The real-time bridge across hybrid and multicloud environments."</p>
                </div>
              </div>
            </div>

            {/* Sinks */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 h-full flex flex-col items-center justify-center text-center">
                <Database className="text-blue-400 mb-6" size={48} />
                <h3 className="text-white font-black text-xl mb-2 tracking-tight">Digital Sinks</h3>
                <p className="text-slate-400 text-sm mb-6">Snowflake, Splunk, Mobile Apps, AI Models</p>
                <div className="w-full h-px bg-slate-700 my-4"></div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Verified Sink Connectors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-lg mb-4">Partner Excellence</div>
              <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-6 leading-tight">Professional Services</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                As seen in our strategic engagement with major BFSI leaders, we don't just provide licensing—we deliver the expertise required to ensure production readiness.
              </p>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
              {[
                { icon: <Layers />, title: "Foundations Services Bundle", desc: "Architecture planning and production readiness workshops led by Confluent experts." },
                { icon: <Building2 />, title: "Resident Field Engineer (RFE)", desc: "Dedicated onsite engineering to drive your deployment from PoC to enterprise scale." },
                { icon: <ShieldCheck />, title: "Resident Solution Architect", desc: "Senior-level strategic alignment ensuring your event streams meet regulatory compliance." },
                { icon: <Zap />, title: "Activation Workshop", desc: "Pre-requisite assistance and high-level design to kickstart your streaming journey." }
              ].map((service, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-red-100 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{service.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-6 mb-8">
                <img 
                  src={mainLogo} 
                  alt="Partner Logo" 
                  className="h-12 md:h-16 w-auto object-contain"
                />
                <div className="h-10 w-px bg-slate-200"></div>
                <img 
                  src={confluentLogo} 
                  alt="Confluent" 
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
              <p className="text-slate-500 max-w-sm text-lg">
                The authorized strategic partner for Confluent in the Middle East & Africa. Providing end-to-end data streaming solutions for the financial sector.
              </p>
            </div>
            <div>
              <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">Solutions</h5>
              <ul className="space-y-4 text-slate-500 font-bold text-sm">
                <li><a href="https://www.confluent.io/use-case/fraud-detection/" target="_blank" className="hover:text-red-600 transition-colors">Fraud Detection</a></li>
                <li><a href="https://www.confluent.io/use-case/mainframe/" target="_blank" className="hover:text-red-600 transition-colors">Mainframe Integration</a></li>
                <li><a href="https://www.confluent.io/learn/real-time-data-and-analytics/" target="_blank" className="hover:text-red-600 transition-colors">Real-Time Payments</a></li>
                <li><a href="https://www.confluent.io/use-case/real-time-customer-360-experience/" target="_blank" className="hover:text-red-600 transition-colors">Customer 360</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">Resources</h5>
              <ul className="space-y-4 text-slate-500 font-bold text-sm">
                <li><a href="https://www.confluent.io/industry-solutions/financial-services/" target="_blank" className="hover:text-red-600 transition-colors">BFSI Case Studies</a></li>
                <li><a href="https://docs.confluent.io/" target="_blank" className="hover:text-red-600 transition-colors">Documentation</a></li>
                <li><a href="https://support.confluent.io/" target="_blank" className="hover:text-red-600 transition-colors">Support Portal</a></li>
                <li><a href="https://docs.confluent.io/cloud/current/api.html" target="_blank" className="hover:text-red-600 transition-colors">API Specs</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">© 2026 Partner Group. All Rights Reserved.</p>
            <div className="flex gap-10 text-xs font-black text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-slate-900 transition-colors">Legal</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;