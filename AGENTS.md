# Repository Guidelines

## Project Structure & Module Organization
- `src/main.tsx` bootstraps the Vite + React app and renders `App.tsx`.
- Feature code lives in `src/components`, with screen-level components at the root and shared primitives under `components/ui`.
- Visual assets reside in `src/assets`, mock data in `src/data`, and shared tokens/styles in `src/styles` and `src/index.css`.
- `src/lib` is reserved for small utilities (formatters, constants) while `src/guidelines` holds AI-facing design notes.
- Place new tests next to the owning component (e.g., `components/__tests__/ExplorerFeed.test.tsx`) until a broader scheme appears.

## Build, Test, and Development Commands
- `npm install` — install dependencies defined in `package.json`.
- `npm run dev` — start the Vite dev server with hot reload at `http://localhost:5173`.
- `npm run build` — compile an optimized bundle into `dist/`; the command aborts on type errors.
- `npx vite preview` — serve the built bundle locally to validate production behavior.

## Coding Style & Naming Conventions
- Use TypeScript, React function components, and hooks; keep indentation at 2 spaces and prefer early returns for readability.
- Components, hooks, and data files use PascalCase (`ExplorerFeed.tsx`) or camelCase exports; utility helpers belong in `src/lib`.
- Tailwind utility classes power styling; augment them with `clsx`/`tailwind-merge` helpers rather than ad-hoc CSS.
- Keep JSX lean by extracting subcomponents for sections over ~40 lines and colocating specialized styles beside the TSX when necessary.

## Testing Guidelines
- No automated suite ships yet; seed Vitest + React Testing Library specs when touching logic-heavy components.
- Target the critical stories (feed filtering, nav transitions) and cover both happy and empty states before opening a PR.
- Once tests exist, expose them via `npm test` and document any required manual QA steps in the PR checklist.

## Commit & Pull Request Guidelines
- Follow the existing imperative, concise commit style visible in history (`Add files from…`, `Update files…`) and keep each commit scoped to one behavior.
- Every PR must summarize intent, list functional/UI changes, and link any tracking issues; include before/after screenshots for visible tweaks.
- Note any follow-up tasks (e.g., missing tests, design debt) in the PR description so downstream contributors can plan accordingly.

## Configuration & Environment Notes
- Keep configuration in `.env` using the `VITE_` prefix so values are exposed to the client at build time.
- Avoid hard-coding service endpoints inside components; surface them through helpers in `src/lib` and document expected formats next to the constant.