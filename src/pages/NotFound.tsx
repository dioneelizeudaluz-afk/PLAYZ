import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center" size="sm">
      <span className="text-6xl font-extrabold text-pz-purple">404</span>
      <p className="mt-4 text-sm text-pz-gray">A pagina que procuras nao existe.</p>
      <Link to="/" className="btn-primary mt-8">
        Voltar ao inicio
      </Link>
    </Container>
  );
}
