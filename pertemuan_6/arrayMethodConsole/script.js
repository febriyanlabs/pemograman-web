let buah = ["Apel", "Jeruk", "Mangga"];
buah.push("Pisang");
console.log(buah[0]);       // Apel
console.log(buah.length)    // 4
for (let i = 0; i < buah.length; i++) {
    console.log(i + 1) + "." + buah[i];
}