import {
  Buildings,
  GraduationCap,
  HandHeart,
  PawPrint,
  ShieldPlus,
  User,
} from "@phosphor-icons/react";

import { MotionFade } from "../components/ui/MotionFade";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";

const planTypes = [
  {
    icon: User,
    title: "Individual",
    description:
      "Cobertura completa para quem busca tranquilidade: consultas, exames e urgências sem surpresas.",
  },
  {
    icon: HandHeart,
    title: "Familiar",
    description:
      "Planos com excelente custo-benefício para cuidar de quem você ama com segurança.",
  },
  {
    icon: Buildings,
    title: "Empresarial",
    description:
      "Soluções sob medida para empresas de todos os portes, com redução de custos e benefícios atrativos.",
  },
  {
    icon: GraduationCap,
    title: "Estudantes e Crianças",
    description:
      "Proteção para estudantes, crianças e dependentes com ampla rede credenciada.",
  },
  {
    icon: ShieldPlus,
    title: "Idoso",
    description:
      "Planos com foco em cuidado contínuo, atendimento humanizado e equipe experiente.",
  },
  {
    icon: PawPrint,
    title: "Pet",
    description:
      "Cobertura veterinária para quem também cuida do melhor amigo.",
  },
];

export function PlanCategories() {
  return (
    <Section id="plans" className="bg-section-mint">
      <div className="container-section grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="glass-card space-y-6 rounded-3xl bg-white/70 p-7 shadow-sm ring-1 ring-white/50 sm:p-8">
          <SectionHeader
            eyebrow="Planos sob medida"
            title="Trabalhamos com planos de saúde pensados para você"
            description="Analisamos perfil, faixa etária, rede credenciada desejada e orçamento para recomendar a melhor opção com equilíbrio entre cuidado e economia."
            className="space-y-4"
          />
          <ul className="space-y-3 text-[15px] text-brand-slate/75 sm:text-base">
            {[
              "Indicamos operadoras alinhadas ao dia a dia da sua família ou empresa.",
              "Explicamos regras de carência, coparticipação e reajustes antes da assinatura.",
              "Acompanhamos a contratação completa, do envio de documentos ao pós-venda.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {planTypes.map(({ icon: Icon, title, description }, index) => (
            <MotionFade
              key={title}
              delay={index * 0.04}
              className="group flex h-full flex-col rounded-2xl border border-brand-dark/10 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light/25 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white">
                <Icon size={26} weight="duotone" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-brand-dark">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-brand-slate/75 sm:text-base">{description}</p>
            </MotionFade>
          ))}
        </div>
      </div>
    </Section>
  );
}

