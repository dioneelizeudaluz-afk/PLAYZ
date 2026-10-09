# PLAYZ

Streaming de filmes. Gratis e premium.

Plataforma com catalogo gratuito, area premium para assinantes e ativacao por codigo.
Compra manual via WhatsApp com confirmacao do administrador.

## Estado

- FASE 1 concluida: estrutura base, design system roxo/preto, Landing, rotas base.
- FASE 2 pendente: Supabase (migrations, RLS, Storage).
- FASE 3 pendente: Autenticacao (registo com telefone, login, recuperacao).
- FASE 4 pendente: Catalogo, filme, player YouTube.
- FASE 5 pendente: Planos, WhatsApp, ativar codigo.
- FASE 6 pendente: Painel admin.
- FASE 7 pendente: Expiracao e protecao premium server-side.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v3
- React Router v6
- Supabase (a partir da FASE 2)
- Vercel (publicacao)

## Requisitos

- Node.js 18+
- npm

## Instalacao

```bash
npm install
cp .env.example .env
npm run dev
```

## Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`

## Estrutura

```
src/
  components/
    ui/
  layouts/
  pages/
  routes/
  lib/
  types/
```

## Design

- Fundo escuro (#0A0A0F).
- Roxo principal (#7C3AED) e roxo claro (#A855F7).
- Interface em portugues. Mobile-first.

## Seguranca

- RLS no Supabase em todas as tabelas (a partir da FASE 2).
- Validacao de codigos e subscricoes no servidor (funcoes SQL/RLS).
- Nunca confiar apenas no frontend para proteger premium.
- Nunca expor service_role no frontend.
- Confirmacao de pagamentos manual pelo administrador.

## Build

```bash
npm run build
```
