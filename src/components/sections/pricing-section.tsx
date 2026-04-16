import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { type Price, prices, pricingCopy } from "@/data/prices";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-14 bg-[#111512] text-[#f6f3ec]"
    >
      <div className="section-shell grid gap-10 py-18 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-14">
        <PricingAside />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {prices.map((price, index) => (
            <Reveal
              key={price.title}
              delay={index * 80}
              blur
              className="h-full"
            >
              <PriceCard price={price} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingAside() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dec768]">
        {pricingCopy.kicker}
      </p>
      <h2 className="mt-4 font-heading text-5xl leading-[0.95]">
        {pricingCopy.title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/66">
        {pricingCopy.description}
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({ size: "lg" }),
          "hover-lift mt-8 h-11 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ecf8e1] hover:text-[#173127] focus-visible:text-[#173127]",
        )}
      >
        {pricingCopy.asideCta}
      </a>
    </aside>
  );
}

function PriceCard({ price }: { price: Price }) {
  return (
    <article
      className={cn(
        "hover-lift relative flex h-full flex-col rounded-lg border p-5 shadow-[0_18px_40px_rgba(0,0,0,0.16)]",
        price.highlight
          ? "border-[#dec768] bg-[#171f19]"
          : "border-white/10 bg-white/4",
      )}
    >
      {price.highlight ? (
        <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#dec768]/60 bg-[#171f19] py-1 pl-2 pr-[calc(0.5rem-0.2em)] text-[11px] uppercase tracking-[0.2em] text-[#dec768]">
          {pricingCopy.highlightBadge}
        </span>
      ) : null}

      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/54 md:min-h-8">
          {price.note}
        </p>
        <h3 className="mt-3 font-heading text-2xl leading-none lg:min-h-[3rem] xl:min-h-[3rem]">
          {price.title}
        </h3>
      </div>

      <p className="mt-5 whitespace-nowrap font-heading text-[2rem] leading-none text-[#f7f4eb]">
        {price.price}
      </p>

      <ul className="mt-6 space-y-3 text-sm leading-6 text-white/72">
        {price.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d26b51]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <a
          href={price.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 w-full rounded-md border-white/14 bg-transparent text-sm text-white hover:bg-white/8 hover:text-white",
          )}
        >
          {pricingCopy.cardCta}
        </a>
      </div>
    </article>
  );
}
