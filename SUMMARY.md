# SUMMARY — PLAYZ

Documento para continuidade por outra sessao de IA.

## 1. Visao geral

Plataforma de streaming de filmes. Conteudo gratuito + premium.
Compra manual via WhatsApp com confirmacao do administrador.
Ativacao por codigo unico gerado pelo admin.

## 2. Stack

- React + TypeScript + Vite
- Tailwind CSS v3
- React Router v6
- Supabase (FASE 2+)
- Vercel

## 3. Estado

- FASE 1 concluida:
  - `package.json`, `vite.config.ts`, `tsconfig.json`
  - `tailwind.config.js`, `postcss.config.js`
  - `vercel.json`
  - `index.html`, `public/favicon.svg`, `public/og-image.svg`
  - `.env.example`, `.gitignore`
  - `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/vite-env.d.ts`
  - `src/lib/constants.ts`
  - `src/types/index.ts`
  - `src/components/ui/Container.tsx`, `Button.tsx`, `Card.tsx`, `Logo.tsx`
  - `src/layouts/PublicLayout.tsx`
  - `src/pages/Landing.tsx`, `NotFound.tsx`
  - `src/routes/AppRoutes.tsx`

## 4. Design system

Cores: `pz-bg`, `pz-surface`, `pz-line`, `pz-purple`, `pz-purpleSoft`,
`pz-purpleLight`, `pz-white`, `pz-gray`, `pz-grayDark`.
Fonte: Inter.
Radius: card 14px; pill 999px.

## 5. Rotas existentes

- `/` — Landing
- `*` — 404

## 6. Fases seguintes

- FASE 2: Supabase (cliente, types, migrations: profiles, movies, plans,
  payments, activation_codes, subscriptions, admin_audit; RLS; Storage).
- FASE 3: Auth (registo com telefone, login, recuperacao, ProtectedRoute,
  AdminRoute).
- FASE 4: Catalogo, filme, player YouTube.
- FASE 5: Planos, botao WhatsApp, `/ativar`.
- FASE 6: Painel admin.
- FASE 7: Expiracao e protecao premium via RLS + funcao SQL.

## 7. Decisoes tecnicas

- Vite (nao Next.js) para simplicidade e compatibilidade com Ghost IA.
- Tailwind v3.
- Sem aliases de import.
- Sem `tsconfig.node.json`. Build: `vite build`.
- `vercel.json` incluido desde o inicio para SPA routing.
- Seguranca 100% no Supabase (RLS + funcoes SQL). Frontend nunca e fonte de verdade.

## 8. Regras

- Nao inventar APIs, endpoints, webhooks, credenciais.
- Nao expor secrets no frontend.
- Autorizacao real via RLS.
- Mobile-first. Sem emojis.
- Confirmacao de pagamentos manual (nao simular automatica).
- Codigos resgatados via funcao SQL atomica (FOR UPDATE).
