import { CaretDown, CheckCircle } from "@phosphor-icons/react";
import { useState } from "react";

import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";

const questions = [
  {
    question: "O que é carência de plano de saúde?",
    answer:
      "É o período que o beneficiário deve aguardar para utilizar as coberturas contratadas. A ANS define prazos máximos: 24 horas para urgência e emergência, 300 dias para parto a termo, 180 dias para consultas e exames, e 720 dias para doenças preexistentes.",
  },
  {
    question: "O que é um plano de saúde por adesão?",
    answer:
      "É o plano coletivo contratado por meio de entidades de classe, sindicatos ou conselhos profissionais. Uma administradora faz a intermediação com a operadora e, por reunir muitas vidas, consegue valores mais competitivos que os planos individuais.",
  },
  {
    question: "O que é um plano de saúde com coparticipação?",
    answer:
      "Nessa modalidade o beneficiário paga a mensalidade e uma taxa sempre que usa consultas, exames ou procedimentos. O percentual costuma variar entre 10% e 30% do valor previsto na tabela do plano, sempre respeitando os limites contratados.",
  },
  {
    question: "Posso declarar plano de saúde no imposto de renda?",
    answer:
      "Sim. Mensalidades e valores de coparticipação podem ser abatidos como despesas médicas na declaração de imposto de renda. Basta utilizar o informe de rendimentos fornecido pela operadora ou pela empresa contratante.",
  },
  {
    question: "Como escolher o melhor plano de saúde?",
    answer:
      "A decisão deve considerar perfil familiar ou empresarial, faixa etária, rede credenciada desejada, coberturas, carências e histórico de reajustes. Nossa consultoria analisa todos esses fatores e apresenta propostas comparativas para uma escolha segura.",
  },
  {
    question: "Como funciona o reembolso dos planos de saúde?",
    answer:
      "Planos que oferecem livre escolha permitem utilizar prestadores particulares e solicitar o reembolso depois. Cada operadora define prazos, valores máximos e documentos necessários, e nossa equipe orienta passo a passo para evitar atrasos.",
  },
  {
    question: "Plano de saúde cobre cirurgia plástica?",
    answer:
      "Cirurgias com finalidade estética não são obrigatórias. Entretanto, cirurgias reparadoras previstas no rol da ANS, como reconstrução mamária pós-mastectomia ou correções decorrentes de acidentes, têm cobertura garantida mediante indicação médica.",
  },
  {
    question: "O que fazer se o plano de saúde negar cirurgia ou exame?",
    answer:
      "Verifique a justificativa por escrito, reúna laudos médicos e entre em contato com nossa consultoria. Avaliamos a cobertura contratada, auxiliamos no recurso administrativo junto à operadora e, quando necessário, orientamos o registro na ANS.",
  },
  {
    question: "Planos de saúde cobrem casos de câncer?",
    answer:
      "Sim. Consultas, exames e tratamentos oncológicos, incluindo quimioterapia, radioterapia e medicamentos orais listados pela ANS, fazem parte da cobertura. Também apontamos hospitais de referência e serviços especializados dentro da rede credenciada.",
  },
  {
    question: "Qual é a melhor contratação de plano de saúde?",
    answer:
      "Existem três formatos principais: individual ou familiar, coletivo empresarial e coletivo por adesão. Indicamos a modalidade conforme o número de vidas, a necessidade de negociar reajustes e o perfil de utilização para garantir equilíbrio entre custo e cobertura.",
  },
  {
    question: "Posso contratar um plano de saúde usando um MEI?",
    answer:
      "O MEI possui CNPJ e pode aderir a planos coletivos empresariais. Normalmente as operadoras exigem pelo menos duas vidas no contrato (titular + dependente). A Stanchi conduz a análise documental e apresenta as opções com melhor custo-benefício.",
  },
  {
    question: "Plano de saúde cobre cirurgia bariátrica?",
    answer:
      "Sim, o procedimento está no rol da ANS quando o paciente atende aos critérios clínicos definidos, como índice de massa corporal, comorbidades e indicação médica. Auxiliamos na montagem do processo para garantir a autorização correta.",
  },
];

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-brand-primary/15 bg-white/95 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-primary/40">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-brand-dark">{question}</span>
        <CaretDown
          size={20}
          className={`text-brand-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
          weight="bold"
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-3 text-sm leading-relaxed text-brand-slate/80">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <Section id="faq" className="bg-section-peach">
      <div className="container-section space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Dúvidas frequentes"
              title="Perguntas que recebemos com frequência na Stanchi"
              description="Explicamos cada detalhe com clareza para que você contrate o plano ideal com total segurança. Se precisar de mais informações, fale com nossa equipe."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="relative overflow-hidden rounded-3xl shadow-sm ring-1 ring-brand-dark/10">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80"
                  alt="Consultora apresentando opções de plano de saúde para família"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/85 to-transparent px-5 pb-5 pt-12 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                    Atendimento humano
                  </p>
                  <p className="text-base font-semibold">Consultoras dedicadas em cada etapa</p>
                </figcaption>
              </figure>

              <div className="flex flex-col gap-4">
                <figure className="relative h-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-brand-dark/10 sm:h-40">
                  <img
                    src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=80"
                    alt="Cliente sendo acolhida por profissional de saúde"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/80 to-transparent px-4 py-3 text-xs font-semibold text-white">
                    98% dos clientes indicam a Stanchi
                  </figcaption>
                </figure>

                <div className="glass-card rounded-2xl border border-white/50 bg-white/75 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
                    Suporte completo
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-brand-slate/80">
                    {[
                      "Guiamos a contratação do início ao pós-venda.",
                      "Avaliamos coberturas, rede credenciada e reajustes.",
                      "Você fala com especialistas por WhatsApp ou presencialmente.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle size={16} weight="fill" className="mt-0.5 text-brand-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {questions.map((item, index) => (
              <FaqItem key={item.question} defaultOpen={index === 0} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
