# 💍 Marcelito & Daisy — Wedding Invitation Website

A **high-end, cinematic wedding invitation** built with Next.js 16, Tailwind CSS, and Framer Motion.

---

## ✨ Features

| Section                | Description                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| 🏠 **Hero**            | Fullscreen animated gradient, couple names reveal, scroll indicator |
| ⏱️ **Countdown**       | Live countdown to wedding date with flip digit animation            |
| 💌 **Our Story**       | Cinematic timeline with images and scroll-triggered animations      |
| 🖼️ **Gallery**         | Masonry grid with custom lightbox and hover effects                 |
| 🎥 **Prenup Video**    | Cinematic video player with animated play button                    |
| 📍 **Event Details**   | Ceremony & Reception cards with Google Maps embed                   |
| 📝 **RSVP Form**       | Validated form with simulated API submission + success state        |
| 🎁 **Gift Registry**   | Bank accounts with copy-to-clipboard + QR code placeholder          |
| 🌸 **Final Message**   | Animated wreath, gratitude note, vendor credits                     |
| 🎵 **Music Player**    | Floating audio control with volume slider                           |
| 🌸 **Floating Petals** | SVG rose petals falling across the screen                           |
| 🖱️ **Custom Cursor**   | Gold dot + follower ring cursor                                     |
| ⏳ **Loading Screen**  | Cinematic branded loading screen                                    |
| 📱 **Navigation**      | Scroll-aware sticky nav + fullscreen mobile menu                    |

---

## 🎨 Design System

### Colors

| Name     | Hex       | Usage                         |
| -------- | --------- | ----------------------------- |
| Burgundy | `#800020` | Primary — buttons, accents    |
| Gold     | `#D4AF37` | Secondary — headings, borders |
| Cream    | `#FAF0E6` | Text, backgrounds             |
| Blush    | `#FFB6C1` | Petals, soft accents          |
| Dark     | `#0d0408` | Page background               |

### Fonts

| Font               | Style         | Usage                        |
| ------------------ | ------------- | ---------------------------- |
| Great Vibes        | Script        | Couple names, section titles |
| Playfair Display   | Serif         | Sub-headings, dates          |
| Cormorant Garamond | Serif Display | Italic quotes, captions      |
| Raleway            | Sans-serif    | Body text, labels, buttons   |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎵 Background Music

Place your music file at:

```
/public/audio/wedding-music.mp3
```

See `/public/audio/README.md` for free royalty-free music sources.

---

## 📁 Project Structure

```
wedding-invitation/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Main page assembly
│   └── globals.css         # Global styles & utilities
├── components/
│   ├── LoadingScreen.tsx   # Cinematic loading screen
│   ├── CustomCursor.tsx    # Gold custom cursor
│   ├── Navigation.tsx      # Sticky nav + mobile menu
│   ├── FloatingPetals.tsx  # Animated SVG petals
│   ├── Hero.tsx            # Hero section
│   ├── Countdown.tsx       # Live countdown timer
│   ├── OurStory.tsx        # Timeline story section
│   ├── Gallery.tsx         # Masonry gallery + lightbox
│   ├── PrenupVideo.tsx     # Video player section
│   ├── EventDetails.tsx    # Ceremony + reception cards
│   ├── RSVP.tsx            # RSVP form with validation
│   ├── GiftRegistry.tsx    # Bank details + QR code
│   ├── FinalMessage.tsx    # Thank you + footer
│   └── MusicPlayer.tsx     # Floating music control
├── public/
│   └── audio/
│       └── README.md       # Instructions for music file
├── tailwind.config.ts      # Custom colors, fonts, animations
├── next.config.mjs         # Next.js config
└── package.json
```

---

## ✏️ Customization

### Change couple names & date

- Edit **`components/Hero.tsx`** — names, date, location
- Edit **`components/Countdown.tsx`** — `WEDDING_DATE` const
- Edit **`components/Navigation.tsx`** — monogram, date
- Edit **`app/layout.tsx`** — page title & meta tags

### Change colors

Edit **`tailwind.config.ts`** — `theme.extend.colors`

### Change photos

Edit the `GALLERY_IMAGES` array in **`components/Gallery.tsx`**
Edit story image `img` fields in **`components/OurStory.tsx`**

### Change bank details

Edit `BANK_ACCOUNTS` in **`components/GiftRegistry.tsx`**

### Deploy

```bash
# Deploy to Vercel (recommended)
npm install -g vercel
vercel

# Or build and host anywhere
npm run build
```

---

Made with ❤️ for Marcelito & Daisy · 2026
