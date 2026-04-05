import CopyText from "@/components/CopyText";
import { ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const contactLinks = [
    { label: "GitHub", value: "GITHUB_REMOVED", href: "https://GITHUB_REMOVED" },
    { label: "LinkedIn", value: "LINKEDIN_REMOVED", href: "https://LINKEDIN_REMOVED" },
    { label: "Email", value: "EMAIL_REMOVED", href: "mailto:EMAIL_REMOVED" },
  ];

  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center min-h-screen">
      <h1 className="font-serif text-5xl tracking-tight mb-24 text-center">
        Contact Info
      </h1>

      <div className="w-full space-y-20">
        {/* Socials */}
        {contactLinks.map((link) => (
          <div key={link.label} className="flex flex-col items-center group">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">
              {link.label}
            </h2>
            <div className="flex items-center gap-2 group/email">
            <CopyText textToCopy={`${link.href}`} />
              <a 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-3xl font-medium tracking-tighter hover:text-zinc-500 transition-colors flex items-center gap-2"
              >
                {link.value}
                <ArrowUpRight size={24} className="text-zinc-400 group-hover:text-black transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}