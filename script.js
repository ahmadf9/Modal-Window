'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // Memilih semua elemen selector
console.log(btnsOpenModal);

// Membuat dry code. Dengan mengekspor fungsi ini ke fungsi baru.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Membuat dry code. Dengan mengekspor fungsi ini ke fungsi baru.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Mengulang NodeList dan mendapatkan text content ketiga tombolnya.
for (let i = 0; i < btnsOpenModal.length; i++)
  // Untuk merespon event klik, kita akan melampirkan fungsi event handler ke elemen.
  btnsOpenModal[i].addEventListener('click', openModal);

// Ketika elemen ini (btnCloseModal/overay) di klik, kita ingin menutup modal.
btnCloseModal.addEventListener('click', closeModal); // Definisikan fungsi
overlay.addEventListener('click', closeModal);

// Keyboard Event. Memberikan fungsi sebuah parameter (e)
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* if (e.key === 'Escape') {
    // Jika modal tidak mengandung hidden class maka tutup modal
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  } */

// Sebelum diubah ke fungsi close Modal
/* btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}); 

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}); */
