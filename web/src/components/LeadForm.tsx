import { useMemo, useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { clsx } from "clsx";

import { Button } from "./ui/Button";
import { leadSchema, type LeadFormData } from "../lib/schemas";
import { formatPhone } from "../lib/formatters";

const captchaSiteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

type LeadFormProps = {
  whatsappNumber?: string;
  products: string[];
  eyebrow: string;
  title: string;
  subtitle: string;
  consentPolicyHref: string;
  consentPolicyLabel?: string;
  buttonLabel: string;
  buttonSendingLabel?: string;
  buttonIcon?: ReactNode;
  showMessageField?: boolean;
  className?: string;
  cardClassName?: string;
  buttonClassName?: string;
  footerText?: string;
  onSubmitSuccess?: () => void;
};

export function LeadForm({
  whatsappNumber = "5571999485006",
  products,
  eyebrow,
  title,
  subtitle,
  consentPolicyHref,
  consentPolicyLabel = "Política de Privacidade",
  buttonLabel,
  buttonSendingLabel = "Enviando...",
  buttonIcon,
  showMessageField = true,
  className,
  cardClassName,
  buttonClassName,
  footerText,
  onSubmitSuccess,
}: LeadFormProps) {
  const captchaRef = useRef<HCaptcha | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const defaultProduct = useMemo(() => products[0] ?? "", [products]);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      product: defaultProduct,
      message: "",
      consent: false,
    },
  });

  const phoneValue = watch("phone");

  const onSubmit = (values: LeadFormData) => {
    if (captchaSiteKey && !captchaToken) {
      setError("consent", {
        type: "manual",
        message: "Confirme o captcha para enviar o formulário.",
      });
      return;
    }

    const whatsappMessage = encodeURIComponent(
      [
        "Olá, equipe Stanchi! Gostaria de receber uma cotação.",
        `Nome: ${values.name}`,
        `E-mail: ${values.email}`,
        `Telefone/WhatsApp: ${values.phone}`,
        `Interesse principal: ${values.product}`,
        values.message ? `Observações: ${values.message}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

    reset({
      name: "",
      email: "",
      phone: "",
      product: defaultProduct,
      message: "",
      consent: false,
    });

    if (captchaSiteKey) {
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    }

    onSubmitSuccess?.();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={clsx(
        "relative space-y-4 glass-card p-5 shadow-lg shadow-brand-dark/10 ring-1 ring-white/40 sm:p-6",
        cardClassName,
        className,
      )}
    >
      <div className="space-y-1.5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">
          {eyebrow}
        </p>
        <h2 className="text-lg font-semibold text-brand-dark">{title}</h2>
        <p className="text-sm text-brand-slate/70">{subtitle}</p>
      </div>

      <div className="space-y-3">
        <label className="space-y-2 text-sm font-semibold text-brand-dark">
          Nome completo
          <input
            {...register("name")}
            className="w-full rounded-xl border border-brand-dark/10 bg-white px-3 py-2.5 text-sm text-brand-dark shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-light/60"
            placeholder="Digite seu nome"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? (
            <span className="block text-xs font-medium text-brand-accent" role="alert">
              {errors.name.message}
            </span>
          ) : null}
        </label>

        <label className="space-y-2 text-sm font-semibold text-brand-dark">
          E-mail
          <input
            {...register("email")}
            type="email"
            className="w-full rounded-xl border border-brand-dark/10 bg-white px-3 py-2.5 text-sm text-brand-dark shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-light/60"
            placeholder="nome@email.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <span className="block text-xs font-medium text-brand-accent" role="alert">
              {errors.email.message}
            </span>
          ) : null}
        </label>

        <label className="space-y-2 text-sm font-semibold text-brand-dark">
          WhatsApp
          <input
            {...register("phone")}
            value={phoneValue}
            onChange={(event) =>
              setValue("phone", formatPhone(event.target.value), {
                shouldValidate: true,
              })
            }
            className="w-full rounded-xl border border-brand-dark/10 bg-white px-3 py-2.5 text-sm text-brand-dark shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-light/60"
            placeholder="(71) 99999-0000"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? (
            <span className="block text-xs font-medium text-brand-accent" role="alert">
              {errors.phone.message}
            </span>
          ) : null}
        </label>

        <label className="space-y-2 text-sm font-semibold text-brand-dark">
          Tipo de plano
          <select
            {...register("product")}
            className="w-full rounded-xl border border-brand-dark/10 bg-white px-3 py-2.5 text-sm text-brand-dark shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-light/60"
            aria-invalid={Boolean(errors.product)}
          >
            {products.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {errors.product ? (
            <span className="block text-xs font-medium text-brand-accent" role="alert">
              {errors.product.message}
            </span>
          ) : null}
        </label>

        {showMessageField ? (
          <label className="space-y-2 text-sm font-semibold text-brand-dark">
            Observações (opcional)
            <textarea
              {...register("message")}
              rows={3}
              className="w-full rounded-xl border border-brand-dark/10 bg-white px-3 py-2.5 text-sm text-brand-dark shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-light/60"
              placeholder="Informe detalhes, número de vidas, região ou outras necessidades."
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message ? (
              <span className="block text-xs font-medium text-brand-accent" role="alert">
                {errors.message.message}
              </span>
            ) : null}
          </label>
        ) : null}
      </div>

      <div className="space-y-3">
        <label className="flex items-start gap-3 rounded-xl bg-brand-light/10 p-4 text-sm text-brand-slate/80">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-0.5 h-4 w-4 rounded border-brand-dark/30 text-brand-primary focus:ring-brand-primary"
          />
          <span>
            Concordo com o tratamento dos meus dados para que a Stanchi Seguros entre em contato e
            apresente as melhores ofertas. Li e estou de acordo com a{" "}
            <a
              href={consentPolicyHref}
              className="font-semibold text-brand-primary underline-offset-2 hover:underline"
            >
              {consentPolicyLabel}
            </a>
            .
          </span>
        </label>
        {errors.consent ? (
          <span className="block text-xs font-medium text-brand-accent" role="alert">
            {errors.consent.message}
          </span>
        ) : null}

        {captchaSiteKey ? (
          <div className="rounded-xl border border-brand-dark/10 bg-brand-surface p-3">
            <HCaptcha
              sitekey={captchaSiteKey}
              onVerify={(token) => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
              ref={(instance) => {
                captchaRef.current = instance;
              }}
            />
          </div>
        ) : null}
      </div>

      <Button
        type="submit"
        variant="primary"
        fullWidth
        disabled={isSubmitting}
        className={clsx("px-4 py-2.5 text-sm", buttonClassName)}
      >
        {buttonIcon}
        {isSubmitting ? buttonSendingLabel : buttonLabel}
      </Button>

      {footerText ? <p className="text-xs text-brand-slate/60">{footerText}</p> : null}
    </form>
  );
}
