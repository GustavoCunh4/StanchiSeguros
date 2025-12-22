import { WhatsappLogo } from "@phosphor-icons/react";

import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";

const whatsappLink =
  "https://wa.me/5571999485006?text=Ol%C3%A1!%20Gostaria%20de%20receber%20a%20tabela%20de%20pre%C3%A7os%20da%20Stanchi%20Seguros.";

export function PricingSection() {
  return (
    <Section id="pricing" className="bg-section-peach">
      <div className="container-section grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-5">
          <SectionHeader
            eyebrow="Tabela de preços"
            title="Transparência para comparar valores por faixa etária"
            description="Toda tabela de planos de saúde é calculada por faixa etária do beneficiário. Após os 59 anos, o reajuste por idade deixa de existir e as mensalidades permanecem fixas dentro da categoria. Explicamos cada regra de forma clara antes da contratação."
          />
          <ul className="space-y-2 text-sm text-brand-slate/75">
            <li>Simulação completa por faixa etária e modalidade</li>
            <li>Comparativo entre operadoras para cada perfil</li>
            <li>Análise de coparticipação, franquias e coberturas</li>
          </ul>
        </div>

        <div className="glass-card rounded-3xl border border-white/60 bg-accent-sheen p-6 shadow-sm sm:p-7">
          <h3 className="text-lg font-semibold text-brand-dark">
            Receba a tabela atualizada no seu WhatsApp
          </h3>
          <p className="mt-3 text-sm text-brand-slate/75">
            Envie uma mensagem e nossa equipe compartilha o comparativo com todas as operadoras
            disponíveis para a sua região.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1EB457] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1EB457]/30 transition hover:bg-[#1AA34E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EB457]/50"
          >
            <WhatsappLogo size={18} weight="fill" />
            Receber tabela de preços
          </a>
        </div>
      </div>
    </Section>
  );
}
