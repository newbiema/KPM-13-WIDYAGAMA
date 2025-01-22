document.addEventListener('DOMContentLoaded', () => {
    // Seleksi tombol call-to-action
    const ctaButtons = document.querySelectorAll('a[href^="#"]');
  
    // Tambahkan event listener pada setiap tombol
    ctaButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah perilaku default (melompat langsung)
  
        // Ambil elemen target berdasarkan atribut href
        const targetId = button.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        // Jika elemen target ditemukan, lakukan scroll halus
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth', // Scroll halus
            block: 'start', // Scroll ke awal elemen
          });
        }
      });
    });
  });
  