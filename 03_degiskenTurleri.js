var urunAdi = "iphone"; // String

let urunFiyati = 5000; // Integer

// iki adet degisken türümüz var "var" ve "let"
// ikisini de strign ve integer olarak kullanabiliriz

console.log(typeof urunAdi); // string
console.log(typeof urunFiyati); // number

// typeOf methodu bize data tipini yazdirir

let sayi1 = "10";
let sayi2 = "20";

console.log(sayi1+sayi2); // 1020

console.log(Number(sayi1) + Number(sayi2)); // 30

// Number keyword'unu kullanarak stringi integer'a cevirebiliriz

let sayi3 = 10;
let sayi4 = 20;

console.log(sayi3.toString() + sayi4.toString()); // 1020

// toStrign() methodunu kullanarak integer'i Stringe cevirebiliriz

let sinavNotu1 = 70;
let sinavNotu2 = 40;

let basariliMi1 = (sinavNotu1 >= 50); // mantıksal operatör kullandıgımız icin boolean degere dönüstü
let basariliMi2 = (sinavNotu2 >= 50);

console.log(typeof basariliMi1); // boolean
console.log(basariliMi1); // true
console.log(basariliMi2); // false

let yas; // degiskene deger atamadigimizda undefined olur

console.log(yas); // undefined
console.log(typeof yas); // undefined







