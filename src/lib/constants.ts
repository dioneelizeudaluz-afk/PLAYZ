export const APP_NAME = "PLAYZ";
export const APP_TAGLINE = "Streaming de filmes. Gratis e premium.";
export const APP_DESCRIPTION =
  "Filmes organizados por categorias, com conteudo gratuito e uma area premium para assinantes.";

export const LANDING = {
  heroEyebrow: "Streaming",
  heroTitle: APP_NAME,
  heroSubtitle: APP_DESCRIPTION,
  ctaPrimary: "Ver planos",
  ctaSecondary: "Entrar",
  freeSectionTitle: "Ver gratis",
  freeSectionDescription:
    "Alguns titulos estao disponiveis sem pagamento. Basta abrir e assistir.",
  premiumSectionTitle: "Premium",
  premiumSectionDescription:
    "Catalogo completo para assinantes. Ativa o teu acesso com um codigo.",
  plansTitle: "Planos",
  plansSubtitle: "Escolhe o plano que faz sentido para ti.",
  plansCtaLabel: "Comprar pelo WhatsApp",
  plans: [
    { name: "Semanal", price: "20 MT", duration: "7 dias" },
    { name: "Quinzenal", price: "99 MT", duration: "15 dias" },
    { name: "Mensal", price: "168 MT", duration: "30 dias" }
  ]
} as const;
