let sonuc;

sonuc = 10;
sonuc = "10";

sonuc = Number("10"); // stringi number'a parse eden method
sonuc = parseInt("10.6"); // parseInt methodu ile de stringi number'a cevirebiliriz ama ondalıklı kısmı almaz

sonuc = parseFloat("10.6"); // 10.6

sonuc = parseInt("10a"); // 10 yazdırır // baştan çevirmeye başlar, çevirebildigi sayilari cevirir

sonuc = parseInt("a10"); // NaN(not a number) // basşta özel karakter veya harf varsa çervirmez ve NaN  yazdirir

sonuc = isNaN("10a"); // sayisal deger degil mi methodu // true döner

sonuc = isNaN("10"); // false

let sayi = 15.1234232;

sonuc= sayi.toPrecision(5); // 15.123 // bütün sayiyi içine girilen sayi kadar basamaga dönüştüren methdot
// bu iki method da son basamakta yuvarlama yapar
sonuc = sayi.toFixed(5); // 15.12342 // bu method da ondalıklı kısmın basamagını girilen sayi kadar dönüştürür

sonuc = Math.round(2.4); // math inteface'inden cagırdıgımız bu method yuvarlama yapar.
// 2.4 girdik bakar, 2 ye mi yakın yoksa 3 e mi, yakın olanı döndürür // 2

sonuc = Math.ceil(2.4); // 3 // bu method her zaman yukariya yuvarlar

sonuc = Math.floor(2.4); // 2 // bu method her zaman asagiya yuvarlar

sonuc = Math.sqrt(25); // 5 // karekökü alan method

sonuc = Math.pow(2,3); // 8 // taban ve üstü veriyoruz

sonuc = Math.abs(-10); // 10 // sayinin mutlak degerini verir

sonuc = Math.min(3,5,1,9,0,5); // 0 // girilen sayilardan minimum degeri getiren method

sonuc = Math.max(10,2,5,4,6); // 10 // girilen sayilardan maksimum degeri getiren method

sonuc = Math.random(); // 0 ile 1 arasında bir sayi üreten method

sonuc = Math.random() * 10; // sıfır ile bir arasında üretilen rastgele bir sayiy 10 ile carptik // 0 ile 9 arasinda bir sayi üretmis olduk

sonuc = Math.floor(Math.random()*10); // 0 ile 9 arasinda bir rastgele sayi ürettik ve ondalikli kısmı yuvarlayip kaldırdik

sonuc = Math.floor(Math.random()*10) + 1; // 1 ile 10 arasında rastgele sayi ürettik

sonuc = Math.floor(Math.random()*100) + 1; // 1 ile 100 arasinda rastgele bir sayi ürettik

console.log(typeof sonuc);
console.log(sonuc);