# Agent Guide — rbkececiWebSite

Bu dosya, bu repoda çalışan yapay zeka ajanları (Claude Code, Codex vb.) içindir.
Projenin ne olduğunu, nasıl çalıştırıldığını ve nereye dokunulacağını özetler.

## Proje

Ramazan Bora Keçeci'nin tek sayfalık kişisel **portfolyo** sitesi.
TR/EN, koyu temalı, "premium developer portfolio" hissi.

- **Tasarım konsepti:** `Blueprint → Build` — mühendislik teknik çizimi dili
  (grid, ölçü/registration işaretleri, mono etiketler) + terminal/kod dünyası.
  Sahibi inşaat mühendisliğinden yazılıma geçtiği için bu köprü bilinçli seçildi.
- **Vurgu rengi:** blueprint cyan `#3FE0FF` + violet `#8A6BFF`.

## Stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion 11 · lucide-react (ikonlar).
Saf JSX (TypeScript yok), kasıtlı olarak kolay düzenlenebilir tutuldu.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:5173 (HMR)
npm run build    # dist/
npm run preview  # build önizleme
```

## Yapı

```
index.html                 # SEO meta + Google Fonts (Space Grotesk / IBM Plex Sans / IBM Plex Mono)
tailwind.config.js         # tasarım tokenları: renkler, fontlar, animasyonlar
src/
  main.jsx, App.jsx        # giriş + bölüm sıralaması
  index.css                # Tailwind katmanları, blueprint grid, .form-input, reduced-motion
  i18n/
    content.js             # ⭐ TÜM METİNLER (tr + en) + profile (iletişim). İçerik buradan düzenlenir.
    LanguageContext.jsx    # dil state'i (localStorage: rbk-lang)
  hooks/                   # useScrolled, useActiveSection
  components/
    Background, Navbar, Hero, Terminal,
    Skills, Experience, Projects, Education, Contact (formsuz, sadece bilgi), Footer,
    Section.jsx, Reveal.jsx   # paylaşılan shell + animasyon yardımcıları
    # Not: "Process / Çalışma Yaklaşımım" VE "Hakkımda / About" bölümleri kaldırıldı.
    # About.jsx dosyası durur ama App.jsx'te render edilmiyor; content.js'te about/process/
    # form nesneleri kullanılmıyor (zararsız artık). Bölüm sırası: Hero → Skills(§01) →
    # Experience(§02) → Projects(§03) → Education(§04)/Courses(§05) → Contact(§06).
    # CV İndir butonları tamamen kaldırıldı (Hero + Navbar); profile.cv/github2 silindi.
    # GitHub: github.com/kececibora. Sosyal ikonlar marka renkli (github=mor, linkedin=mavi,
    # mail=cyan). Projects "Detay" linki yalnızca proj.url (Google Play) varsa render edilir.
```

## Konvansiyonlar

- **İçerik koddan ayrı:** metin eklerken/çevirirken `src/i18n/content.js` içindeki
  `tr` ve `en` nesnelerini **aynı şekilde** güncelle. Bileşenler dilden bağımsızdır.
- Renk/tipografi değişimi: `tailwind.config.js` + `src/index.css`.
- Animasyonlar `Reveal.jsx` (scroll reveal + stagger) üzerinden; yeni efektlerde
  `prefers-reduced-motion`'a saygı korunmalı.
- CV butonu `public/Ramazan-Bora-Kececi-CV.pdf` dosyasını arar (henüz eklenmedi).

## Güncel durum / notlar

- **BKS Holding'den ayrıldı** (2026). Deneyim bölümünde BKS rolü artık geçmiş tarihli;
  güncel aktif rol "Software Developer (bağımsız/proje bazlı) — Devam ediyor".
  BKS bitiş ayı tahmini `06.2026` olarak girildi — doğru tarihle güncellenmeli.
- Hedef: siteyi daha **insanvari** hissettirmek; jenerik/AI klişesi metin ve
  tasarım kalıplarından arındırmak (bkz. Codex raporu).

## Proje görselleri

Gerçek ekran görüntüleri `public/projects/` altında. Bir projeye görsel eklemek için
`content.js`'teki ilgili proje nesnesine `image: '/projects/dosya.png'` alanını ekle —
`Projects.jsx` görsel varsa "cihaz peek" stiliyle gösterir, yoksa blueprint placeholder
kullanır.

Gerçek görselli kartlar (Play Store / store screenshot'larından):
`bks-panel.png`, `bks-flow.png`, `bks-messenger.png`, `bks-smart.png`, `bks-calc.png`,
`go-timer.png`, `chess.png`. Görselsiz (placeholder) kalanlar: ERP Stock & Purchase Sync
(backend), Municipal Service Applications (gizli), Embedded & ESP32 (screenshot yok).

BKS uygulamaları Play Store paketleri: bksflow=BKS Flow, bkschat=BKS Messenger,
bksbayiapp=BKS Panel, bks=BKS Smart (com.bkscam.*). Screenshot'lar oradan alındı.

## Yapılacaklar

- [ ] Gerçek CV PDF'i `public/Ramazan-Bora-Kececi-CV.pdf` olarak ekle.
- [ ] BKS bitiş tarihini doğrula (şu an `06.2026`).
- [x] AI-klişesi metin/tasarım temizliği (Codex raporuna göre).
- [x] Gerçek proje görselleri (Go timer, Chess); kalanlar için screenshot bekleniyor.
- [x] `prefers-reduced-motion` desteği (Reveal + grid'ler).
