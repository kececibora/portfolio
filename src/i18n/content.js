// All site copy lives here in TR + EN.
// Both objects share the exact same shape so components stay language-agnostic.

export const content = {
  tr: {
    nav: {
      about: 'Hakkımda',
      skills: 'Yetenekler',
      experience: 'Deneyim',
      projects: 'Projeler',
      process: 'Yaklaşım',
      contact: 'İletişim',
      cv: 'CV İndir',
    },

    hero: {
      tag: 'Ankara, Türkiye · Açık projelere uygun',
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
    },

    about: {
      eyebrow: 'Hakkımda',
      title: 'Saha mantığını ölçeklenebilir yazılıma çeviriyorum',
      paragraphs: [
        'Kurumsal seviyede uygulamalar geliştiren bir Software Developer’ım — ERP, stok yönetimi ve sistem hesaplama araçları dahil uygulamalı deneyime sahibim.',
        'BKS Holding’de Logo Tiger ERP ile entegre, ölçeklenebilir mobil ve backend sistemler geliştirdim ve iş süreçlerini optimize ettim. Flutter, Node.js ve gömülü sistemler (Arduino, ESP32) konusunda deneyimliyim; odağım gerçek problem çözme ve performans optimizasyonu.',
      ],
      facts: [
        { k: '5+', v: 'yıl mühendislik + yazılım deneyimi' },
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
          role: 'Flutter Developer',
          company: 'BKS Holding',
          period: '01.2023 — 06.2026',
          bullets: [
            'Bayilerin ve müşterilerin her gün sahada kullandığı sipariş, teklif ve ürün konfigürasyon ekranlarını ekipçe Flutter ile baştan kurduk.',
            'Birbirine bağlı bir kurumsal uygulama ailesi geliştirdik: iş akışı için BKS Flow, ekip mesajlaşması için BKS Messenger, müşteri şikayetleri için CRM ve yönetim tarafı için BKS Panel.',
            'Katlanır cam, giyotin ve sürgülü sistemlerde ölçü, profil, aksesuar ve fiyat hesaplayan dinamik bir hesaplama motoru geliştirdik.',
            'Logo Tiger ERP ile stok ve satın alma verisini gerçek zamanlı senkronize eden entegrasyon katmanını geliştirdik; mobil taraf ile muhasebe aynı veri üzerinden çalışıyor.',
            'Teklif ve sipariş çıktıları için PDF üretimini ekledik.',
            'Üretim birimleri için arıza tespitini ve güncellemeleri otomatikleştiren araçlar geliştirdik.',
            'Flutter arayüzlerini Firebase ve Node.js servisleriyle birleştirip uçtan uca çalışan sistemler ortaya çıkardık.',
          ],
        },
        {
          role: 'Software Developer',
          company: 'Bağımsız / Proje bazlı',
          period: '2024 — Devam ediyor',
          bullets: [
            'Belediyeler için su kullanımını faturalandıran, ödeme ve veri takibini sade ekranlarda toplayan Flutter uygulamaları geliştirdim.',
            'Eskişehir Go Oyuncuları Derneği için Go / Baduk turnuva zamanlayıcısı gotimer’ı yapıp Google Play’de yayınladım; gerçek kullanıcılardan gelen geri bildirimlerle güncellemeye devam ediyorum.',
            'Reklamsız ve tamamen çevrimdışı çalışan bir satranç antrenman uygulaması (Chess Trainer) geliştirdim.',
            'ESP32 ve Arduino ile Bluetooth ve sensör tabanlı donanım prototipleri geliştirdim.',
          ],
        },
        {
          role: 'Civil Engineer',
          company: 'İnşaat Sektörü',
          period: '2019 — 2022',
          bullets: [
            'Şantiyede proje yönetimi, saha koordinasyonu ve paydaş ilişkilerini yürüttüm; bir problemin nasıl çözüldüğünü sahada öğrendim.',
            'O yıllarda kazandığım saha sezgisini, bugün iş süreçlerini yazılıma çevirirken her gün kullanıyorum.',
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
      note: 'Bayi siparişi, Logo Tiger stok senkronu, belediye tahsilatı ve Go turnuva zamanlayıcısından seçmeler.',
      items: [
        {
          name: 'BKS Panel',
          desc: 'Bayiler için ürün vitrini, fiyat, sipariş ve teklif yönetimi sağlayan B2B platformu; Logo Tiger ERP’ye bağlı. Google Play’de yayında.',
          tags: ['Flutter', 'Firebase', 'Logo Tiger ERP', 'REST API'],
          code: 'platform/bks-panel',
          image: '/projects/bks-panel.webp',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bksbayiapp',
        },
        {
          name: 'BKS Flow',
          desc: 'Dinamik form, onay akışı, görev ve süreç takibi yapan kurumsal iş akışı uygulaması; grafikler ve raporlamayla. Google Play’de yayında.',
          tags: ['Flutter', 'Firebase', 'İş Akışı', 'Dashboard'],
          code: 'app/bks-flow',
          image: '/projects/bks-flow.webp',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bksflow',
        },
        {
          name: 'BKS Smart',
          desc: 'Katlanır cam, pergola ve sürgülü sistemleri uygulamadan açıp kapatan, aydınlatma kontrolü sağlayan akıllı kontrol uygulaması. Google Play’de yayında.',
          tags: ['Flutter', 'IoT', 'Bluetooth', 'ESP32'],
          code: 'app/bks-smart',
          image: '/projects/bks-smart.webp',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bks',
        },
        {
          name: 'Municipal Service Applications',
          desc: 'Su kullanım faturalandırması, ödeme entegrasyonları ve veri dashboardları içeren belediye servis uygulamaları.',
          tags: ['Flutter', 'API Integration', 'Payment', 'Data Viz'],
          code: 'gov/municipal-suite',
          image: '/projects/municipal.webp',
          wide: true,
        },
        {
          name: 'Go / Baduk Tournament Timer',
          desc: 'Eskişehir Go Oyuncuları Derneği için geliştirilen ve Google Play’de yayınlanan turnuva zamanlayıcı uygulaması. Japon/Kanada byoyomi ve ani ölüm modları, çoklu dil ve tema.',
          tags: ['Flutter', 'Android', 'Google Play'],
          code: 'app/go-timer',
          image: '/projects/go-timer.webp',
          url: 'https://play.google.com/store/apps/details?id=com.borakececi.gotimer',
        },
        {
          name: 'Chess Trainer',
          desc: 'Reklamsız ve çevrimdışı çalışan bir satranç antrenman uygulaması. Kendi 8×8 tahtası ve test edilmiş saf mantık çekirdeği üzerine kurulu.',
          tags: ['Flutter', 'Dart', 'Çevrimdışı', 'Lichess Puzzles'],
          code: 'app/chess-trainer',
          image: '/projects/chess.webp',
        },
        {
          name: 'Embedded & ESP32 Experiments',
          desc: 'ESP32, Arduino, Bluetooth ve sensör tabanlı yazılım-donanım entegrasyonları; üretim birimleri için işleri kolaylaştıran arıza tespit ve güncelleme otomasyonları.',
          tags: ['ESP32', 'Arduino', 'Bluetooth', 'Embedded'],
          code: 'hardware/esp32-lab',
          image: '/projects/esp32-pinout.webp',
          wide: true,
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
        { school: 'Anadolu Üniversitesi', program: 'İnşaat Mühendisliği — Lisans (%100 İngilizce)', period: '2013 — 2019' },
        { school: 'Gaziantep Üniversitesi', program: 'İş Sağlığı ve Güvenliği — Yüksek Lisans', period: '2021 — 2022' },
        { school: 'Halmstad University', program: 'İnşaat Mühendisliği — Erasmus Mobility Programme', period: '2018 — 2019' },
        { school: 'Anadolu Üniversitesi', program: 'Bilgisayar Programcılığı', period: 'Devam ediyor' },
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
      lead: 'Flutter, bir ERP entegrasyonu ya da belediye/iş akışı uygulaması — aklındakini yaz, birkaç gün içinde dönerim.',
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
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      process: 'Process',
      contact: 'Contact',
      cv: 'Download CV',
    },

    hero: {
      tag: 'Ankara, Türkiye · Open to new projects',
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
    },

    about: {
      eyebrow: 'About',
      title: 'I translate field logic into scalable software',
      paragraphs: [
        'Software Developer with hands-on experience building enterprise-level applications — including ERP, stock management, and system calculation tools.',
        'At BKS Holding I developed scalable mobile and backend systems, integrating with Logo Tiger ERP and optimizing business operations. Experienced in Flutter, Node.js, and embedded systems (Arduino, ESP32), with a focus on real-world problem solving and performance optimization.',
      ],
      facts: [
        { k: '5+', v: 'years across engineering & software' },
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
          role: 'Flutter Developer',
          company: 'BKS Holding',
          period: 'Jan 2023 — Jun 2026',
          bullets: [
            'As a team, rebuilt with Flutter the order, quote, and product-configuration screens that dealers and customers rely on every day in the field.',
            'Built a connected family of in-house enterprise apps: BKS Flow for business workflows, BKS Messenger for team chat, a CRM for customer complaints, and BKS Panel for management.',
            'Built a dynamic calculation engine that computes measurements, profiles, accessories, and pricing for custom products like folding glass, guillotine, and sliding systems.',
            'Built the integration layer that syncs stock and purchasing data with Logo Tiger ERP in real time, keeping the mobile side and accounting on the same data.',
            'Added PDF generation for quotes and order outputs.',
            'Developed tools that automate fault detection and updates for production units.',
            'Combined the Flutter front end with Firebase and Node.js services into systems that work end to end.',
          ],
        },
        {
          role: 'Software Developer',
          company: 'Independent / Project-based',
          period: '2024 — Present',
          bullets: [
            'Built Flutter apps for municipalities that handle water-usage billing, payments, and data tracking in simple, clear screens.',
            'Built and published gotimer, a Go / Baduk tournament timer, on Google Play for the Eskişehir Go Players Association — and keep shipping updates from real user feedback.',
            'Built Chess Trainer, an ad-free, fully offline chess training app.',
            'Developed Bluetooth and sensor-based hardware prototypes on ESP32 and Arduino.',
          ],
        },
        {
          role: 'Civil Engineer',
          company: 'Construction Industry',
          period: '2019 — 2022',
          bullets: [
            'Ran project management, site coordination, and stakeholder relations on construction sites — where I learned, hands-on, how a real problem actually gets solved.',
            'That on-site instinct is something I still use every day when turning business processes into software.',
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
      note: 'A few picks: dealer ordering, Logo Tiger stock sync, municipal billing, and a Go tournament timer.',
      items: [
        {
          name: 'BKS Panel',
          desc: 'A B2B platform for dealers — product catalog, pricing, orders, and quotes, connected to Logo Tiger ERP. Published on Google Play.',
          tags: ['Flutter', 'Firebase', 'Logo Tiger ERP', 'REST API'],
          code: 'platform/bks-panel',
          image: '/projects/bks-panel.webp',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bksbayiapp',
        },
        {
          name: 'BKS Flow',
          desc: 'An enterprise workflow app with dynamic forms, approval flows, and task/process tracking — with charts and reporting. Published on Google Play.',
          tags: ['Flutter', 'Firebase', 'Workflow', 'Dashboard'],
          code: 'app/bks-flow',
          image: '/projects/bks-flow.webp',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bksflow',
        },
        {
          name: 'BKS Smart',
          desc: 'A smart-control app that opens, closes, and controls the lighting of folding glass, pergola, and sliding systems from your phone. Published on Google Play.',
          tags: ['Flutter', 'IoT', 'Bluetooth', 'ESP32'],
          code: 'app/bks-smart',
          image: '/projects/bks-smart.webp',
          url: 'https://play.google.com/store/apps/details?id=com.bkscam.bks',
        },
        {
          name: 'Municipal Service Applications',
          desc: 'Municipal service apps featuring water-usage billing, payment integrations, and data dashboards.',
          tags: ['Flutter', 'API Integration', 'Payment', 'Data Viz'],
          code: 'gov/municipal-suite',
          image: '/projects/municipal.webp',
          wide: true,
        },
        {
          name: 'Go / Baduk Tournament Timer',
          desc: 'A tournament timer app built for the Eskişehir Go Players Association and published on Google Play. Japanese/Canadian byoyomi and sudden-death modes, multiple languages and themes.',
          tags: ['Flutter', 'Android', 'Google Play'],
          code: 'app/go-timer',
          image: '/projects/go-timer.webp',
          url: 'https://play.google.com/store/apps/details?id=com.borakececi.gotimer',
        },
        {
          name: 'Chess Trainer',
          desc: 'An ad-free, offline chess training app, built on its own 8×8 board and a tested, pure logic core.',
          tags: ['Flutter', 'Dart', 'Offline', 'Lichess Puzzles'],
          code: 'app/chess-trainer',
          image: '/projects/chess.webp',
        },
        {
          name: 'Embedded & ESP32 Experiments',
          desc: 'ESP32, Arduino, Bluetooth, and sensor-based hardware-software integration — including fault-detection and update automations that streamline work for production units.',
          tags: ['ESP32', 'Arduino', 'Bluetooth', 'Embedded'],
          code: 'hardware/esp32-lab',
          image: '/projects/esp32-pinout.webp',
          wide: true,
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
        { school: 'Anadolu University', program: 'Civil Engineering — Bachelor’s Degree (100% English)', period: '2013 — 2019' },
        { school: 'Gaziantep University', program: 'Occupational Health & Safety — Master’s Degree', period: '2021 — 2022' },
        { school: 'Halmstad University', program: 'Civil Engineering — Erasmus Mobility Programme', period: '2018 — 2019' },
        { school: 'Anadolu University', program: 'Computer Programming', period: 'Present' },
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
      lead: 'Flutter, an ERP integration, or a municipal/business workflow app — tell me what you have in mind and I’ll get back within a few days.',
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
