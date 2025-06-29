document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay'); // Ambil elemen overlay
    const body = document.body; // Ambil elemen body

    // Pastikan semua elemen ditemukan sebelum menambahkan event listener
    if (menuToggle && navMenu && menuOverlay) {
        function toggleMenu() {
            navMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active'); // Toggle overlay
            body.classList.toggle('no-scroll'); // Toggle no-scroll di body

            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }

        // Event listener untuk tombol hamburger
        menuToggle.addEventListener('click', toggleMenu);

        // Event listener untuk overlay (klik di luar menu akan menutupnya)
        menuOverlay.addEventListener('click', toggleMenu);

        // Opsional: Tutup menu saat link di dalam menu diklik
        // Berguna agar menu tertutup otomatis setelah navigasi
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                // Pastikan yang diklik bukan tombol daftar (jika ada tombol dengan class .btn-primary)
                // if (!link.classList.contains('btn-primary')) { // Hanya jika Anda tidak ingin menu tertutup saat klik tombol di menu
                    if (navMenu.classList.contains('active')) {
                        toggleMenu(); // Panggil fungsi toggle untuk menutup
                    }
                // }
            });
        });
    }

    // --- Kode JavaScript lainnya bisa ditambahkan di sini jika ada ---

    // Contoh: Smooth Scrolling untuk Anchor Links (opsional)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
});
