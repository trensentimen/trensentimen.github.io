// Ambil elemen loading spinner
const loadingSpinner = document.getElementById("loading-spinner");

// Simulasikan proses loading
function simulasiProsesLoading() {
  loadingSpinner.style.display = "block"; // Tampilkan spinner
  setTimeout(() => {
    loadingSpinner.style.display = "none"; // Sembunyikan spinner setelah 3 detik (gantilah sesuai kebutuhan)
  }, 3000);
}

// Panggil fungsi simulasiProsesLoading saat halaman dimuat
simulasiProsesLoading();