"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Mail,
  MapPin,
  MessageCircleMore,
} from "lucide-react";
import { usePathname } from "next/navigation";

export const navigationItems = [
  { label: "Despre UMC", href: "/umc-pentru-tine" },
  { label: "Studii", href: "/umc-pentru-tine/ghidul-studentului" },
  { label: "Cercetare", href: "/umc-pentru-tine/cariera-si-orientare" },
  { label: "Studenți", href: "/umc-pentru-tine/implica-te" },
  { label: "Internațional", href: "/umc-pentru-tine/primii-pasi" },
  { label: "Viața universitară", href: "/umc-pentru-tine/sprijin-si-incluziune" },
  { label: "Contact", href: "/umc-pentru-tine/cere-sprijin" },
];

export function UMCHeader() {
  const pathname = usePathname();
  const normalizedPath = pathname === "/" ? "/umc-pentru-tine" : pathname;

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2"
            aria-label="Universitatea Maritimă din Constanța"
          >
            <div className="flex h-12 w-auto items-center justify-center overflow-hidden bg-transparent">
              <Image
                src="/assets/logosite-navigatie-v2-1.png"
                alt="Universitatea Maritimă din Constanța"
                width={220}
                height={52}
                className="h-11 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <Link
            href="/umc-pentru-tine/cere-sprijin"
            aria-label="Cere sprijin"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#0D2B5E]/15 bg-[#0D2B5E] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#143d8d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2 lg:hidden"
          >
            <MessageCircleMore size={16} />
            <span>Cere sprijin</span>
          </Link>
        </div>

        <nav className="overflow-x-auto lg:overflow-visible" aria-label="Navigație principală">
          <div className="flex min-w-max items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 p-1 text-sm font-medium text-slate-700 lg:gap-4 lg:border-0 lg:bg-transparent lg:p-0">
            {navigationItems.map((item) => {
              const isActive = item.href === normalizedPath;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative cursor-pointer px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2",
                    isActive
                      ? "text-[#0D2B5E] after:absolute after:-bottom-1 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-[#d7a843]"
                      : "text-slate-700 hover:text-[#0D2B5E]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}

function WaveDivider({
  className = "",
  topColor = "#ffffff",
  heightClass = "h-8 md:h-10",
  flip = false,
}: {
  className?: string;
  topColor?: string;
  heightClass?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${heightClass} ${className}`}
      style={{
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg viewBox="0 0 1440 36" preserveAspectRatio="none" className="block h-full w-full">
        <path d="M0,18 C170,3 320,21 490,17 C665,13 760,2 920,12 C1080,22 1240,27 1440,16 L1440,36 L0,36 Z" fill={topColor} />
      </svg>
    </div>
  );
}

export function UMCPageHeader({
  title,
  subtitle,
  breadcrumbs,
  variant = "dark",
  heroImage = "/assets/homepage/hero_campus_students.webp",
  imagePosition = "center",
  textColor = "#0D2B5E",
  subtitleColor = "#173d72",
  panelClassName = "",
  separatorColor = "#ffffff",
}: {
  title: string;
  subtitle: string;
  breadcrumbs: string[];
  variant?: "dark" | "light";
  heroImage?: string;
  imagePosition?: string;
  textColor?: string;
  subtitleColor?: string;
  panelClassName?: string;
  separatorColor?: string;
}) {
  const showProjectLabel = title === "UMC pentru TINE";
  const breadcrumbHrefMap: Record<string, string> = {
    Acasă: "/",
    Studenți: "/umc-pentru-tine",
    "UMC pentru TINE": "/umc-pentru-tine",
    "Primii pași la UMC": "/umc-pentru-tine/primii-pasi",
    "Ghidul studentului": "/umc-pentru-tine/ghidul-studentului",
    "Sprijin și incluziune": "/umc-pentru-tine/sprijin-si-incluziune",
    "Carieră și orientare": "/umc-pentru-tine/cariera-si-orientare",
    "Implică-te!": "/umc-pentru-tine/implica-te",
    "Cere sprijin și îndrumare": "/umc-pentru-tine/cere-sprijin",
  };

  const isLight = variant === "light";

  return (
    <section className="relative isolate overflow-hidden bg-[#f8fbff]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#f8fbff]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(234,245,253,0.94) 0%, rgba(234,245,253,0.82) 24%, rgba(234,245,253,0.35) 42%, rgba(234,245,253,0) 62%), url("${heroImage}")`,
          backgroundSize: "cover",
          backgroundPosition: imagePosition,
          transform: "scale(1.04)",
          opacity: 1,
        }}
      />

      <div className="relative z-10 mx-auto min-h-[440px] max-w-[1280px] px-4 pb-10 pt-8 md:min-h-[520px] md:px-6 md:pb-12 md:pt-10">
        <nav aria-label="Breadcrumb" className={`mb-4 text-xs uppercase tracking-[0.12em] ${isLight ? "text-[#0D2B5E]/80" : "text-[#0D2B5E]/90"}`}>
          <div className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((crumb, index) => {
              const isCurrent = index === breadcrumbs.length - 1;
              const href = breadcrumbHrefMap[crumb] ?? "/umc-pentru-tine";

              return (
                <div key={`${crumb}-${index}`} className="flex items-center gap-2">
                  {isCurrent ? (
                    <span aria-current="page" className="font-semibold text-[#0D2B5E]">
                      {crumb}
                    </span>
                  ) : (
                    <Link
                      href={href}
                      className="cursor-pointer rounded-full px-1 py-0.5 text-[#0D2B5E]/80 transition hover:text-[#0D2B5E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2"
                    >
                      {crumb}
                    </Link>
                  )}
                  {!isCurrent && <span aria-hidden="true">›</span>}
                </div>
              );
            })}
          </div>
        </nav>

        <motion.div
          className={["max-w-4xl", panelClassName].join(" ")}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-black tracking-tight text-[#0D2B5E] md:text-7xl" style={{ color: textColor }}>{title}</h1>
          <div className="mt-4 h-1.5 w-40 rounded-full bg-[#d7a843]" />
          <p className="mt-5 max-w-2xl text-2xl font-light text-[#173d72] md:text-4xl" style={{ color: subtitleColor }}>{subtitle}</p>
          {showProjectLabel && (
            <div className="mt-6 inline-block rounded-full border border-[#0D2B5E]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0D2B5E]">
              Proiect CNFIS-FDI-2026-F-1229
            </div>
          )}
        </motion.div>
      </div>

      <WaveDivider className="bottom-[-1px]" topColor={separatorColor} heightClass="h-6 md:h-9" />
    </section>
  );
}

export function SupportFooter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative overflow-hidden bg-[#eaf5ff] pb-10 pt-8 md:pb-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'url("/assets/background_cere_sprijin.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <WaveDivider className="top-[-1px]" topColor="#eaf5ff" heightClass="h-6 md:h-9" flip={true} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-6 bg-transparent pb-4 pt-4 md:flex-row md:items-end md:justify-between md:pb-6">
          <div className="max-w-2xl">
            <h3 className="mt-3 text-3xl font-black text-[#0D2B5E] md:text-5xl">Nu ai găsit răspunsul? <span className="block">Cere sprijin!</span></h3>
          </div>
          <Link
            href="/umc-pentru-tine/cere-sprijin"
            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#0D2B5E] px-8 py-4 text-base font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#143d8d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2"
          >
            Trimite o întrebare →
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export function UMCFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0D2B5E] text-slate-200">
      <WaveDivider className="top-[-1px]" topColor="#dfeffb" heightClass="h-6 md:h-9" flip={true} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'url("/assets/background_overlay_footer.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "screen",
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-16 md:grid-cols-4 md:px-6 md:pt-20">
        <div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/logosite-navigatie-v2-1.png"
              alt="Universitatea Maritimă din Constanța"
              width={220}
              height={52}
              className="h-20 w-auto object-contain"
            />
          </div>
          <p className="mt-5 text-sm text-slate-300">
            Str. Mircea cel Bătrân nr. 104, Constanța
          </p>
          <p className="text-sm text-slate-300">+40 241 664 740</p>
          <p className="text-sm text-slate-300">info@cmu-edu.eu</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d995]">
            Linkuri utile
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/umc-pentru-tine/ghidul-studentului">
                Ghidul studentului
              </Link>
            </li>
            <li>
              <Link href="/umc-pentru-tine/primii-pasi">
                Primii pași la UMC
              </Link>
            </li>
            <li>
              <Link href="/umc-pentru-tine/sprijin-si-incluziune">
                Sprijin și incluziune
              </Link>
            </li>
            <li>
              <Link href="/umc-pentru-tine/cariera-si-orientare">
                Carieră și orientare
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d995]">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/umc-pentru-tine/cere-sprijin">Cere sprijin</Link>
            </li>
            <li>
              <Link href="/umc-pentru-tine/implica-te">Implică-te</Link>
            </li>
            <li>
              <Link href="/umc-pentru-tine/ghidul-studentului">
                Ghidul studentului
              </Link>
            </li>
            <li>
              <Link href="/umc-pentru-tine">UMC pentru TINE</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d995]">
            Urmărește-ne
          </h4>
          <div className="mt-4 flex gap-3 text-lg text-white">
            <Link href="/umc-pentru-tine" aria-label="Website" className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2">
              <Globe size={16} />
            </Link>
            <Link href="/umc-pentru-tine" aria-label="E-mail" className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2">
              <Mail size={16} />
            </Link>
            <Link href="/umc-pentru-tine" aria-label="Locație" className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2">
              <MapPin size={16} />
            </Link>
            <Link href="/umc-pentru-tine" aria-label="Mesaj" className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a843] focus-visible:ring-offset-2">
              <MessageCircleMore size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-300 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© 2026 Universitatea Maritimă din Constanța</p>
          <div className="flex gap-4">
            <Link href="/umc-pentru-tine" className="hover:text-white">
              Politica de confidențialitate
            </Link>
            <Link href="/umc-pentru-tine" className="hover:text-white">
              Termeni și condiții
            </Link>
            <Link href="/umc-pentru-tine" className="hover:text-white">
              Hartă site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
