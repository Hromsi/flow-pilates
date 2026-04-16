import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { termsBannerCopy } from "@/data/contacts";
import { termsLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function TermsBannerSection() {
  return (
    <section className="bg-[#b5d5a1] text-[#111111]">
      <div className="section-shell flex flex-col gap-5 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/56">
            {termsBannerCopy.kicker}
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-[0.94]">
            {termsBannerCopy.title}
          </h2>
        </div>
        <Link
          href={termsLink}
          className={cn(
            buttonVariants({ size: "lg" }),
            "hover-lift-soft h-11 rounded-md border border-[#111111] bg-[#111111] px-5 text-sm text-[#f7f4ee] hover:bg-[#1d1d1d]",
          )}
        >
          {termsBannerCopy.cta}
        </Link>
      </div>
    </section>
  );
}
