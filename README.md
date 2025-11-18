# LUMINA — Case Study (Agency)

Mobile-app landing page prototype used by the agency to demonstrate mobile-first design, app-store conversion CTAs, and marketing content hierarchy.

Overview
- Role: Visual design and frontend prototype for a productivity app landing page.
- Goals: Communicate core product benefits, highlight features, provide trust-building testimonials and clear app-store CTAs.
- Outcome: A responsive landing page with device mockups, feature cards and rotating testimonials showcasing mobile-first product marketing.

Tech stack
- React + Vite
- Tailwind CSS
- lucide-react icons

How to run

```bash
npm install
npm run dev
```

App.jsx summary & implementation notes
- `appData` holds content (features, testimonials, appStores) used to render hero, features and testimonials sections.
- `isMenuOpen` controls the mobile nav; testimonials auto-rotate via a `useEffect` interval.
- The hero uses device mockups and glassmorphism for high-fidelity visuals—this file is intentionally presentational to show polish in the portfolio.

Production & accessibility
- Replace decorative placeholder images with optimized, production-ready assets and ensure all images have meaningful `alt` text.
- Verify color contrast for CTA buttons and provide keyboard focus styles for interactive elements.

Reuse
- The hero mockup and feature cards make a good landing-page template — extract into small components for reuse across agency projects.

