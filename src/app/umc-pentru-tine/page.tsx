"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  GraduationCap,
  HandHeart,
  MessageCircleMore,
  Sparkles,
} from "lucide-react";
import { UMCPageHeader } from "@/components/umc-shell";

const announcements = [
  {
    date: "12 aprilie 2025",
    title: "Programări pentru sesiunea de orientare academică",
    summary: "Studenții pot consulta informațiile relevante și pot solicita sprijin pentru alegerea disciplinelor și a parcursului academic.",
    image: "/assets/primii_pasi/hero_walking_to_campus.webp",
    href: "/umc-pentru-tine/primii-pasi",
  },
  {
    date: "28 martie 2025",
    title: "Sesiune de voluntariat și implicare în comunitate",
    summary: "Universitatea organizează o nouă ediție de activități dedicate dezvoltării comunității studențești și relațiilor profesionale.",
    image: "/assets/implicare/hero_student_volunteers.webp",
    href: "/umc-pentru-tine/implica-te",
  },
  {
    date: "14 martie 2025",
    title: "Oportunități de practică și internship pentru studenți",
    summary: "Partenerii UMC oferă noi colaborări pentru stagii de practică și experiență profesională în domeniul maritim și al logisticii.",
    image: "/assets/cariera/hero_sunset_students.webp",
    href: "/umc-pentru-tine/cariera-si-orientare",
  },
];

const categories = [
  {
    title: "Ghidul studentului",
    description: "Ghiduri și documente esențiale pentru viața universitară",
    href: "/umc-pentru-tine/ghidul-studentului",
    icon: BookOpenText,
  },
  {
    title: "Primii pași la UMC",
    description: "Admitere, orare și informații pentru începutul studiilor",
    href: "/umc-pentru-tine/primii-pasi",
    icon: GraduationCap,
  },
  {
    title: "Sprijin și incluziune",
    description: "Consiliere, sprijin social, accesibilitate și contacte utile",
    href: "/umc-pentru-tine/sprijin-si-incluziune",
    icon: HandHeart,
  },
  {
    title: "Carieră și orientare",
    description: "Practică și recomandări pentru pregătirea profesională",
    href: "/umc-pentru-tine/cariera-si-orientare",
    icon: BriefcaseBusiness,
  },
  {
    title: "Implică-te!",
    description: "Voluntariat, proiecte și reprezentare studențească",
    href: "/umc-pentru-tine/implica-te",
    icon: Sparkles,
  },
  {
    title: "Cere sprijin și îndrumare",
    description: "Completează formularele pentru ajutor și orientare",
    href: "/umc-pentru-tine/cere-sprijin",
    icon: MessageCircleMore,
  },
];

export default function UMCPage() {
  return (
    <>
      <UMCPageHeader
        title="UMC pentru TINE"
        subtitle="Sprijin, orientare și oportunități pentru parcursul tău universitar"
        breadcrumbs={["Acasă", "Studenți", "UMC pentru TINE"]}
      />

      <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <section id="actual-pentru-tine" className="mb-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="mt-2 text-3xl font-bold text-[#0D2B5E]">Actual pentru tine</h2>
              <div className="mt-3 h-px w-20 bg-[#d7a843]" />
            </div>
            <Link href="/umc-pentru-tine#actual-pentru-tine" className="cursor-pointer text-sm font-semibold text-[#0D2B5E] underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2">
              Vezi toate anunțurile
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {announcements.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm md:flex md:flex-col"
              >
                <div
                  className="h-40 w-full bg-cover bg-center md:h-48"
                  style={{
                    backgroundImage: `linear-gradient(120deg, rgba(13,43,94,0.18), rgba(13,43,94,0.28)), url("${item.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.date}</p>
                  <h3 className="mt-4 text-xl font-bold text-[#0D2B5E]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
                  <div className="mt-auto pt-5">
                    <Link href={item.href} className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#0D2B5E]/15 bg-[#f5f8ff] px-4 py-2 text-sm font-semibold text-[#0D2B5E] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#edf3ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2">
                      Citește anunțul <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#0D2B5E]">Explorează principalele categorii</h2>
            <div className="mt-3 h-px w-20 bg-[#d7a843]" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
                  className="h-full"
                >
                  <Link
                    href={category.href}
                    className={`group flex h-[150px] cursor-pointer items-center justify-between gap-4 overflow-hidden rounded-[20px] border px-4 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2 ${
                      index === categories.length - 1
                        ? "border-[#d7a843] bg-[#fffaf0]"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#edf3ff] text-[#0D2B5E]">
                      <Icon size={22} strokeWidth={2} />
                    </div>

                    <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-[#0D2B5E]">{category.title}</h3>
                        <p className="mt-1 text-sm leading-5 text-slate-600">{category.description}</p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D2B5E] text-white">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

    </>
  );
}
