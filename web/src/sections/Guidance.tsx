import { ArrowRight, ClipboardText, PhoneCall, Stethoscope } from "@phosphor-icons/react";

import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";

const actions = [
  {
    icon: PhoneCall,
    title: "Cotação personalizada",
    description:
      "Escolha o plano alinhado ao seu orçamento com o acompanhamento de uma especialista Stanchi.",
    href: "#contact",
  },
  {
    icon: ClipboardText,
    title: "Tabela de preços",
    description:
      "Receba a tabela atualizada por faixa etária e categoria e saiba o que esperar de cada operadora.",
    href: "#pricing",
  },
  {
    icon: Stethoscope,
    title: "Redes credenciadas",
    description:
      "Compare hospitais, laboratórios e clínicas antes de contratar para decidir com total confiança.",
    href: "#networks",
  },
];

export function Guidance() {
  return (
    <Section className="bg-section-cream">
      <div className="container-section grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-5 rounded-3xl bg-brand-sheen p-6 shadow-sm ring-1 ring-brand-primary/15 sm:p-7">
          <SectionHeader
            eyebrow="Tudo para contratar sem dúvidas"
            title="Conte com nosso time para comparar planos, redes e coberturas"
            description="A Stanchi acompanha todo o processo de escolha, contratação e pós-venda, garantindo transparência em cada etapa."
            className="space-y-4"
          />
          <div className="glass-card rounded-2xl bg-white/70 p-5 text-[15px] leading-relaxed text-brand-slate/80 ring-1 ring-white/40 sm:p-6 sm:text-base">
            <p className="font-semibold text-brand-primary">
              Atendimento consultivo, sem pressa, guiado por dados.
            </p>
            <p className="mt-2">
              Analisamos perfis de utilização, etapas da jornada de saúde e histórico de reajustes
              para recomendar o plano certo. Cada proposta é explicada em linguagem clara com foco
              no que realmente importa para você, sua família ou equipe.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map(({ icon: Icon, title, description, href }) => (
            <a
              key={title}
              href={href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-brand-dark/10 bg-white/95 p-5 text-brand-dark shadow-sm transition hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 sm:p-6"
            >
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white">
                  <Icon size={24} weight="duotone" />
                </div>
                <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
                <p className="text-[15px] leading-relaxed text-brand-slate/75 sm:text-base">
                  {description}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-primary transition group-hover:text-brand-dark sm:text-sm">
                Saiba mais
                <ArrowRight size={14} weight="bold" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}