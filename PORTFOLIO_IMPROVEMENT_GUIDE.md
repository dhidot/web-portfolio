# Portfolio Improvement Guide — Chandra Nindhito

Panduan implementasi bertahap untuk vibe coding, berdasarkan source ZIP yang diterima pada 7 Oktober 2026. Semua path di bawah relatif terhadap root project (folder yang berisi `package.json`). Bahasa panduan: Indonesia. Bahasa konten website: Inggris.

## 00. Cara menggunakan panduan

1. Letakkan file ini di root repository portfolio.
2. Mulai dari prompt induk, kemudian jalankan satu prompt section pada satu waktu.
3. Minta coding agent membaca file aktual sebelum mengedit karena repository dapat berubah setelah audit ini.
4. Review hasil section tersebut dan lakukan pemeriksaan yang relevan sebelum lanjut.
5. Isi materi yang belum tersedia secara bertahap; agent harus melanjutkan pekerjaan lain yang tidak bergantung pada materi tersebut.

**Batas audit:** source review statis atas komponen, data, konfigurasi, dan struktur aset dalam ZIP. Tidak ada perubahan pada aplikasi, instalasi dependency, build, pengukuran Lighthouse, atau pengujian tampilan browser dalam audit ini. Temuan source pasti dibedakan dari potensi masalah visual yang perlu diperiksa di browser. Dokumen ini adalah spesifikasi perubahan, bukan laporan bahwa perubahan telah diterapkan.

### Prompt induk — tempel sekali di awal sesi

```text
Baca PORTFOLIO_IMPROVEMENT_GUIDE.md dan AGENTS.md pada repository ini.
Kerjakan section yang saya pilih saja beserta dependensi minimalnya.
Sebelum mengedit, baca file aktual dan laporkan singkat rencana file yang berubah.
Pertahankan Next.js App Router, TypeScript, Tailwind CSS, next-themes,
palet warna, identitas CN., serta komponen yang masih relevan.
Ikuti AGENTS.md: baca dokumentasi versi Next.js yang terpasang dalam
node_modules/next/dist/docs sebelum menulis implementasi terkait Next.js.
Jika dokumentasi/dependency belum tersedia, nyatakan keterbatasannya dan
jangan mengasumsikan API dari versi lain. Jangan upgrade dependency tanpa kebutuhan.
Gunakan motion/react yang sudah dipakai project untuk animasi.
Jangan mengarang pencapaian, angka dampak, jabatan, periode, stack pekerjaan,
screenshot asli, URL demo, atau tautan repository.
Materi yang belum ada tidak boleh menghasilkan broken image, tombol mati,
atau teks TODO di website publik. Gunakan fallback yang rapi atau sembunyikan
fitur opsional, lalu catat materi yang dibutuhkan dalam ringkasan.
Jangan mengubah seluruh halaman menjadi Client Component.
Jangan deploy atau push; perubahan lokal saja untuk review.
Setelah selesai: jelaskan file yang berubah, perilaku hasilnya,
pemeriksaan yang benar-benar dijalankan, dan hal yang belum terverifikasi.
```

## 01. Ringkasan source dan prioritas

### Stack pada package.json

| Area | Source saat audit |
| --- | --- |
| Framework | Next.js `16.3.0`, React dan React DOM `19.2.8` |
| Bahasa/style | TypeScript `^5`, Tailwind CSS `^4` |
| Tema | next-themes `^0.4.6` |
| Animasi | motion `^13.0.0` dan framer-motion `^13.0.0` tercantum; wrapper menggunakan `motion/react` |
| Ikon | lucide-react `^1.30.0`, react-icons `^5.7.0` |
| Scripts | `dev`, `build`, `start`, `lint` |
| Aturan agent | `AGENTS.md` meminta membaca dokumentasi Next.js lokal; `CLAUDE.md` merujuk AGENTS.md |

Versi di atas merupakan deklarasi file yang diterima, bukan klaim tentang versi terbaru di registry.

### Peta file yang sudah ada

| File | Fungsi |
| --- | --- |
| `app/page.tsx` | Navbar → Hero → About → Experience → Projects → Skills → BeyondCode → Contact → Footer |
| `app/layout.tsx` | Font Geist, metadata dasar, ThemeProvider |
| `app/globals.css` | Token light/dark, smooth scroll, selection, hero grid |
| `app/components/layout/Navbar.tsx` | Navigasi fixed, link desktop, ThemeToggle |
| `app/components/layout/Footer.tsx` | Identitas dan stack footer |
| `app/components/sections/*.tsx` | Konten per section homepage |
| `app/components/ui/ThemeToggle.tsx` | Tombol tema dengan mounted guard |
| `app/components/ui/ThemeProvider.tsx` | next-themes dengan default system |
| `app/components/animations/FadeIn.tsx` | Animasi saat masuk viewport |
| `app/components/animations/HeroAnimation.tsx` | Animasi awal hero |
| `app/components/animations/StaggerContainer.tsx` | File kosong |
| `app/data/projects.ts` | Dua project: FINA dan Recruitment System |
| `app/data/skills.ts` | Empat kelompok skill |
| `app/projects/fina/page.tsx` | Case study FINA, konten hardcoded |
| `app/projects/recruitment-system/page.tsx` | Case study Recruitment, konten hardcoded |
| `public/` | Hanya SVG bawaan; belum ada CV, foto, video, atau preview project |

### Temuan yang menjadi dasar perubahan

| Prioritas | Temuan source | Tindakan |
| --- | --- | --- |
| P0 | GitHub di Contact menuju `https://github.com/` | Isi profil terverifikasi; jangan pakai root GitHub |
| P0 | Link navbar `hidden ... md:flex`, tidak ada menu mobile | Tambahkan navigasi mobile |
| P0 | Navbar memakai `hover:text-white`; Footer memakai warna zinc tetap | Gunakan token tema, periksa kedua mode |
| P0 | `--subtle` terang di light dan gelap di dark dipakai untuk teks kecil | Pisahkan token dekoratif dan teks sekunder, ukur kontras |
| P0 | Detail project tidak punya navigasi balik atau toggle tema | Tambahkan header detail sederhana |
| P1 | Hero dan Experience menjelaskan peran secara generik | Perjelas spesialisasi dan kontribusi |
| P1 | Preview project berupa mock interface CSS generik | Tambahkan preview bermakna dengan fallback |
| P1 | `02 projects` dan denominator `/ 02` hardcoded | Turunkan dari data project yang ditampilkan |
| P1 | Detail project menduplikasi judul, tahun, stack dari data | Satukan sumber data tanpa mengubah URL |
| P1 | Metadata hanya title dan description global | Tambahkan metadata per route dan preview berbagi |
| P2 | Panah hover pada sejumlah div noninteraktif | Hapus affordance palsu atau jadikan link yang nyata |
| P2 | Animasi belum menangani reduced motion | Sesuaikan wrapper dan CSS |
| P2 | `::selection` ditulis dua kali | Pilih satu aturan |
| P2 | `CSSProperties` diimpor tetapi assertion memakai `React.CSSProperties`; `FaLinux` diimpor tanpa dipakai | Rapikan saat file terkait diedit |

### Urutan kerja

1. Section 02 — fondasi visual dan mobile navigation.
2. Section 03 — hero dan identitas bersama.
3. Section 04 — About dan Experience.
4. Section 05 — data dan kartu project.
5. Section 06 — case studies.
6. Section 07–09 — Skills, Beyond Code, Contact.
7. Section 10–11 — metadata, animasi, dan pemeriksaan akhir.
8. Section 12 — personal project, setelah memang siap ditampilkan.

## 02. Fondasi visual, navbar, dan mobile

**File existing:** `app/globals.css`, `app/components/layout/Navbar.tsx`, `app/components/layout/Footer.tsx`, `app/components/ui/ThemeToggle.tsx`, `app/page.tsx`.

**Tujuan:** pertahankan kesan editorial/engineering dengan tipografi besar, background netral, aksen biru, dan caramel pada project tertentu. Tingkatkan keterbacaan serta navigasi sebelum menambah dekorasi.

### Instruksi perubahan

1. Pertahankan pasangan tema: light `#f5f5f2` dan dark `#1f2327`; pertahankan Geist. Gunakan token warna untuk teks dan border Navbar/Footer.
2. Jadikan `--subtle` khusus dekorasi jika kontrasnya rendah. Buat token teks sekunder yang dapat dibaca pada kedua tema. Periksa kontras teks normal minimal 4.5:1 dan teks besar minimal 3:1; nilai ini target validasi, belum hasil audit.
3. Tambahkan background navbar berwarna surface transparan dengan backdrop blur dan border halus supaya konten di belakang tidak mengganggu. Sediakan warna solid yang tetap terbaca tanpa blur.
4. Tambahkan menu mobile berbentuk panel dropdown sederhana, bukan modal fullscreen. Tombol memiliki accessible name, `aria-expanded`, `aria-controls`. Menu tertutup tidak boleh tetap masuk urutan Tab.
5. Tutup menu setelah klik link atau Escape; kembalikan fokus ke tombol saat ditutup dengan Escape. Tidak perlu focus trap untuk panel nonmodal ini.
6. Sesuaikan breakpoint berdasarkan ruang nyata: enam link ditambah logo/toggle perlu diperiksa di sekitar 768–1024 px. Boleh tampilkan menu mobile sampai `lg` jika desktop terlalu padat.
7. Tambahkan target `id="main-content"` dan skip link. Pertimbangkan memindahkan Navbar/Footer keluar dari elemen main di `app/page.tsx` agar landmark lebih jelas; hanya satu main per halaman.
8. Tambahkan offset scroll untuk anchor agar heading tidak tertutup navbar fixed. Ukur tinggi navbar, jangan asal memilih offset besar.
9. Gunakan focus-visible yang konsisten. Target ukuran tombol sentuh sekitar 44×44 px; ThemeToggle sekarang 36×36 px.
10. Kurangi padding mobile section dari pola `py-32` menjadi kisaran `py-16`–`py-20`; desktop boleh tetap lapang. Samakan lebar container Navbar/Footer dengan konten atau pilih satu alignment yang konsisten.
11. Hapus duplikasi `::selection`, pilih aturan yang cocok kedua tema.

**Acceptance checklist:**

- [ ] Navigasi tersedia pada lebar 360, 390, 768, 1024, dan 1440 px.
- [ ] Menu bisa digunakan dengan keyboard dan ditutup dengan Escape.
- [ ] Tidak ada horizontal scrolling atau teks tertutup header.
- [ ] Teks hover tetap terbaca pada light dan dark.
- [ ] Klik anchor membawa heading ke posisi yang terlihat.

### Prompt siap copas

```text
Implementasikan section 02 dari PORTFOLIO_IMPROVEMENT_GUIDE.md.
Fokus Navbar, Footer, ThemeToggle, globals.css, dan struktur landmark homepage.
Pertahankan enam tujuan navigasi serta palet existing. Gunakan menu mobile
nonmodal yang accessible dan background navbar yang terbaca. Perbaiki token
teks kecil, focus-visible, scroll offset, dan spacing mobile.
Jangan mendesain ulang isi section. Verifikasi kedua tema dan breakpoint
jika browser tersedia; jika tidak, jelaskan batas verifikasinya.
```

## 03. Hero — perjelas siapa dan apa yang dikerjakan

**File existing:** `app/components/sections/Hero.tsx`.
**File usulan baru:** `app/data/profile.ts`.
**Aset opsional:** `public/cv/chandra-nindhito-cv.pdf`.

### Kondisi sekarang

Nama besar sudah menjadi identitas utama. Deskripsi masih generik; metadata bawah berbunyi “Building digital products” dan “Full Stack Engineering”. Kartu kanan mengulang daftar kemampuan dan menampilkan “Available”. Belum ada tombol CV.

### Instruksi perubahan

1. Pertahankan nama sebagai h1. Jangan menggantinya dengan slogan panjang.
2. Gunakan draft copy berikut setelah pemilik menyetujui akurasinya:

   - Eyebrow: **Full Stack Developer · Backend Focus**
   - Description: **I build enterprise applications for financial services and recruitment, with a focus on backend systems, authentication, and API integrations.**
   - Currently: **Building enterprise applications at BCA Finance**
   - Focus: **Backend · Authentication · Integration**
3. CTA utama tetap **View Projects**. Tambahkan **Download CV** hanya ketika file CV benar-benar tersedia; simpan **Get in touch** sebagai link kecil atau di navigasi agar tidak ada tiga tombol sama dominan.
4. Buat data profil bersama untuk nama, role, email, LinkedIn, GitHub, availability, dan CV opsional. Hero dan Contact harus membaca nilai yang sama.
5. Ubah badge “Available” menjadi **Open to conversations** jika itu sesuai niat pemilik. Jangan menyiratkan siap bekerja segera tanpa konfirmasi.
6. Kartu kanan boleh tetap dipakai tetapi ganti informasi repetitif dengan tiga area kerja konkret: Backend systems, Authentication, Product integration. Setiap baris cukup satu kalimat. Jika tidak clickable, hilangkan panah link.
7. “CHANDRA.DEV” adalah label di source, bukan bukti kepemilikan domain. Gunakan **Developer Profile** atau nama jika domain tidak dimiliki.
8. Ukuran nama harus fleksibel di mobile. Periksa kata Nindhito dan layout desktop 1.25fr/0.75fr agar tidak terpotong.
9. Hero memakai dekorasi z-index negatif. Periksa apakah grid/glow terlihat pada rendering; bila tertutup background ancestor, buat stacking context lokal dan lapisan eksplisit. Ini potensi masalah, bukan bug visual yang sudah terbukti.

**Materi yang dibutuhkan:** CV PDF, URL GitHub yang benar, konfirmasi availability. Bila belum ada, sembunyikan tombol terkait.

**Acceptance checklist:**

- [ ] Pengunjung memahami fokus dan konteks pengalaman dari layar awal.
- [ ] Tidak ada link CV 404 atau tombol disabled tanpa penjelasan.
- [ ] Satu h1; seluruh teks hero terbaca setelah load dan saat reduced motion.
- [ ] Identitas/email sama dengan Contact.

### Prompt siap copas

```text
Implementasikan section 03. Baca Hero.tsx lalu buat app/data/profile.ts sebagai
sumber identitas bersama. Terapkan copy spesifik yang tertulis dalam panduan,
pertahankan nama besar dan kartu profil yang lebih ringkas.
CV dan GitHub bersifat opsional: hanya render CTA bila nilai/aset valid tersedia.
Hapus affordance link pada baris noninteraktif. Periksa stacking dekorasi,
ukuran nama mobile, dan konsistensi availability. Jangan mengarang domain.
```

## 04. About dan Experience — buktikan kedalaman kerja

**File existing:** `app/components/sections/About.tsx`, `app/components/sections/Experience.tsx`.
**File usulan opsional:** `app/data/experience.ts` jika konten mulai panjang.

### Instruksi perubahan

1. Ringkas About menjadi dua paragraf: konteks pekerjaan dan cara menyelesaikan masalah. Hindari mengulang daftar stack panjang yang sudah ada di Skills.
2. Draft About:

   **I'm a Full Stack Developer at BCA Finance, working across backend services, web interfaces, and system integrations for enterprise applications.**

   **I enjoy tracing how a feature works end to end—from API design and authentication to data flow and the user experience. My focus is building software that is understandable, reliable, and practical to maintain.**

3. Pertahankan tiga prinsip bila masih berguna, tetapi ringkas dan hapus panah noninteraktif. Bisa beri link ke case study yang relevan apabila hubungan memang tersedia.
4. Experience saat ini satu item “2024 — Present / BCA Finance / Full Stack Developer”. Pertahankan periode dan role dari source sampai pemilik memberikan pembaruan. Jangan menebak bulan masuk atau tanggal promosi.
5. Ganti enam tanggung jawab generik menjadi 3–4 kontribusi spesifik yang telah dikonfirmasi: konteks project → tugas pribadi → hasil perilaku sistem.
6. Draft kontribusi awal yang masih perlu konfirmasi lingkup:

   - **Contributed to FINA across API development, system integrations, and customer-facing workflows.**
   - **Developed recruitment workflows, including candidate management and online assessments.**
   - **Implemented authentication and access-control improvements across application modules.**

7. Tambahkan link “Explore FINA” dan “Explore Recruitment System” menuju route yang sudah ada.
8. Prestasi MT, skor bootcamp, atau promosi dapat ditambahkan hanya setelah detail dan wording disetujui. Jangan otomatis mengubah jabatan menjadi Senior/Lead atau mengklaim kepemilikan seluruh produk.
9. Data dampak opsional: setiap angka harus punya satuan, periode, baseline bila membandingkan, sumber, dan hubungan dengan kontribusi pribadi. Jika angka tidak ada, gunakan hasil fungsional yang benar.

**Acceptance checklist:**

- [ ] About tidak mengulang Hero/Skills secara panjang.
- [ ] Experience memisahkan kontribusi pribadi dan kerja tim.
- [ ] Tidak ada statistik atau tanggal yang dibuat oleh agent.
- [ ] Link project menuju halaman yang valid.

### Prompt siap copas

```text
Kerjakan section 04 pada About.tsx dan Experience.tsx.
Ringkas About sesuai draft; pertahankan prinsip desain. Buat Experience lebih
spesifik dengan konteks FINA dan Recruitment, tetapi jangan menambahkan hasil,
angka, jabatan, atau tanggal baru yang belum terkonfirmasi.
Jika lingkup kontribusi belum pasti, gunakan wording konservatif dari source.
Tambahkan link case study existing dan hilangkan panah dekoratif yang menipu.
```

## 05. Selected Projects — visual nyata dan data yang konsisten

**File existing:** `app/data/projects.ts`, `app/components/sections/Projects.tsx`.
**File usulan:** `app/components/projects/ProjectPreview.tsx`.
**Folder aset usulan:** `public/projects/`.

### Instruksi perubahan

1. Tetapkan data project bertipe yang digunakan kartu dan detail. Field minimum: slug, title, category, description, role, year, technologies. Tambahkan field opsional preview, highlights, caseStudy, repositoryUrl, demoUrl, status.
2. Preview menyimpan src, alt, dan caption. Jangan menyimpan src dummy ke file yang belum ada.
3. Ganti panel “Fake Interface” dengan screenshot yang boleh dipublikasikan, atau mockup ilustratif berdata dummy yang diberi caption **Illustrative preview · Sample data**.
4. Fallback tanpa aset harus tetap bermakna: diagram ringkas alur produk atau panel berlabel fitur. Contoh FINA: Customer → Application → Service integration. Contoh Recruitment: Application → Assessment → Interview. Ini ilustrasi produk, bukan klaim arsitektur production.
5. Pertahankan warna aksen biru FINA dan caramel Recruitment. Kaitkan style ke slug/data supaya urutan project tidak mengubah identitas visual secara tak sengaja.
6. Gunakan image component sesuai dokumentasi Next.js terpasang, dimensi/rasio stabil, dan sizes yang sesuai. Hindari memuat semua preview dengan prioritas tinggi.
7. Tampilkan satu kalimat kontribusi dan maksimal tiga highlights agar kartu mudah dipindai.
8. Hitung jumlah dari project yang benar-benar ditampilkan. Ganti `02 projects` dan `/ 02`; gunakan zero padding untuk nomor bila tetap diinginkan.
9. Saat seluruh card menjadi Link, jangan masukkan tombol atau link lain di dalamnya. Jika perlu tombol GitHub/demo, ubah card menjadi article dengan link terpisah yang tidak bersarang.
10. Audit stack FINA: source sekarang menampilkan Java/Spring Boot/Angular/SQL Server pada kartu dan detail. Itu belum membuktikan stack semua modul. Minta pemilik memetakan stack sesuai modul yang dibahas; jangan mengganti berdasarkan dugaan.

**Materi:** 1 preview per project, 1 kalimat kontribusi, 3 highlights yang benar, stack terverifikasi. Screenshot internal harus sudah layak publik; gunakan ilustrasi bila tidak tersedia.

**Acceptance checklist:**

- [ ] Dua project memiliki preview yang berbeda dan bermakna.
- [ ] Fallback berfungsi saat preview kosong.
- [ ] Semua angka jumlah berasal dari array yang ditampilkan.
- [ ] Tidak ada nested interactive elements.
- [ ] Penambahan project ketiga tidak merusak layout/count.

### Prompt siap copas

```text
Implementasikan section 05. Jadikan app/data/projects.ts sumber data bertipe
untuk listing dan detail. Pertahankan slug fina dan recruitment-system.
Ubah preview generik menjadi ProjectPreview dengan aset opsional dan fallback
ilustratif berlabel, tanpa broken image atau screenshot yang diklaim asli.
Tambahkan highlights hanya dari fakta yang tersedia. Buat jumlah dinamis,
style per project yang stabil, dan interaksi keyboard setara hover.
Jangan menambah project ketiga pada tahap ini.
```

## 06. Case Studies — Problem → Role → Solution → Outcome

**File existing:** `app/projects/fina/page.tsx`, `app/projects/recruitment-system/page.tsx`, `app/data/projects.ts`.
**File usulan:** `app/components/projects/CaseStudy.tsx`, `app/components/projects/ProjectHeader.tsx`.

### Kondisi sekarang

Dua halaman hampir sama strukturnya dan seluruh konten hardcoded. Heading subbagian berupa paragraf; belum ada preview, hasil, trade-off, navigasi balik, atau metadata khusus.

### Struktur target

1. Header ringkas: CN., **Back to projects** (`/#projects`), ThemeToggle.
2. Hero project: kategori, h1, ringkasan, role/periode/stack.
3. Preview ber-caption.
4. **The Problem**: kebutuhan atau masalah yang dihadapi.
5. **My Role**: kontribusi pribadi dan batas tanggung jawab tim.
6. **Approach & Decisions**: langkah solusi serta alasan teknis.
7. **Outcome**: hasil yang dapat dibuktikan.
8. **What I Learned**: pelajaran dan trade-off nyata.
9. Link project berikutnya dan kontak (`/#contact`).

### Instruksi implementasi

- Pertahankan kedua static route yang ada. Buat template bersama; setiap page mengambil data menurut slug. Tidak perlu migrasi ke dynamic route untuk hanya dua project.
- Gunakan h2/h3 untuk subbagian, bukan paragraf berhuruf kapital sebagai pengganti heading semantik.
- Bagian opsional yang kosong tidak dirender. Jangan tampilkan heading kosong, “Coming soon” berulang, atau placeholder editorial.
- Pisahkan fakta terverifikasi dan draft yang menunggu review. Data draft jangan otomatis dianggap published.
- Gunakan diagram sederhana di HTML/SVG bila perlu; tidak perlu dependency diagram besar untuk satu alur.
- Tambahkan detail secukupnya tanpa menampilkan endpoint internal, token, alamat server, atau data pelanggan.

### Brief isi FINA — usulan, perlu konfirmasi pemilik

Pilih satu cerita utama, misalnya alur akses riwayat pembayaran dari mobile ke webview.

| Bagian | Pertanyaan untuk diisi |
| --- | --- |
| Problem | Apa kebutuhan pengguna dan batasan integrasi mobile/webview? |
| Role | Bagian backend/frontend/session apa yang benar-benar dikerjakan? |
| Approach | Bagaimana akses divalidasi dan status error ditangani secara konsisten? |
| Decision | Mengapa mekanisme sesi tersebut dipilih? Apa trade-off-nya? |
| Outcome | Skenario apa yang kini berhasil ditangani dan bagaimana diverifikasi? |

Jangan menulis “100% secure”, “zero incidents”, atau penurunan latency tanpa bukti. Hasil dapat berupa perilaku yang teruji, bukan angka pemasaran.

### Brief isi Recruitment — usulan, perlu konfirmasi pemilik

Pilih online assessment dan konsistensi waktu saat refresh sebagai cerita utama jika memang sesuai kontribusi.

| Bagian | Pertanyaan untuk diisi |
| --- | --- |
| Problem | Mengapa konsistensi sesi ujian penting untuk alur assessment? |
| Role | Apa perubahan pada API, state frontend, atau authorization? |
| Approach | Bagaimana waktu server menjadi acuan dan UI melanjutkan sisa waktu? |
| Decision | Mengapa local timer saja tidak cukup? Bagaimana menangani reconnect? |
| Outcome | Skenario refresh/expiry/submit apa yang telah diuji? |

Dua brief ini adalah bahan wawancara penulisan, bukan fakta baru yang terbukti dari source portfolio. Pakai hanya setelah dikonfirmasi.

**Acceptance checklist:**

- [ ] Direct URL kedua project bekerja dan memiliki jalan kembali.
- [ ] Template dipakai ulang; judul/periode/stack konsisten dengan listing.
- [ ] Ada minimal satu penjelasan keputusan teknis per case study yang telah disetujui.
- [ ] Role pribadi dan outcome tidak dilebih-lebihkan.
- [ ] Halaman nyaman dibaca di mobile, termasuk judul Recruitment System.

### Prompt siap copas

```text
Kerjakan section 06 setelah schema project section 05 tersedia.
Buat CaseStudy dan ProjectHeader reusable, pertahankan dua route statis.
Render hanya field terisi dan gunakan heading semantik. Tambahkan Back to
projects, ThemeToggle, next project, dan contact link ke homepage.
Jangan mengubah brief usulan menjadi klaim faktual. Implementasikan struktur
sekarang memakai konten existing yang akurat; catat kebutuhan isi yang belum
ada. Detail dan listing harus membaca identitas project dari sumber yang sama.
```

## 07. Skills — hubungkan kemampuan dengan bukti

**File existing:** `app/data/skills.ts`, `app/components/sections/Skills.tsx`.

### Instruksi perubahan

1. Pertahankan empat kelompok yang ada; jangan menambah skill hanya agar terlihat banyak.
2. Untuk skill inti, sediakan keterangan singkat atau link project terkait setelah hubungan penggunaan dikonfirmasi.
3. Hindari skill bar persentase atau rating “expert” tanpa dasar.
4. Item skill sekarang berupa div dengan panah hover. Hapus panah jika bukan link. Jika ditautkan ke project, gunakan anchor dengan label jelas.
5. Perbaiki nested `group` bila efek hover parent membuat semua baris tampak aktif bersamaan; gunakan scope/named group atau sederhanakan hover.
6. Rapikan import `CSSProperties` vs `React.CSSProperties` dan import `FaLinux` yang tidak digunakan.
7. Next.js/React dapat disebut sebagai teknologi portfolio ini bila ingin ditambahkan; jangan otomatis menyebutnya pengalaman production di pekerjaan kantor.

**Materi:** mapping skill → project yang benar, dan mana skill yang masih dipelajari.

**Acceptance:** konten bisa dipahami tanpa hover; link hanya pada item yang punya tujuan; lint file terkait bersih.

### Prompt siap copas

```text
Implementasikan section 07 pada skills.ts dan Skills.tsx.
Pertahankan kelompok existing, hilangkan affordance link palsu,
rapikan import/type yang tidak konsisten, dan dukung bukti project opsional.
Jangan tambahkan proficiency percentage atau klaim pengalaman baru.
```

## 08. Beyond Code — tampilkan pribadi lewat musik

**File existing:** `app/components/sections/BeyondCode.tsx`.
**Aset usulan:** `public/about/guitar.webp`, `public/about/bass.webp`, video/poster opsional.

### Instruksi perubahan

1. Pertahankan Guitar dan Bass; beri satu foto asli untuk setiap instrumen atau satu foto personal yang mewakili keduanya.
2. Caption harus terkait pemilik. Jangan membuat cerita band, konser, atau lagu favorit tanpa masukan.
3. Ilustrasi CSS yang sudah ada boleh menjadi fallback sampai foto tersedia. Hapus panah pojok bila tidak ada aksi.
4. Video opsional: gunakan kontrol native, poster, preload minimal, tanpa autoplay audio. Beri caption konteks; sediakan transkrip/caption bila ada ucapan yang penting.
5. Tidak perlu Spotify API, live player, atau modal kompleks pada tahap pertama.
6. Jika aset belum tersedia, tetap tampilkan versi teks/ilustrasi yang selesai; jangan menambahkan kotak upload atau pesan internal.

**Acceptance:** bagian terasa personal, media tidak memutar sendiri, dan tidak menambah beban unduhan besar saat homepage dibuka.

### Prompt siap copas

```text
Kerjakan section 08 pada BeyondCode.tsx. Tambahkan dukungan foto dan video
opsional dengan fallback ilustrasi existing. Gunakan aset hanya jika tersedia,
caption faktual, tanpa autoplay atau integrasi musik eksternal.
Hapus ikon panah pada kartu yang tidak clickable dan jaga layout mobile.
```

## 09. Contact, CV, dan identitas

**File existing:** `app/components/sections/Contact.tsx`, `app/components/layout/Footer.tsx`.
**Dependensi:** data profil dari section 03.

### Instruksi perubahan

1. Ganti root GitHub dengan profil yang dikonfirmasi. Kandidat URL tetap harus diperiksa pemilik; jangan menyimpulkan username dari nama.
2. Pindahkan email dan LinkedIn existing ke data profil bersama. Pertahankan `mailto:` dan `rel="noopener noreferrer"` pada link tab baru.
3. Pastikan label availability sama dengan Hero. Hindari status seolah-olah realtime.
4. Email di footer Contact bisa dijadikan link agar berguna. Teks email harus wrap di layar sempit.
5. Copy email opsional: hanya jika dibutuhkan, gunakan komponen client kecil dengan feedback sukses/gagal. Jangan mengubah semua Contact menjadi client hanya untuk tombol tersebut.
6. Download CV dapat diulang di Contact jika file tersedia; jangan membangun contact form/backend email pada tahap ini.

**Acceptance:** seluruh link menuju tujuan yang benar, email terbaca di mobile, CV dapat diunduh bila tersedia, dan tidak ada CTA palsu.

### Prompt siap copas

```text
Implementasikan section 09. Contact dan Hero harus menggunakan profile data
yang sama. Hapus root GitHub sebagai fallback; tampilkan profil hanya ketika
URL yang benar tersedia. Pertahankan email dan LinkedIn dari source.
Selaraskan availability, jadikan alamat email actionable, dan pastikan wrap
mobile. Jangan membuat contact form atau backend baru.
```

## 10. Metadata dan preview saat dibagikan

**File existing:** `app/layout.tsx`, kedua `app/projects/.../page.tsx`.
**File usulan:** `app/robots.ts`, `app/sitemap.ts`; aset `public/og/portfolio.png` dan preview project bila dibuat.

### Instruksi perubahan

1. Baca dokumentasi Next.js lokal untuk Metadata API dan convention route sebelum implementasi.
2. Tambahkan metadataBase sesuai origin produksi yang digunakan pemilik. URL yang diberikan saat audit: `https://web-portfolio-theta-blue.vercel.app/`.
3. Buat title template global dan judul unik per project, misalnya **FINA — Chandra Nindhito**.
4. Isi description spesifik per halaman; tambahkan canonical yang sesuai route.
5. Tambahkan Open Graph dan Twitter summary large image hanya dengan aset yang benar-benar tersedia. Rekomendasi komposisi gambar 1200×630: CN., nama, role, warna identitas.
6. Hindari canonical homepage diwariskan ke semua detail project. Override per route.
7. Sitemap hanya memuat route publik yang benar-benar ada. Robots mengikuti intent publik portfolio; jangan menambahkan aturan yang memblokir seluruh site tanpa alasan.
8. Favicon dapat diganti monogram CN. setelah aset siap. Jangan mengklaim favicon existing bawaan tanpa memeriksa gambarnya.

**Acceptance:** metadata unik, canonical tepat, URL gambar dapat diakses, tidak ada referensi aset 404. Preview aktual di platform berbagi perlu diperiksa setelah deployment oleh pemilik.

### Prompt siap copas

```text
Implementasikan section 10 memakai Metadata API sesuai dokumentasi versi
Next.js lokal. Tambahkan metadata halaman, canonical yang benar, sitemap,
dan robots untuk tiga route publik existing. Gunakan origin produksi yang
tercantum pada panduan kecuali repository menunjukkan konfigurasi terbaru.
Jangan mereferensikan gambar OG yang belum ada. Jangan deploy.
```

## 11. Animasi, performa, dan finishing

**File existing:** `app/components/animations/FadeIn.tsx`, `HeroAnimation.tsx`, `StaggerContainer.tsx`, `app/globals.css`, Hero/Contact/Projects.

### Instruksi perubahan

1. Gunakan API reduced motion dari motion/react sesuai versi terpasang. Matikan perpindahan/scale/delay yang tidak perlu saat pengguna meminta reduced motion.
2. Tangani CSS smooth scroll dan animate-ping dalam preferensi yang sama.
3. Audit konten penting yang dimulai dengan opacity 0. Utamakan teks utama tetap dapat dibaca ketika animasi gagal atau JavaScript tidak berjalan; jangan membiarkan semua informasi utama tersembunyi permanen.
4. Pertahankan transisi singkat. Hindari cursor custom, parallax berat, efek ketikan yang menghambat membaca, dan scroll hijacking.
5. StaggerContainer kosong boleh dihapus setelah memastikan tidak diimpor; tidak perlu diisi hanya untuk menambah animasi.
6. Periksa penggunaan framer-motion vs motion. Karena wrapper existing mengimpor motion/react, jangan menambah import dari library kedua. Penghapusan dependency hanya setelah memastikan tidak dipakai, lalu perbarui lockfile memakai package manager.
7. Lazy load media di bawah fold, tetapkan ukuran gambar, dan batasi ukuran video. Jangan menambah dependency untuk hal yang dapat diselesaikan CSS/HTML.
8. Hindari migrasi struktur framework atau upgrade versi selama perubahan konten/visual ini.

### Pemeriksaan yang diminta kepada coding agent

Jalankan dari root project setelah dependency tersedia sesuai lingkungan pemilik:

```bash
npm run lint
npm run build
```

Gunakan `npm ci` untuk instalasi dari lockfile bila dependency belum terpasang. Jangan menghapus lockfile sebagai solusi otomatis. Bila build gagal karena akses registry/font/network atau masalah lingkungan, laporkan penyebab sebenarnya; jangan menyatakan perubahan kode pasti salah atau build lulus.

Tidak perlu membuat unit test yang hanya memeriksa teks dekoratif. Fokus verifikasi pada navigation, route, link, rendering tema, dan fallback media.

| Area | Pemeriksaan manual |
| --- | --- |
| Viewport | 360, 390, 768, 1024, 1440 px; tidak overflow |
| Tema | System, light, dark; toggle dan refresh |
| Keyboard | Tab, Shift+Tab, Enter, Escape pada menu |
| Motion | Reduced motion; konten tetap terlihat |
| Navigation | Semua anchor dan back-to-projects |
| Routes | Buka detail langsung lalu refresh |
| Media | Fallback ketika aset opsional belum tersedia |
| Links | Email, LinkedIn, GitHub, CV jika ada |
| Content | Tidak ada TODO, metrik fiktif, atau klaim ownership berlebihan |
| Semantik | Satu main, satu h1 per halaman, h2/h3 berurutan |

### Prompt siap copas

```text
Kerjakan section 11 sebagai finishing. Audit reduced motion pada wrapper
motion/react dan CSS, keterbacaan tanpa animasi, dependency animasi ganda,
dan file kosong yang tidak dipakai. Hindari refactor besar yang tidak perlu.
Jalankan lint/build jika lingkungan mendukung, lalu laporkan hasil aktual.
Periksa matrix manual yang tersedia dan tandai yang belum diuji.
```

## 12. Personal Project — tambahan setelah fondasi selesai

**Status:** opsional; notification service belum ada dalam data portfolio ZIP.

Tujuannya memberi bukti implementasi yang bisa dibaca/dicoba publik. Tambahkan ketika ada hasil nyata, bukan hanya ide.

### Isi minimum

- Masalah yang diselesaikan dan lingkup MVP.
- Repository yang dapat diakses dengan README setup.
- Diagram arsitektur sederhana sesuai implementasi aktual.
- Satu alur yang bisa diperagakan, misalnya request notifikasi → proses → status.
- Retry, idempotency, queue, atau monitoring hanya disebut jika sudah dibuat.
- Status jujur: **In progress** atau **Completed**.
- Demo opsional; sembunyikan CTA bila belum ada.

Gunakan schema project dari section 05. Bila menambah route baru, buat halaman detailnya pada perubahan yang sama. Count otomatis mengikuti daftar yang ditampilkan.

### Prompt siap copas

```text
Kerjakan section 12 hanya dengan materi personal project yang saya berikan.
Tambahkan satu project ke schema existing beserta route detail yang benar.
Jangan mengarang fitur retry, queue, CI/CD, demo, atau hasil benchmark.
Jika belum selesai, tampilkan status In progress dan hanya fitur yang sudah
berfungsi. Pastikan count, sitemap, dan metadata mengikuti route baru.
```

## 13. Daftar materi pemilik dan perilaku sementara

| Materi | Digunakan di | Jika belum tersedia |
| --- | --- | --- |
| URL GitHub profil | Hero/Contact | Jangan render CTA GitHub |
| CV PDF | Hero/Contact | Jangan render tombol Download CV |
| Konfirmasi role/periode/availability | Hero/Experience | Pertahankan fakta source, jangan menebak |
| Preview FINA/Recruitment layak publik | Projects/CaseStudy | Gunakan ilustrasi berlabel |
| Stack per modul dan kontribusi pribadi | Projects/Experience | Jangan menambahkan klaim baru |
| Problem, decision, outcome tiap project | CaseStudy | Render konten valid yang ada; catat backlog editorial |
| Angka dampak + sumber/periode | CaseStudy | Gunakan hasil kualitatif terverifikasi |
| Foto gitar/bass dan video opsional | BeyondCode | Pertahankan ilustrasi existing |
| Gambar OG | Metadata | Jangan referensikan path yang belum ada |
| Repo/demo personal project | Project tambahan | Tunda kartu atau sembunyikan CTA yang belum valid |

## 14. Prompt review akhir

```text
Review semua perubahan portfolio berdasarkan PORTFOLIO_IMPROVEMENT_GUIDE.md.
Periksa diff aktual dan pastikan tidak ada perubahan di luar scope.
Fokus: mobile navigation, light/dark contrast, konsistensi data project,
route case study, nested links, reduced motion, missing assets,
metadata/canonical, dan klaim konten yang belum terverifikasi.
Perbaiki masalah konkret yang ditemukan, lalu jalankan lint/build bila bisa.
Laporkan: hasil, file berubah, validasi aktual, dan materi pemilik yang masih
belum tersedia. Jangan membuat klaim skor Lighthouse tanpa pengukuran.
Jangan deploy atau push. Hasil akhir harus siap direview pemilik.
```

### Definisi selesai

- [ ] Pengunjung memahami identitas dan fokus developer dengan cepat.
- [ ] Dua project utama menampilkan kontribusi dan bukti yang jelas.
- [ ] Navigasi mobile dan halaman detail lengkap.
- [ ] Media serta CTA opsional tidak menimbulkan link/aset rusak.
- [ ] Light/dark, keyboard, dan reduced motion telah diperiksa atau keterbatasannya dicatat.
- [ ] Lint/build dilaporkan sesuai hasil sebenarnya.
- [ ] Konten yang membutuhkan konfirmasi tetap dicatat, tidak dikarang.
