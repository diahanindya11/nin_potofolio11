let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
}
// Mengambil semua elemen link menu dan halaman section
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah loncatan instan bawaan browser

        // 1. Hapus class 'active' dari semua menu navigasi
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Tambahkan class 'active' ke menu yang baru saja diklik
        this.classList.add('active');

        // 2. Ambil ID target dari atribut href (misal: "#about")
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // 3. Sembunyikan semua section terlebih dahulu dengan menghapus class 'active'
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        // 4. Tampilkan section target, beri sedikit delay agar animasi masuknya bekerja sempurna
        targetSection.style.display = 'block';
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 50); // Delay 50 milidetik
    });
});

// Logika tambahan jika logo "Anindya" diklik agar kembali ke Home
document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.nav-link[href="#home"]').click();
});

// 1. Ambil semua link navigasi
const navLinks = document.querySelectorAll('.navbar a');

// 2. Fungsi untuk mengatur warna biru berdasarkan url target di browser
function setActiveMenu() {
    const currentHash = window.location.hash || '#home'; // Jika kosong, anggap sedang di #home

    navLinks.forEach(link => {
        // Ambil isi href masing-masing menu (contoh: #about)
        const targetId = link.getAttribute('href');

        if (currentHash === targetId) {
            link.classList.add('active'); // Kasih class active jika cocok
        } else {
            link.classList.remove('active'); // Hapus dari menu yang lain
        }
    });
}

// 3. Jalankan fungsi di atas setiap kali menu diklik atau halaman berubah
window.addEventListener('hashchange', setActiveMenu);
window.addEventListener('load', setActiveMenu);