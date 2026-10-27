"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UMCPageHeader } from "@/components/umc-shell";

export default function SupportRequestPage() {
  const [beneficiary, setBeneficiary] = useState("Student UMC");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  return (
    <>
      <UMCPageHeader
        title="Cere sprijin și îndrumare"
        subtitle="Nu ești singur în această călătorie!"
        breadcrumbs={["Acasă", "Studenți", "UMC pentru TINE", "Cere sprijin și îndrumare"]}
      />

      <main className="relative overflow-hidden px-4 py-12 md:px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-15"
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.66)), url("/assets/background_cere_sprijin.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: "scale(1.05)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-[28px] bg-white/85 p-8 shadow-sm ring-1 ring-slate-200 backdrop-blur-[1px]"
          >
          <p className="text-base leading-8 text-slate-700">
            Ai o întrebare, întâmpini o dificultate sau nu știi cui să te adresezi? Prin platforma UMC pentru TINE poți transmite o solicitare,
            iar echipa universității te va ajuta să identifici informațiile și serviciile potrivite situației tale.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Completezi solicitarea",
              "Analizăm și te îndrumăm",
              "Primești răspunsul",
            ].map((step, idx) => (
              <div key={step} className="rounded-[20px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7a843]">Pasul {idx + 1}</p>
                <h3 className="mt-3 text-lg font-bold text-[#0D2B5E]">{step}</h3>
              </div>
            ))}
          </div>
        </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="mt-10 rounded-[28px] bg-white/85 p-8 shadow-sm ring-1 ring-slate-200 backdrop-blur-[1px]"
          >
          <h3 className="text-2xl font-bold text-[#0D2B5E]">Trimite o solicitare</h3>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Nume</span>
                <input
                  value={formData.lastName}
                  onChange={(event) => setFormData({ ...formData, lastName: event.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-0 placeholder:text-slate-400 focus:border-[#0D2B5E]"
                  placeholder="Popescu"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Prenume</span>
                <input
                  value={formData.firstName}
                  onChange={(event) => setFormData({ ...formData, firstName: event.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-0 placeholder:text-slate-400 focus:border-[#0D2B5E]"
                  placeholder="Maria"
                  required
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">E-mail</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-0 placeholder:text-slate-400 focus:border-[#0D2B5E]"
                  placeholder="maria.popescu@student.umc.ro"
                  required
                />
              </label>
              <div>
                <span className="mb-2 block text-sm font-medium text-slate-700">Calitatea beneficiarului</span>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Student UMC",
                    "Elev",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setBeneficiary(option)}
                      className={`cursor-pointer rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2 ${
                        beneficiary === option
                          ? "border-[#0D2B5E] bg-[#0D2B5E] text-white"
                          : "border-slate-300 bg-white text-slate-700 hover:border-[#0D2B5E]/30 hover:bg-slate-50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Descrie situația ta</span>
              <textarea
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                className="min-h-32 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-0 placeholder:text-slate-400 focus:border-[#0D2B5E]"
                placeholder="Explică pe scurt dificultatea întâmpinată..."
                required
              />
            </label>

            <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 h-4 w-4 accent-[#0D2B5E]"
                required
              />
              <span>Am citit informarea privind prelucrarea datelor cu caracter personal și am luat cunoștință de modul în care va fi gestionată solicitarea mea.</span>
            </label>

            <button type="submit" className="cursor-pointer rounded-full bg-[#0D2B5E] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#123f8d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2">
              Trimite solicitarea
            </button>

              {submitted && (
                <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                  Solicitudinea a fost înregistrată. Vă vom contacta în cel mai scurt timp.
                </p>
              )}
            </form>
          </motion.section>
        </div>
      </main>
    </>
  );
}
