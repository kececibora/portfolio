// All site copy lives here in TR + EN.
// Both objects share the exact same shape so components stay language-agnostic.

export const content = {
  tr: {
    nav: {
      skip: 'Ana içeriğe geç',
      menu: 'Menü',
      themeLight: 'Gündüz temasına geç',
      themeDark: 'Gece temasına geç',
      about: 'Hakkımda',
      skills: 'Yetenekler',
      experience: 'Deneyim',
      projects: 'Projeler',
      process: 'Yaklaşım',
      contact: 'İletişim',
      cv: 'CV İndir',
    },

    hero: {
      tag: 'Ankara, Türkiye',
      name: 'Ramazan Bora Keçeci',
      roles: [
        'Flutter Developer',
        'ERP & Business Automation Developer',
        'Mobile & Backend Solutions',
        'ESP32 & Arduino Prototyping',
      ],
      lead: 'Mobil uygulamadan backend’e, web panelden cihaz entegrasyonuna kadar uçtan uca yazılım çözümleri geliştiriyorum.',
      ctaProjects: 'Projelerimi Gör',
      ctaContact: 'İletişime Geç',
      ctaCv: 'CV İndir',
      architecture: {
        status: '4 katman bağlı',
        core: 'Ürün sistemi',
      },
      metrics: [
        { k: '4+', v: 'YIL DENEYİM' },
        { k: '15+', v: 'CANLI SİSTEM' },
        { k: 'AI', v: 'OTOMASYON' },
      ],
    },

    about: {
      eyebrow: 'Hakkımda',
      title: 'Saha mantığını ölçeklenebilir yazılıma çeviriyorum',
      paragraphs: [
        'Kurumsal seviyede uygulamalar geliştiren bir Software Developer’ım — ERP, stok yönetimi ve sistem hesaplama araçları dahil uygulamalı deneyime sahibim.',
        'BKS Holding’de Logo Tiger ERP ile entegre, ölçeklenebilir mobil ve backend sistemler geliştirdim ve iş süreçlerini optimize ettim. Flutter, Node.js ve gömülü sistemler (Arduino, ESP32) konusunda deneyimliyim; odağım gerçek problem çözme ve performans optimizasyonu.',
      ],
      facts: [
        { k: '4+', v: 'yıl mühendislik + yazılım deneyimi' },
        { k: '15+', v: 'üretime alınmış uygulama ve entegrasyon' },
        { k: 'ERP', v: 'Logo Tiger gerçek zamanlı senkronizasyon' },
      ],
    },

    skills: {
      eyebrow: 'Yetenekler',
      title: 'Teknik yetkinlikler',
      note: 'Flutter arayüzlerini Firebase/Node servisleri ve gerektiğinde ESP32 prototipleriyle entegre ediyorum.',
      categories: [
        {
          name: 'Mobile Development',
          items: ['Flutter', 'Dart', 'State Management', 'Provider', 'Riverpod', 'GetX', 'Responsive UI', 'PDF Generation'],
        },
        {
          name: 'Backend & API',
          items: ['Node.js', 'Express', 'REST API', 'MongoDB', 'PHP & MySQL', 'Serverless akışlar'],
        },
        {
          name: 'Firebase & Cloud',
          items: ['Firebase Auth', 'Firestore', 'Storage', 'Cloud Messaging', 'Remote Config'],
        },
        {
          name: 'Business & ERP',
          items: ['Logo Tiger ERP', 'Stok Senkronizasyonu', 'Sipariş Yönetimi', 'Bayi / Müşteri Sistemleri', 'Ürün Konfigürasyonu', 'Dinamik Hesaplama'],
        },
        {
          name: 'Embedded / IoT',
          items: ['ESP32', 'Arduino', 'Bluetooth', 'Sensör Sistemleri', 'Donanım-Yazılım Entegrasyonu'],
        },
        {
          name: 'AI & Automation',
          items: ['Otomasyon Akışları', 'AI Destekli Kod Akışı', 'Süreç Otomasyonu'],
        },
        {
          name: 'Other',
          items: ['React.js', 'Data Modeling', 'Dashboard & Veri Görselleştirme', 'Proje Yönetimi', 'İnşaat Mühendisliği'],
        },
      ],
    },

    experience: {
      eyebrow: 'Deneyim',
      title: 'Çalışma geçmişi',
      now: 'Devam ediyor',
      items: [
        {
          role: 'Software Developer',
          company: 'Bağımsız / Proje bazlı',
          period: '2024 — Devam ediyor',
          bullets: [
            'Belediye hizmetleri için su tüketimi ve faturalandırma, ödeme entegrasyonları ve veri görselleştirme ekranlarını kapsayan Flutter uygulamaları geliştirdim.',
            'Saha personeli için QR kodla tahsilat, çevrimdışı çalışma ve kendi yazıcı sürücüsü fork’um üzerinden Bluetooth ile fiş yazdırma özellikleri geliştirdim.',
            'Türk Go Oyuncuları Derneği için Go Baduk Weiqi Timer’ı gönüllü olarak tasarlayıp geliştirdim; Google Play ve App Store’da yayınladım.',
            'Kapan — Siege Duel’ı saf Dart oyun motoru, üç seviyeli yapay zekâ ve Firebase üzerinde eşleştirme, Elo ve liderlik tablosu içeren dereceli çevrimiçi modla geliştirip App Store’da yayınladım.',
          ],
        },
        {
          role: 'Flutter Developer',
          company: 'BKS Holding',
          period: '01.2023 — 06.2026',
          bullets: [
            'BKS Holding’de bayilerin, müşterilerin ve şirket içi ekiplerin günlük operasyonlarda kullandığı teklif, sipariş, e-satış, ürün konfigürasyon ve yönetim ekranları üzerinde çalıştım.',
            'Flutter ile geliştirilen BKS Flow, BKS Messenger, CRM, e-satış ekranları ve BKS Panel gibi birbirine bağlı kurumsal uygulamaların mobil ve web tarafında aktif rol aldım.',
            'Katlanır cam, giyotin, sürgülü sistemler ve benzeri ürün grupları için ölçü, profil, aksesuar ve fiyat hesaplamalarını yapan dinamik hesaplama yapıları geliştirdim.',
            'Logo Tiger ERP ile stok, satın alma ve sipariş verilerinin senkronize çalışmasını sağlayan entegrasyon süreçlerinde görev aldım.',
            'Böylece mobil uygulama, panel, e-satış ve muhasebe tarafının aynı veri üzerinden ilerlemesine katkı sağladım.',
            'Teklif ve sipariş çıktıları için PDF/Excel üretimi, grafik tabanlı raporlama ve dashboard ekranları geliştirdim.',
            'Üretim tarafında kullanılan sistemler için arıza tespiti, test süreçleri ve güncelleme araçları üzerine çalışmalar yaptım.',
            'Flutter arayüzlerini Firebase ve Node.js servisleriyle birleştirerek sahada gerçekten kullanılan, uçtan uca çalışan iş uygulamaları geliştirdim.',
          ],
        },
        {
          role: 'Civil Engineer',
          company: 'İnşaat Sektörü',
          period: '2019 — 2022',
          bullets: [
            'Şantiyede proje yönetimi, saha koordinasyonu ve paydaş ilişkilerini yürüttüm; bir problemin nasıl çözüldüğünü sahada öğrendim.',
            'O yıllarda kazandığım analitik düşünmeyi, bugün yazılım alanında temel alıyorum.',
          ],
        },
      ],
    },

    projects: {
      eyebrow: 'Öne Çıkan Projeler',
      title: 'Seçili çalışmalar',
      detail: 'Detay',
      enlarge: 'Büyüt',
      close: 'Kapat',
      note: 'İki aile halinde: BKS’de geliştirdiğim kurumsal uygulamalar ve kendi yayınladığım bağımsız uygulamalar. Karta tıkla, sağa sola geçerek incele.',
      cta: 'İncele',
      appsSuffix: 'uygulama',
      soon: 'Yakında',
      dialog: { prev: 'Önceki proje', next: 'Sonraki proje', goto: 'Projeye git', close: 'Kapat', open: 'Projeyi aç' },
      groups: [
        {
          key: 'bks',
          title: 'BKS Uygulama Ailesi',
          blurb: 'Bayi sipariş panelinden akıllı cam kontrolüne — Logo Tiger ERP’ye bağlı, sahada her gün kullanılan kurumsal uygulama ailesi.',
          codes: ['platform/bks-panel', 'app/bks-flow', 'app/bks-smart'],
        },
        {
          key: 'indie',
          title: 'Bağımsız Uygulamalar',
          blurb: 'Go turnuva saatinden strateji oyununa ve belediye servislerine — kendi başıma tasarlayıp yayınladığım, reklamsız uygulamalar.',
          codes: ['app/kento', 'app/go-timer', 'game/kapan', 'gov/municipal-suite', 'app/chess-trainer'],
        },
      ],
      items: [
        {
          name: 'BKS Panel',
          desc: 'Bayiler için ürün vitrini, fiyat, sipariş ve teklif yönetimi sağlayan B2B platformu; Logo Tiger ERP’ye bağlı. Google Play’de yayında.',
          tags: ['Flutter', 'Firebase', 'Logo Tiger ERP', 'REST API'],
          features: [
            'Bayiye özel ürün vitrini, fiyat ve teklif yönetimi',
            'Sipariş akışı — PDF/Excel çıktıları ve raporlarla',
            'Logo Tiger ERP ile gerçek zamanlı stok ve sipariş senkronu',
            'Sahada bayilerin her gün kullandığı B2B platform',
          ],
          code: 'platform/bks-panel',
          image: '/projects/bks-panel-blueprint.svg',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bksbayiapp',
        },
        {
          name: 'BKS Flow',
          desc: 'Dinamik form, onay akışı, görev ve süreç takibi yapan kurumsal iş akışı uygulaması; grafikler ve raporlamayla. Google Play’de yayında.',
          tags: ['Flutter', 'Firebase', 'İş Akışı', 'Dashboard'],
          features: [
            'Dinamik form ve çok adımlı onay akışları',
            'Görev ve süreç takibi — şirket içi ekiplerin günlük aracı',
            'Grafik tabanlı raporlama ve dashboard ekranları',
            'Firebase bildirimleriyle anlık durum takibi',
          ],
          code: 'app/bks-flow',
          image: '/projects/bks-flow-blueprint.svg',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bksflow',
        },
        {
          name: 'BKS Smart',
          desc: 'Katlanır cam, pergola ve sürgülü sistemleri uygulamadan açıp kapatan, aydınlatma kontrolü sağlayan akıllı kontrol uygulaması. Google Play’de yayında.',
          tags: ['Flutter', 'IoT', 'Bluetooth', 'ESP32'],
          features: [
            'Katlanır cam, pergola ve sürgülü sistemlerin uzaktan kontrolü',
            'Bluetooth / ESP32 ile gerçek donanım haberleşmesi',
            'Aydınlatma kontrolü ve senaryolar',
            'Sahadaki üretim sistemleriyle birlikte çalışır',
          ],
          code: 'app/bks-smart',
          image: '/projects/bks-smart-blueprint.svg',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bks',
        },
        {
          name: 'Municipal Service Applications',
          desc: 'Su kullanım faturalandırması, ödeme entegrasyonları ve veri dashboardları içeren belediye servis uygulamaları.',
          tags: ['Flutter', 'API Integration', 'Payment', 'Data Viz'],
          features: [
            'Su kullanım faturalandırması ve tahsilat ekranları',
            'Ödeme entegrasyonları',
            'Veri dashboardları ve raporlama',
            'Belediye personeli için sade, hızlı ekranlar',
          ],
          code: 'gov/municipal-suite',
          image: '/projects/municipal.webp',
        },
        {
          name: 'Kento — Go & Baduk AI Analizi',
          desc: 'Gerçek tahtanın fotoğrafını çekip saniyeler içinde dijital maça çeviren, tamamen çevrimdışı KataGo motoruyla maçı hamle hamle inceleyen kayıt ve analiz uygulamam. 11 dil, tek seferlik satın alma, reklamsız.',
          features: [
            'Fotoğraftan pozisyon okuma: kamerayı tut, taşlar dijital tahtaya geçsin',
            'Puan bazlı hata analizi, skor grafiği, bölge haritası ve aday hamleler',
            'Varyant dallanma ve otomatik derin analizle profesyonel çalışma akışı',
            'Cihaz üstü KataGo — sunucusuz, hesapsız, tamamen çevrimdışı',
          ],
          tags: ['Flutter', 'KataGo', 'C++', 'Bilgisayarla Görü'],
          code: 'app/kento',
          status: 'Yakında App Store ve Google Play’de',
          image: '/projects/kento.webp',
        },
        {
          name: 'Go / Baduk Tournament Timer',
          desc: 'Eskişehir Go Oyuncuları Derneği için geliştirdiğim, Google Play’de yayında olan turnuva saati. v2.0 ile 9 dil, el işçiliği koyu ahşap tasarım — reklamsız ve tamamen çevrimdışı.',
          features: [
            'Japon ve Kanada byo-yomi + ani ölüm zaman sistemleri',
            'Turnuva için büyük, okunaklı ekran — ekranına dokun, sıra geçsin',
            'Siyah ve beyaz için ayrı süre ayarları, son saniyelerde sesli sayım',
            '9 dil · reklamsız · hesapsız · tamamen çevrimdışı',
          ],
          tags: ['Flutter', 'Android', 'Google Play'],
          code: 'app/go-timer',
          image: '/projects/go-timer.webp',
          url: 'https://play.google.com/store/apps/details?id=com.borakececi.gotimer',
        },
        {
          name: 'Kapan — Siege Duel',
          desc: 'Rakibini duvar öre öre kapana kıstırdığın taktik tahta oyunum: hamle yap, duvar koy, alan daralt. Saf Dart motor, 3 seviyeli yapay zekâ ve Firebase üzerinde dereceli çevrimiçi mod.',
          features: [
            'Saf Dart oyun motoru + 3 zorluk seviyeli, test edilmiş yapay zekâ',
            'Çevrimdışı: yapay zekâya karşı ya da tek cihazda iki kişi',
            'Dereceli çevrimiçi mod: eşleştirme, Elo, liderlik tablosu, oda kodları',
            '15 dil (Arapça RTL dahil) · 3 tahta boyutu · reklamsız',
          ],
          tags: ['Flutter', 'Firebase', 'Cloud Functions', 'Multiplayer'],
          code: 'game/kapan',
          status: 'App Store’da yayında · Google Play’de kapalı test',
          url: 'https://apps.apple.com/app/siege-duel-trap-strategy/id6790388211',
          image: '/projects/kapan.webp',
        },
        {
          name: 'Embedded Systems & ESP32',
          desc: 'ESP32, Arduino, Bluetooth ve sensör tabanlı yazılım-donanım entegrasyonları; üretim birimleri için işleri kolaylaştıran arıza tespit ve güncelleme otomasyonları.',
          tags: ['ESP32', 'Arduino', 'Bluetooth', 'Embedded'],
          code: 'hardware/esp32-lab',
          image: '/projects/esp32-lab-blueprint.svg',
          wide: true,
        },
        {
          name: 'Chess Trainer',
          desc: 'Reklamsız ve çevrimdışı satranç antrenörü: ~20.000 Lichess bulmacası, körleme antrenmanı, açılışlar ve yapay zekâya karşı oyun — yeni güncellemeyle 15 dilde, Google Play’de yayında.',
          features: [
            '5 antrenman modülü: koordinat, körleme, taktik, açılış, yapay zekâya karşı oyun',
            '~20.000 puanlı Lichess bulmacası — tamamı cihazda, internetsiz',
            'Günlük seri, günlük hedef ve mod bazında kişisel rekorlar',
            '15 dil · reklamsız · hesapsız · kendi tahta widget’ı',
          ],
          tags: ['Flutter', 'Dart', 'Çevrimdışı', 'Lichess Puzzles'],
          code: 'app/chess-trainer',
          image: '/projects/chess.webp',
          url: 'https://play.google.com/store/apps/details?id=com.borakececi.chess_trainer',
        },
      ],
    },

    process: {
      eyebrow: 'Nasıl Çalışırım',
      title: 'Sipariş, stok, fiyat ve ödemeyi birlikte düşünürüm',
      statement: 'İşim genelde ekranla başlamıyor. Önce stok, sipariş, fiyat ve yetki akışını netleştiriyorum; ekranı en son, bu akışın üstüne kuruyorum.',
      steps: [
        { title: 'Akışı çıkar', desc: 'Logo Tiger tablolarını ve sahadaki formları masaya yatırırım.' },
        { title: 'Veriyi modelle', desc: 'Örnek bir sipariş üzerinden veri modelini sınarım.' },
        { title: 'Kur ve bağla', desc: 'Flutter arayüzünü ERP ve servislerle gerçek zamanlı bağlarım.' },
        { title: 'Yayınla ve sürdür', desc: 'Yayına alır, geri bildirimle güncellemeye devam ederim.' },
      ],
    },

    education: {
      eyebrow: 'Eğitim',
      title: 'Akademik geçmiş',
      items: [
        { schoolId: 'anadolu', school: 'Anadolu Üniversitesi', program: 'İnşaat Mühendisliği — Lisans (%100 İngilizce)', period: '2013 — 2019' },
        { schoolId: 'gaziantep', school: 'Gaziantep Üniversitesi', program: 'İş Sağlığı ve Güvenliği — Yüksek Lisans', period: '2021 — 2022' },
        { schoolId: 'halmstad', school: 'Halmstad University', program: 'İnşaat Mühendisliği — Erasmus Mobility Programme', period: '2018 — 2019' },
        { schoolId: 'anadolu', school: 'Anadolu Üniversitesi', program: 'Bilgisayar Programcılığı', period: 'Devam ediyor' },
      ],
    },

    courses: {
      eyebrow: 'Sertifikalar',
      title: 'Eğitim & sertifikalar',
      items: [
        { name: 'Flutter Mobile Development', provider: 'Udemy' },
        { name: 'Frontend Web Development', provider: 'Patika.dev' },
        { name: 'Node.js Backend Development', provider: 'Patika.dev' },
        { name: 'JavaScript Algorithms & Data Structures', provider: 'freeCodeCamp' },
        { name: 'Primavera Project Management', provider: 'Akım Mühendislik' },
      ],
    },

    contact: {
      eyebrow: 'İletişim',
      title: 'Birlikte çalışalım',
      lead: 'Flutter, bir ERP entegrasyonu ya da belediye/iş akışı uygulaması için yeni projelere açığım; birkaç gün içinde dönüş sağlıyorum.',
      labels: { email: 'E-posta', phone: 'Telefon', location: 'Konum' },
      location: 'Ankara, Türkiye',
      cta: 'E-posta Gönder',
      form: {
        name: 'Ad Soyad',
        email: 'E-posta',
        message: 'Mesajınız',
        submit: 'Mesajı Hazırla',
        success: 'Mesaj hazırlandı — e-posta uygulamanızda açıldı.',
        namePh: 'Adınız',
        emailPh: 'ornek@mail.com',
        messagePh: 'Projenizden kısaca bahsedin…',
      },
    },

    footer: {
      built: 'React, Tailwind CSS ve Framer Motion ile geliştirildi.',
      rights: 'Tüm hakları saklıdır.',
      backToTop: 'Yukarı çık',
    },
  },

  en: {
    nav: {
      skip: 'Skip to main content',
      menu: 'Menu',
      themeLight: 'Switch to light theme',
      themeDark: 'Switch to dark theme',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      process: 'Process',
      contact: 'Contact',
      cv: 'Download CV',
    },

    hero: {
      tag: 'Ankara, Türkiye',
      name: 'Ramazan Bora Keçeci',
      roles: [
        'Flutter Developer',
        'ERP & Business Automation Developer',
        'Mobile & Backend Solutions',
        'ESP32 & Arduino Prototyping',
      ],
      lead: 'From mobile apps to backends, from web panels to device integrations — I build end-to-end software solutions.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
      ctaCv: 'Download CV',
      architecture: {
        status: '4 layers connected',
        core: 'Product system',
      },
      metrics: [
        { k: '4+', v: 'YEARS EXPERIENCE' },
        { k: '15+', v: 'SHIPPED SYSTEMS' },
        { k: 'AI', v: 'AUTOMATION' },
      ],
    },

    about: {
      eyebrow: 'About',
      title: 'I translate field logic into scalable software',
      paragraphs: [
        'Software Developer with hands-on experience building enterprise-level applications — including ERP, stock management, and system calculation tools.',
        'At BKS Holding I developed scalable mobile and backend systems, integrating with Logo Tiger ERP and optimizing business operations. Experienced in Flutter, Node.js, and embedded systems (Arduino, ESP32), with a focus on real-world problem solving and performance optimization.',
      ],
      facts: [
        { k: '4+', v: 'years across engineering & software' },
        { k: '15+', v: 'shipped apps & integrations' },
        { k: 'ERP', v: 'Logo Tiger real-time sync' },
      ],
    },

    skills: {
      eyebrow: 'Skills',
      title: 'Technical capabilities',
      note: 'I get Flutter interfaces talking to Firebase/Node services — and to ESP32 prototypes when a project needs hardware.',
      categories: [
        {
          name: 'Mobile Development',
          items: ['Flutter', 'Dart', 'State Management', 'Provider', 'Riverpod', 'GetX', 'Responsive UI', 'PDF Generation'],
        },
        {
          name: 'Backend & API',
          items: ['Node.js', 'Express', 'REST API', 'MongoDB', 'PHP & MySQL', 'Serverless workflows'],
        },
        {
          name: 'Firebase & Cloud',
          items: ['Firebase Auth', 'Firestore', 'Storage', 'Cloud Messaging', 'Remote Config'],
        },
        {
          name: 'Business & ERP',
          items: ['Logo Tiger ERP', 'Stock Sync', 'Order Management', 'Dealer / Customer Systems', 'Product Configuration', 'Dynamic Calculation'],
        },
        {
          name: 'Embedded / IoT',
          items: ['ESP32', 'Arduino', 'Bluetooth', 'Sensor Systems', 'Hardware-Software Integration'],
        },
        {
          name: 'AI & Automation',
          items: ['Automation Workflows', 'AI-assisted Coding', 'Process Automation'],
        },
        {
          name: 'Other',
          items: ['React.js', 'Data Modeling', 'Dashboards & Data Viz', 'Project Management', 'Civil Engineering'],
        },
      ],
    },

    experience: {
      eyebrow: 'Experience',
      title: 'Where I have worked',
      now: 'Present',
      items: [
        {
          role: 'Software Developer',
          company: 'Independent / Project-based',
          period: '2024 — Present',
          bullets: [
            'Developed Flutter applications for municipal services, covering water-usage billing, payment integrations, and data-visualization dashboards.',
            'Built field-collection features with QR-code scanning, offline support, and Bluetooth receipt printing through my own fork of the printer driver.',
            'Volunteered to design, develop, and publish Go Baduk Weiqi Timer for the Turkish Go Players Association on Google Play and the App Store.',
            'Designed and shipped Kapan — Siege Duel with a pure-Dart game engine, three-level AI, and ranked Firebase multiplayer including matchmaking, Elo, and leaderboards.',
          ],
        },
        {
          role: 'Flutter Developer',
          company: 'BKS Holding',
          period: 'Jan 2023 — Jun 2026',
          bullets: [
            'Worked on the quote, order, e-commerce, product-configuration, and management screens used daily by dealers, customers, and internal teams at BKS Holding.',
            'Took an active role on the mobile and web side of a family of connected enterprise apps built with Flutter: BKS Flow, BKS Messenger, a CRM, e-commerce screens, and BKS Panel.',
            'Developed dynamic calculation logic for folding glass, guillotine, sliding systems, and similar product lines, computing measurements, profiles, accessories, and pricing.',
            'Took part in the integration work that keeps stock, purchasing, and order data in sync with Logo Tiger ERP.',
            'That kept the mobile app, panel, e-commerce, and accounting sides working from the same data.',
            'Developed PDF/Excel output for quotes and orders, along with chart-based reporting and dashboard screens.',
            'Worked on fault detection, testing, and update tooling for systems used in production.',
            'Developed end-to-end business applications actually used in the field, combining Flutter interfaces with Firebase and Node.js services.',
          ],
        },
        {
          role: 'Civil Engineer',
          company: 'Construction Industry',
          period: '2019 — 2022',
          bullets: [
            'Ran project management, site coordination, and stakeholder relations on construction sites — where I learned, hands-on, how a real problem actually gets solved.',
            'The analytical thinking I gained in those years is something I still draw on in software today.',
          ],
        },
      ],
    },

    projects: {
      eyebrow: 'Featured Projects',
      title: 'Selected work',
      detail: 'Details',
      enlarge: 'Enlarge',
      close: 'Close',
      note: 'Two families: the enterprise apps I build at BKS, and the independent apps I ship on my own. Click a card and browse left/right.',
      cta: 'Explore',
      appsSuffix: 'apps',
      soon: 'Soon',
      dialog: { prev: 'Previous project', next: 'Next project', goto: 'Go to project', close: 'Close', open: 'Open project' },
      groups: [
        {
          key: 'bks',
          title: 'BKS App Family',
          blurb: 'From the dealer ordering panel to smart glass control — a family of enterprise apps tied to Logo Tiger ERP, used in the field every day.',
          codes: ['platform/bks-panel', 'app/bks-flow', 'app/bks-smart'],
        },
        {
          key: 'indie',
          title: 'Independent Apps',
          blurb: 'From a Go tournament clock to a strategy game and municipal services — ad-free apps I design and ship on my own.',
          codes: ['app/kento', 'app/go-timer', 'game/kapan', 'gov/municipal-suite', 'app/chess-trainer'],
        },
      ],
      items: [
        {
          name: 'BKS Panel',
          desc: 'A B2B platform for dealers — product catalog, pricing, orders, and quotes, connected to Logo Tiger ERP. Published on Google Play.',
          tags: ['Flutter', 'Firebase', 'Logo Tiger ERP', 'REST API'],
          features: [
            'Dealer-specific product catalog, pricing, and quote management',
            'Order flow with PDF/Excel output and reporting',
            'Real-time stock and order sync with Logo Tiger ERP',
            'The B2B platform dealers use in the field every day',
          ],
          code: 'platform/bks-panel',
          image: '/projects/bks-panel-blueprint.svg',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bksbayiapp',
        },
        {
          name: 'BKS Flow',
          desc: 'An enterprise workflow app with dynamic forms, approval flows, and task/process tracking — with charts and reporting. Published on Google Play.',
          tags: ['Flutter', 'Firebase', 'Workflow', 'Dashboard'],
          features: [
            'Dynamic forms and multi-step approval flows',
            'Task and process tracking — the daily tool of internal teams',
            'Chart-based reporting and dashboard screens',
            'Live status updates via Firebase notifications',
          ],
          code: 'app/bks-flow',
          image: '/projects/bks-flow-blueprint.svg',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bksflow',
        },
        {
          name: 'BKS Smart',
          desc: 'A smart-control app that opens, closes, and controls the lighting of folding glass, pergola, and sliding systems from your phone. Published on Google Play.',
          tags: ['Flutter', 'IoT', 'Bluetooth', 'ESP32'],
          features: [
            'Remote control of folding glass, pergola, and sliding systems',
            'Real hardware communication over Bluetooth / ESP32',
            'Lighting control and scenes',
            'Works with the production systems in the field',
          ],
          code: 'app/bks-smart',
          image: '/projects/bks-smart-blueprint.svg',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bks',
        },
        {
          name: 'Municipal Service Applications',
          desc: 'Municipal service apps featuring water-usage billing, payment integrations, and data dashboards.',
          tags: ['Flutter', 'API Integration', 'Payment', 'Data Viz'],
          features: [
            'Water-usage billing and collection screens',
            'Payment integrations',
            'Data dashboards and reporting',
            'Simple, fast screens for municipal staff',
          ],
          code: 'gov/municipal-suite',
          image: '/projects/municipal.webp',
        },
        {
          name: 'Kento — Go & Baduk AI Analysis',
          desc: 'My game recorder and analysis app that photographs a real board into a digital game in seconds and reviews it move by move with a fully offline KataGo engine. 11 languages, one-time purchase, ad-free.',
          features: [
            'Photo-to-position: point the camera, stones land on a digital board',
            'Point-based mistake analysis, score graph, territory map, candidate moves',
            'Variation branching with automatic deep analysis for serious study',
            'On-device KataGo — no servers, no accounts, fully offline',
          ],
          tags: ['Flutter', 'KataGo', 'C++', 'Computer Vision'],
          code: 'app/kento',
          status: 'Coming soon to the App Store and Google Play',
          image: '/projects/kento.webp',
        },
        {
          name: 'Go / Baduk Tournament Timer',
          desc: 'The tournament clock I built for the Eskişehir Go Players Association, live on Google Play. v2.0 brings 9 languages and a handcrafted dark-wood look — ad-free and fully offline.',
          features: [
            'Japanese and Canadian byo-yomi + sudden-death time systems',
            'Large tournament display — tap your side of the screen to pass the turn',
            'Separate time settings for Black and White, sound countdown in final seconds',
            '9 languages · ad-free · no accounts · fully offline',
          ],
          tags: ['Flutter', 'Android', 'Google Play'],
          code: 'app/go-timer',
          image: '/projects/go-timer.webp',
          url: 'https://play.google.com/store/apps/details?id=com.borakececi.gotimer',
        },
        {
          name: 'Kapan — Siege Duel',
          desc: 'My trap-strategy board game: move, drop a wall, shrink the board, corner your rival. Pure-Dart engine, a 3-level AI, and ranked online play on Firebase.',
          features: [
            'Pure-Dart rules engine + a tested AI with 3 difficulty levels',
            'Offline: against the AI or two players on one device',
            'Ranked online mode: matchmaking, Elo, leaderboards, room codes',
            '15 languages (incl. Arabic RTL) · 3 board sizes · zero ads',
          ],
          tags: ['Flutter', 'Firebase', 'Cloud Functions', 'Multiplayer'],
          code: 'game/kapan',
          status: 'Live on the App Store · Google Play closed testing',
          url: 'https://apps.apple.com/app/siege-duel-trap-strategy/id6790388211',
          image: '/projects/kapan.webp',
        },
        {
          name: 'Embedded Systems & ESP32',
          desc: 'ESP32, Arduino, Bluetooth, and sensor-based hardware-software integration — including fault-detection and update automations that streamline work for production units.',
          tags: ['ESP32', 'Arduino', 'Bluetooth', 'Embedded'],
          code: 'hardware/esp32-lab',
          image: '/projects/esp32-lab-blueprint.svg',
          wide: true,
        },
        {
          name: 'Chess Trainer',
          desc: 'An ad-free, offline chess trainer: ~20,000 Lichess puzzles, blindfold training, openings, and play vs AI — now in 15 languages, live on Google Play.',
          features: [
            '5 training modules: coordinates, blindfold, tactics, openings, play vs AI',
            '~20,000 rated Lichess puzzles — all on-device, no internet needed',
            'Daily streak, daily goal, and per-mode personal bests',
            '15 languages · ad-free · no accounts · custom-built board widget',
          ],
          tags: ['Flutter', 'Dart', 'Offline', 'Lichess Puzzles'],
          code: 'app/chess-trainer',
          image: '/projects/chess.webp',
          url: 'https://play.google.com/store/apps/details?id=com.borakececi.chess_trainer',
        },
      ],
    },

    process: {
      eyebrow: 'How I Work',
      title: 'I think about order, stock, pricing, and payment together',
      statement: 'My work usually doesn’t start with a screen. I first get the stock, order, pricing, and permission flow straight — the screen comes last, built on top of that.',
      steps: [
        { title: 'Map the flow', desc: 'I lay out the Logo Tiger tables and the forms used in the field.' },
        { title: 'Model the data', desc: 'I test the data model against a real sample order.' },
        { title: 'Build and connect', desc: 'I wire the Flutter UI to the ERP and services in real time.' },
        { title: 'Ship and maintain', desc: 'I release, then keep updating based on feedback.' },
      ],
    },

    education: {
      eyebrow: 'Education',
      title: 'Academic background',
      items: [
        { schoolId: 'anadolu', school: 'Anadolu University', program: 'Civil Engineering — Bachelor’s Degree (100% English)', period: '2013 — 2019' },
        { schoolId: 'gaziantep', school: 'Gaziantep University', program: 'Occupational Health & Safety — Master’s Degree', period: '2021 — 2022' },
        { schoolId: 'halmstad', school: 'Halmstad University', program: 'Civil Engineering — Erasmus Mobility Programme', period: '2018 — 2019' },
        { schoolId: 'anadolu', school: 'Anadolu University', program: 'Computer Programming', period: 'Present' },
      ],
    },

    courses: {
      eyebrow: 'Certificates',
      title: 'Courses & certificates',
      items: [
        { name: 'Flutter Mobile Development', provider: 'Udemy' },
        { name: 'Frontend Web Development', provider: 'Patika.dev' },
        { name: 'Node.js Backend Development', provider: 'Patika.dev' },
        { name: 'JavaScript Algorithms & Data Structures', provider: 'freeCodeCamp' },
        { name: 'Primavera Project Management', provider: 'Akım Mühendislik' },
      ],
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Let’s work together',
      lead: 'I’m open to new projects involving Flutter, ERP integrations, or municipal/business workflow apps, and get back within a few days.',
      labels: { email: 'Email', phone: 'Phone', location: 'Location' },
      location: 'Ankara, Türkiye',
      cta: 'Send an Email',
      form: {
        name: 'Full Name',
        email: 'Email',
        message: 'Your Message',
        submit: 'Prepare Message',
        success: 'Message prepared — opened in your email app.',
        namePh: 'Your name',
        emailPh: 'you@mail.com',
        messagePh: 'Tell me briefly about your project…',
      },
    },

    footer: {
      built: 'Built with React, Tailwind CSS and Framer Motion.',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
}

// Shared, language-independent constants
export const profile = {
  email: 'rbkececi@gmail.com',
  phone: '+90 554 670 85 28',
  phoneHref: '+905546708528',
  linkedin: 'https://linkedin.com/in/borakececi',
  github: 'https://github.com/kececibora',
}
