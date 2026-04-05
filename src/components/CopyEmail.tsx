"use client";

import { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      // Resets the "Check" icon back to "Copy" after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="flex items-center gap-3 group">
      {/* The Actual Mailto Link */}
      <a 
        href={`mailto:${email}`} 
        className="flex items-center gap-3 hover:opacity-70 transition-opacity"
      >
        <Mail size={18} className="text-zinc-600 group-hover:text-black transition-colors" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-black transition-colors">
          {email}
        </span>
      </a>

      {/* The Copy Button */}
      <button 
        onClick={handleCopy}
        className="p-1.5 rounded-md hover:bg-zinc-100 transition-colors relative"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check size={14} className="text-emerald-500 animate-in zoom-in duration-300" />
        ) : (
          <Copy size={14} className="text-zinc-600 hover:text-black transition-colors" />
        )}
        
        {/* Tooltip for "Copied!" feedback */}
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-tighter bg-black text-white px-2 py-1 rounded">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}