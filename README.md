# Vike + Vue + PrimeVue Starter Template

A modern, production-ready frontend starter boilerplate. Built around **Vue 3, Vike (SSR-SSG), and Vite**.

This template provides a configured environment taking the best modern frontend technologies out-of-the-box.

## Stack Overview

Core:
- **[Vue 3](https://vuejs.org/)**
- **[Vike](https://vike.dev/)**
- **[Vite](https://vitejs.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**

State, Context & Utilities:
- **[Pinia](https://pinia.vuejs.org/)**
- **[Vue I18n](https://vue-i18n.intlify.dev/)**
- **[VueUse](https://vueuse.org/)**

Styling & UI:
- **[PrimeVue](https://primevue.org/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)**
- **[DaisyUI](https://daisyui.com/)**

Testing & Quality:
- **[Vitest](https://vitest.dev/)**
- **[Happy DOM](https://github.com/capricorn86/happy-dom)**
- **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)**

---

## Getting Started

### 1. Installation

Install all the dependencies using npm:

```bash
npm install
```

### 2. Development

Start the development server:

```bash
npm run dev
```

### 3. Production Build

Build the application for production:

```bash
npm run build
```

To preview the generated production build locally:

```bash
npm run preview
```

### 4. Testing

Run unit tests via Vitest:

```bash
npm run test
```

### 5. Linting

Run ESLint to find and fix problems in your code:

```bash
npm run lint
```

---

## Project Structure Overview

- `/pages`: Contains Vike pages. File-system routing applies here. Each directory represents a route.
  - `+Page.vue`: The actual page component.
  - `+Layout.vue`: Wrapper layout for the page.
  - `+onCreateApp.ts`: App initialization hook (where Pinia, i18n, and PrimeVue are installed).
  - `+Head.vue`: Page metadata (SEO/Title management).
- `/components`: Reusable Vue components. Note: Unplugin auto-imports applies to PrimeVue.
- `/stores`: Pinia global state modules.
- `/utils`: Helper functions, locales configurations (`i18n.ts`), and other shared logic.
- `/assets`: Global stylesheets (`tailwind.css`) and static assets.
- `/api`: Server communication functions.

Path aliases (`@components`, `@pages`, `@stores`, `@utils`, `@assets`, `@api`) are configured in both `tsconfig.json` and `vite.config.ts`.

---

## Localization (i18n)

Localization is pre-configured for English (`en`) and Italian (`it`).
- Add your strings inside `utils/locales/*.json`.
- The main configuration resides in `utils/i18n.ts`.

## Testing

Testing is configured using **Vitest** with Vue Test Utils and the `happy-dom` environment.
Test files should be placed adjacent to the components they test (e.g. `components/Counter.spec.ts`).

---
Generated initially from [vike.dev/new](https://vike.dev/new).
