import { Briefcase, Coin, Handshake } from "@phosphor-icons/react";

const benefits = [
  {
    icon: Handshake,
    title: "Isenção de carência",
    description:
      "Leve a sua experiência sem perder o tempo de carência já cumprido em outro plano.",
  },
  {
    icon: Coin,
    title: "Economia de custos",
    description:
      "Reveja mensalidades e condições para reduzir despesas mantendo a qualidade do atendimento.",
  },
  {
    icon: Briefcase,
    title: "Benefícios garantidos",
    description:
      "Mantenha coberturas essenciais para sua empresa, família ou atuação profissional.",
  },
];

export function Portability() {
  return (
    <section
      id="portability"
      className="relative overflow-hidden bg-brand-gradient py-16 text-white sm:py-18"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.2),transparent_55%)]" />
      <div className="container-section relative space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
            Portabilidade inteligente
          </p>
          <h2 className="text-[2rem] font-semibold leading-snug sm:text-[2.3rem]">
            Economize na mensalidade sem perder os benefícios do seu plano
          </h2>
          <p className="text-sm text-white/85 sm:text-base">
            Nossa equipe analisa seu plano atual, histórico de carências e necessidades para
            indicar a portabilidade ideal, seja individual, familiar, coletivo por adesão ou
            empresarial. Orientamos cada etapa e cuidamos da documentação por você.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-white/25 bg-white/15 p-5 backdrop-blur-md transition hover:bg-white/25"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white">
                <Icon size={20} weight="duotone" />
              </div>
              <span className="mt-4 text-3xl font-semibold text-white/70">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              <h3 className="mt-1 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/80">{description}</p>
              <span className="mt-4 h-0.5 w-12 rounded-full bg-white/40" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
