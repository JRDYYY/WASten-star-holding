# WASTen Star Holding Website

Moderní webová stránka vytvořená pomocí Next.js, TypeScript a Tailwind CSS.

## 🚀 Technologie

- **Next.js 15** - React framework s App Router
- **TypeScript** - Pro type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Turbopack** - Rychlý development build

## 📦 Instalace

1. Naklonujte nebo stáhněte projekt
2. Nainstalujte závislosti:
   ```bash
   npm install
   ```

## 🛠️ Development

Spuštění development serveru:
```bash
npm run dev
```

Projekt běží na [http://localhost:3000](http://localhost:3000)

## 📋 Dostupné scripty

- `npm run dev` - Spustí development server s Turbopack
- `npm run build` - Vytvoří production build
- `npm run start` - Spustí production server
- `npm run lint` - Spustí ESLint kontrolu

## 📁 Struktura projektu

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/         # React komponenty
└── ...
```

## 🎨 Styling

Projekt používá Tailwind CSS pro stylování. Podporuje light i dark mode pomocí CSS custom properties.

## 📱 Responsive Design

Web je optimalizován pro všechna zařízení - mobily, tablety i desktop.

## 🔧 Konfigurace

- `next.config.js` - Next.js konfigurace
- `tailwind.config.js` - Tailwind CSS konfigurace
- `tsconfig.json` - TypeScript konfigurace
- `.eslintrc.json` - ESLint pravidla

## 📝 Development Notes

- Používejte TypeScript pro všechny nové soubory
- Preferujte server components, použijte 'use client' pouze když je potřeba
- Následujte responsive-first přístup s Tailwind CSS
- Obsah webu je v češtině

---

Vytvořeno s ❤️ pomocí Next.js
