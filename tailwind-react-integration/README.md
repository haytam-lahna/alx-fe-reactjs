# Tailwind CSS + React Integration

This project demonstrates the integration of Tailwind CSS with a React application using Vite, featuring a styled UserProfile component.

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

## 🎨 Components

### UserProfile Component

Located in `src/components/UserProfile.jsx`, this component demonstrates:

- **Container Styling**: Gray background, padding, rounded corners, shadow
- **Circular Image**: 150px diameter profile picture
- **Typography**: Styled heading and description text
- **Responsive Design**: Centered layout with proper spacing
- **Utility-First Approach**: All styling done with Tailwind CSS utility classes

#### Styling Features:
- Cool gray background (`bg-gray-100`)
- Card layout with shadow and rounded corners
- Circular profile image
- Deep blue heading (`text-blue-800`)
- Gray description text (`text-gray-600`)
- Proper spacing and centering

## 📚 Learn More

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## 📱 Responsive Design

The UserProfile component is fully responsive and adapts to different screen sizes:

### Breakpoints:
- **Mobile** (< 640px): Compact design optimized for small screens
- **Tablet** (640px - 767px): Medium-sized elements with comfortable spacing
- **Desktop** (≥ 768px): Spacious layout with larger elements

### Responsive Features:
- **Adaptive Padding**: Increases from p-4 to p-8 as screen size grows
- **Scalable Typography**: Heading and text sizes adjust for readability
- **Flexible Images**: Profile images scale from 96px to 144px
- **Smart Container Width**: Adjusts from max-w-xs to max-w-md
- **Smooth Transitions**: Hover effects for enhanced interactivity

### Testing:
Use browser DevTools to test responsiveness at different viewport sizes:
```bash
# Mobile: 375px
# Tablet: 768px
# Desktop: 1024px+
```

## 🎨 Interactive Features

The UserProfile component includes sophisticated hover effects and smooth transitions:

### Hover Effects:
1. **Image Scale Effect**
   - Smoothly scales to 110% on hover
   - Creates an engaging zoom effect
   - Uses `hover:scale-110` with smooth transitions

2. **Heading Color Change**
   - Changes from dark blue to lighter blue on hover
   - Indicates interactivity
   - Uses `hover:text-blue-500` with color transitions

3. **Card Shadow Enhancement**
   - Shadow increases on hover creating a "lift" effect
   - Makes the entire card feel interactive
   - Uses `hover:shadow-xl` with shadow transitions

### Transition Details:
- **Duration**: 300ms for all animations
- **Easing**: `ease-in-out` for natural movement
- **Properties**: Transform, colors, and shadows
- **Performance**: Hardware-accelerated CSS transitions

### Testing Interactivity:
1. Hover over the profile image to see the zoom effect
2. Hover over the name to see the color change
3. Hover anywhere on the card to see the lift effect
4. All transitions are smooth and responsive
