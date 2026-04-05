"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyTextProps {
  textToCopy: string;
  textColor?: string; // optional
}

export default function CopyText({ 
  textToCopy, 
  textColor = "text-zinc-600", 
}: CopyTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      // Resets the "Check" icon back to "Copy" after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="flex items-center gap-3 group">
      {/* The Copy Button */}
      <button 
        onClick={handleCopy}
        className="p-1.5 rounded-md hover:bg-zinc-100 transition-colors relative"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check size={14} className="text-emerald-500 animate-in zoom-in duration-300" />
        ) : (
          <Copy size={14} className={`${textColor} hover:text-black transition-colors`} />
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