'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // Memilih semua elemen selector
console.log(btnsOpenModal);

// Mengulang NodeList dan mendapatkan text content ketiga tombolnya.
for (let i = 0; i < btnsOpenModal.length; i++)
  // Untuk merespon event klik, kita akan melampirkan fungsi event handler ke elemen.
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
