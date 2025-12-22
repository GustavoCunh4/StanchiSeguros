import { Hospital, MapTrifold, WhatsappLogo } from "@phosphor-icons/react";

import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";

const whatsappLink =
  "https://wa.me/5571999485006?text=Ol%C3%A1!%20Gostaria%20de%20receber%20a%20rela%C3%A7%C3%A3o%20de%20redes%20credenciadas%20da%20Stanchi%20Seguros.";

export function NetworksSection() {
  return (
    <Section id="networks" className="bg-section-mint">
      <div className="container-section grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-5">
          <SectionHeader
            eyebrow="Redes credenciadas"
            title="Escolha o plano com a estrutura ideal para o seu dia a dia"
            description="Antes de contratar, avaliamos clínicas, hospitais, laboratórios, especialidades médicas e profissionais da região onde você mais utiliza o plano. Assim, você garante atendimento próximo e rápido quando precisar."
          />
          <ul className="space-y-3 text-sm text-brand-slate/80">
            <li className="flex items-start gap-3">
              <Hospital size={20} weight="fill" className="mt-0.5 text-brand-primary" />
              <span>Hospitais de referência, maternidades e pronto-atendimentos.</span>
            </li>
            <li className="flex items-start gap-3">
              <MapTrifold size={20} weight="fill" className="mt-0.5 text-brand-primary" />
              <span>Mapeamos unidades próximas a você ou à sede da sua empresa.</span>
            </li>
          </ul>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-primary/20 bg-brand-light/10 p-4 text-sm shadow-sm">
              <p className="text-2xl font-semibold text-brand-dark">+50</p>
              <p className="mt-1 text-brand-slate/70">clínicas de diagnóstico parceiras</p>
            </div>
            <div className="rounded-2xl border border-brand-primary/20 bg-brand-light/10 p-4 text-sm shadow-sm">
              <p className="text-2xl font-semibold text-brand-dark">12</p>
              <p className="mt-1 text-brand-slate/70">operadoras analisadas antes da indicação</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl border border-brand-dark/10 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
              alt="Equipe médica acompanhando família em hospital credenciado"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/85 to-transparent p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                120+ hospitais parceiros
              </p>
              <p className="text-base font-semibold">Cobertura regional e nacional</p>
              <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                Atendimento 24h
              </span>
            </div>
          </div>
          <div className="glass-card rounded-3xl border border-white/60 bg-brand-surface/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-dark">
              Receba a lista completa de redes credenciadas
            </h3>
            <p className="mt-2 text-sm text-brand-slate/75">
              Indicamos as redes que fazem sentido para o seu perfil e apresentamos alternativas
              quando a operadora atual não atende à necessidade.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1EB457] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1AA34E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EB457]/50"
            >
              <WhatsappLogo size={18} weight="fill" />
              Receber redes credenciadas
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
