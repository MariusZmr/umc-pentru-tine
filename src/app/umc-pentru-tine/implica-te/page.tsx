"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SupportFooter, UMCPageHeader } from "@/components/umc-shell";

const benefits = [
  "Experiență și leadership",
  "Networking",
  "Comunitate și prietenii",
  "Competențe practice",
];

export default function GetInvolvedPage() {
  return (
    <>
      <UMCPageHeader
        title="Implică-te!"
        subtitle="Voluntariat, proiecte, reprezentare și oportunități de implicare în comunitatea studențească UMC."
        breadcrumbs={["Acasă", "Studenți", "UMC pentru TINE", "Implică-te!"]}
      />

      <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <p className="text-base leading-8 text-slate-700">
            Viața universitară este mult mai mult decât activitatea de la cursuri. UMC oferă oportunități de voluntariat, proiecte educaționale,
            evenimente culturale și sportive și activități de reprezentare studențească. Participarea în aceste inițiative contribuie la dezvoltarea
            personală, la apartenența la comunitate și la formarea unor competențe practice valoroase.
          </p>
        </motion.section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
            className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-[#0D2B5E]">Voluntariat în cadrul UMC</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Participarea într-o varietate de activități organizate de universitate poate aduce beneficii evidente: dezvoltarea competențelor, implicarea în evenimente și posibilitatea de a contribui la comunitate.
            </p>
            <Link href="https://cmu-edu.eu/studenti-00/activitati-voluntariat/" target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-[#0D2B5E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#123f8d]">Voluntariat în cadrul UMC</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
            className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-[#0D2B5E]">Liga Studenților – transformă ideile în proiecte</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              LSUMC organizează proiecte, evenimente și activități prin care studenții pot dobândi experiență, își pot exprima opiniile și participă la viața comunității academice.
            </p>
            <Link href="https://www.lsumc.ro/" target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full border border-[#0D2B5E] bg-white px-5 py-3 text-sm font-semibold text-[#0D2B5E] hover:bg-slate-50">Descoperă LSUMC</Link>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
          className="mt-10 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <h3 className="text-2xl font-bold text-[#0D2B5E]">Reprezentarea studențească – vocea ta contează</h3>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="https://www.lsumc.ro/reprezentarea-studenteasca/" target="_blank" rel="noreferrer" className="rounded-full bg-[#0D2B5E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#123f8d]">Reprezentarea studențească</Link>
            <Link href="https://www.lsumc.ro/reprezentarea-studenteasca/" target="_blank" rel="noreferrer" className="rounded-full border border-[#0D2B5E] bg-white px-5 py-3 text-sm font-semibold text-[#0D2B5E] hover:bg-slate-50">Regulamentul alegerilor studenților reprezentanți</Link>
          </div>
        </motion.section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06, ease: "easeOut" }}
              className="rounded-[20px] border border-[#ead9a3] bg-[#fffaf0] p-5"
            >
              <p className="text-lg font-bold text-[#0D2B5E]">{benefit}</p>
            </motion.div>
          ))}
        </section>
      </main>

      <SupportFooter />
    </>
  );
}
