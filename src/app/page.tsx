import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1a1a1a] selection:bg-blue-50">
      {/* Subtle Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <span className="text-sm font-bold tracking-tighter uppercase">Raquel Saldivar</span>
        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          <a href="#work" className="hover:text-black transition-colors">Work</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="mailto:hello@yoursite.com" className="hover:text-black transition-colors">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="pt-24 pb-32 md:pt-40 md:pb-48">
          <h1 className="text-6xl md:text-[120px] font-medium tracking-[-0.04em] leading-[0.85] mb-12">
            Digital <br />
            <span className="text-zinc-300">Designer</span> & <br />
            Developer
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <p className="max-w-sm text-lg text-zinc-500 leading-snug">
              Creating minimalist interfaces and robust web experiences with a focus on typography and white space.
            </p>
            <div className="flex gap-6">
               <Github size={20} className="text-zinc-400 hover:text-black cursor-pointer transition-colors" />
               <Linkedin size={20} className="text-zinc-400 hover:text-black cursor-pointer transition-colors" />
               <Mail size={20} className="text-zinc-400 hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 border-t border-zinc-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Left Side: Sticky Image */}
            <div className="md:col-span-4 sticky top-24">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/headshot.jpg"
                  alt="Raquel Saldivar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Based in [Your City]
              </p>
            </div>

            {/* Right Side: Content */}
            <div className="md:col-span-8">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
                I believe that great design is <span className="text-zinc-400 italic">invisible</span>—it just works.
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-500 leading-relaxed">
                <div className="space-y-6">
                  <p>
                    Based in [Your Location], I am a developer who bridges the gap between 
                    complex backend logic and elegant frontend presentation. I don't just 
                    write code; I build tools that solve real human problems.
                  </p>
                  <p>
                    My journey began at [Your School/Previous Career], where I discovered 
                    the power of the web to reach anyone, anywhere. Since then, I've 
                    focused on mastering the modern stack.
                  </p>
                </div>
                
                <div className="space-y-8">
                  {/* Simple Skills List */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-4">Core Stack</h4>
                    <ul className="text-sm space-y-2">
                      <li>React / Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>Node.js / PostgreSQL</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-4">Focus</h4>
                    <ul className="text-sm space-y-2">
                      <li>User Experience</li>
                      <li>Performance Optimization</li>
                      <li>Accessibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] bg-zinc-100 rounded-sm overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ArrowUpRight className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-1">Project One</h3>
              <p className="text-zinc-400 text-sm">Next.js / Creative Direction</p>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer md:mt-24">
              <div className="aspect-[16/10] bg-zinc-100 rounded-sm overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ArrowUpRight className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-1">Project Two</h3>
              <p className="text-zinc-400 text-sm">React / UI Design</p>
            </div>

          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-100 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400">
        <span>© 2026 Raquel Saldivar</span>
        <span>Built with Next.js</span>
      </footer>
    </div>
  );
}