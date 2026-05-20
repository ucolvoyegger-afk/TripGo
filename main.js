 document.addEventListener("DOMContentLoaded", function() {
    // Masukkan kode fitur atau animasi di sini
    console.log("Web siap dijalankan!");
});
// Isi dari js/booking-logic.js
const bookingBtn = document.querySelector('.btn-booking'); 

if (bookingBtn) {
    bookingBtn.addEventListener('click', () => {
        alert('Fitur Smart Booking akan segera terbuka!');
    });
}
