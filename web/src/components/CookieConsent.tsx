import { useEffect, useState } from "react";
import { clsx } from "clsx";

const STORAGE_KEY = "stanchi-lgpd-consent";

type ConsentValue = "all" | "essential";

function updateConsentMode(value: ConsentValue) {
  const status = value === "all" ? "granted" : "denied";

  // Google Consent Mode (if gtag is present)
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: status,
      analytics_storage: status,
      functionality_storage: "granted",
      personalization_storage: status,
      security_storage: "granted",
    });
  }
}

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
    if (!saved) {
      setIsOpen(true);
    } else {
      updateConsentMode(saved);
    }
  }, []);

  const handleConsent = (value: ConsentValue) => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, value);
    document.cookie = `lgpd-consent=${value}; path=/; max-age=31536000; SameSite=Lax`;
    updateConsentMode(value);
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-4xl rounded-3xl border border-brand-dark/10 bg-white/95 p-6 shadow-2xl shadow-brand-dark/10 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md"
    >
      <div className="space-y-3">
        <h2 id="cookie-consent-title" className="text-lg font-semibold text-brand-dark">
          Sua privacidade está em primeiro lugar
        </h2>
        <p id="cookie-consent-description" className="text-sm leading-relaxed text-brand-slate/80">
          Utilizamos cookies essenciais para garantir o funcionamento do site e, com a sua
          permissão, cookies analíticos para melhorar sua experiência. Você pode alterar suas
          preferências a qualquer momento.
        </p>
        <button
          type="button"
          className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
          onClick={() => setShowDetails((prev) => !prev)}
        >
          {showDetails ? "Ocultar detalhes" : "Ver detalhes e finalidades"}
        </button>
        <div
          className={clsx(
            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
            showDetails ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden text-sm text-brand-slate/75">
            <p>
              <strong>Cookies essenciais:</strong> garantem recursos como segurança, prevenção a
              fraudes e funcionamento de formulários. Não podem ser desativados.
            </p>
            <p className="mt-2">
              <strong>Cookies analíticos:</strong> ajudam a entender o uso do site para aprimorar
              conteúdos e serviços. Habilitamos apenas com o seu consentimento.
            </p>
            <p className="mt-2">
              Consulte a{" "}
              <a
                href="#politica-privacidade"
                className="font-semibold text-brand-primary underline-offset-4 hover:underline"
              >
                Política de Privacidade
              </a>{" "}
              para conhecer seus direitos garantidos pela LGPD.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-brand-primary px-6 py-2.5 text-sm font-semibold text-brand-primary transition hover:bg-brand-light-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
          onClick={() => handleConsent("essential")}
        >
          Manter apenas essenciais
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/70"
          onClick={() => handleConsent("all")}
        >
          Aceitar todos
        </button>
      </div>
    </div>
  );
}
