# CV — Ramazan Bora Keçeci

Baskıya hazır, tek sayfa A4, **İngilizce** CV. Tasarım, Canva'daki "Siyah Beyaz Sade Özgeçmiş" şablonunun (design id: `DAF4dc5iFaE`) birebir HTML kopyasıdır.

## Dosyalar

| Dosya | Ne |
|---|---|
| `rbk-cv.html` | Nihai CV — tarayıcıda aç, sağ üstten "Print / PDF" |
| `rbk-cv.pdf` | Göndermeye hazır PDF çıktı |
| `canva-cv.pdf` | Orijinal Canva şablonunun dışa aktarımı (referans) |
| `src/cv-template.html` | Kaynak şablon — içerik ve stil burada düzenlenir |
| `src/assets/` | Görseller (fotoğraf, uygulama ekran görüntüleri) |
| `src/build.py` | Şablon + görseller → `rbk-cv.html` |

## Güncelleme akışı

1. İçeriği `src/cv-template.html` içinde düzenle (metinler HTML'de gömülü).
2. Derle: `cd src && python3 build.py`
3. PDF: `rbk-cv.html`'i Chrome'da açıp ⌘P → "Save as PDF" (kenar boşlukları: None), ya da:
   ```
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
     --headless --no-pdf-header-footer --print-to-pdf=rbk-cv.pdf rbk-cv.html
   ```

## İçerik kararları (değiştirmeden önce oku)

- CV **her zaman İngilizce**.
- Üst başlık: **Software Developer · Mobile & Backend** (BKS pozisyonu: "Software Developer").
- Deneyim sırası: Independent (2024–Present) → BKS Holding (01.2023–06.2026) → Civil Engineer.
- gotimer **hem Google Play hem App Store'da**; dernek adı "Turkish Go Players Association".
- GitHub olarak yalnızca `kececibora` (bksbora bilinçli olarak yok); site: rbkececi.com.
- **Chess Trainer CV'de kullanılmıyor** (istek üzerine çıkarıldı).
- Ekran görüntülerinin altında etiket/başlık yok (şablon orijinaline sadık).
- gotimer görselleri Google Play'deki **v2 mağaza görselleri** (koyu ahşap tasarım).
- `municipal-crop.jpg` kenarları kırpılmış versiyondur (orijinal: rbkececiWebSite/public/projects/municipal.webp).

## Canva bağlantıları

- Orijinal şablon: https://www.canva.com/design/DAF4dc5iFaE/hn1YZJu1SF1xfIsFFzgwVg/edit
- Düzenlenebilir kopya ("CV 2026 - Bora"): https://www.canva.com/d/oui8rXuiAmv4HDt
  (Not: kopya eski içerikte — Canva MCP içerik düzenleyemiyor, sadece kopyalama/dışa aktarma yapabiliyor.)
- Canva MCP `/Volumes/DevSSD/dev/projects` proje yapılandırmasında ekli. Claude oturumunda araçlar görünmüyorsa headless kullan (cwd bu proje olmalı):
  ```
  cd /Volumes/DevSSD/dev/projects && claude -p "<istek>" --allowedTools "mcp__canva__*"
  ```
