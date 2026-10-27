"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SupportFooter, UMCPageHeader } from "@/components/umc-shell";

const quickLinks = [
  {
    title: "Admitere la UMC",
    href: "https://cmu-edu.eu/admitere/",
    image: "/assets/primii_pasi/admissions_entrance.webp",
  },
  {
    title: "Verifică orarul și disciplinele",
    href: "https://cmu-edu.eu/studenti-00/",
    image: "/assets/primii_pasi/class_schedule_laptop.webp",
  },
];

export default function FirstStepsPage() {
  return (
    <>
      <UMCPageHeader
        title="Primii pași la UMC"
        subtitle="Un început bine organizat pentru parcursul tău universitar."
        breadcrumbs={["Acasă", "Studenți", "UMC pentru TINE", "Primii pași la UMC"]}
      />

      <main className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="space-y-6 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <p className="text-base leading-8 text-slate-700">
            Înscrierea la universitate reprezintă startul unei noi etape, iar organizarea informațiilor te ajută să abordezi cu mai multă
            încredere începutul studiilor. În primul rând, este important să verifici toate informațiile legate de admitere, documentele
            necesare, programul de admitere și modalitatea de confirmare a locului.
          </p>
          <p className="text-base leading-8 text-slate-700">
            După înmatriculare, vei putea verifica orarul, disciplinele și grupurile din care faci parte, iar apoi te vei orienta către
            serviciile universitare disponibile: secretariat, bibliotecă, cămine, cabinet medical și alte structuri de sprijin studențesc.
          </p>
          <p className="text-base leading-8 text-slate-700">
            Recomandarea noastră este să consulți periodic informațiile publicate de universitate, astfel încât să fii la curent cu modificările
            legate de orare, evenimente, sesiuni de admitere și activități studențești.
          </p>
        </motion.section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
              className="h-full"
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1"
              >
                <div
                  className="h-48 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(120deg, rgba(13,43,94,0.18), rgba(13,43,94,0.2)), url("${link.image}")`,
                    backgroundPosition: "center",
                  }}
                />
                <div className="flex flex-1 items-end p-6">
                  <h3 className="text-2xl font-bold text-[#0D2B5E]">{link.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
      </main>

      <SupportFooter />
    </>
  );
}
