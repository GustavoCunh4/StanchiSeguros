import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  PhoneCall,
  WhatsappLogo,
} from "@phosphor-icons/react";

import { StanchiLogo } from "./logos/StanchiLogo";
import { SusepLogo } from "./logos/SusepLogo";

const whatsappLink =
  "https://wa.me/5571999485006?text=Ol%C3%A1!%20Gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20com%20a%20Stanchi%20Seguros.";

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="container-section grid gap-8 py-12 md:grid-cols-[2fr_1fr_1fr] md:gap-12 lg:py-16">
        <div className="space-y-5">
          <StanchiLogo variant="light" />
          <p className="mt-3 text-[15px] text-white/85 sm:text-base">
            Atendimento humanizado, equipe especializada e condições exclusivas para planos de
            saúde, odontológicos e seguros em Salvador e em todo o Brasil.
          </p>
          <ul className="space-y-2 text-[15px] text-white/85 sm:text-base">
            <li>• Atendimento em todo o Brasil</li>
            <li>• Profissionais certificados</li>
            <li>• Consultoria completa em seguradoras e operadoras</li>
            <li>• Pós-venda próximo e cuidadoso</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Entre em contato</h3>
          <ul className="space-y-3 text-[15px] text-white/85 sm:text-base">
            <li className="flex items-start gap-3">
              <MapPin size={20} weight="fill" className="mt-1 text-white/80" />
              <span>
                Rua Dr. José Peroba, 325, Sala 702 - Stiep
                <br />
                Salvador - BA
              </span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneCall size={20} weight="fill" className="text-white/80" />
              <a
                href="tel:5571999485006"
                className="transition hover:text-white focus-visible:text-white"
              >
                71 99948-5006
              </a>
            </li>
            <li className="flex items-center gap-3">
              <EnvelopeSimple size={20} weight="fill" className="text-white/80" />
              <a
                href="mailto:comercial@stanchiseguros.com.br"
                className="transition hover:text-white focus-visible:text-white"
              >
                comercial@stanchiseguros.com.br
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#1EB457] px-5 py-2.5 text-base font-semibold text-white transition hover:bg-[#1AA34E] focus-visible:bg-[#1AA34E]"
            >
              <WhatsappLogo size={20} weight="fill" />
              Fale agora
            </a>
            <a
              href="https://www.facebook.com/stanchiseguros"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Stanchi Seguros"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-white hover:bg-white/10 focus-visible:border-white"
            >
              <FacebookLogo size={20} weight="fill" />
            </a>
            <a
              href="https://www.instagram.com/stanchisegurosdigitais/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Stanchi Seguros"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-white hover:bg-white/10 focus-visible:border-white"
            >
              <InstagramLogo size={20} weight="fill" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Credenciais</h3>
          <SusepLogo className="text-white" />
          <dl className="space-y-2 text-[15px] text-white/85 sm:text-base">
            <div className="flex justify-between gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-[15px] sm:text-base">
              <dt className="font-semibold uppercase tracking-wide text-white/70">SUSEP</dt>
              <dd>212109697</dd>
            </div>
            <div className="flex justify-between gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-[15px] sm:text-base">
              <dt className="font-semibold uppercase tracking-wide text-white/70">CNPJ</dt>
              <dd>32.172.320/0001-15</dd>
            </div>
          </dl>
          <p className="text-[15px] text-white/70 sm:text-base">
            © {new Date().getFullYear()} Stanchi Solução em Seguros. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <div className="border-t border-white/15 bg-brand-primary-700 py-4">
        <div className="container-section flex flex-col items-center justify-between gap-3 text-sm text-white/70 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <p>Salvador • Bahia • Brasil</p>
            <a
              href="#politica-privacidade"
              className="font-semibold text-white/90 underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

