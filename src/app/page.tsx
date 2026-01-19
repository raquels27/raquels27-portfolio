import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    { title: "Project One", desc: "A brief description of what you built.", tech: ["React", "Next.js"] },
    { title: "Project Two", desc: "Another cool project goes here.", tech: ["Tailwind", "TypeScript"] },
    { title: "Project Three", desc: "Showcase your best work.", tech: ["Node.js", "PostgreSQL"] },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-bold tracking-tighter">YOUR_NAME</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="mailto:your@email.com" className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-700 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          Building digital <span className="text-blue-600">experiences</span>.
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mb-8">
          I'm a developer specializing in building exceptional digital products. 
          Currently focused on creating accessible, human-centered web applications.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <Github className="cursor-pointer hover:text-blue-600" />
          <Linkedin className="cursor-pointer hover:text-blue-600" />
          <Mail className="cursor-pointer hover:text-blue-600" />
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-bold mb-10">Selected Work</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group border border-slate-200 p-6 rounded-2xl bg-white hover:shadow-xl transition-all">
              <div className="flex justify-between mb-4">
                <div className="h-10 w-10 bg-slate-100 rounded-lg"></div>
                <ExternalLink size={18} className="text-slate-400 group-hover:text-blue-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">{p.title}</h4>
              <p className="text-slate-500 text-sm mb-4">{p.desc}</p>
              <div className="flex gap-2">
                {p.tech.map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 px-2 py-1 rounded">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-20 py-10 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Your Name. Built with Next.js.
      </footer>
    </div>
  );
}
