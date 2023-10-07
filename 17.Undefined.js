// Undefined adalah sebuah kata kunci di javascript
// Undefined merupakan tipe data yang merepresentasikan sebuah variable yang
// belum diinisialiasi nilainya.
// let nilai = undefined; // error
let nilai; // error
console.log(nilai);
console.log("-----------------------");


let alamat;
if (nilai === undefined) {
    console.log("Undefined");
} else {
    console.log("Defined");
}
console.log("-----------------------");


const fruits = ["apple", "banana", "cherry"];
console.log(fruits[3]); // undefined
console.log("-----------------------");

const siswa = {
    nama: "Al Riansyah",
}
console.log(siswa["umur"]); // undefined