# MİSPİR GIDA Corporate Website Design Guidelines

## Design Approach
**Reference-Based with Premium Natural Aesthetic**: Drawing inspiration from premium food brands like Whole Foods and artisanal Turkish producers, combined with modern corporate standards. The design balances local heritage storytelling with contemporary web design trends, emphasizing trust, quality, and geographical authenticity.

## Color System
- **Primary Forest Green**: #0F5132 (navigation, headers, primary CTAs)
- **Earth Brown**: #6B4E3D (secondary elements, text accents)
- **Cream Background**: #EFE9E1 (main backgrounds, cards)
- **Plum Purple**: #5A2D82 (accent highlights, badges, GI certification elements)
- **Gold Accent**: #C9A227 (premium touches, icons, dividers)
- **White**: #FFFFFF (alternate sections, card backgrounds)

## Typography System
- **Headings**: Fraunces (serif, weights: 400, 600, 700)
  - H1: 3.5rem/4rem (desktop/mobile)
  - H2: 2.5rem/3rem
  - H3: 2rem/2.25rem
  - H4: 1.5rem/1.75rem
- **Body Text**: Inter (sans-serif, weights: 400, 500, 600)
  - Body Large: 1.125rem
  - Body Regular: 1rem
  - Body Small: 0.875rem

## Layout System
**Spacing Scale**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl
- Grid gaps: gap-6 md:gap-8 lg:gap-12

## Component Library

### Navigation
- **Desktop**: Horizontal menu with language toggle (TR), transparent on hero with backdrop blur, sticky scroll with solid cream background
- **Mobile**: Hamburger menu, full-screen overlay with smooth slide-in animation
- **Logo**: Left-aligned, "MİSPİR GIDA" in Fraunces font with leaf icon

### Hero Sections
- **Ana Sayfa Hero**: Full-viewport (90vh) with high-quality image of İspir landscape/products, dark overlay (opacity-40), centered content
  - Headline: "Doğanın Saf Lezzeti" in Fraunces 4rem
  - Subheadline describing brand essence
  - Dual CTAs: Primary "Ürünleri Keşfet" (forest green), Secondary "Toptan Teklif Alın" (outlined gold)
  - Buttons with backdrop-blur-md background

- **Product Page Heroes**: 60vh with specific product imagery (beans/mulberry), product name overlay, breadcrumb navigation

### Product Cards
- **Grid Layout**: 2-column on desktop (grid-cols-1 md:grid-cols-2), full-width on mobile
- **Card Structure**: 
  - High-quality product image (aspect-ratio-4/3)
  - Product name in Fraunces
  - 3-4 key features with gold checkmark icons
  - "Detayları Gör" CTA button
  - Cream background with subtle shadow on hover

### GI Certification Badge
- **Placement**: Prominent on product pages and hero sections
- **Design**: Plum purple circular badge with "Coğrafi İşaret No. 112" text, gold border
- **Size**: 80px × 80px (desktop), 60px × 60px (mobile)

### Production Timeline
- **Visual Style**: Vertical timeline with numbered steps (1-6)
- **Icons**: Custom illustrations for each stage (harvest, sorting, boiling, pressing, cooling)
- **Colors**: Alternating forest green and earth brown markers
- **Layout**: Left-aligned content blocks with connecting dotted lines

### Accordion FAQ
- **Style**: Bordered cards with cream background
- **Interaction**: Smooth expand/collapse with rotate chevron icon
- **Typography**: Questions in Fraunces 1.25rem, answers in Inter 1rem

### Contact Form
- **Layout**: 2-column split - form on left, contact info/map on right
- **Fields**: Name, Email, Phone, Message (textarea)
- **Validation**: Real-time with green checkmarks
- **Submit Button**: Full-width forest green with loading state

### Footer
- **Structure**: 4-column grid (Company, Products, Links, Contact)
- **Background**: Forest green (#0F5132)
- **Text**: Cream color (#EFE9E1)
- **Social Icons**: Gold hover state
- **Bottom Bar**: Copyright and KVKK link

## Animation Strategy
**Framer Motion Integration** - Minimal, purposeful animations:
- **Scroll Reveals**: Fade-up on sections (duration: 0.6s, delay: 0.1s stagger)
- **Hero Elements**: Staggered fade-in for headline, subheadline, CTAs
- **Product Cards**: Subtle scale on hover (1.02x)
- **Navigation**: Smooth slide-down on scroll
- **Page Transitions**: 300ms fade between routes
- No excessive parallax or continuous animations

## Images
**Hero Images Required**:
1. **Ana Sayfa**: Wide landscape shot of İspir mountains/agricultural fields with products in foreground
2. **İspir Kuru Fasulyesi Page**: Close-up of beans with rustic wooden background
3. **Karnavas Dut Pekmezi Page**: Glass jar with pekmez, mulberries in background
4. **Kurumsal Page**: Heritage image showing traditional production methods
5. **Coğrafi İşaret Page**: Map visualization of Erzurum/İspir region

**Product Photography**: High-quality, naturally lit images showing texture and authenticity

## Responsive Behavior
- **Breakpoints**: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- **Navigation**: Hamburger menu below 1024px
- **Grid Stacking**: All multi-column layouts stack to single column on mobile
- **Typography Scale**: Reduce heading sizes by 30-40% on mobile
- **Hero Height**: 100vh desktop, 70vh mobile

## Turkish Language Considerations
- Proper Turkish character support (ı, ğ, ü, ş, ö, ç)
- Right-aligned text for contact details
- Date formats: DD.MM.YYYY
- Comma as decimal separator in nutritional values

## Trust & Credibility Elements
- GI certification badge prominently displayed
- "100% Doğal" badges on product cards
- Customer testimonials with local names
- Production process transparency timeline
- Quality certifications section in footer