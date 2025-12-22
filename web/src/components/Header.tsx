import { useState } from "react";
import { List, WhatsappLogo, X } from "@phosphor-icons/react";
import { clsx } from "clsx";

import { StanchiLogo } from "./logos/StanchiLogo";

const navItems = [
  { label: "Início", href: "#topo" },
  { label: "Quem somos", href: "#about" },
  { label: "Planos de Saúde", href: "#plans" },
  { label: "Portabilidade", href: "#portability" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contact" },
];

const whatsappLink =
  "https://wa.me/5571999485006?text=Ol%C3%A1!%20Gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20com%20a%20Stanchi%20Seguros.";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="topo"
      className="sticky top-0 z-50 w-full border-b border-brand-dark/10 bg-brand-surface/95 shadow-sm backdrop-blur supports-[backdrop-filter]:backdrop-blur-xl"
    >
      <div className="container-section flex items-center justify-between gap-4 py-3 md:py-4">
        <a
          href="#topo"
          className="flex items-center gap-2"
          aria-label="Ir para o topo"
        >
          <StanchiLogo className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-brand-dark/90 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition-colors hover:text-brand-primary focus-visible:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-[#1EB457] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1AA34E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EB457]/50 md:inline-flex"
          >
            <WhatsappLogo size={18} weight="fill" />
            Falar com especialista
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-dark/10 text-brand-primary shadow-sm transition hover:border-brand-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 lg:hidden"
            aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isOpen}
            aria-controls="menu-movel"
          >
            {isOpen ? <X size={18} /> : <List size={22} />}
          </button>
        </div>
      </div>

      <div
        id="menu-movel"
        className={clsx(
          "lg:hidden",
          "overflow-hidden border-t border-brand-dark/10 transition-[max-height] duration-300 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0",
        )}
        aria-hidden={!isOpen}
      >
        <nav className="container-section flex flex-col gap-3 py-4 text-sm font-semibold text-brand-dark/90">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl bg-white/85 px-4 py-3 shadow-sm ring-1 ring-brand-dark/10 transition hover:bg-brand-light-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1EB457] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1AA34E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EB457]/50"
          >
            <WhatsappLogo size={20} weight="fill" />
            Falar com especialista
          </a>
        </nav>
      </div>
    </header>
  );
}
