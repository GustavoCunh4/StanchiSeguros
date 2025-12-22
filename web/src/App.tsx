import { Seo } from "./components/Seo";

import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { Header } from "./components/Header";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { FaqSection } from "./sections/FaqSection";
import { PrivacySection } from "./sections/PrivacySection";
import { Guidance } from "./sections/Guidance";
import { Hero } from "./sections/Hero";
import { NetworksSection } from "./sections/NetworksSection";
import { Partners } from "./sections/Partners";
import { PlanCategories } from "./sections/PlanCategories";
import { Portability } from "./sections/Portability";
import { PricingSection } from "./sections/PricingSection";

function App() {
  return (
    <>
      <Seo />
      <a
        href="#conteudo-principal"
        className="focus-visible ring-offset-4 ring-offset-white absolute left-4 top-4 z-[100] -translate-y-20 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-card transition focus-visible:translate-y-0"
      >
        Ir para o conteúdo principal
      </a>
      <div className="relative min-h-screen bg-brand-surface text-brand-dark">
        <Header />
        <main id="conteudo-principal" className="space-y-0">
          <Hero />
          <PlanCategories />
          <Partners />
          <AboutSection />
          <Guidance />
          <PricingSection />
          <NetworksSection />
          <Portability />
          <FaqSection />
          <PrivacySection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </div>
    </>
  );
}

export default App;
