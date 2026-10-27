"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SupportFooter, UMCPageHeader } from "@/components/umc-shell";

const documents = [
  { title: "Ghidul bobocului – RO", href: "https://drive.google.com/", image: "/assets/ghid/freshmen_campus.webp" },
  { title: "Ghidul bobocului – EN", href: "#", image: "/assets/ghid/hero_students_campus.webp" },
  { title: "Ghidul Național al Studentului 2026–2027", href: "https://cmu-edu.eu/", image: "/assets/ghid/student_guide_book.webp" },
  { title: "Codul drepturilor și obligațiilor studentului", href: "https://cmu-edu.eu/despre-noi/", image: "/assets/ghid/justice_scales.webp" },
];

export default function StudentGuidePage() {
  return (
    <>
      <UMCPageHeader
        title="Ghidul studentului"
        subtitle="Informații și documente esențiale pentru viața ta universitară."
        breadcrumbs={["Acasă", "Studenți", "UMC pentru TINE", "Ghidul studentului"]}
        variant="light"
        heroImage="/assets/homepage/hero_campus_students.webp"
        imagePosition="center"
        textColor="#0D2B5E"
        subtitleColor="#1d3a5d"
        separatorColor="#ffffff"
      />

      <main className="mx-auto max-w-[1280px] px-4 py-12 md:px-6">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="max-w-5xl text-base leading-8 text-slate-700 md:text-lg">
            Viața de student începe cu informațiile potrivite! Fie că ești în primul an sau ai deja experiență în mediul universitar,
            este important să îți cunoști drepturile, responsabilitățile și oportunitățile pe care le ai la dispoziție. În acest ghid am
            reunit informații esențiale, ghiduri utile și documente care te vor ajuta să navigatezi cu încredere în parcursul tău universitar.
          </p>
        </motion.section>

        <section>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {documents.map((doc, index) => (
              <motion.article
                key={doc.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="flex h-full flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex h-full flex-col p-5">
                  <h3 className="flex-1 text-lg font-bold leading-6 text-[#0D2B5E]">{doc.title}</h3>
                  <Link
                    href={doc.href}
                    target={doc.href.startsWith("http") ? "_blank" : undefined}
                    rel={doc.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-5 inline-flex w-fit items-center rounded-full bg-[#0D2B5E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#143f8f]"
                  >
                    Deschide documentul
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <SupportFooter />
    </>
  );
}
