import { ContactsSection } from "@/components/sections/contacts-section";
import { FormatsSection } from "@/components/sections/formats-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { StudioSection } from "@/components/sections/studio-section";
import { TermsBannerSection } from "@/components/sections/terms-banner-section";
import { TrainersSection } from "@/components/sections/trainers-section";
import { SiteHeader } from "@/components/site-header";
import {
  bookingLink,
  mainNavigation,
  phoneLink,
  telegramLink,
  whatsappLink,
} from "@/lib/links";

export default function Home() {
  return (
    <main className="flex-1">
      <SiteHeader
        navigation={mainNavigation}
        bookingLink={bookingLink}
        whatsappLink={whatsappLink}
        telegramLink={telegramLink}
        phoneLink={phoneLink}
      />

      <HeroSection />
      <StudioSection />
      <FormatsSection />
      <TrainersSection />
      <PricingSection />
      <TermsBannerSection />
      <ContactsSection />
    </main>
  );
}
