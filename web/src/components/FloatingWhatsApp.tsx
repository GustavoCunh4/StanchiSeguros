import { WhatsappLogo } from "@phosphor-icons/react";

const whatsappLink =
  "https://wa.me/5571999485006?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20um%20plano%20de%20sa%C3%BAde.";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-4 z-40 flex items-center gap-2 whitespace-nowrap rounded-full bg-[#1EB457] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1EB457]/30 transition hover:translate-y-[-2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:right-6"
      aria-label="Conversar com a Stanchi Seguros pelo WhatsApp"
    >
      <WhatsappLogo size={20} weight="fill" />
      Fale conosco
    </a>
  );
}
