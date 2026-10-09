import { Link, Outlet } from "react-router-dom";
import Container from "../components/ui/Container";
import Logo from "../components/ui/Logo";

export default function PublicLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-pz-bg text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-pz-radial" />

      <header className="relative z-10 border-b border-pz-line/60 bg-pz-bg/80 backdrop-blur">
        <Container className="flex items-center justify-between py-4">
          <Link to="/" aria-label="PLAYZ inicio" className="text-xl">
            <Logo />
          </Link>
          <nav className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/planos"
              className="text-sm text-pz-gray transition-colors hover:text-pz-purpleLight"
            >
              Planos
            </Link>
            <Link
              to="/entrar"
              className="text-sm text-pz-gray transition-colors hover:text-pz-purpleLight"
            >
              Entrar
            </Link>
            <Link to="/registar" className="btn-primary !px-4 !py-2 !text-xs">
              Criar conta
            </Link>
          </nav>
        </Container>
      </header>

      <main className="relative z-10 flex-1">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-pz-line/60 py-8">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-pz-grayDark sm:flex-row">
          <span>&copy; {new Date().getFullYear()} PLAYZ</span>
          <span>Streaming de filmes. Gratis e premium.</span>
        </Container>
      </footer>
    </div>
  );
}
