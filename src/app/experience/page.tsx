"use client";

import { useState, useEffect } from 'react';
import { ArrowUpRight, Minus } from 'lucide-react';

export default function ExperiencePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  const experiences = [
    {
      period: "Jan. 2025 — Present",
      company: "Auto-Owners Insurance",
      role: "Software Developer",
      achievements: [
        "Spearheaded the migration of a high-volume data pipeline to an Apache Iceberg architecture, automating the daily ingestion of 90k+ policy renewal records. Developed end-to-end workflows using Argo and Control-M, providing smooth data delivery to SQL Server while managing CI/CD monitoring through Jenkins.",
        "Leading an ELT project to extract policy data from the underwriting source system, landing it into the data lakehouse in Apache Iceberg, and applying curated data transformations in SQL via staging and conformed models in dbt Labs.",
        "In SQL, calculating and balancing billions of premiums to verify amounts accurately represents the financial cash flow from the company’s personal property insurance policies, accounting for all transaction types and coverages."
      ],
      stack: ["SQL", "Python", "dbt Labs", "Apache Iceberg", "Starburst", "BitBucket", "Argo", "Control-M", "Jenkins"]
    },
    {
      period: "May. 2024 — Nov. 2024",
      company: "EntryPoint",
      role: "Software Engineer",
      achievements: [
        "Engineered Google OAuth 2.0 integration using Google Cloud Platform to streamline user authentication, enhance security, and simplify access to the company’s application.",
        "Integrated Stripe’s API into backend code in Python, facilitating user payments/subscriptions to company products.",
        "As part of the CI/CD process, developed a testing suite in Python and JavaScript using GitHub Actions to ensure quality performance of code prior to company-wide deployment."
      ],
      stack: ["Python", "Javascript", "SQL", "AWS (Secrets, RDS)", "GCP (Oauth 2.0)", "PostgreSQL"]
    },
    {
      period: "Jan. 2024 — Jun. 2024",
      company: "Northwestern University",
      role: "Paid Research Assistant",
      description: "Project: Detecting Childhood Speech Language Disorders via Machine Learning",
      achievements: [
        "Preprocessed written phonetic data by leveraging Python’s pandas library and leading data mapping of n-grams for supervised learning.",
        "Trained and tested logistic regression models on preprocessed data using Python’s scikit-learn machine learning library to determine whether specific phonemes could be predicted in speech.",
        "Ran Automated Speech Recognition models on audio files to analyze models’ results and determine how to more accurately transcribe minority childhood speech."
      ],
      stack: ["Python", "pandas", "scikit-learn", "ASR / STT"]
    },
    {
      period: "Jun. 2023 — Aug. 2023",
      company: "TimeCredit",
      role: "Software Engineer",
      achievements: [
        "Parsed and preprocessed text documents, including extracting Q&As and text boxes from financial textbooks.",
        "Constructed a program in Python, utilizing the spaCy library, for redacting sensitive information from financial documents.",
        "Mastered fundamental Natural Language Processing concepts, including implementation of backpropagation and transformer model. Proficient with NumPy; familiar with PyTorch."
      ],
      stack: ["Python", "PyMuPDF (fitz)", "spaCy", "Numpy", "PyTorch"]
    }
  ];


  return (
    <div className={`min-h-screen bg-[#FDFDFD] p-6 md:p-20 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

      <main className="pt-24 px-6 max-w-6xl mx-auto">
      <header className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
            <h1 className="font-serif text-5xl tracking-tight mb-6">Professional Experience</h1>
            <div className={`w-24 h-1 bg-black mb-4 transition-all duration-1000 delay-300 ${isLoaded ? 'scale-x-100' : 'scale-x-0'} origin-left`}></div>
            </div>

            {/* Resume Button */}
            <a 
                href={process.env.NEXT_PUBLIC_RESUME_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-zinc-200 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white hover:border-black transition-all duration-500 group shadow-sm w-fit"
                >
                View Resume
                <ArrowUpRight 
                    size={16} 
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" 
                />
            </a>
        </header>

        <div className="space-y-40">
          {experiences.map((job, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-zinc-100 pt-16 group">
              
              {/* Left Side: Sticky Meta-Data */}
              <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                <p className="font-mono text-[11px] text-zinc-600 uppercase tracking-widest mb-4">{job.period}</p>
                <h2 className="text-3xl font-medium tracking-tight mb-2">{job.company}</h2>
                <p className="text-zinc-500 font-medium italic">{job.role}</p>
              </div>

              {/* Right Side: Details & Achievements */}
              <div className="lg:col-span-8 space-y-12">
                {job.description && (
                  <p className="text-l text-zinc-800 leading-relaxed max-w-2xl">
                    {job.description}
                  </p>
                ) }


                <div className="space-y-6">
                  <ul className="space-y-4">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex gap-4 group/item">
                        <Minus size={16} className="text-zinc-400 item:text-black shrink-0 mt-1" />
                        <span className="text-zinc-800 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack for this role */}
                <div className="flex flex-wrap gap-2 pt-8">
                  {job.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-md text-[12px] font-bold text-zinc-400 uppercase tracking-tighter">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}

