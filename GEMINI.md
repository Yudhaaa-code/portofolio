# Workspace Rules & Guidelines

## UI/UX Design Standards
Setiap kali merancang, memodifikasi, atau mengembangkan antarmuka (*UI*) dan alur pengguna (*UX*) untuk halaman, komponen, atau proyek baru, **wajib** mengikuti aturan dalam skill [ui-ux-design](file:///c:/Users/YuDhae/Documents/portfolio/.agents/skills/ui-ux-design/SKILL.md):

1. **Visual Hierarchy & Information Flow**:
   - Posisikan sinyal kepercayaan/bukti sosial (*rating & reviews*) dekat identitas utama produk/konten.
   - Pastikan pengguna instan memahami: identitas produk, kredibilitas, dan harga/informasi inti.
   - Pisahkan identitas tetap dari variabel dinamis.

2. **Tipografi (Typography)**:
   - Batasi maksimal 1–2 font family yang bersih.
   - Bangun hierarki lewat font-size, font-weight, dan color tokens (bukan ganti font).
   - Jaga line-height teks isi minimal 1.4x – 1.6x, hindari warna `#000000` pekat di latar putih.
   - Berikan letter-spacing yang pas pada label kecil atau uppercase.

3. **Warna & Kontras (Color & Contrast)**:
   - Warna mendukung hierarki visual, bukan mendominasi atau membuat silau.
   - Patuhi rasio kontras aksesibilitas WCAG.
   - Gunakan container semi-transparan (backdrop blur / border halus) jika tombol berada di atas latar gambar dinamis.

4. **Tata Letak, Grid, & Spasi (Layout & Spacing)**:
   - Konsisten dalam margin luar dan grid sistem.
   - Terapkan *Law of Proximity* (elemen terkait didekatkan, seksi berbeda diberi ruang lapang).
   - Gunakan pemisah halus (*subtle dividers*) atau white space alami, hindari garis pemisah yang kaku/tebal.

5. **Ikonografi & Media (Iconography & Imagery)**:
   - Jaga keseragaman gaya ikon (jangan campur outline & solid tanpa alasan fungsional yang jelas).
   - Terapkan konsistensi gaya gambar katalog dan media.

6. **Efisiensi & Aksi Pengguna (Actions & UX Flow)**:
   - Hindari redundansi teks/label yang sudah jelas (contoh: langsung `$6.20`, bukan `Price: $6.20`).
   - CTA menggunakan *Sentence case* atau *Title case*, hindari *ALL CAPS*.
   - Transparansi informasi sebelum aksi (tampilkan total harga atau dampak sebelum konfirmasi).
   - Sediakan preset/shortcut untuk pilihan berulang.
   - Terapkan *Sticky CTA* untuk aksi primer pada halaman panjang agar mudah dijangkau.
