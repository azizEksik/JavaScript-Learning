// 1- "Elma,Armut,Muz,Çilek" elemanlarina sahip bir dizi olusturunuz.
let meyveler = ["Elma","Armut","Muz","Çilek"];

// 2- Dizi kac elemanlidir?

console.log("Dizinin eleman sayisi = " + meyveler.length);

// 3- Dizinin ilk ve son elemani nedir?

console.log("Dizinin ilk Elemani = " + meyveler[0]);
console.log("Dizinin son Elemani = " + meyveler[meyveler.length-1]);

// 4- Elma dizinin bir elemanimidir?

let deger = meyveler.toString();

if(deger.includes("Elma")){
    console.log("Elma dizinin bir elemanidir");
} else{
    console.log("Elma dizinin elemani degildir");
}

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.

meyveler.push("Kiraz");

console.log("Dizinin son elemani = " + meyveler[meyveler.length-1]);

// 6- Dizinin son iki elemanini siliniz

let silinenElemanlar = meyveler.splice(3,2);

console.log("Silinen Elemanlar = " + silinenElemanlar);
console.log(meyveler);
