import { ShieldCheck } from "@phosphor-icons/react";

const stats = [
  { label: "Anos de experiência", value: "15+" },
  { label: "Famílias protegidas", value: "7.000+" },
  { label: "Profissionais certificados", value: "100%" },
  { label: "Satisfação pós-venda", value: "Excelente" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-section-cream py-14 sm:py-18">
      <div className="container-section grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
            Quem somos
          </p>
          <h2 className="text-[2rem] font-semibold leading-tight text-brand-dark sm:text-[2.2rem]">
            Nossa missão: conhecer bem para cuidar
          </h2>
          <p className="text-sm leading-relaxed text-brand-slate/80 sm:text-base">
            A Stanchi Seguros nasceu em 2018 com mais de 15 anos de experiência acumulada em
            diferentes ramos de seguros, com foco em planos de saúde. Somos uma empresa liderada por
            mulheres e movida pela atenção aos detalhes que fazem diferença na vida das pessoas.
          </p>
          <p className="text-sm leading-relaxed text-brand-slate/80 sm:text-base">
            Oferecemos atendimento consultivo e humanizado, colocando clientes no centro de todas
            as decisões. Ética, responsabilidade e excelência técnica nos guiam em cada proposta.
          </p>

          <dl className="grid gap-3 pt-1 text-sm sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-brand-dark/10 bg-white/95 p-4 text-brand-dark shadow-sm"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  {item.label}
                </dt>
                <dd className="mt-1 text-xl font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 rounded-[28px] bg-brand-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <figure className="overflow-hidden rounded-[28px] shadow-sm ring-1 ring-brand-dark/10">
              <img
                src="https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1200&q=80"
                alt="Consultor atendendo casal de idosos durante a assinatura do plano"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="flex flex-col gap-4">
              <figure className="overflow-hidden rounded-[24px] shadow-sm ring-1 ring-brand-dark/10">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80"
                  alt="Consultora apresentando opções de seguro para casal sênior"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="relative overflow-hidden rounded-[24px] bg-white/95 p-5 shadow-sm ring-1 ring-brand-dark/10">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,193,179,0.2),transparent_65%)]"
                  aria-hidden="true"
                />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <ShieldCheck size={22} weight="fill" />
                  </div>
                  <p className="text-sm leading-relaxed text-brand-dark">
                    Cuidamos de famílias, idosos e empresas com planos pensados para garantir
                    segurança, acesso a clínicas de referência e suporte contínuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
