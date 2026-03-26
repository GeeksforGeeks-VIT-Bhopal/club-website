import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, Shield, Globe, Award, Lock, 
  Zap, Target, Cpu, Scale, Eye, MapPin, 
  Clock, Calendar, Link as LinkIcon 
} from "lucide-react";

const Hackathon = () => {
  const registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSfzFUYuO3X1nRjk0iv5XKOXTkF1QRn5ERcglo8hBP53u9g5JQ/viewform";

  const tracks = [
    { title: "AI Governance & Accountability", icon: <Scale className="w-6 h-6 text-green-400" />, items: ["Explainable AI systems", "Bias detection tools", "AI decision transparency", "AI audit frameworks"] },
    { title: "Decentralized Systems (Web3)", icon: <Globe className="w-6 h-6 text-green-400" />, items: ["Identity without central authority", "Decentralized data ownership", "Trustless verification systems", "DAO-like governance tools"] },
    { title: "Privacy-First Architectures", icon: <Shield className="w-6 h-6 text-green-400" />, items: ["Zero-knowledge style ideas", "Secure data sharing", "Personal data vaults", "Consent-driven APIs"] },
    { title: "AI + Human Control Interfaces", icon: <Cpu className="w-6 h-6 text-green-400" />, items: ["Human-in-the-loop systems", "Override mechanisms", "AI monitoring dashboards"] },
    { title: "Trust Infrastructure", icon: <Lock className="w-6 h-6 text-green-400" />, items: ["Fake content detection", "Reputation systems", "Source verification tools"] },
    { title: "Digital Governance Systems", icon: <Target className="w-6 h-6 text-green-400" />, items: ["Voting systems", "Community moderation tools", "Transparent decision-making"] }
  ];

  const timeline = [
    { phase: "Phase 1: Idea & Planning", time: "2 Hours", desc: "Problem Statement, Target Users, Competitor Analysis, BMC, VPC, Architecture, Pitch Deck. Mentors guide and refine ideas." },
    { phase: "Phase 2: Build", time: "6 Hours", desc: "Teams build working prototypes. No UI-only or static demos. Must include backend, AI/ML, APIs, database, or real-time features." },
    { phase: "Midway Checkpoint", time: "During Phase 2", desc: "Teams present progress. Mentors provide feedback. No elimination." },
    { phase: "Final Presentation", time: "Closing", desc: "4 min pitch + 2 min Q&A. Covering problem, solution, demo, and feasibility." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-gray-200 selection:bg-green-500 selection:text-black font-sans leading-relaxed pt-20 pb-24 sm:pb-0">
      
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden flex flex-col items-center border-b border-green-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            <div className="inline-block px-3 py-1.5 sm:px-4 rounded border border-green-500/30 bg-green-500/10 text-green-400 font-medium text-[10px] sm:text-xs md:text-sm tracking-widest uppercase max-w-full leading-relaxed">
              GeeksforGeeks VIT Bhopal Chapter
            </div>
            
            <h1 className="text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] flex flex-col sm:block">
              <span className="text-white drop-shadow-md">Geek</span>
              <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)] block sm:inline">Xcelerate</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold text-gray-300 tracking-tight">
              THINK FAST. CODE SMART. WIN BIG.
            </p>

            <p className="text-gray-400 text-lg max-w-xl">
              An 8-hour structured hackathon focused on building real, usable products. 
              Join the future of Decentralized & Responsible Digital Futures.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <a 
                href={registerLink}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:block group relative px-8 py-4 bg-green-500 text-black font-bold text-lg rounded text-center overflow-hidden transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                REGISTER NOW
              </a>
              <div className="flex flex-col text-sm text-gray-400 border-l-2 border-green-500/30 pl-4 py-1">
                <span className="text-white font-semibold">Registration Fee: ₹200</span>
                <span>Team Size: 4 Members</span>
                <span className="text-green-400 font-medium">Full day OD for all</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <Calendar className="text-green-500 w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Date</p>
                  <p className="text-white font-medium">April 2nd</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-green-500 w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Time</p>
                  <p className="text-white font-medium">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-green-500 w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Venue</p>
                  <p className="text-white font-medium">AB 1 Auditorium</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md mx-auto relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-green-500/40 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-700 -z-10" />
            <a href={registerLink} target="_blank" rel="noreferrer" className="block relative cursor-pointer">
              <img 
                src="/posters/GeekXcelerate%20Poster%20Final.png" 
                alt="GeekXcelerate Poster" 
                className="w-full h-auto rounded-lg shadow-2xl border border-white/10 transform rotate-1 group-hover:rotate-0 transition-transform duration-500 object-cover hover:shadow-green-500/20"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-24 px-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed" style={{ backgroundColor: 'rgba(10, 15, 13, 0.95)' }}>
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Decentralized & Responsible <span className="text-green-500">Digital Futures</span>
            </h2>
            <p className="text-xl text-green-400 max-w-4xl mx-auto font-medium italic">
              "The next generation of technology won't just be powerful. It will be accountable, decentralized, and human-controlled. That's what you're building today."
            </p>
            <p className="max-w-3xl mx-auto text-gray-400">
              Build systems where users have control, systems are accountable, and digital power is not centralized. 
              This is exactly what big tech and startups are actively struggling with today.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              "Build systems we can trust.",
              "Rethink power in the digital world.",
              "Code for control, not control over users.",
              "The future isn't centralized. Build it."
            ].map((tagline, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-[#111814] border border-green-500/20 p-6 rounded flex items-center justify-center min-h-[120px] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-green-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <p className="text-base font-medium text-gray-200 relative z-10">{tagline}</p>
              </motion.div>
            ))}
          </div>

          <div className="inline-block mt-12 px-6 py-4 bg-red-500/10 border border-red-500/20 rounded-lg text-left max-w-2xl mx-auto">
            <h3 className="text-red-400 font-bold mb-2 uppercase tracking-wide text-sm flex items-center gap-2">
              <Zap className="w-4 h-4" /> Core Constraint
            </h3>
            <p className="text-gray-300 text-sm">Every project must clearly define:</p>
            <ul className="list-disc list-inside text-gray-400 text-sm mt-2 ml-2 space-y-1">
              <li>Who controls the system?</li>
              <li>How is trust ensured?</li>
              <li>Where does accountability lie?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">High-Impact <span className="text-green-500">Tracks</span></h2>
            <p className="text-gray-400">Focus on building systems that ensure transparency, user control, and responsible innovation.</p>
          </div>
          
          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0 gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tracks.map((track, idx) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center bg-[#111814] border border-white/10 p-8 rounded-xl hover:border-green-500/40 transition-colors group relative"
              >
                <div className="mb-6 p-4 bg-green-500/5 rounded-lg inline-block group-hover:bg-green-500/10 transition-colors">
                  {track.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{track.title}</h3>
                <ul className="space-y-3">
                  {track.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <Terminal className="w-4 h-4 text-green-500/50 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Flow & Judging */}
      <section className="py-24 px-6 bg-[#0d1310] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Timeline */}
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">Event <span className="text-green-500">Flow</span></h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {timeline.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-6 group">
                  <div className="w-10 h-10 rounded-full bg-[#111814] border border-green-500/30 flex items-center justify-center shrink-0 relative z-10 group-hover:border-green-500 transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-white">{step.phase}</h4>
                    <p className="text-green-500 text-sm font-medium mb-2">{step.time}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Judging Criteria & Awards */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">Judging <span className="text-green-500">Criteria</span></h2>
              <div className="space-y-4">
                {[
                  { label: "Technical Depth", val: "30%" },
                  { label: "Product Thinking", val: "20%" },
                  { label: "Execution", val: "20%" },
                  { label: "Problem Understanding", val: "15%" },
                  { label: "Innovation", val: "15%" }
                ].map((crit, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-200">{crit.label}</span>
                      <span className="text-green-400 font-mono">{crit.val}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: crit.val }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-green-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">Honors & <span className="text-green-500">Awards</span></h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Best Product Thinking",
                  "Most Innovative Idea",
                  "Best Technical Implementation",
                  "Most Scalable Solution"
                ].map((award, i) => (
                  <div key={i} className="bg-[#111814] border border-white/5 p-4 rounded flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-500 shrink-0" />
                    <span className="text-sm font-medium text-gray-300">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sponsor Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111814] to-black border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="shrink-0 flex flex-col items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Sponsored By</span>
              <a href="https://anakin.io" target="_blank" rel="noreferrer" className="block p-4 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform">
                {/* Fallback to text if Anakin logo isn't available locally */}
                <span className="text-2xl font-black text-black tracking-tight flex items-center gap-2">
                  <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                     <div className="bg-black rounded-tl-full"/><div className="bg-black rounded-tr-full"/>
                     <div className="bg-black rounded-bl-full"/><div className="bg-black rounded-br-full"/>
                  </div>
                  anakin
                </span>
              </a>
            </div>
            
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold text-white">Power Your Hacks with Anakin.io</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Extract structured data from any website with a single API call. Anakin handles JavaScript rendering, anti-bot systems, and proxy rotation for modern data workflows and AI agents.
              </p>
              
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2 list-disc list-inside pt-2">
                <li><strong className="text-green-400">500 credits</strong> per participant (valid 1 week)</li>
                <li><strong className="text-green-500">Top 5 Teams</strong> - 1000 credits per member (valid 60 days)</li>
                <li>Merchandise to Top 5 Teams</li>
                <li>Reposts to top UGCs via Anakin's LinkedIn</li>
                <li>Top performers get a chance to become Anakin's Campus Ambassador with a monthly stipend (T&C applicable)</li>
              </ul>
              <a href="https://anakin.io" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors mt-2">
                Explore Anakin API <LinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Coordinators */}
      <footer className="py-12 border-t border-white/10 bg-black text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <a 
            href={registerLink}
            target="_blank"
            rel="noreferrer"
            className="px-10 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded hover:bg-gray-200 transition-colors"
          >
            Register Your Team
          </a>
          
          <div className="flex flex-wrap justify-center gap-10 mt-8">
            <div>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-2">Student Coordinators</p>
              <p className="text-gray-300 font-medium">Swayam Prakash Panda</p>
              <p className="text-green-500 text-sm">9989654631</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-2 invisible sm:visible">Contact</p>
              <p className="text-gray-300 font-medium">Athrv Dixit</p>
              <p className="text-green-500 text-sm">9555379748</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/95 to-transparent sm:hidden z-50 pointer-events-none">
        <a 
          href={registerLink}
          target="_blank"
          rel="noreferrer"
          className="group relative block w-full py-4 bg-green-500 text-black text-center font-bold text-lg rounded shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-[1.02] active:scale-95 transition-transform overflow-hidden pointer-events-auto"
        >
          <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full active:translate-x-full transition-transform duration-500" />
          REGISTER NOW
        </a>
      </div>

    </div>
  );
};

export default Hackathon;