import React, { useState } from 'react';

import {
  Code,
  Terminal,
  Cpu,
  GitBranch,
  ArrowRight,
  X,
  Users,
  Calendar,
  Trophy,
  MessageCircle,
  Github
} from 'lucide-react';

import { Link } from 'react-router-dom';

import { IMAGES, EVENTS } from '../constants';

const Home: React.FC = () => {
  const [showBanner, setShowBanner] = useState(() => {
    return sessionStorage.getItem('hackathon-banner-dismissed') !== 'true';
  });

  const dismissBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem('hackathon-banner-dismissed', 'true');
  };

  return (
    <>
      {/* 
      Hackathon Event Notification Banner
      {showBanner && (
      <div className="fixed top-16 left-0 right-0 z-40" style={{ animation: 'slide-down-fade 0.5s ease-out' }}>
      <div className="max-w-4xl mx-auto px-4 mt-2">
      <Link
        to="/hackathon"
        onClick={dismissBanner}
        className="block w-full rounded-xl border border-green-500/30 bg-black/80 backdrop-blur-xl px-4 py-3 hover:border-green-500/60 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-lg flex-shrink-0">🚀</span>
            <div className="min-w-0">
              <span className="text-white font-bold text-sm block sm:inline">
                GeekXcelerate
              </span>
              <span className="text-gray-400 text-xs sm:text-sm sm:ml-2 block sm:inline">
                Register Now  →
              </span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dismissBanner();
            }}
            className="text-gray-500 hover:text-white transition-colors flex-shrink-0 p-1"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      </Link>
    </div>
  </div>
)}
 */}
{/* Hero Section */}
<div className="relative min-h-screen pt-28 pb-10 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />

  <div className="absolute top-[20%] left-[55%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

  {/* Decorative dots */}
  <div className="absolute top-32 right-[42%] grid grid-cols-5 gap-4 opacity-40">
    {Array.from({ length: 25 }).map((_, i) => (
      <span
        key={i}
        className="w-1 h-1 rounded-full bg-primary"
      />
    ))}
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

    {/* Hero Content */}
    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[680px]">

      {/* LEFT SIDE */}
      <div className="text-left">

        {/* Recruitment Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
          Recruitment is currently closed for 2025-26 academic year
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-7">
          Where Code
          <br />
          Meets{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">
            Community
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-lg sm:text-xl text-gray-400 leading-relaxed mb-9">
          Join the elite coding fraternity of VIT Bhopal. We build projects,
          host hackathons, and cultivate the next generation of tech leaders.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">

          <Link
            to="#features"
            className="inline-flex items-center justify-center gap-3 bg-primary text-white px-7 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
          >
            Explore More
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/events"
            className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all"
          >
            Upcoming Events
            <Calendar size={19} />
          </Link>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">

          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 text-center hover:border-primary/30 transition-all">
            <Users className="mx-auto mb-2 text-primary" size={25} />
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-xs text-gray-400 mt-1">Active Members</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 text-center hover:border-primary/30 transition-all">
            <Calendar className="mx-auto mb-2 text-primary" size={25} />
            <div className="text-2xl font-bold text-white">25+</div>
            <div className="text-xs text-gray-400 mt-1">Events Organized</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 text-center hover:border-primary/30 transition-all">
            <Code className="mx-auto mb-2 text-primary" size={25} />
            <div className="text-2xl font-bold text-white">40+</div>
            <div className="text-xs text-gray-400 mt-1">Projects Built</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 text-center hover:border-primary/30 transition-all">
            <Trophy className="mx-auto mb-2 text-primary" size={25} />
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-xs text-gray-400 mt-1">Hackathon Wins</div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE — CODE WINDOW */}
      <div className="relative">

        {/* Green glow behind window */}
        <div className="absolute inset-10 bg-primary/20 blur-[80px] rounded-full" />

        <div className="relative rounded-2xl border border-primary/30 bg-black/70 backdrop-blur-md overflow-hidden shadow-2xl shadow-primary/10">

          {/* Window Header */}
          <div className="h-12 bg-white/[0.04] border-b border-white/10 flex items-center px-5 gap-2">

            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />

            <span className="ml-4 text-xs text-gray-500 font-mono">
              gfg_vitb.cpp
            </span>

          </div>

          {/* Code */}
          <div className="aspect-[4/3] relative bg-[#050807]">

            <img
              src={IMAGES.hero_code}
              alt="GeeksforGeeks VIT Bhopal code"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-black/50" />

            <div className="absolute inset-0 p-8 font-mono text-sm text-gray-400 leading-6">

              <p>
                <span className="text-green-500">#include</span>{" "}
                <span className="text-purple-400">&lt;community&gt;</span>
              </p>

              <p>
                <span className="text-green-500">#include</span>{" "}
                <span className="text-purple-400">&lt;passion&gt;</span>
              </p>

              <p>
                <span className="text-green-500">#include</span>{" "}
                <span className="text-purple-400">&lt;learning&gt;</span>
              </p>

              <br />

              <p>
                <span className="text-blue-400">int</span>{" "}
                <span className="text-yellow-300">main</span>() {"{"}
              </p>

              <p className="pl-6">
                <span className="text-purple-400">while</span> (
                <span className="text-blue-400">true</span>) {"{"}
              </p>

              <p className="pl-12 text-green-400">build();</p>
              <p className="pl-12 text-green-400">learn();</p>
              <p className="pl-12 text-green-400">collaborate();</p>
              <p className="pl-12 text-green-400">innovate();</p>
              <p className="pl-12 text-green-400">inspire();</p>

              <p className="pl-6">{"}"}</p>
              <p>{"}"}</p>

              <br />

              <p className="text-primary">
                // GeeksforGeeks VIT Bhopal
              </p>
              <p className="text-primary">
                // Building the future, together.
              </p>
              <p className="text-primary">
                // We don't just code, we create impact.
              </p>

            </div>
          </div>
        </div>

        {/* Decorative glowing sphere */}
        <div className="absolute -top-10 -right-8 w-24 h-24 rounded-full bg-primary/30 blur-md border border-primary/20" />

        <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-primary/20 blur-md border border-primary/20" />

      </div>
    </div>

    {/* Bottom Community Strip */}
    <div className="relative mt-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-6 py-7">

      <div className="text-center text-xs tracking-[0.35em] uppercase text-gray-400 mb-6">
        A Community Driven By{" "}
        <span className="text-primary font-semibold">
          Passion & Purpose
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

        <div className="flex items-center justify-center gap-3 text-gray-300">
          <Code size={22} className="text-primary" />
          <span>Problem Solving</span>
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-300">
          <Github size={22} />
          <span>Open Source</span>
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-300">
          <Users size={22} className="text-primary" />
          <span>Peer Learning</span>
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-300">
          <Trophy size={22} />
          <span>Hackathons</span>
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-300">
          <MessageCircle size={22} />
          <span>Tech Talks</span>
        </div>

      </div>
    </div>

  </div>
</div>

      {/* What We Do (Bento Grid) */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Crafting the Future</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just write code; we solve problems. Explore the domains that drive our innovation engine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-rows-2 h-auto md:h-[600px]">
            {/* Large Card: CP */}
            <div className="glass rounded-2xl p-8 col-span-1 md:col-span-2 row-span-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center mb-6 text-primary shadow-lg">
                    <Code size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Competitive Programming</h3>
                  <p className="text-gray-400 max-w-md">Master algorithms and data structures. Compete in global contests and sharpen your problem-solving skills.</p>
                </div>
                <div className="mt-8 flex gap-2">
                  <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">C++</span>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">Java</span>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">Python</span>
                </div>
              </div>
            </div>

            {/* Tall Card: Web Dev */}
            <div className="glass rounded-2xl p-8 col-span-1 md:col-span-1 row-span-1 md:row-span-2 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent group-hover:from-primary/20 transition-all duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center mb-6 text-primary shadow-lg">
                  <Terminal size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Development</h3>
                <p className="text-gray-400 mb-8 flex-grow">Building full-stack applications that scale. From React frontends to robust Node.js backends.</p>
                <div className="bg-surface rounded-lg p-3 border border-white/5 font-mono text-xs text-gray-500 mt-auto">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">future</span> = <span className="text-green-400">await</span> build();</p>
                </div>
              </div>
            </div>

            {/* Small Card: AI/ML */}
            <div className="glass rounded-2xl p-8 col-span-1 md:col-span-1 row-span-1 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center mb-6 text-primary shadow-lg">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-gray-400">Training models that think. Explore Neural Networks, NLP, and Computer Vision.</p>
              </div>
            </div>

            {/* Small Card: Open Source */}
            <div className="glass rounded-2xl p-8 col-span-1 md:col-span-1 row-span-1 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center mb-6 text-primary shadow-lg">
                  <GitBranch size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
                <p className="text-sm text-gray-400">Contributing to the global code library. Git, GitHub, and community collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-surface to-black border border-white/10 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to debug your career?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Join a community of passionate developers. Whether you are a beginner or a pro, there is a place for you here.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/20">
              Contact Us
            </Link>
            <Link to="/projects" className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/5 transition-all">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
