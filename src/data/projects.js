const projects = [
  {
    id: 'ticketing',
    title: {
      id: 'GoersTicket - Platform Ticketing Event',
      en: 'GoersTicket - Event Ticketing Platform',
    },
    image: '🎟️',
    badge: 'Vercel',
    shortDesc: {
      id: 'Platform ticketing konser & event modern dengan dompet e-ticket QR Code, checkout pembayaran QRIS instan, dan onsite scanner panitia.',
      en: 'Modern event & concert ticketing platform with QR code e-tickets, instant QRIS payments, and organizer onsite scanner.',
    },
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Prisma', 'PostgreSQL'],
    fullDesc: {
      id: 'GoersTicket adalah platform ticketing event terintegrasi yang terinspirasi oleh GoersApp. Dibangun dengan Next.js 16 App Router, React 19, dan Tailwind CSS v4. Aplikasi ini mencakup pencarian event interaktif, pemilihan tier tiket dinamis, alur checkout dengan simulasi pembayaran QRIS instan & Virtual Account, dompet tiket digital dengan kode QR asli, serta dashboard organizer dan alat pemindai (scanner) onsite untuk validasi tiket di lokasi acara.',
      en: 'GoersTicket is a full-stack event ticketing platform inspired by GoersApp, built with Next.js 16 App Router, React 19, and Tailwind CSS v4. Features comprehensive event discovery, dynamic multi-tier ticket selection, fast checkout with instant QRIS and Virtual Account simulation, digital ticket wallet with live QR codes, and an organizer dashboard with an onsite ticket scanner.',
    },
    features: {
      id: [
        'Eksplorasi & filter event interaktif berdasarkan kota dan kategori (Konser, Festival, Workshop, Rekreasi, Seni)',
        'Halaman detail event lengkap dengan banner poster, jadwal, lokasi Google Maps, dan syarat & ketentuan',
        'Sistem checkout cepat dengan perhitungan biaya tiket, platform fee, dan simulasi pembayaran QRIS instan',
        'Dompet tiket digital (Tiket Saya) dengan QR Code dinamis dan status tiket siap pakai',
        'Dashboard Organizer (GEM) untuk memantau metrik penjualan tiket, kuota kapasitas, dan total pendapatan',
        'Onsite QR Ticket Scanner & Validator di pintu masuk dengan validasi real-time dan deteksi tiket ganda',
      ],
      en: [
        'Interactive event exploration and filtering by category and city',
        'Detailed event pages featuring banner, venue Google Maps, terms, and dynamic ticket tiers',
        'Fast checkout workflow with automatic fee calculation and simulated instant QRIS payments',
        'Digital ticket wallet (My Tickets) with dynamic QR codes ready for gate scanning',
        'Organizer dashboard (GEM) tracking real-time ticket sales metrics, capacity, and revenue',
        'Onsite gate QR Ticket Scanner & Validator with instant validation and duplicate check',
      ],
    },
    techUsed: [
      'Next.js 16 (App Router)',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Prisma ORM',
      'PostgreSQL',
      'qrcode',
      'Canvas Confetti',
      'Lucide Icons',
    ],
    demoLink: 'https://ticketing-yudhaaa.vercel.app',
    githubLink: 'https://github.com/Yudhaaa-code/ticketing',
    gallery: ['🎟️', '📱', '📊'],
  },
  {
    id: 'ecommerce',
    title: {
      id: 'ACSA Plakat - E-Commerce Web App',
      en: 'ACSA Plakat - Custom E-Commerce Web App',
    },
    image: '🛒',
    badge: 'Vercel',
    shortDesc: {
      id: 'Platform belanja online plakat custom premium (akrilik, kayu, kristal, logam) dengan keranjang belanja, simulasi Midtrans, dan dashboard admin.',
      en: 'Bespoke plaque e-commerce platform featuring interactive cart, Midtrans payment gateway sandbox, WhatsApp consultation, and admin panel.',
    },
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    fullDesc: {
      id: 'Website e-commerce spesialis plakat penghargaan, piala kristal, dan merchandise custom premium (ACSA). Dilengkapi katalog interaktif dengan filter kategori, keranjang belanja real-time (Cart Drawer), checkout dengan simulasi payment gateway Midtrans Snap sandbox, fitur konsultasi desain kustom via WhatsApp, serta dashboard admin terintegrasi untuk kelola produk dan data pesanan.',
      en: 'A modern e-commerce web platform for bespoke acrylic, wooden, crystal, and metal plaques (ACSA). Built with Next.js 16 and React 19, featuring categorized catalog browsing, interactive cart drawer, simulated Midtrans Snap payment gateway sandbox, direct WhatsApp design consultation, and full admin order management.',
    },
    features: {
      id: [
        'Katalog produk interaktif dengan pencarian kategori (Akrilik, Kayu, Kristal, Logam)',
        'Keranjang belanja real-time (Cart Drawer) dengan update kuantitas dinamis dan ringkasan total',
        'Sistem checkout terintegrasi dengan simulasi payment gateway Midtrans Snap sandbox',
        'Fitur konsultasi custom order kilat yang terhubung langsung ke WhatsApp',
        'Dashboard Admin untuk memantau status pesanan, stok produk, dan database produk',
        'Riwayat pesanan pengguna (Order History) dan sistem autentikasi login/register',
      ],
      en: [
        'Dynamic product catalog with category search (Acrylic, Wood, Crystal, Metal plaques)',
        'Interactive real-time slide-out cart drawer with dynamic quantity updates and price totals',
        'Checkout workflow integrated with simulated Midtrans Snap payment gateway sandbox',
        'One-click instant WhatsApp custom design consultation integration',
        'Admin dashboard for monitoring orders, product inventory, and customer records',
        'User order history tracking and authentication system',
      ],
    },
    techUsed: [
      'Next.js 16 (App Router)',
      'React 19',
      'TypeScript',
      'Prisma ORM',
      'Tailwind CSS',
      'Framer Motion',
      'Midtrans Sandbox API',
      'Lucide Icons',
    ],
    demoLink: 'https://ecommerce-yudhaaa.vercel.app',
    githubLink: 'https://github.com/Yudhaaa-code/E-Commerce',
    gallery: ['🛍️', '💳', '📦'],
  },
]

export default projects
