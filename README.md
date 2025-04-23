# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite. This portfolio showcases professional experience, projects, and skills with a clean, user-friendly interface.

## Features

- 🌐 Bilingual support (English and French)
- 📱 Fully responsive design that works on all devices
- ✨ Modern UI with animations and transitions
- 🌙 Clean and professional design
- 📊 Interactive skill bars and project cards
- 📝 Working contact form (simulated in this version)
- 🚀 Fast and optimized performance with Vite

## Sections

- Hero section with animated typing effect
- About me with professional information
- Work experience timeline
- Projects showcase with details and links
- Technical skills with progress bars
- Contact form and information
- Footer with social links and quick navigation

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. The site will be available at `http://localhost:5173`

## Customization

### Personal Information

Edit your personal information in the translation files:
- `src/i18n/en.ts` for English
- `src/i18n/fr.ts` for French

### Profile Image

Replace the profile image URL in the `About.tsx` component with your own image URL or add it to the `public` directory.

### Project Images and Details

Update project details in the translation files and project images in the `Projects.tsx` component.

### Skills

Modify the skills lists in the `TechStack.tsx` component to reflect your own skill set.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Vite
- CSS Animations
- Intersection Observer API
- Font Awesome Icons

## Build for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` folder, ready to be deployed to any static site hosting service.

To preview the production build locally:

```bash
npm run preview
```

## License

MIT 