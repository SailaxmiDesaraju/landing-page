# Royal Chai - Coming Soon Landing Page

A premium "Coming Soon" landing page for Royal Chai, an instant chai tea premix brand inspired by royal Indian households.

## 🎨 Design Choices

The design embraces a royal aesthetic with warm, elegant tones. I chose a deep brown gradient background (#1a0f0a to #2d1810) to evoke richness and tradition, complemented by gold accents (#D4AF37, #B8860B) that symbolize luxury and regality. The cream-colored text (#F5DEB3) ensures excellent readability while maintaining the warm, inviting atmosphere. The custom SVG logo combines a crown and tea cup, perfectly representing the fusion of royalty and chai culture. Subtle animations and floating decorative elements add sophistication without overwhelming the user experience.

## ✨ Features

- **Royal-themed Logo**: Custom SVG logo featuring a crown and tea cup
- **Tagline & Brand Description**: "Brew the Royal Tradition" with compelling brand story
- **Email Signup Form**: Validated email input with success/error states
- **Launching Soon Badge**: Animated badge with shine effect
- **Social Media Icons**: Facebook, Instagram, Twitter, and YouTube links
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Fade-in effects and floating elements

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)
3. Or connect your GitHub repository and deploy automatically

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.ts` with base path:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```
4. Build and deploy: `npm run build && npm run deploy`

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations and gradients

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is created for assignment purposes.
