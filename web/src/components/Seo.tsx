import { Helmet } from "react-helmet-async";

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": ["InsuranceAgency", "LocalBusiness"],
  name: "Stanchi Solução em Seguros",
  url: "https://www.stanchiseguros.com.br",
  telephone: "+55 71 99948-5006",
  email: "comercial@stanchiseguros.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Dr. José Peroba, 325, Sala 702 - Stiep",
    addressLocality: "Salvador",
    addressRegion: "BA",
    postalCode: "41770-235",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/stanchiseguros",
    "https://www.instagram.com/stanchisegurosdigitais/",
  ],
};

type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
};

export function Seo({
  title = "Stanchi Seguros | Planos de saúde sob medida em Salvador",
  description = "Consultoria especializada em planos de saúde empresariais, familiares, MEI e individuais. Atendimento humanizado, economia e suporte completo em Salvador e em todo o Brasil.",
  canonical = "https://www.stanchiseguros.com.br",
  image = {
    url: "https://www.stanchiseguros.com.br/stanchi-icon.svg",
    width: 512,
    height: 512,
    alt: "Stanchi Seguros - soluções em planos de saúde",
  },
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image.url} />
      {image.width ? (
        <meta property="og:image:width" content={String(image.width)} />
      ) : null}
      {image.height ? (
        <meta property="og:image:height" content={String(image.height)} />
      ) : null}
      {image.alt ? <meta property="og:image:alt" content={image.alt} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.url} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="pt-br" href={canonical} />
      <script type="application/ld+json">{JSON.stringify(ORGANIZATION)}</script>
    </Helmet>
  );
}
