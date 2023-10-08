// For of :
// - digunakan untuk iterasi terhadap isi value dari terable object, seperti :
// array, string dan lain-lain
// - tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukan iterable

const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

const fullName = "Eko Kurniawan";
for (const iterator of fullName) {
    console.log(iterator);
}

