# Modal-Window

<!-- Lecture: Working With Classes -->

Jadi untuk rekap, jika Anda ingin menggunakan fungsi yang sama di beberapa Event Listener, maka Anda perlu menentukan fungsi itu sebagai
fungsi yang terpisah, seperti di sini.

- const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  };

Dan kemudian Anda dapat meneruskan fungsi itu sebagai argumen ke beberapa metode "Add Event Listener". Seperti yang kita lakukan di sini (closeModal).

- btnCloseModal.addEventListener('click', closeModal);

Dan itu karena class pada dasarnya memungkinkan kita untuk menggabungkan beberapa properti CSS hanya dalam satu, seperti sebuah wadah.

Jadi setiap class berfungsi seperti wadah dengan banyak properti di dalamnya. Dan kemudian di sini, dengan menambahkan (add) dan menghapusnya (remove), pada dasarnya kita dapat mengaktifkan dan menonaktifkan gaya tertentu, semuanya secara bersamaan.

<!-- Lecture: Handling an 'Esc' Keypress Event -->

Menangani event Key Press (penekanan tombol) pada halaman web menggunakan JavaScript.

Jenis-jenis Event Keyboard: Ada tiga jenis event keyboard:

- Keydown: Terjadi saat tombol ditekan (digunakan dalam contoh ini).
- Keypress: Terjadi berulang selama tombol ditekan.
- Keyup: Terjadi ketika tombol dilepas.

Mengakses Event Object: JavaScript menciptakan objek event yang menyimpan informasi mengenai event tersebut, termasuk tombol yang ditekan. Objek ini bisa diakses dengan menambahkan parameter ke fungsi handler event, yang disebut e (atau nama lain).
