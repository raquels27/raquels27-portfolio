"use client";

import { useState, useEffect } from 'react';
import { Code2, Layers, Database, Cloud } from 'lucide-react';

export default function SkillsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  const categories = [
    { 
      id: "01", 
      icon: <Code2 size={20} />, 
      title: "Programming & Logic", 
      subtitle: "Core Languages",
      items: ["Python", "TypeScript", "JavaScript", "HTML/CSS", "C#", "C++", "C", "R", "Java"] 
    },
    { 
      id: "02", 
      icon: <Layers size={20} />, 
      title: "Systems & Frameworks", 
      subtitle: "Application Architecture",
      items: ["React", "Next.js", "Node.js", "Express", "GraphQL", "RESTful APIs", "WebSockets", "Spring Boot", "Django"] 
    },
    { 
      id: "03", 
      icon: <Database size={20} />, 
      title: "Data Engineering", 
      subtitle: "Storage & Visualization",
      items: ["SQL", "MySQL", "dbt Labs", "PostgreSQL", "Microsoft Power BI", "Tableau"] 
    },
    { 
      id: "04", 
      icon: <Cloud size={20} />, 
      title: "Cloud & Orchestration", 
      subtitle: "Deployment & Infrastructure",
      items: ["AWS (Secrets, RDS, Lambda, S3)", "Google Cloud Platform (Oauth)", "Docker", "Argo", "Jenkins", "Control-M", "Vercel", "Git"] 
    },
  ];

  return (
    <div className={`min-h-screen bg-[#FDFDFD] p-6 md:p-20 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

      <main className="pt-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h1 className="font-serif text-5xl tracking-tight mb-6">Technical Skills</h1>
          <div className={`w-24 h-1 bg-black mb-4 transition-all duration-1000 delay-300 ${isLoaded ? 'scale-x-100' : 'scale-x-0'} origin-left`}></div>
        </div>

        {/* Grid to display technical skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-100">
          {categories.map((cat) => (
            <div key={cat.id} className="border-r border-b border-zinc-100 p-8">
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-zinc-100 rounded-lg">
                  {cat.icon}
                </div>
                <span className="font-mono text-[10px] text-zinc-300">{cat.id}</span>
              </div>
              
              <h2 className="text-sm font-bold uppercase tracking-widest mb-1">{cat.title}</h2>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-10">{cat.subtitle}</p>
              
              <ul className="space-y-3">
                {cat.items.map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-zinc-200 rounded-full"></div>
                    <span className="text-sm text-zinc-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}