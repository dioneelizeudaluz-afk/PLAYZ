import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import { LANDING } from "../lib/constants";

export default function Landing() {
  return (
    <div>
      <section className="relative">
        <Container className="py-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center animate-fade-up">
            <span className="mb-4 inline-flex items-center rounded-pill border border-pz-purple/30 bg-pz-purple/10 px-4 py-1.5 text-xs font-medium text-pz-purpleLight">
              {LANDING.heroEyebrow}
            </span>
            <h1 className="text-5xl font-extrabold leading-none tracking-tight sm:text-7xl">
              {LANDING.heroTitle}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-pz-gray sm:text-base">
              {LANDING.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/planos" className="btn-primary">
                {LANDING.ctaPrimary}
              </Link>
              <Link to="/entrar" className="btn-ghost">
                {LANDING.ctaSecondary}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-pz-line/60">
        <Container className="py-14 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {LANDING.freeSectionTitle}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-pz-gray">
            {LANDING.freeSectionDescription}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden" padded={false}>
                <div className="aspect-[2/3] w-full bg-pz-line/60" />
                <div className="p-4">
                  <div className="h-3 w-3/4 animate-pulse rounded bg-pz-line/70" />
                  <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-pz-line/50" />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-pz-line/60 bg-pz-surface/40">
        <Container className="py-14 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {LANDING.premiumSectionTitle}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-pz-gray">
            {LANDING.premiumSectionDescription}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden" padded={false}>
                <div className="aspect-[2/3] w-full bg-pz-line/60" />
                <div className="p-4">
                  <div className="h-3 w-3/4 animate-pulse rounded bg-pz-line/70" />
                  <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-pz-line/50" />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-pz-line/60">
        <Container className="py-14 sm:py-16">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {LANDING.plansTitle}
            </h2>
            <p className="mt-2 text-sm text-pz-gray">{LANDING.plansSubtitle}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LANDING.plans.map((plan) => (
              <Card key={plan.name}>
                <p className="text-xs uppercase tracking-[0.25em] text-pz-purpleLight">
                  {plan.duration}
                </p>
                <p className="mt-2 text-xl font-bold">{plan.name}</p>
                <p className="mt-4 text-3xl font-extrabold text-pz-purple">{plan.price}</p>
                <Link to="/planos" className="btn-primary mt-6 w-full">
                  Ver detalhes
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
