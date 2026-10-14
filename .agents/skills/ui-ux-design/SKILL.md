---
name: ui-ux-design
description: >-
  Use this skill whenever designing, building, optimizing, or reviewing user interfaces (UI) and user experiences (UX) across projects, components, and product pages. Enforces visual hierarchy, typography, color & contrast, layout, spacing, iconography, and user action flow best practices.
---

# General UI/UX Design Rules & Best Practices

Panduan standar dan aturan dasar desain antarmuka (*UI*) serta pengalaman pengguna (*UX*) yang wajib diterapkan dalam setiap perancangan dan implementasi proyek.

---

## 1. Visual Hierarchy & Information Flow
* **Letakkan Sinyal Kepercayaan di Awal:** Posisikan bukti sosial (*social proof*) seperti rating dan ulasan dekat dengan identitas utama produk (judul/nama) agar pengguna langsung merasa yakin.
* **Perjelas Informasi Kunci:** Pastikan pengguna dapat memahami tiga hal penting secara instan tanpa perlu berpikir keras:
  1. Apa produknya? (*Product identity*)
  2. Seberapa bagus/terpercaya? (*Rating & reviews*)
  3. Berapa harganya? (*Pricing*)
* **Pisahkan Identitas dari Variabel:** Jangan masukkan detail yang dinamis (seperti kuantitas/berat default) ke dalam judul tetap produk jika nilai tersebut dapat diubah oleh pengguna.

---

## 2. Tipografi (Typography)
* **Batasi Variasi Font:** Hindari mencampur terlalu banyak jenis font. Gunakan maksimal 1–2 *font family* yang bersih dan mudah dibaca.
* **Bangun Hirarki Lewat Bobot dan Ukuran:** Bedakan judul, subjudul, dan teks isi (*body text*) menggunakan *font-size*, *font-weight*, dan warna, bukan mengganti jenis font.
* **Keterbacaan Teks Isi (*Readability*):** Berikan jarak antar-baris (*line-height*) yang cukup (minimal 1.4x – 1.6x ukuran font) dan hindari warna teks hitam pekat (`#000000`) pada latar putih agar tidak melelahkan mata (gunakan warna seperti `#1e293b` atau `#334155`).
* **Gaya Huruf Label Ringkas:** Untuk teks label berukuran kecil atau berhuruf kapital (*uppercase*), tambahkan sedikit *letter-spacing* agar teks memiliki ruang dan mudah dibaca.

---

## 3. Warna & Kontras (Color & Contrast)
* **Gunakan Warna untuk Mendukung, Bukan Mendominasi:** Warna harus memperkuat hierarki visual dan identitas produk, bukan bersaing menarik perhatian.
* **Patuhi Rasio Kontras Aksesibilitas:** Pastikan teks dan ikon penting memiliki kontras yang cukup terhadap latar belakang (mengikuti standar WCAG AA/AAA).
* **Solusi Kontras Dinamis:** Jika elemen interaktif (seperti tombol navigasi atau *back*) ditempatkan di atas media gambar yang bervariasi, bungkus elemen dengan kontainer semi-transparan (backdrop-blur / subtle background) atau berikan *border/shadow* tipis agar selalu terbaca di latar terang maupun gelap.

---

## 4. Tata Letak, Grid, & Spasi (Layout & Spacing)
* **Konsistensi Grid dan Margin:** Tentukan margin luar (misalnya 16px, 20px, atau 24px) dan terapkan secara konsisten di seluruh elemen layar.
* **Prinsip Kedekatan (*Law of Proximity*):** Elemen-elemen yang saling berhubungan harus didekatkan (misalnya tombol kuantitas dengan tombol *add to cart*), sementara elemen yang berbeda seksi dipisahkan dengan jarak yang lebih lapang.
* **Pemisah yang Halus (*Subtle Dividers*):** Hindari garis pemisah (*divider*) yang tebal, kontras tinggi, atau kaku. Gunakan garis tipis berwarna pudar atau manfaatkan spasi kosong (*white space*) sebagai pemisah alami.

---

## 5. Ikonografi & Media (Iconography & Imagery)
* **Keseragaman Gaya Ikon:** Jangan mencampuradukkan ikon bergaris (*line/outline*) dan ikon padat (*filled*) dalam satu kelompok informasi. Gunakan ukuran, bobot garis (*stroke width*), dan warna yang seragam.
* **Konsistensi Gambar Produk:** Pilih gaya fotografi yang seragam untuk katalog. Foto dengan latar belakang bersih dan fokus produk yang jelas jauh lebih mudah diintegrasikan ke berbagai komponen tampilan.

---

## 6. Efisiensi & Aksi Pengguna (Actions & UX Flow)
* **Hindari Teks Mubazir (*Redundancy*):** Hapus teks atau label yang sudah jelas konteksnya (contoh: cukup tampilkan simbol mata uang dan angka seperti `$6.20`, tidak perlu menulis `Price: $6.20`).
* **Pendekatan CTA yang Bersahabat:** Hindari teks tombol serba kapital (*ALL CAPS*) yang terkesan agresif atau "berteriak". Gunakan *Sentence case* atau *Title case* yang rapi.
* **Transparansi Sebelum Aksi:** Tampilkan informasi krusial (seperti total harga akhir) langsung di dekat atau di dalam tombol aksi utama untuk menghilangkan keraguan sebelum klik.
* **Optimasi Pilihan Berulang (*Shortcuts*):** Sediakan opsi nilai bawaan (*presets/predefined options*) untuk pilihan umum berdasarkan data kebiasaan pengguna, sehingga meminimalkan jumlah ketukan (*taps*).
* **Pertahankan Aksesibilitas Aksi (*Sticky CTA*):** Pastikan tombol aksi penting selalu mudah dijangkau (misalnya menempel di bagian bawah layar / *sticky footer*) saat pengguna menelusuri konten panjang.
