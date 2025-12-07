# Recipe Sharing Platform

A modern recipe sharing platform built with React and Tailwind CSS where users can browse, share, and discover delicious recipes from around the world.

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

### Preview Production Build
```bash
npm run preview
```

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🎨 Tailwind CSS Configuration

Tailwind CSS is configured in `tailwind.config.js`:
```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
```

The Tailwind directives are imported in `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📱 Features (Planned)

- **Browse Recipes**: Explore a variety of recipes
- **Recipe Details**: View detailed cooking instructions
- **Add Recipes**: Share your own recipes with the community
- **Search & Filter**: Find recipes by ingredients, cuisine, or dietary preferences
- **Responsive Design**: Works seamlessly on all devices

## 🏗️ Project Structure
```
recipe-sharing-platform/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎯 Development Roadmap

- [x] Initial project setup
- [x] Tailwind CSS integration
- [ ] Create recipe list component
- [ ] Create recipe detail component
- [ ] Create add recipe form
- [ ] Implement routing
- [ ] Add state management
- [ ] Integrate backend API

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

## 📄 License

MIT License

## 🏠 Home Page Features

The Home Page displays a responsive grid of recipe cards with the following features:

### Recipe Cards
- **Image Display**: High-quality recipe images
- **Title**: Bold, eye-catching recipe names
- **Summary**: Brief description of each recipe
- **Interactive Button**: "View Recipe" call-to-action

### Responsive Grid Layout
- **Mobile**: Single column layout
- **Tablet**: Two columns (≥640px)
- **Desktop**: Three columns (≥1024px)
- **Large Desktop**: Four columns (≥1280px)

### Hover Effects
- Shadow enhancement (creates depth)
- Subtle scale-up animation
- Title color change
- Button color transition

### Data Management
- Mock data loaded from `data.json`
- React hooks for state management
- Easy to integrate with real API

## 📁 File Structure
```
src/
├── components/
│   └── HomePage.jsx
├── data.json
├── App.jsx
└── index.css
```
