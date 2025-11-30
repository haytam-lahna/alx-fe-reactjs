# Tailwind CSS + React Integration

This project demonstrates the integration of Tailwind CSS with a React application using Vite.

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 📦 Technologies Used

- React 18
- Vite
- Tailwind CSS v4
- @tailwindcss/vite plugin

## 🎨 Tailwind Configuration

Tailwind CSS is configured through the Vite plugin in `vite.config.js`:
```javascript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

The Tailwind directives are imported in `src/index.css`:
```css
@import "tailwindcss";
```

## ✨ Features

- Utility-first CSS framework
- Fast development with hot module replacement
- Optimized production builds
- No configuration files needed (Tailwind v4)
- Modern CSS features

## 📚 Learn More

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
