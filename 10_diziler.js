let urunler = ["iphone 12","iphone 13","iphone 14", "iphone 15"];

let fiyatlar = [20000, 30000, 40000, 50000];

let renkler =["sihay", "beyaz", "kirmizi", "gri"];

let urun = ["iphone" , 20000, "gold"]; // ayni dizini içinde fakli veri tipleri de tanımlayabiliriz

let urun2 = []; // bu sekilde de atama yapabiliriz

urun2[0] = "iphone";
urun2[1] = 20000;
urun2[2] = "siyah";

console.log(urun2[0], urun2[1], urun2[2]); // iphone 20000 siyah

console.log(urunler[2]); // iphone 14

console.log(`${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`); // iphone 12 - 20000 - sihay
console.log(`${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}`); // iphone 13 - 30000 - beyaz
console.log(`${urunler[2]} - ${fiyatlar[2]} - ${renkler[2]}`); // iphone 14 - 40000 - kirmizi
console.log(`${urunler[3]} - ${fiyatlar[3]} - ${renkler[3]}`); // iphone 15 - 50000 - gri

let katmanli = ["iphone", 20000, ["siyah", "beyaz", "kirmizi"]];

console.log(katmanli[2][2]); // 
