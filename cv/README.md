# CV — Ramazan Bora Keçeci

Baskıya hazır, **iki sayfa** A4, **İngilizce** CV. 1. sayfa özet, deneyim, beceriler ve eğitim; 2. sayfa ekran görüntüleri ve kısa açıklamalarla "Selected Projects". Canva şablonundan başlayan düzen, 2026-10-03'te sade İngilizce, daha okunaklı yazılar ve ortak görsel çerçevelerle güncellendi.

## Dosyalar

| Dosya | Ne |
|---|---|
| `rbk-cv.html` | Nihai CV — tarayıcıda aç, sağ üstten "Print / PDF" |
| `rbk-cv.pdf` | Göndermeye hazır PDF çıktı |
| `canva-cv.pdf` | Orijinal Canva şablonunun dışa aktarımı (referans) |
| `src/cv-template.html` | Kaynak şablon — içerik ve stil burada düzenlenir |
| `src/assets/` | Görseller — hepsi **JPEG** (fotoğraf, uygulama ve site ekran görüntüleri, StoneNet banner'ı) |
| `src/build.py` | Şablon + görseller → `rbk-cv.html` |

## Güncelleme akışı

1. İçeriği `src/cv-template.html` içinde düzenle (metinler HTML'de gömülü).
2. Derle: `cd src && python3 build.py`
3. PDF: `rbk-cv.html`'i Chrome'da açıp ⌘P → "Save as PDF" (kenar boşlukları: None), ya da:
   ```
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
     --headless=new --no-pdf-header-footer --print-to-pdf=rbk-cv.pdf "file://$PWD/rbk-cv.html"
   ```
4. Sayfa sayısını kontrol et — **tam 2 olmalı**. Baskıda `.page` sabit 297 mm; içerik sığmazsa
   Chrome 3. sayfa açar, bu da taşma demektir (metni kısalt, görsel yüksekliğini düşür).
5. Siteye koy: `cp rbk-cv.pdf ../public/cv.pdf` (rbkececi.com/cv.pdf buradan iner).

## Görsel ekleme kuralı

- Yeni görseli `src/assets/` altına **JPEG** olarak koy; webp/png koyma. Chrome, JPEG'i PDF'e
  olduğu gibi gömüyor, webp/png'yi ise kayıpsız bitmap'e çeviriyor (aynı CV webp ile 5,4 MB,
  JPEG ile 1,1 MB çıktı).
- Boyut: telefon ekranı için en uzun kenar 720 px yeter (30 mm baskıda ~600 dpi):
  `sips -s format jpeg -s formatOptions 85 -Z 720 kaynak.webp --out assets/ad.jpg`
- Şablonda `data:image/…;base64,{{IMG:ad}}` yazarken MIME türü önemsiz — `build.py` doğru türü
  dosya uzantısından koyar.

## İçerik kararları (değiştirmeden önce oku)

- CV **her zaman İngilizce**.
- Kısa, sade cümleler kullan. Deneyimde yapılan işi anlat; genel övgüler, pazarlama ifadeleri ve tekrar eden özellik listeleri ekleme.
- Üst başlık: **Software Developer · Mobile & Backend** (BKS pozisyonu: "Software Developer").
- Deneyim sırası: Independent (2024–Present) → BKS Holding (01.2023–06.2026) → Civil Engineer.
- gotimer **hem Google Play hem App Store'da**; dernek adı "Turkish Go Players Association".
- Kapan da iki mağazada (App Store + Google Play, `com.borakececi.block_war`).
- **Kento Google Play'de yayında** (`com.borakececi.offlinebadukai`); CV'de yayınlanmış uygulama olarak geçer. StoneNet (PyTorch CNN) ayrı bir başlık — AI/ML tarafını gösteren tek madde o.
- GitHub olarak yalnızca `kececibora` (bksbora bilinçli olarak yok); site: rbkececi.com.
- **Chess Trainer CV'de kullanılmıyor** (istek üzerine çıkarıldı).
- 1. sayfada uygulama görseli **yok** (Bora, 2026-10-03: "ikinci sayfada var zaten"); tüm ekran görüntüleri 2. sayfadaki kartlarda, ad + bir cümle + mağaza/adres ile.
- 2. sayfa düzeni: Independent & Client Apps (4) → StoneNet banner → BKS Holding Apps (4) → Client Web Projects (4). Belediye uygulaması müşteri projesidir; mağazada yayımlanmış uygulama olarak etiketleme. Yeni proje eklerken satırı 4'te tut; 5. kart taşırır.
- Görseller `.preview` çerçevelerinde kırpılmadan gösterilir. Kart açıklamaları bir kısa cümle; mağaza ve web adresleri PDF'de de tıklanabilir.
- Beceri listesinde somut teknolojiler yer alır. Genel "Automation & Multi-Agent Workflows" maddesi ve yazılımla ilgisiz Primavera kursu CV'den çıkarıldı.
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
