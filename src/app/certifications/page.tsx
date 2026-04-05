"use client";

import { useState, useEffect } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

export default function CertsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <div className={`min-h-screen bg-[#FDFDFD] p-6 md:p-24 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

        <main className="pt-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                <h1 className="font-serif text-5xl tracking-tight mb-6">Exams and <br/>Certifications</h1>
                <div className={`w-24 h-1 bg-black mb-4 transition-all duration-1000 delay-300 ${isLoaded ? 'scale-x-100' : 'scale-x-0'} origin-left`}></div>
                </div>

                <div className="lg:col-span-8 space-y-20">
                  {/* AINS section, multiple exams */}
                  <section className="bg-white border border-zinc-100 p-10 rounded-3xl shadow-sm">
                      <div className="flex justify-between items-start mb-1">
                      <h2 className="text-xl font-bold tracking-tight">Associate In Insurance (AINS)</h2>
                      <span className="text-[10px] font-bold bg-zinc-100 px-2 py-1 rounded">IN PROGRESS</span>
                      </div>
                      <div className="space-y-6 mb-10">
                          <p className="text-zinc-500 font-medium italic">The Institutes</p>
                      </div>
                      <div className="space-y-6">
                      <ExamRow name="AINS-101: Increasing Your Insurance IQ" date="NOV 2025" status="done" />
                      <ExamRow name="AINS-102: Understanding Personal Insurance" date="MAR 2026" status="done" />
                      <ExamRow name="AINS-103: Exploring Commercial Insurance" date="EXP. MAY 2026" status="scheduled" />
                      <ExamRow name="ETHICS-311: Ethical Decision Making in Risk and Insurance" date="MAR 2026" status="done" />
                      </div>
                  </section>

                  {/* Exam P section, one exam */}
                  <section className="bg-white border border-zinc-100 p-10 rounded-3xl shadow-sm">
                      <div className="flex justify-between items-center">
                          <h2 className="text-xl font-bold tracking-tight">Exam P</h2>
                          <span className="text-xs font-mono text-zinc-500">PENDING</span>
                      </div>
                      <div className="space-y-6 mb-10">
                          <p className="text-zinc-500 font-medium italic">Society of Actuaries</p>
                      </div>
                      <div className="space-y-6">
                          <p className='text-sm text-black'> Currently doing some independent studying for Exam P. </p>
                      </div>
                  </section>
                </div>
            </div>
        </main>
    </div>
  );
}

function ExamRow({ name, date, status }: { name: string; date: string; status: 'done' | 'scheduled' | 'pending' }) {
    return (
      <div className="flex items-center gap-4 w-full">
        {/* Icon and Name Container */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {status === 'done' ? (
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
          ) : (
            <Circle size={18} className="text-zinc-200 shrink-0" />
          )}
          <span className={`text-sm truncate ${status === 'done' ? 'text-black' : 'text-zinc-500'}`}>
            {name}
          </span>
        </div>
  
        {/* Date - Forced to the right */}
        <span className="text-[10px] font-mono text-zinc-500 whitespace-nowrap shrink-0 ml-auto">
          {date}
        </span>
      </div>
    );
  }
