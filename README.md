# React + TypeScript + Vite

# 🌈 Themed React App — Akash Shukla (Frontend Developer)

A multi-theme responsive React application with dynamic layout, theme persistence, and FakeStore API integration.

## 🚀 Features

- 🌗 3 switchable themes (light, dark with sidebar, and playful colorful)
- 🖋️ Theme persists using `localStorage`
- ⚙️ Theme managed with Redux (TypeScript)
- 📱 Responsive layout using Tailwind CSS
- 🔄 Theme-based layout and font changes
- 📦 FakeStore API data fetched via Axios
- 📁 Code-split by feature, clean folder structure
- 🌐 Routing with React Router
- 🎨 Framer Motion for animated theme switch
- 🔐 Type-safe and secured structure (no dangerous eval or injection)

## 🛠️ Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/themed-app-akash-shukla-frontend-dev.git
cd themed-app-akash-shukla-frontend-dev

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
