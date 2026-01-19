import { ShieldCheck } from "@phosphor-icons/react";

import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";

export function PrivacySection() {
  return (
    <Section id="politica-privacidade" className="bg-section-mint py-14 sm:py-18">
      <div className="container-section space-y-8">
        <SectionHeader
          eyebrow="Política de Privacidade"
          title="Transparência no tratamento dos seus dados"
          description="A Stanchi Seguros atua em conformidade com a Lei Geral de Proteção de Dados (LGPD). Explicamos abaixo como coletamos, utilizamos e protegemos as informações fornecidas em nossos canais."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="glass-card rounded-2xl border border-white/60 bg-white/75 p-5 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-brand-dark">
              <ShieldCheck size={22} weight="fill" className="text-brand-primary" />
              Dados que coletamos
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-slate/80">
              Coletamos o mínimo necessário para elaborar cotações e prestar consultoria: nome,
              e-mail, telefone/WhatsApp, tipo de plano desejado, empresa, número de vidas e
              observações opcionais enviadas pelo formulário ou via WhatsApp.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-slate/80">
              Este site não possui banco de dados próprio. Ao enviar um formulário, as informações
              seguem diretamente para o WhatsApp ou para os canais de contato informados. Usamos os
              dados apenas para recomendar planos, simular valores, acompanhar portabilidade e
              oferecer suporte pós-venda. Não comercializamos, alugamos ou compartilhamos seus dados
              com terceiros não autorizados.
            </p>
          </article>

          <article className="glass-card rounded-2xl border border-white/60 bg-white/75 p-5 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-brand-dark">
              <ShieldCheck size={22} weight="fill" className="text-brand-primary" />
              Seus direitos e como exercê-los
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-slate/80">
              Você pode solicitar a confirmação de tratamento, acesso, correção, portabilidade ou
              exclusão dos seus dados a qualquer momento. Basta enviar um e-mail para{" "}
              <a
                href="mailto:comercial@stanchiseguros.com.br"
                className="font-semibold text-brand-primary underline-offset-2 hover:underline"
              >
                comercial@stanchiseguros.com.br
              </a>{" "}
              ou contatar-nos pelo WhatsApp oficial.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-slate/80">
              Como o site não mantém banco de dados próprio, os dados permanecem nos canais de
              atendimento utilizados (WhatsApp, e-mail ou telefone). Quando houver registros
              internos de atendimento, mantemos pelo tempo necessário para o relacionamento ou por
              obrigação legal.
            </p>
          </article>
        </div>

      </div>
    </Section>
  );
}
