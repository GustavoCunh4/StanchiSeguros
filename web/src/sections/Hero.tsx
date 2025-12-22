import {
  CalendarCheck,
  Heartbeat,
  ShieldCheck,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";

import { LeadForm } from "../components/LeadForm";
import { MotionFade } from "../components/ui/MotionFade";

const products = [
  "Plano Empresarial",
  "Plano Familiar",
  "Plano Individual",
  "MEI",
  "Saúde + Odonto",
  "Plano Pet",
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-hero-orbit" />
      <div
        className="absolute inset-x-0 bottom-[-40%] h-[320px] -rotate-2 bg-accent-sheen blur-3xl opacity-70"
        aria-hidden="true"
      />
      <div className="container-section grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <motion.span
            initial={{
              opacity: prefersReducedMotion ? 1 : 0,
              y: prefersReducedMotion ? 0 : 20,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary shadow-sm ring-1 ring-brand-primary/10"
          >
            <ShieldCheck size={16} weight="fill" />
            Especialistas em planos de saúde
          </motion.span>
          <motion.h1
            initial={{
              opacity: prefersReducedMotion ? 1 : 0,
              y: prefersReducedMotion ? 0 : 24,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="text-[2.4rem] font-semibold leading-tight sm:text-[2.85rem]"
          >
            Planos de saúde com até{" "}
            <span className="text-brand-accent">40% de economia</span> em Salvador
          </motion.h1>
          <motion.p
            initial={{
              opacity: prefersReducedMotion ? 1 : 0,
              y: prefersReducedMotion ? 0 : 24,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="max-w-xl text-base text-brand-slate/80"
          >
            A Stanchi Seguros atua com excelência em planos empresariais, familiares, individuais,
            para MEI, saúde com odontológico e assistência pet. Atendimento humano para quem busca
            segurança, transparência e economia em Salvador e em todo o Brasil.
          </motion.p>

          <ul className="grid gap-3 text-sm text-brand-dark sm:grid-cols-2">
            <MotionFade className="flex items-start gap-3 rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-brand-primary/10">
              <Heartbeat size={22} weight="duotone" className="mt-0.5 text-brand-primary" />
              <span>
                <strong className="font-semibold text-brand-dark">
                  Rede credenciada completa
                </strong>{" "}
                com hospitais, clínicas e laboratórios de referência na Bahia.
              </span>
            </MotionFade>
            <MotionFade
              delay={0.05}
              className="flex items-start gap-3 rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-brand-primary/10"
            >
              <CalendarCheck size={22} weight="duotone" className="mt-0.5 text-brand-primary" />
              <span>
                <strong className="font-semibold text-brand-dark">
                  Condições exclusivas
                </strong>{" "}
                para empresas, MEI e profissionais liberais com redução imediata da mensalidade.
              </span>
            </MotionFade>
          </ul>

          <div className="grid gap-2 text-xs text-brand-slate/80 sm:grid-cols-2 sm:gap-3">
            {[
              "Atendimento rápido pelo WhatsApp ou presencial.",
              "Simulação clara por faixa etária e modalidade.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-sm ring-1 ring-brand-light/40"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs text-brand-slate/70">
            Economia de até 40% conforme perfil, faixa etária e operadora.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[28px] bg-brand-gradient opacity-30 blur-3xl" />
          <LeadForm
            products={products}
            cardClassName="ring-primary-soft shadow-lift"
            eyebrow="Faça uma cotação personalizada"
            title="Garanta o melhor plano com quem entende da sua necessidade."
            subtitle="Preencha os dados e nossa equipe entra em contato em até 1 hora dentro do horário comercial."
            consentPolicyHref="#politica-privacidade"
            buttonLabel="Falar com especialista agora"
            buttonSendingLabel="Enviando..."
            buttonIcon={<WhatsappLogo size={18} weight="fill" />}
            footerText="Ao enviar seus dados você autoriza o contato da Stanchi Seguros via WhatsApp, telefone ou e-mail para apresentação das melhores ofertas."
            buttonClassName="bg-[#1EB457] hover:bg-[#1AA34E] focus-visible:ring-[#1EB457]/70"
          />
        </div>
      </div>
    </section>
  );
}
