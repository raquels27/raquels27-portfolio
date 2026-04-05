"use client";

import { Github, Linkedin, Mail } from 'lucide-react';
import CopyText from "@/components/CopyText";


export default function HomePage() {
  const email = "EMAIL_REMOVED"

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1a1a1a] selection:bg-blue-50">

      <main className="max-w-6xl mx-auto px-6">
        <section className="pt-32 pb-32 md:pt-52 md:pb-48">
          {/* This div creates the side-by-side layout on desktop */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Left Side: Headline & Intro */}
            <div className="md:w-2/3">
              <h1 className="font-serif text-5xl md:text-[70px] tracking-tight leading-[0.85] mb-12">
                Raquel Saldivar
              </h1>
              
              <div className="flex flex-col gap-8">
                <p className="max-w-lg text-lg text-zinc-600 leading-snug">
                  Welcome! I am a Northwestern University graduate (2024) currently working as a software developer and data engineer in insurance.
                  Please feel free to look around to learn more about me and my experiences. This website also serves as a personal coding project.
                  Check out my GitHub for more details.
                </p>

                {/* Links to Socials */}
                <div className="flex flex-col gap-6 mt-8">
                  <a 
                    href="https://GITHUB_REMOVED" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                  >
                    <Github size={18} className="text-zinc-600 group-hover:text-black transition-colors" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-black transition-colors">
                      GITHUB_REMOVED
                    </span>
                  </a>

                  <a 
                    href="https://LINKEDIN_REMOVED" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                  >
                    <Linkedin size={18} className="text-zinc-600 group-hover:text-black transition-colors" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-black transition-colors">
                      LINKEDIN_REMOVED
                    </span>
                  </a>

                  <div className="flex items-center gap-2 group/email">
                    <a 
                      href={`mailto:${email}`}
                      className="flex items-center gap-3 hover:opacity-70 transition-opacity"
                    >
                      <Mail size={18} className="text-zinc-600 group-hover:text-black transition-colors" />
                      <span className={`text-[11px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-black transition-colors`}>
                        {email}
                      </span>
                    </a>
                    <CopyText textToCopy={`${email}`} />
                  </div>

                </div>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full md:w-1/3">
              <div className="mt-20 md:mt-0 aspect-[4/5] overflow-hidden rounded-2xl"> 
                <img 
                  src="/Headshot1.jpg" 
                  alt="Raquel Saldivar" 
                  className="w-full h-full object-cover object-center shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}