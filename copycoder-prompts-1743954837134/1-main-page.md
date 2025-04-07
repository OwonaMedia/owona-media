Set up the frontend according to the following prompt:
  <frontend-prompt>
  Create detailed components with these requirements:
  1. Use 'use client' directive for client-side components
  2. Make sure to concatenate strings correctly using backslash
  3. Style with Tailwind CSS utility classes for responsive design
  4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
  5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
  6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
  7. Create root layout.tsx page that wraps necessary navigation items to all pages
  8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
  9. Accurately implement necessary grid layouts
  10. Follow proper import practices:
     - Use @/ path aliases
     - Keep component imports organized
     - Update current src/app/page.tsx with new comprehensive code
     - Don't forget root route (page.tsx) handling
     - You MUST complete the entire prompt before stopping
  </frontend-prompt>

  <summary_title>
Minimalist Life Coach Landing Page with Dynamic Typography
</summary_title>

<image_analysis>
1. Navigation Elements:
- Primary navigation: Blog, Über uns, Shop, Service, Downloads
- Logo "CHIARA LUZZINA" positioned top-left, minimal sans-serif design
- Hamburger menu button top-right, circular design
- Secondary circular navigation element bottom-right
- Navigation height: 80px

2. Layout Components:
- Full viewport height landing section
- Main content area: 80% viewport width
- Left margin spacing: 120px
- Vertical rhythm maintained with consistent 60px spacing
- Background: Light beige (#F5F5F3)

3. Content Sections:
- Three main content blocks with Roman numerals (I, II, III)
- Large typography headlines:
  • "Coach mentality"
  • "Motivate people"
  • "Turn lifes"
- Footer quote section with 4-line description
- Content aligned left with consistent spacing

4. Interactive Controls:
- Circular navigation buttons with hover states
- Hamburger menu with transition animation
- Smooth scroll behavior between sections
- Interactive text reveals on scroll

5. Colors:
- Primary: Black (#000000)
- Background: Beige (#F5F5F3)
- Accent: Dark Gray (#333333)
- Text: Black (#000000)

6. Grid/Layout Structure:
- 12-column grid system
- Main content spans 8 columns
- Margins: 120px left, auto right
- Vertical spacing: 60px between sections
</image_analysis>

<development_planning>
1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── features/
│   │   ├── HeroSection.tsx
│   │   ├── ContentBlock.tsx
│   │   └── QuoteSection.tsx
│   └── shared/
│       ├── Button.tsx
│       └── Typography.tsx
├── assets/
├── styles/
├── hooks/
└── utils/
```

2. Key Features:
- Smooth scroll navigation
- Dynamic typography scaling
- Responsive layout system
- Animated content reveals
- Interactive navigation elements

3. State Management:
```typescript
interface AppState {
  navigation: {
    currentSection: string;
    isMenuOpen: boolean;
  };
  content: {
    sections: ContentSection[];
    activeIndex: number;
  };
  animation: {
    isRevealed: boolean;
    scrollProgress: number;
  };
}
```

4. Component Architecture:
- Layout.tsx (Base layout wrapper)
- Navigation.tsx (Primary navigation)
- ContentBlock.tsx (Reusable content sections)
- Typography.tsx (Shared text components)
- AnimatedSection.tsx (Animation wrapper)

5. Responsive Breakpoints:
```scss
$breakpoints: (
  'mobile': 320px,
  'tablet': 768px,
  'desktop': 1024px,
  'wide': 1440px
);

$layout-shifts: (
  'mobile': (
    'margin': 20px,
    'typography-scale': 0.8
  ),
  'tablet': (
    'margin': 60px,
    'typography-scale': 0.9
  ),
  'desktop': (
    'margin': 120px,
    'typography-scale': 1
  )
);
```
</development_planning>