import gamaLogo from "../assets/partners/gama.png";
import bradescoLogo from "../assets/partners/bradesco.png";
import amilLogo from "../assets/partners/amil.png";
import nordesteLogo from "../assets/partners/nordeste.png";
import selectLogo from "../assets/partners/select.png";
import amplaLogo from "../assets/partners/ampla.png";
import hapvidaLogo from "../assets/partners/hapvida.png";
import sulamericaLogo from "../assets/partners/sulamerica.png";
import unimedLogo from "../assets/partners/unimed.png";
import vitalmedLogo from "../assets/partners/vitalmed.png";

import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";

const partners = [
  { name: "GAMA Saúde", image: gamaLogo },
  { name: "Bradesco Saúde", image: bradescoLogo },
  { name: "Amil", image: amilLogo },
  { name: "Nordeste Saúde Empresarial", image: nordesteLogo },
  { name: "Select Operadora de Planos de Saúde", image: selectLogo },
  { name: "Ampla Saúde", image: amplaLogo },
  { name: "Hapvida", image: hapvidaLogo },
  { name: "SulAmérica", image: sulamericaLogo },
  { name: "Unimed", image: unimedLogo },
  { name: "Vitalmed", image: vitalmedLogo },
];

export function Partners() {
  return (
    <Section className="bg-section-peach">
      <div className="container-section space-y-6">
        <div className="glass-card rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-white/50">
          <SectionHeader
            eyebrow="Principais parceiros"
            title="Trabalhamos com operadoras sólidas e reconhecidas"
            description="Parceiros que entregam rede credenciada robusta, estabilidade e o melhor custo-benefício para cada perfil de beneficiário."
          />
          <div className="mt-5 rounded-2xl bg-brand-surface/80 p-4 text-sm text-brand-slate/75 ring-1 ring-brand-dark/10">
            <p>
              Elaboramos comparativos objetivos entre operadoras para que você tenha clareza sobre
              rede credenciada, regras de utilização e diferenciais de cada carteira. A parceria
              com players nacionais garante negociações atualizadas e condições competitivas.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-brand-surface/70 p-4 shadow-sm ring-1 ring-brand-primary/10">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-brand-surface/90 via-brand-surface/60 to-transparent lg:block"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-brand-surface/90 via-brand-surface/60 to-transparent lg:block"
            aria-hidden="true"
          />
          <div className="overflow-hidden">
            <div className="marquee-track">
              <div className="marquee-group">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-16 w-28 items-center justify-center rounded-2xl border border-brand-primary/10 bg-white/90 p-3 shadow-sm"
                  >
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="marquee-group" aria-hidden="true">
                {partners.map((partner) => (
                  <div
                    key={`${partner.name}-duplicate`}
                    className="flex h-16 w-28 items-center justify-center rounded-2xl border border-brand-primary/10 bg-white/90 p-3 shadow-sm"
                  >
                    <img
                      src={partner.image}
                      alt=""
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-brand-slate/70">
            Principais parceiros da Stanchi Seguros.
          </p>
        </div>
      </div>
    </Section>
  );
}
