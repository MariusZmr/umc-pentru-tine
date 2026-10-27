"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accessibility, BriefcaseBusiness, Globe2, HeartHandshake } from "lucide-react";
import { SupportFooter, UMCPageHeader } from "@/components/umc-shell";

const supportCards = [
  {
    title: "Consiliere și orientare",
    image: "/assets/sprijin/hero_students_talking.webp",
    icon: HeartHandshake,
  },
  {
    title: "Sprijin social și financiar",
    image: "/assets/sprijin/hero_study_group.webp",
    icon: BriefcaseBusiness,
  },
  {
    title: "Accesibilitate și adaptări",
    image: "/assets/sprijin/hero_wheelchair_inclusion.webp",
    icon: Accessibility,
  },
  {
    title: "Egalitate de șanse și integrare",
    image: "/assets/homepage/hero_campus_students.webp",
    icon: Globe2,
  },
];

const contacts = [
  { title: "Relații cu Studenții", details: "Ing. Elena Ionașcu • elena.ionascu@cmu-edu.eu" },
  { title: "CCOC / Departamentul IMO", details: "Luminița Stan, Mirela Stoiciu • imo@cmu-edu.eu • tel 0241 664 740 int. 115" },
  { title: "Secretariatele UMC", details: "Cereri, adeverințe, situații școlare • consultați pagina oficială" },
  { title: "Decanatele", details: "decanat@cmu-edu.eu • tel 0241 664 740 int. 107" },
];

export default function SupportPage() {
  return (
    <>
      <UMCPageHeader
        title="Sprijin și incluziune"
        subtitle="Sprijin, consiliere, egalitate de șanse și integrare într-o comunitate universitară deschisă tuturor."
        breadcrumbs={["Acasă", "Studenți", "UMC pentru TINE", "Sprijin și incluziune"]}
      />

      <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <p className="text-base leading-8 text-slate-700">
            La UMC, fiecare student are dreptul la un mediu academic accesibil, sigur și incluziv. Prin servicii de consiliere, orientare și
            sprijin social, universitatea oferă oportunități reale pentru adaptare, integrare, egalitate de șanse și dezvoltare personală.
          </p>
        </motion.section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {supportCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm"
              >
                <div
                  className="h-36 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(120deg, rgba(13,43,94,0.2), rgba(13,43,94,0.18)), url("${card.image}")`,
                    backgroundPosition: "center",
                  }}
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3ff] text-[#0D2B5E]">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D2B5E]">{card.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          className="mt-12 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <h3 className="text-2xl font-bold text-[#0D2B5E]">Contacte utile</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06, ease: "easeOut" }}
                className="rounded-[20px] border border-slate-200 bg-slate-50 p-5"
              >
                <h4 className="text-lg font-bold text-[#0D2B5E]">{contact.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-700">{contact.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="https://cmu-edu.eu/centru-de-consiliere/" target="_blank" rel="noreferrer" className="rounded-full bg-[#0D2B5E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#123d8e]">Pagina CCOC</Link>
          <Link href="https://cmu-edu.eu/burse/" target="_blank" rel="noreferrer" className="rounded-full border border-[#0D2B5E] bg-white px-5 py-3 text-sm font-semibold text-[#0D2B5E] hover:bg-slate-50">Informații despre burse</Link>
          <Link href="https://cmu-edu.eu/secretariat/" target="_blank" rel="noreferrer" className="rounded-full border border-[#0D2B5E] bg-white px-5 py-3 text-sm font-semibold text-[#0D2B5E] hover:bg-slate-50">Contacte și program secretariate</Link>
          <Link href="https://cmu-edu.eu/contact/" target="_blank" rel="noreferrer" className="rounded-full border border-[#0D2B5E] bg-white px-5 py-3 text-sm font-semibold text-[#0D2B5E] hover:bg-slate-50">Contact UMC</Link>
        </motion.section>
      </main>

      <SupportFooter />
    </>
  );
}
