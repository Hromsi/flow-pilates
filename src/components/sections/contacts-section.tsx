import Image from "next/image";
import { FileText, Send } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { type Contact, contacts, contactsCopy } from "@/data/contacts";
import { documentsCopy, studioDocuments } from "@/data/documents";
import { practiceSessionImage } from "@/lib/images";
import { bookingLink, telegramLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function ContactsSection() {
  return (
    <section
      id="contacts"
      className="relative isolate scroll-mt-14 overflow-hidden bg-[#132018] text-[#f6f3ec]"
    >
      <ContactsBackground />

      <div className="section-shell relative py-18">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-16">
          <ContactsMain />
          <ContactsAside />
        </div>
      </div>
    </section>
  );
}

function ContactsBackground() {
  return (
    <div className="absolute inset-0">
      <Image
        src={practiceSessionImage}
        alt="Студия Flow Pilates"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,17,13,0.9)_0%,rgba(12,17,13,0.72)_45%,rgba(12,17,13,0.82)_100%)]" />
    </div>
  );
}

function ContactsMain() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dec768]">
        {contactsCopy.kicker}
      </p>
      <h2 className="mt-4 max-w-3xl font-heading text-balance text-5xl leading-[0.95]">
        {contactsCopy.title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
        {contactsCopy.description}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={bookingLink}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "hover-lift h-12 rounded-md border border-[#d7ecbd] bg-[#d7ecbd] px-5 text-sm text-[#173127] hover:bg-[#ecf8e1] hover:text-[#173127] focus-visible:text-[#173127]",
          )}
        >
          {contactsCopy.bookingCta}
        </a>
        <a
          href={telegramLink}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "hover-lift-soft h-12 rounded-md border-white/18 bg-transparent px-5 text-sm text-white hover:bg-white/8 hover:text-white",
          )}
        >
          <Send className="size-4" />
          {contactsCopy.telegramCta}
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {contacts.map((contact) => (
          <ContactItem key={contact.label} contact={contact} />
        ))}
      </div>
    </div>
  );
}

function ContactItem({ contact }: { contact: Contact }) {
  const Icon = contact.icon;
  const isExternal = contact.href.startsWith("http");

  return (
    <a
      href={contact.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="hover-lift-soft group block border-t border-white/12 pt-5"
    >
      <div className="flex items-center gap-2.5">
        <Icon className="size-4 text-[#dec768]" />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58 transition-colors group-hover:text-[#d7ecbd]">
          {contact.label}
        </p>
      </div>
      <p className="mt-3 max-w-xs text-sm leading-6 text-white/82 transition-colors group-hover:text-[#d7ecbd]">
        {contact.value}
      </p>
    </a>
  );
}

function ContactsAside() {
  return (
    <div className="space-y-6">
      <div className="border-t border-white/12 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
          {contactsCopy.aboutKicker}
        </p>
        <p className="mt-4 text-sm leading-7 text-white/74">
          {contactsCopy.aboutDescription}
        </p>
      </div>

      <div className="border-t border-white/12 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
          {documentsCopy.kicker}
        </p>
        <p className="mt-4 text-sm leading-7 text-white/74">
          {documentsCopy.description}
        </p>
        <ul className="mt-4 space-y-2">
          {studioDocuments.map((document) => (
            <li key={document.href}>
              <a
                href={document.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-white/82 transition-colors hover:text-[#d7ecbd]"
              >
                <FileText className="size-4 shrink-0 text-[#dec768] transition-colors group-hover:text-[#d7ecbd]" />
                <span className="underline-offset-4 group-hover:underline">
                  {document.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-white/12 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec768]">
          {contactsCopy.legalKicker}
        </p>
        <p className="mt-4 text-sm leading-7 text-white/74">
          {contactsCopy.legal.map((line, index) => (
            <span key={line}>
              {line}
              {index < contactsCopy.legal.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
