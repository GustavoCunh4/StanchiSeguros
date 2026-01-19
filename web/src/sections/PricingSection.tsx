import { WhatsappLogo } from "@phosphor-icons/react";

import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";

const whatsappLink =
  "https://wa.me/5571999485006?text=Ol%C3%A1!%20Gostaria%20de%20receber%20a%20tabela%20de%20pre%C3%A7os%20da%20Stanchi%20Seguros.";

export function PricingSection() {
  return (
    <Section id="pricing" className="bg-section-peach">
      <div className="container-section grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Tabela de preços"
            title="Transparência para comparar valores por faixa etária"
            description="Toda tabela de preços no plano de saúde é dividida de acordo com a faixa etária do beneficiário, onde o cálculo é feito de 0 a 18 anos e depois disso, a cada 4 anos (Ex: 19 a 23 anos, 24 a 28 anos, 29 a 33 anos etc). Entretanto, a partir dos 59 anos o plano de saúde não pode mais realizar o reajuste por faixa etária, ou seja, as mensalidades são fixas para essa faixa etária em diante."
          />
          <ul className="space-y-2 text-[15px] text-brand-slate/75 sm:text-base">
            <li>Simulação completa por faixa etária e modalidade</li>
            <li>Comparativo entre operadoras para cada perfil</li>
            <li>Análise de coparticipação, franquias e coberturas</li>
          </ul>
        </div>

        <div className="glass-card rounded-3xl border border-white/60 bg-accent-sheen p-7 shadow-sm sm:p-8">
          <h3 className="text-xl font-semibold text-brand-dark">
            Receba a tabela atualizada no seu WhatsApp
          </h3>
          <p className="mt-3 text-[15px] text-brand-slate/75 sm:text-base">
            Envie uma mensagem e nossa equipe compartilha o comparativo com todas as operadoras
            disponíveis para a sua região.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1EB457] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#1EB457]/30 transition hover:bg-[#1AA34E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EB457]/50"
          >
            <WhatsappLogo size={18} weight="fill" />
            Receber tabela de preços
          </a>
        </div>
      </div>
    </Section>
  );
}

