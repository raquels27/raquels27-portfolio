"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
  
    const navLinks = [
      { name: "Home", href: "/" },
      { name: "Experience", href: "/experience" },
      { name: "Skills", href: "/skills" },
      { name: "Certifications", href: "/certifications" },
    ];

    useEffect(() => {
      if (isOpen) {
        // Disable scrolling
        document.body.style.overflow = 'hidden';
      } else {
        // Re-enable scrolling
        document.body.style.overflow = 'unset';
      }
    
      // Cleanup function to ensure scrolling is restored if the component unmounts
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);

  return (
    <div className="bg-[#FDFDFD] text-[#1a1a1a] selection:bg-blue-50">
      {/* Main Navigation Bar */}
      <nav className="fixed w-full z-[60] bg-[#FDFDFD]/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link href="/" className="text-sm font-bold uppercase z-[70]">
            Raquel A. Saldivar
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-[12px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                    pathname === link.href 
                      ? 'text-black border-b border-black' // Active style
                      : 'text-zinc-400 hover:text-black'    // Inactive style
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button - Placed in a high Z-index to stay on top */}
          <button 
            className="md:hidden p-2 text-zinc-900 z-[70] relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-white z-[50] flex flex-col p-8 pt-32 gap-8 transition-transform duration-500 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-medium tracking-tighter flex items-center justify-between group border-b border-zinc-50 pb-4"
            >
            {link.name}
          </Link>
        ))}

        {/* Mobile Menu Footer */}
        <div className="mt-auto border-t border-zinc-100 pt-8 pb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-6">Socials</p>
          <div className="flex gap-8 text-sm font-medium">
            <a 
              href={`https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#1a1a1a] hover:text-black transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#1a1a1a] hover:text-black transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}