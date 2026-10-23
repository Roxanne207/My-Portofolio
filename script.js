// Mengambil elemen form dan teks status dari HTML
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Menambahkan event saat form dikirim (submit)
contactForm.addEventListener('submit', function(event) {
  // Mencegah halaman reload otomatis
  event.preventDefault();

  // Mengambil nilai input nama
  const nameInput = document.getElementById('name').value;

  // Tampilkan pesan sukses di bawah form
  formStatus.textContent = `Terima kasih, ${nameInput}! Pesan Anda telah terkirim.`;

  // Kosongkan form setelah terkirim
  contactForm.reset();
});