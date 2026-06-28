# Ramazan Bora Keçeci — Portfolio

Tek sayfalık, TR/EN, koyu temalı kişisel portfolyo sitesi.
**React + Vite + Tailwind CSS + Framer Motion.**

Tasarım konsepti: **"Blueprint → Build"** — mühendislik teknik çizimi dili
(grid, ölçü çizgileri, registration işaretleri) + terminal/kod dünyası.

## Kurulum

```bash
npm install
npm run dev      # geliştirme sunucusu  → http://localhost:5173
npm run build    # production build      → dist/
npm run preview  # build'i önizle
```

Node 18+ önerilir.

## Dosya yapısı

```
src/
  main.jsx                # giriş
  App.jsx                 # bölümleri sıralar
  index.css               # Tailwind + tasarım tokenları, blueprint grid, form stilleri
  i18n/
    content.js            # TÜM metinler (TR + EN) + iletişim bilgileri  ← burayı düzenle
    LanguageContext.jsx   # dil state'i (localStorage'da saklanır)
  hooks/                  # useScrolled, useActiveSection
  components/
    Background.jsx        # hareketli gradient + blueprint grid
    Navbar.jsx            # sticky + scroll blur + aktif bölüm + TR/EN + mobil menü
    Hero.jsx / Terminal.jsx
    About / Skills / Experience / Projects / Process / Education / Contact / Footer
    Section.jsx, Reveal.jsx  # paylaşılan yapı + animasyon yardımcıları
```

## İçeriği düzenleme

Neredeyse tüm metin **`src/i18n/content.js`** içinde, `tr` ve `en` olarak ikiye ayrılmış.
İki tarafın da aynı yapıda olmasına dikkat et. İletişim bilgileri dosyanın altındaki
`profile` nesnesinde.

## CV

CV indir butonu `public/Ramazan-Bora-Kececi-CV.pdf` dosyasını arar.
Kendi PDF'ini bu isimle `public/` klasörüne koyman yeterli.

## Renk / tipografi

Tasarım tokenları `tailwind.config.js` (renkler, fontlar, animasyonlar) ve
`src/index.css` içinde. Vurgu rengini değiştirmek için `accent` (#3FE0FF) ve
`accent-2` (#8A6BFF) değerlerini güncelle.

## Deploy

`npm run build` sonrası `dist/` klasörünü Netlify, Vercel veya GitHub Pages'e atabilirsin.
GitHub Pages için `vite.config.js` içine `base: '/repo-adi/'` eklemen gerekebilir.
