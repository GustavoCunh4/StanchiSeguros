import { ArrowRight, PhoneCall, WhatsappLogo } from "@phosphor-icons/react";

import { LeadForm } from "../components/LeadForm";

const whatsappLink =
  "https://wa.me/5571999485006?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consultoria%20com%20a%20Stanchi%20Seguros.";

const products = [
  "Plano Empresarial",
  "Plano Familiar",
  "Plano Individual",
  "MEI",
  "Saúde + Odonto",
  "Plano Pet",
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-section-cream py-14 sm:py-18">
      <div className="container-section grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-3xl border border-brand-primary/15 bg-brand-soft p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
            Vamos conversar
          </p>
          <h2 className="mt-3 text-[2rem] font-semibold text-brand-dark sm:text-[2.2rem]">
            Entre em contato para obter uma cotação personalizada
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-slate/80 sm:text-base">
            Nossas especialistas vão orientar você ou sua empresa na contratação do plano de saúde
            ideal, com suporte antes e depois da assinatura do contrato.
          </p>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#1EB457] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1AA34E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EB457]/70"
            >
              <WhatsappLogo size={18} weight="fill" />
              Solicitar cotação
            </a>
            <a
              href="tel:5571999485006"
              className="inline-flex items-center gap-2 rounded-full border border-brand-primary px-5 py-2.5 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
            >
              <PhoneCall size={18} weight="bold" />
              Ligar para 71 99948-5006
            </a>
          </div>

          <p className="mt-5 flex items-center gap-2 text-xs text-brand-slate/70 sm:text-sm">
            <ArrowRight size={16} weight="bold" className="text-brand-primary" />
            Atendimento online ou presencial, conforme a sua preferência.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-brand-gradient opacity-20 blur-3xl" />
          <LeadForm
            products={products}
            whatsappNumber="5571999485006"
            cardClassName="ring-primary-soft shadow-lift"
            eyebrow="Fale com uma consultora agora mesmo"
            title="Conte com um atendimento dedicado para comparar coberturas e valores"
            subtitle="Responda com seus dados preferidos para contato e retornamos em até 1 hora útil. Nossa equipe acompanha cada etapa até a ativação do plano."
            consentPolicyHref="#politica-privacidade"
            buttonLabel="Enviar mensagem"
            buttonSendingLabel="Enviando..."
            buttonIcon={<WhatsappLogo size={18} weight="fill" />}
            footerText="Ao enviar seus dados você autoriza o contato da Stanchi Seguros via WhatsApp, telefone ou e-mail para apresentação das melhores ofertas."
          />
        </div>
      </div>
    </section>
  );
}
