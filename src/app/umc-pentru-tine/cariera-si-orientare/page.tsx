"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SupportFooter, UMCPageHeader } from "@/components/umc-shell";

const partnerList = [
  "Administrația Porturilor Maritime",
  "Autoritatea Navală Română",
  "COMVEX, SOCEP",
  "OIL TERMINAL",
  "NAVLOMAR MARITIME",
  "CMA SHIPS ROMANIA",
  "COLUMBIA SHIPMANAGEMENT",
  "VARD",
  "GSP OFFSHORE",
  "Transelectrica",
  "Vestas",
];

const guides = [
  {
    title: "Cum îți pregătești CV-ul?",
    description: "Include informații utile despre prezentarea profesională, scrierea documentelor și pregătirea pentru interviu, adaptate la mediul maritim.",
    image: "/assets/cariera/cv_laptop.webp",
  },
  {
    title: "Cum redactezi o scrisoare de intenție?",
    description: "Include informații utile despre prezentarea profesională, scrierea documentelor și pregătirea pentru interviu, adaptate la mediul maritim.",
    image: "/assets/cariera/cover_letter.webp",
  },
  {
    title: "Cum te pregătești pentru interviu?",
    description: "Include informații utile despre prezentarea profesională, scrierea documentelor și pregătirea pentru interviu, adaptate la mediul maritim.",
    image: "/assets/cariera/interview.webp",
  },
];

export default function CareerPage() {
  return (
    <>
      <UMCPageHeader
        title="Carieră și orientare"
        subtitle="Practică, oportunități profesionale și pregătire pentru primul pas în carieră."
        breadcrumbs={["Acasă", "Studenți", "UMC pentru TINE", "Carieră și orientare"]}
      />

      <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <h3 className="text-2xl font-bold text-[#0D2B5E]">Construiește-ți viitorul profesional</h3>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Pregătirea pentru carieră începe încă din facultate. Universitatea oferă oportunități de practică și orientare profesională în domenii precum navigație, porturi, logistică, transport, energie și inginerie. Colaborarea cu parteneri din mediul maritim și industrial contribuie la formarea competențelor profesionale necesare pentru angajare.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
          className="mt-10 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <h3 className="text-2xl font-bold text-[#0D2B5E]">Parteneri de practică și experiență profesională</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {partnerList.map((partner, index) => (
              <motion.span
                key={partner}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
              >
                {partner}
              </motion.span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="https://cmu-edu.eu/studenti-00/practica/practica-la-sediul-partenerilor/" target="_blank" rel="noreferrer" className="rounded-full bg-[#0D2B5E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#153d8f]">Lista partenerilor de practică</Link>
            <Link href="https://cmu-edu.eu/studenti-00/practica/" target="_blank" rel="noreferrer" className="rounded-full border border-[#0D2B5E] bg-white px-5 py-3 text-sm font-semibold text-[#0D2B5E] hover:bg-slate-50">Informații despre practica UMC</Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          className="mt-10 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <h3 className="text-2xl font-bold text-[#0D2B5E]">Pregătește-te pentru angajare</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="flex h-full flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-slate-50"
              >
                <div
                  className="h-36 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(120deg, rgba(13,43,94,0.2), rgba(13,43,94,0.18)), url("${guide.image}")`,
                    backgroundPosition: "center",
                  }}
                />
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="text-lg font-bold text-[#0D2B5E]">{guide.title}</h4>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">{guide.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <SupportFooter />
    </>
  );
}
