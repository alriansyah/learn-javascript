const angka1 = 10;
const angka2 = "20";
const stringFloat = "20.5";
const angkaInt = 20;
const angkaFloat = 20.5;

const sum = angka1 + angka2;
console.log(sum); // 1020 
console.log(typeof(sum)); // string

// ParseInt :
const sumParseInt = angka1 + parseInt(angka2);
console.log(sumParseInt); // 30
console.log(typeof(sumParseInt)); // number
console.log("-----------------------");

// ParseFloat :
const coba = parseFloat(sumParseInt);
const sumParseFloat = angka1 + parseFloat(stringFloat);
console.log(coba); // 30
console.log(sumParseFloat); // 30.5
console.log(typeof(sumParseFloat)); // number

// float x int :
console.log(angkaInt + angkaFloat); // 40.5
console.log("-----------------------");


// Number (flexible):
const number = Number("20");
const number2 = Number("20.5");
console.log(number); // 20
console.log(number2); // 20.5
console.log(typeof(number)); // number
console.log(typeof(number2)); // number
console.log("-----------------------");


// ToString :
const num = 20;
console.log(num.toString()); // 20
console.log(typeof(num.toString())); // string
console.log("-----------------------");

// Nan :
const kata = "Oke";
console.log(parseInt(kata)); // NaN