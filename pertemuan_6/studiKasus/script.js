//  Array daftar buku
const daftarBuku = [
  { judul: "Pemograman Web", harga: 85000, stok: 12 },
  { judul: "Algoritma dan Logika", harga: 95000, stok: 0 },
  { judul: "Basis Data untuk Pemula", harga: 120000, stok: 5 },
  { judul: "Jaringan Komputer", harga: 110000, stok: 8 },
];

// If conditon untuk ketersediaan buku
for (let i = 0; i < daftarBuku.length; i++) {
    let ketersediaan;

  if (daftarBuku[i].stok > 0) {
    ketersediaan = "(Tersedia)";
  } else {
    ketersediaan = "(Habis)";
  }

  console.log(
    `${i + 1}. ${daftarBuku[i].judul} - Rp ${daftarBuku[i].harga} - Stok: ${daftarBuku[i].stok} + ${ketersediaan}`,
  );
}

//  Fungsi menghitung total aset
const hitungTotalAset = (buku) => {
  let total = 0;

  for (const items of buku) {
    total += items.harga * items.stok;
  }

  return total;
};

const hasil = hitungTotalAset(daftarBuku);
console.log(`Total nilai aset: Rp ${hasil}`);


// stok == 0 maka masuk stokhabis
let stokHabis = 0;

for (let i = 0; i < daftarBuku.length; i++) {
  if (daftarBuku[i].stok === 0) {
    stokHabis += 1;
  }
}

console.log(`Jumlah buku habis: ${stokHabis}`);