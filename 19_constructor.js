
function Soru(soruMetni, cevapSecenekleri, dogruCevap){ // constructor için function keyword'ünden sonra yazdıgımız fonksiyon ismi büyük harle başlar

    this.soruMetni = soruMetni; // bu constructor içinde dışarıdan gönderdigimiz degiskenleri ata
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt = function (cevap){
        return cevap === this.dogruCevap;
    };
};

let soru1 = new Soru("Hangisi js paket yönetim uygulamasidir?", {a :"node.js", b: "typscritp", c: "Npm"}, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasidir?", {a :"node.js", b: "nuget", c: "Npm"}, "b");

let sorular = [
    new Soru("Hangisi js paket yönetim uygulamasidir?", {a :"node.js", b: "typscritp", c: "Npm"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasidir?", {a :"node.js", b: "nuget", c: "Npm"}, "b"),
    new Soru("Hangisi .net paket yönetim uygulamasidir?", {a :"node.js", b: "nuget", c: "Npm"}, "b"),
    new Soru("Hangisi .net paket yönetim uygulamasidir?", {a :"node.js", b: "nuget", c: "Npm"}, "b"),
    new Soru("Hangisi .net paket yönetim uygulamasidir?", {a :"node.js", b: "nuget", c: "Npm"}, "b")
]; // bu sekilde kullanabiliriz

console.log(soru1.soruMetni); // Hangisi js paket yönetim uygulamasidir?
console.log(soru1.dogruCevap); // c
console.log(soru1.cevabiKontrolEt("c")); // true

console.log(soru2.soruMetni); // Hangisi .net paket yönetim uygulamasidir?
console.log(soru2.dogruCevap); // b
console.log(soru2.cevabiKontrolEt("b")); // true