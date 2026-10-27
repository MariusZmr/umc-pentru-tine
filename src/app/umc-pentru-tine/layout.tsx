import { UMCFooter, UMCHeader } from "@/components/umc-shell";
import type { ReactNode } from "react";

export default function UMCLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <UMCHeader />
      {children}
      <UMCFooter />
    </div>
  );
}
