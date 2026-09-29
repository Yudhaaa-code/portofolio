import pptxgen from "pptxgenjs";
import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.resolve(__dirname, "../public/downloads");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Colors matching Website Palette (Dark Obsidian, Emerald, Cyan)
const COLORS = {
  bg: "090D16",
  bgCard: "111827",
  borderCard: "1F293D",
  emerald: "10B981",
  cyan: "06B6D4",
  textWhite: "FFFFFF",
  textMuted: "94A3B8",
  textSecondary: "CBD5E1",
};

const profileImgPath = path.resolve(__dirname, "../src/assets/1.jpg");

async function generatePPTX() {
  console.log("Generating PPTX...");
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Yudha Putra Anangga";
  pptx.title = "Portfolio - Yudha Putra Anangga";

  // --- SLIDE 1: COVER ---
  const slide1 = pptx.addSlide();
  slide1.background = { color: COLORS.bg };

  // Decorative glow bar
  slide1.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 13.33,
    h: 0.1,
    fill: { color: COLORS.emerald },
  });

  // Profile photo circle
  if (fs.existsSync(profileImgPath)) {
    slide1.addImage({
      path: profileImgPath,
      x: 1.0,
      y: 1.4,
      w: 2.8,
      h: 2.8,
      rounding: true,
    });
  }

  // Greeting
  slide1.addText("HALO, SAYA", {
    x: 4.2,
    y: 1.3,
    w: 8.5,
    h: 0.4,
    fontSize: 14,
    fontFace: "Arial",
    bold: true,
    color: COLORS.emerald,
  });

  // Name
  slide1.addText("Yudha Putra Anangga", {
    x: 4.2,
    y: 1.7,
    w: 8.5,
    h: 0.9,
    fontSize: 36,
    fontFace: "Arial",
    bold: true,
    color: COLORS.textWhite,
  });

  // Title
  slide1.addText("Full Stack Web Developer", {
    x: 4.2,
    y: 2.6,
    w: 8.5,
    h: 0.5,
    fontSize: 20,
    fontFace: "Arial",
    bold: true,
    color: COLORS.cyan,
  });

  // Description
  slide1.addText(
    "Lulusan Sistem Informasi dengan pengalaman 2+ tahun dalam pengembangan web modern, performan tinggi, dan user-friendly menggunakan ekosistem React, Node.js, dan cloud technologies.",
    {
      x: 4.2,
      y: 3.2,
      w: 8.2,
      h: 0.9,
      fontSize: 13,
      fontFace: "Arial",
      color: COLORS.textMuted,
      lineSpacing: 18,
    }
  );

  // Quick Badges
  const badges = ["⚛️ React JS", "🟢 Node.js", "🍃 MongoDB", "🐬 MySQL", "🎨 Tailwind CSS"];
  badges.forEach((b, i) => {
    slide1.addShape(pptx.ShapeType.roundRect, {
      x: 4.2 + i * 1.6,
      y: 4.3,
      w: 1.5,
      h: 0.45,
      rectRadius: 0.1,
      fill: { color: COLORS.bgCard },
      line: { color: COLORS.borderCard, width: 1 },
    });
    slide1.addText(b, {
      x: 4.2 + i * 1.6,
      y: 4.3,
      w: 1.5,
      h: 0.45,
      fontSize: 10,
      fontFace: "Arial",
      align: "center",
      color: COLORS.textWhite,
    });
  });

  // Footer Tagline
  slide1.addText("Portfolio Presentation Deck • 2026", {
    x: 1.0,
    y: 6.8,
    w: 11.33,
    h: 0.4,
    fontSize: 10,
    fontFace: "Arial",
    color: COLORS.textMuted,
  });

  // --- SLIDE 2: ABOUT ME ---
  const slide2 = pptx.addSlide();
  slide2.background = { color: COLORS.bg };

  slide2.addText("TENTANG SAYA", {
    x: 0.8,
    y: 0.6,
    w: 10,
    h: 0.3,
    fontSize: 12,
    fontFace: "Arial",
    bold: true,
    color: COLORS.emerald,
  });

  slide2.addText("Profil & Komitmen Profesional", {
    x: 0.8,
    y: 0.9,
    w: 10,
    h: 0.6,
    fontSize: 26,
    fontFace: "Arial",
    bold: true,
    color: COLORS.textWhite,
  });

  // Main About Box
  slide2.addShape(pptx.ShapeType.roundRect, {
    x: 0.8,
    y: 1.7,
    w: 11.7,
    h: 1.7,
    rectRadius: 0.15,
    fill: { color: COLORS.bgCard },
    line: { color: COLORS.borderCard, width: 1 },
  });

  slide2.addText(
    "Saya adalah seorang Full Stack Web Developer lulusan Sistem Informasi dengan pengalaman lebih dari 2 tahun dalam merancang dan mengembangkan aplikasi web skala produksi.\n\nFokus utama saya adalah membangun aplikasi yang tidak hanya estetik dan responsif dari sisi front-end, namun juga memiliki arsitektur backend yang kokoh, terstruktur, serta database yang teroptimasi secara efisien.",
    {
      x: 1.1,
      y: 1.9,
      w: 11.1,
      h: 1.3,
      fontSize: 13,
      fontFace: "Arial",
      color: COLORS.textSecondary,
      lineSpacing: 20,
    }
  );

  // 3 Value Pillars
  const pillars = [
    {
      title: "🎨 Frontend Excellence",
      desc: "Spesialisasi di React.js, Tailwind CSS, animasi interaktif Framer Motion, dan integrasi komponen modern berbasis shadcn/ui.",
    },
    {
      title: "⚙️ Robust Backend & API",
      desc: "Pengembangan RESTful API menggunakan Node.js dan Express, autentikasi aman, dan integrasi payment gateway pihak ketiga.",
    },
    {
      title: "🗄️ Database & Optimization",
      desc: "Manajemen basis data relasional (MySQL) dan NoSQL (MongoDB), pemodelan skema efisien, serta optimasi query kecepatan tinggi.",
    },
  ];

  pillars.forEach((p, idx) => {
    const xPos = 0.8 + idx * 4.0;
    slide2.addShape(pptx.ShapeType.roundRect, {
      x: xPos,
      y: 3.7,
      w: 3.7,
      h: 2.7,
      rectRadius: 0.15,
      fill: { color: COLORS.bgCard },
      line: { color: COLORS.borderCard, width: 1 },
    });

    slide2.addText(p.title, {
      x: xPos + 0.2,
      y: 3.9,
      w: 3.3,
      h: 0.5,
      fontSize: 14,
      fontFace: "Arial",
      bold: true,
      color: COLORS.cyan,
    });

    slide2.addText(p.desc, {
      x: xPos + 0.2,
      y: 4.5,
      w: 3.3,
      h: 1.7,
      fontSize: 11,
      fontFace: "Arial",
      color: COLORS.textMuted,
      lineSpacing: 16,
    });
  });

  // --- SLIDE 3: TECHNICAL SKILLS ---
  const slide3 = pptx.addSlide();
  slide3.background = { color: COLORS.bg };

  slide3.addText("KEAHLIAN TEKNIS", {
    x: 0.8,
    y: 0.6,
    w: 10,
    h: 0.3,
    fontSize: 12,
    fontFace: "Arial",
    bold: true,
    color: COLORS.emerald,
  });

  slide3.addText("Skill Matrix & Penguasaan Teknologi", {
    x: 0.8,
    y: 0.9,
    w: 10,
    h: 0.6,
    fontSize: 26,
    fontFace: "Arial",
    bold: true,
    color: COLORS.textWhite,
  });

  const skillGroups = [
    {
      group: "Frontend Development",
      items: [
        { name: "React JS", level: "90%" },
        { name: "JavaScript (ES6+)", level: "88%" },
        { name: "HTML5 & CSS3", level: "95%" },
        { name: "Tailwind CSS", level: "85%" },
      ],
    },
    {
      group: "Backend & Database",
      items: [
        { name: "Node.js & Express", level: "85%" },
        { name: "RESTful API Design", level: "85%" },
        { name: "MySQL / Sequelize", level: "80%" },
        { name: "MongoDB / Mongoose", level: "78%" },
      ],
    },
    {
      group: "Tools, UI & Best Practices",
      items: [
        { name: "Git & GitHub Versioning", level: "87%" },
        { name: "Framer Motion & Animations", level: "82%" },
        { name: "shadcn/ui & Radix Primitives", level: "85%" },
        { name: "Responsive Web Design", level: "95%" },
      ],
    },
  ];

  skillGroups.forEach((sg, colIdx) => {
    const xPos = 0.8 + colIdx * 4.0;
    slide3.addShape(pptx.ShapeType.roundRect, {
      x: xPos,
      y: 1.8,
      w: 3.7,
      h: 4.8,
      rectRadius: 0.15,
      fill: { color: COLORS.bgCard },
      line: { color: COLORS.borderCard, width: 1 },
    });

    slide3.addText(sg.group, {
      x: xPos + 0.3,
      y: 2.1,
      w: 3.1,
      h: 0.4,
      fontSize: 14,
      fontFace: "Arial",
      bold: true,
      color: COLORS.emerald,
    });

    sg.items.forEach((item, itemIdx) => {
      const yBase = 2.7 + itemIdx * 0.9;
      slide3.addText(item.name, {
        x: xPos + 0.3,
        y: yBase,
        w: 2.3,
        h: 0.3,
        fontSize: 11,
        fontFace: "Arial",
        bold: true,
        color: COLORS.textWhite,
      });

      slide3.addText(item.level, {
        x: xPos + 2.6,
        y: yBase,
        w: 0.8,
        h: 0.3,
        fontSize: 11,
        fontFace: "Arial",
        align: "right",
        bold: true,
        color: COLORS.cyan,
      });

      // Progress bar background
      slide3.addShape(pptx.ShapeType.roundRect, {
        x: xPos + 0.3,
        y: yBase + 0.35,
        w: 3.1,
        h: 0.12,
        rectRadius: 0.05,
        fill: { color: "1E293B" },
      });

      // Progress bar fill
      const fillW = (parseFloat(item.level) / 100) * 3.1;
      slide3.addShape(pptx.ShapeType.roundRect, {
        x: xPos + 0.3,
        y: yBase + 0.35,
        w: fillW,
        h: 0.12,
        rectRadius: 0.05,
        fill: { color: COLORS.emerald },
      });
    });
  });

  // --- SLIDE 4: FEATURED PROJECTS (PART 1) ---
  const slide4 = pptx.addSlide();
  slide4.background = { color: COLORS.bg };

  slide4.addText("PORTFOLIO SHOWCASE (PART 1)", {
    x: 0.8,
    y: 0.6,
    w: 10,
    h: 0.3,
    fontSize: 12,
    fontFace: "Arial",
    bold: true,
    color: COLORS.emerald,
  });

  slide4.addText("Proyek Utama: E-Commerce & Academic System", {
    x: 0.8,
    y: 0.9,
    w: 10,
    h: 0.6,
    fontSize: 26,
    fontFace: "Arial",
    bold: true,
    color: COLORS.textWhite,
  });

  const proj1 = {
    title: "🛒 Website E-Commerce Full Stack",
    stack: "React JS • Node.js • Express • MongoDB • Tailwind CSS • Stripe",
    desc: "Platform belanja online komprehensif dengan katalog produk dinamis, keranjang belanja real-time, integrasi gateway pembayaran Stripe, riwayat pesanan, dan panel dashboard admin lengkap.",
    features: [
      "• Pencarian dan filter kategori produk multi-parameter",
      "• Manajemen keranjang belanja dan checkout terenkripsi",
      "• Integrasi webhook transaksi pembayaran",
      "• Panel admin untuk pengelolaan data produk & stok",
    ],
  };

  const proj2 = {
    title: "🏫 Sistem Informasi Manajemen Sekolah",
    stack: "React JS • Node.js • Express • MySQL • Sequelize • Bootstrap",
    desc: "Aplikasi web manajemen akademik terintegrasi untuk pengelolaan data master siswa, guru, pembagian kelas, jadwal pelajaran otomatis, input penilaian rapor, dan absensi terpusat.",
    features: [
      "• Hak akses bertingkat multi-user (Admin, Guru, Siswa)",
      "• Modul pembuatan jadwal pelajaran cerdas",
      "• Pengolahan nilai dan fitur cetak rapor digital",
      "• Pelaporan kehadiran siswa dan guru berkala",
    ],
  };

  [proj1, proj2].forEach((proj, idx) => {
    const yPos = 1.7 + idx * 2.6;
    slide4.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: yPos,
      w: 11.7,
      h: 2.35,
      rectRadius: 0.15,
      fill: { color: COLORS.bgCard },
      line: { color: COLORS.borderCard, width: 1 },
    });

    slide4.addText(proj.title, {
      x: 1.1,
      y: yPos + 0.2,
      w: 8.0,
      h: 0.4,
      fontSize: 16,
      fontFace: "Arial",
      bold: true,
      color: COLORS.textWhite,
    });

    slide4.addText(proj.stack, {
      x: 1.1,
      y: yPos + 0.6,
      w: 11.0,
      h: 0.3,
      fontSize: 10,
      fontFace: "Arial",
      bold: true,
      color: COLORS.cyan,
    });

    slide4.addText(proj.desc, {
      x: 1.1,
      y: yPos + 0.95,
      w: 6.0,
      h: 1.2,
      fontSize: 11,
      fontFace: "Arial",
      color: COLORS.textSecondary,
      lineSpacing: 16,
    });

    slide4.addText(proj.features.join("\n"), {
      x: 7.4,
      y: yPos + 0.95,
      w: 4.8,
      h: 1.2,
      fontSize: 10.5,
      fontFace: "Arial",
      color: COLORS.textMuted,
      lineSpacing: 15,
    });
  });

  // --- SLIDE 5: FEATURED PROJECTS (PART 2) ---
  const slide5 = pptx.addSlide();
  slide5.background = { color: COLORS.bg };

  slide5.addText("PORTFOLIO SHOWCASE (PART 2)", {
    x: 0.8,
    y: 0.6,
    w: 10,
    h: 0.3,
    fontSize: 12,
    fontFace: "Arial",
    bold: true,
    color: COLORS.emerald,
  });

  slide5.addText("Proyek Utama: Analytics & Modern Web", {
    x: 0.8,
    y: 0.9,
    w: 10,
    h: 0.6,
    fontSize: 26,
    fontFace: "Arial",
    bold: true,
    color: COLORS.textWhite,
  });

  const proj3 = {
    title: "📊 Dashboard Analytics & Visualisasi Data",
    stack: "React JS • Chart.js • React Query • REST API • Tailwind CSS",
    desc: "Dashboard analitik interaktif untuk visualisasi metrik bisnis secara real-time. Menampilkan grafik penjualan, metrik konversi, filter rentang waktu, dan export data.",
    highlights: "Multi-chart (Line, Bar, Pie) • Date Filtering • Export Excel/PDF",
  };

  const proj4 = {
    title: "✨ Modern Interactive Portfolio Web",
    stack: "React JS • Tailwind CSS • Framer Motion • shadcn/ui • Vite",
    desc: "Aplikasi landing page portofolio berkelas tinggi dengan dark tech theme, aksen Emerald & Cyan, micro-animations, dan fitur download deck presentasi terintegrasi.",
    highlights: "Full Dark Theme • 60 FPS Animations • Responsive & SEO Friendly",
  };

  [proj3, proj4].forEach((proj, idx) => {
    const yPos = 1.7 + idx * 2.6;
    slide5.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: yPos,
      w: 11.7,
      h: 2.35,
      rectRadius: 0.15,
      fill: { color: COLORS.bgCard },
      line: { color: COLORS.borderCard, width: 1 },
    });

    slide5.addText(proj.title, {
      x: 1.1,
      y: yPos + 0.2,
      w: 10.0,
      h: 0.4,
      fontSize: 16,
      fontFace: "Arial",
      bold: true,
      color: COLORS.textWhite,
    });

    slide5.addText(proj.stack, {
      x: 1.1,
      y: yPos + 0.6,
      w: 11.0,
      h: 0.3,
      fontSize: 10,
      fontFace: "Arial",
      bold: true,
      color: COLORS.cyan,
    });

    slide5.addText(proj.desc, {
      x: 1.1,
      y: yPos + 0.95,
      w: 11.0,
      h: 0.65,
      fontSize: 11,
      fontFace: "Arial",
      color: COLORS.textSecondary,
      lineSpacing: 16,
    });

    slide5.addText(`Key Highlights: ${proj.highlights}`, {
      x: 1.1,
      y: yPos + 1.7,
      w: 11.0,
      h: 0.4,
      fontSize: 10.5,
      fontFace: "Arial",
      bold: true,
      color: COLORS.emerald,
    });
  });

  // --- SLIDE 6: CONTACT & CLOSING ---
  const slide6 = pptx.addSlide();
  slide6.background = { color: COLORS.bg };

  slide6.addText("KOLABORASI & KONTAK", {
    x: 0.8,
    y: 0.8,
    w: 10,
    h: 0.3,
    fontSize: 12,
    fontFace: "Arial",
    bold: true,
    color: COLORS.emerald,
  });

  slide6.addText("Mari Berkolaborasi Membangun Solusi Hebat", {
    x: 0.8,
    y: 1.1,
    w: 11,
    h: 0.7,
    fontSize: 28,
    fontFace: "Arial",
    bold: true,
    color: COLORS.textWhite,
  });

  slide6.addText(
    "Saya siap berkontribusi dalam tim Anda untuk mengembangkan produk digital berkualitas tinggi. Terbuka untuk kesempatan Full-Time, Kontrak, maupun Proyek Freelance.",
    {
      x: 0.8,
      y: 1.8,
      w: 10,
      h: 0.7,
      fontSize: 13,
      fontFace: "Arial",
      color: COLORS.textMuted,
      lineSpacing: 18,
    }
  );

  const contactChannels = [
    { label: "EMAIL", val: "yudhaputra@example.com", icon: "✉️" },
    { label: "GITHUB", val: "github.com/Yudhaas-code", icon: "🐙" },
    { label: "LINKEDIN", val: "linkedin.com/in/yudha-putra-anangga", icon: "💼" },
    { label: "STATUS", val: "Available for Opportunities", icon: "🟢" },
  ];

  contactChannels.forEach((c, idx) => {
    const xPos = 0.8 + (idx % 2) * 6.0;
    const yPos = 2.8 + Math.floor(idx / 2) * 1.8;

    slide6.addShape(pptx.ShapeType.roundRect, {
      x: xPos,
      y: yPos,
      w: 5.7,
      h: 1.5,
      rectRadius: 0.15,
      fill: { color: COLORS.bgCard },
      line: { color: COLORS.borderCard, width: 1 },
    });

    slide6.addText(`${c.icon}  ${c.label}`, {
      x: xPos + 0.3,
      y: yPos + 0.25,
      w: 5.1,
      h: 0.3,
      fontSize: 10,
      fontFace: "Arial",
      bold: true,
      color: COLORS.emerald,
    });

    slide6.addText(c.val, {
      x: xPos + 0.3,
      y: yPos + 0.65,
      w: 5.1,
      h: 0.5,
      fontSize: 14,
      fontFace: "Arial",
      bold: true,
      color: COLORS.textWhite,
    });
  });

  slide6.addText("Terima kasih atas waktu dan perhatian Anda • Yudha Putra Anangga", {
    x: 0.8,
    y: 6.8,
    w: 11.7,
    h: 0.4,
    fontSize: 10,
    fontFace: "Arial",
    align: "center",
    color: COLORS.textMuted,
  });

  const pptxFile = path.join(outputDir, "Portfolio-Yudha-Putra-Anangga.pptx");
  await pptx.writeFile({ fileName: pptxFile });
  console.log("PPTX generated successfully at:", pptxFile);
}

async function generatePDF() {
  console.log("Generating PDF...");
  // Landscape 16:9 presentation (297mm x 167mm or A4 landscape: 297mm x 210mm)
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: [297, 167.06], // 16:9 aspect ratio
  });

  const W = 297;
  const H = 167.06;

  function setBg() {
    doc.setFillColor(9, 13, 22); // #090D16
    doc.rect(0, 0, W, H, "F");

    // Decorative top emerald line
    doc.setFillColor(16, 185, 129);
    doc.rect(0, 0, W, 2, "F");
  }

  // --- PAGE 1: COVER ---
  setBg();
  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("HALO, SAYA", 25, 45);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(32);
  doc.text("Yudha Putra Anangga", 25, 60);

  doc.setTextColor(6, 182, 212);
  doc.setFontSize(18);
  doc.text("Full Stack Web Developer", 25, 72);

  doc.setTextColor(148, 163, 184);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  const bio = "Lulusan Sistem Informasi dengan pengalaman 1 tahun dalam pengembangan web modern, performan tinggi, dan user-friendly menggunakan ekosistem React, Node.js, dan database management.";
  doc.text(doc.splitTextToSize(bio, 170), 25, 85);

  // Profile image — original 107x160px (portrait)
  // Maintain aspect ratio: height=62mm, width=62*(107/160)=41.4mm
  if (fs.existsSync(profileImgPath)) {
    try {
      const imgData = fs.readFileSync(profileImgPath);
      const base64 = `data:image/jpeg;base64,${imgData.toString("base64")}`;
      const imgH = 62;
      const imgW = Math.round(imgH * (107 / 160));
      const imgX = 244;
      const imgY = 35;
      doc.addImage(base64, "JPEG", imgX, imgY, imgW, imgH);
      // Draw emerald rounded border frame
      doc.setDrawColor(16, 185, 129);
      doc.setLineWidth(1.2);
      doc.rect(imgX, imgY, imgW, imgH);
    } catch (e) {
      console.warn("Could not embed image into PDF:", e.message);
    }
  }

  // Badges (sesuai website)
  const badges = ["React JS", "JavaScript", "Node.js", "Tailwind CSS", "MariaDB", "MySQL", "Git & GitHub"];
  badges.forEach((b, i) => {
    const x = 25 + i * 35;
    if (x + 30 <= 240) {
      doc.setFillColor(17, 24, 39);
      doc.setDrawColor(31, 41, 55);
      doc.roundedRect(x, 115, 32, 10, 2, 2, "FD");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8.5);
      doc.text(b, x + 16, 121.5, { align: "center" });
    }
  });

  doc.setTextColor(100, 116, 139);
  doc.setFontSize(9);
  doc.text("Portfolio Presentation Deck • 2026", 25, 155);

  // --- PAGE 2: ABOUT ---
  doc.addPage([297, 167.06], "landscape");
  setBg();

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("TENTANG SAYA", 20, 22);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text("Profil & Ringkasan Pengalaman", 20, 32);

  // Main about card
  doc.setFillColor(17, 24, 39);
  doc.setDrawColor(31, 41, 55);
  doc.roundedRect(20, 42, 257, 40, 3, 3, "FD");

  doc.setTextColor(203, 213, 225);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  const aboutP1 = "Saya adalah lulusan Sistem Informasi dengan pengalaman 1 tahun dalam pengembangan web. Saya memiliki minat yang besar pada pengembangan front-end dan back-end.";
  const aboutP2 = "Kemampuan saya meliputi pembuatan website dari konsep hingga produksi, integrasi API, optimasi performa, dan penerapan prinsip UI/UX yang baik. Saya senang mempelajari teknologi baru dan selalu berusaha memberikan kode yang bersih dan terstruktur.";
  doc.text(doc.splitTextToSize(`${aboutP1}\n\n${aboutP2}`, 245), 26, 51);

  // About Stats (sesuai data website yang baru diubah user: 2 proyek, 0 klien puas)
  const stats = [
    { num: "2", label: "Proyek Selesai", desc: "Aplikasi web skala produksi (Vercel)" },
    { num: "0", label: "Klien Puas", desc: "Fokus pengembangan produk & portfolio" },
    { num: "1", label: "Tahun Pengalaman", desc: "Eksplorasi & implementasi aktif" },
  ];

  stats.forEach((st, idx) => {
    const x = 20 + idx * 88;
    doc.setFillColor(17, 24, 39);
    doc.setDrawColor(16, 185, 129);
    doc.setLineWidth(0.6);
    doc.roundedRect(x, 90, 81, 58, 3, 3, "FD");

    doc.setTextColor(16, 185, 129);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text(st.num, x + 40, 110, { align: "center" });

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.text(st.label, x + 40, 122, { align: "center" });

    doc.setTextColor(148, 163, 184);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.text(st.desc, x + 40, 134, { align: "center" });
  });

  // --- PAGE 3: SKILLS ---
  doc.addPage([297, 167.06], "landscape");
  setBg();

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("KEAHLIAN TEKNIS", 20, 22);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text("Penguasaan Teknologi & Tools", 20, 32);

  const skillsList = [
    { icon: "⚛️", name: "React JS", category: "Frontend Core" },
    { icon: "📜", name: "JavaScript", category: "Programming Language" },
    { icon: "🟢", name: "Node.js", category: "Backend Runtime" },
    { icon: "🎨", name: "HTML & CSS", category: "Web Standards" },
    { icon: "🌊", name: "Tailwind CSS", category: "Styling Framework" },
    { icon: "🦭", name: "MariaDB", category: "Relational Database" },
    { icon: "🐬", name: "MySQL", category: "Relational Database" },
    { icon: "🐙", name: "Git & GitHub", category: "Version Control" },
  ];

  skillsList.forEach((sk, idx) => {
    const col = idx % 4;
    const row = Math.floor(idx / 4);
    const x = 20 + col * 66;
    const y = 50 + row * 48;

    doc.setFillColor(17, 24, 39);
    doc.setDrawColor(31, 41, 55);
    doc.roundedRect(x, y, 59, 40, 3, 3, "FD");

    // Top indicator
    doc.setFillColor(16, 185, 129);
    doc.circle(x + 12, y + 14, 4, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(sk.name, x + 20, y + 16);

    doc.setTextColor(6, 182, 212);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(sk.category, x + 12, y + 27);
  });

  // --- PAGE 4: PROJECT 1 (GOERSTICKET) ---
  doc.addPage([297, 167.06], "landscape");
  setBg();

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("PORTOFOLIO PROYEK UNGGULAN (1)", 20, 22);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text("GoersTicket - Platform Ticketing Event", 20, 32);

  // Big Showcase Card
  doc.setFillColor(17, 24, 39);
  doc.setDrawColor(31, 41, 55);
  doc.roundedRect(20, 42, 257, 110, 3, 3, "FD");

  // Vercel Live Badge
  doc.setFillColor(9, 13, 22);
  doc.setDrawColor(16, 185, 129);
  doc.roundedRect(28, 49, 75, 8, 2, 2, "FD");
  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("▲ DEPLOYED ON VERCEL • LIVE DEMO", 32, 54.5);

  // Live URL & GitHub
  doc.setTextColor(6, 182, 212);
  doc.setFontSize(9.5);
  doc.text("Demo: https://ticketing-yudhaaa.vercel.app  •  Repo: github.com/Yudhaaa-code/ticketing", 110, 54.5);

  // Tech Stack Subtitle
  doc.setTextColor(16, 185, 129);
  doc.setFontSize(10.5);
  doc.setFont("helvetica", "bold");
  doc.text("Tech Stack: Next.js 16 (App Router) • React 19 • Tailwind CSS v4 • Prisma ORM • PostgreSQL", 28, 65);

  // Left Column: Detailed Description
  doc.setTextColor(203, 213, 225);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const descTicket = "GoersTicket adalah platform ticketing event terintegrasi yang terinspirasi oleh GoersApp. Mengakomodasi pencarian event interaktif, pemilihan tier tiket dinamis, alur checkout dengan simulasi pembayaran QRIS instan & Virtual Account, dompet tiket digital dengan kode QR asli, serta dashboard organizer dan alat pemindai (scanner) onsite untuk validasi tiket di lokasi acara.";
  doc.text(doc.splitTextToSize(descTicket, 120), 28, 73);

  // Right Column: Key Features
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Fitur & Keunggulan Utama:", 158, 65);

  const featuresTicket = [
    "• Eksplorasi & filter event interaktif (Konser, Festival, Workshop, Seni)",
    "• Detail venue Google Maps, jadwal lengkap, & tier tiket (VIP, Regular)",
    "• Checkout cepat + simulasi pembayaran QRIS instan & Virtual Account",
    "• Dompet tiket digital (Tiket Saya) dengan QR Code dinamis via qrcode",
    "• Dashboard Organizer (GEM) untuk metrik penjualan dan kapasitas",
    "• Onsite QR Ticket Scanner & Validator pintu gerbang anti-duplikasi",
  ];

  featuresTicket.forEach((f, i) => {
    doc.setTextColor(148, 163, 184);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.2);
    doc.text(doc.splitTextToSize(f, 110), 158, 73 + i * 11);
  });

  // --- PAGE 5: PROJECT 2 (ACSA PLAKAT) ---
  doc.addPage([297, 167.06], "landscape");
  setBg();

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("PORTOFOLIO PROYEK UNGGULAN (2)", 20, 22);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text("ACSA Plakat - E-Commerce Web App", 20, 32);

  // Big Showcase Card
  doc.setFillColor(17, 24, 39);
  doc.setDrawColor(31, 41, 55);
  doc.roundedRect(20, 42, 257, 110, 3, 3, "FD");

  // Vercel Live Badge
  doc.setFillColor(9, 13, 22);
  doc.setDrawColor(16, 185, 129);
  doc.roundedRect(28, 49, 75, 8, 2, 2, "FD");
  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("▲ DEPLOYED ON VERCEL • LIVE DEMO", 32, 54.5);

  // Live URL & GitHub
  doc.setTextColor(6, 182, 212);
  doc.setFontSize(9.5);
  doc.text("Demo: https://ecommerce-yudhaaa.vercel.app  •  Repo: github.com/Yudhaaa-code/E-Commerce", 110, 54.5);

  // Tech Stack Subtitle
  doc.setTextColor(16, 185, 129);
  doc.setFontSize(10.5);
  doc.setFont("helvetica", "bold");
  doc.text("Tech Stack: Next.js 16 (App Router) • React 19 • TypeScript • Prisma ORM • Tailwind CSS • Framer Motion", 28, 65);

  // Left Column: Detailed Description
  doc.setTextColor(203, 213, 225);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const descACSA = "Website e-commerce spesialis plakat penghargaan, piala kristal, dan merchandise custom premium (ACSA). Dilengkapi katalog interaktif dengan filter kategori, keranjang belanja real-time (Cart Drawer), checkout dengan simulasi payment gateway Midtrans Snap sandbox, fitur konsultasi desain kustom via WhatsApp resmi, serta dashboard admin terintegrasi untuk kelola produk dan data pesanan.";
  doc.text(doc.splitTextToSize(descACSA, 120), 28, 73);

  // Right Column: Key Features
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Fitur & Keunggulan Utama:", 158, 65);

  const featuresACSA = [
    "• Katalog produk kustom rapi (Akrilik, Kayu, Kristal, Logam)",
    "• Keranjang belanja real-time (Cart Drawer) & kalkulasi dinamis",
    "• Integrasi checkout payment gateway Midtrans Snap sandbox",
    "• Tombol order cepat terhubung langsung ke WhatsApp konsultasi",
    "• Dashboard Admin terintegrasi untuk kelola produk & pesanan",
    "• Riwayat pesanan pengguna (Order History) & sistem autentikasi",
  ];

  featuresACSA.forEach((f, i) => {
    doc.setTextColor(148, 163, 184);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.2);
    doc.text(doc.splitTextToSize(f, 110), 158, 73 + i * 11);
  });

  // --- PAGE 6: CONTACT & CLOSING ---
  doc.addPage([297, 167.06], "landscape");
  setBg();

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("KOLABORASI & HUBUNGI", 20, 22);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text("Mari Berkolaborasi Membangun Solusi Hebat", 20, 32);

  doc.setTextColor(148, 163, 184);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Saya siap berkontribusi dalam tim Anda untuk mengembangkan produk digital berkualitas tinggi.\nTerbuka untuk kesempatan Full-Time, Kontrak, maupun Proyek Freelance.", 20, 44);

  // Channels sesuai data kontak asli Yudha di website
  const channels = [
    { label: "EMAIL", val: "yuda99354@gmail.com" },
    { label: "TELEPON / WHATSAPP", val: "+62 895 3643 58323" },
    { label: "GITHUB", val: "github.com/Yudhaaa-code" },
    { label: "LINKEDIN", val: "linkedin.com/in/yudhaanangga" },
  ];

  channels.forEach((c, idx) => {
    const x = 20 + (idx % 2) * 132;
    const y = 66 + Math.floor(idx / 2) * 36;
    doc.setFillColor(17, 24, 39);
    doc.setDrawColor(31, 41, 55);
    doc.roundedRect(x, y, 125, 30, 3, 3, "FD");

    doc.setTextColor(16, 185, 129);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(c.label, x + 8, y + 10);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.text(c.val, x + 8, y + 20);
  });

  doc.setTextColor(100, 116, 139);
  doc.setFontSize(9);
  doc.text("Terima kasih atas waktu dan perhatian Anda • Yudha Putra Anangga", W / 2, 155, { align: "center" });

  const pdfFile = path.join(outputDir, "Portfolio-Yudha-Putra-Anangga.pdf");
  doc.save(pdfFile);
  console.log("PDF generated successfully at:", pdfFile);
}

async function main() {
  try {
    // PPTX tidak digunakan, hanya generate PDF
    await generatePDF();
    console.log("Portfolio PDF generated successfully!");
  } catch (err) {
    console.error("Error generating portfolio documents:", err);
    process.exit(1);
  }
}

main();
