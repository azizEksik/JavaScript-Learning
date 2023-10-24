let kursAdi = "Komple Uygulamali Web Gelistirme Egitimi";

let sonuc;

sonuc = kursAdi.toLowerCase(); // bütün karakterleri kuculten method

sonuc = kursAdi.toUpperCase(); // bütün karakterleri buyuten method

sonuc = kursAdi.charAt(0); // K // istedigimiz index'teki akrakteri getiren method

sonuc = kursAdi.length; // 40 // karakter sayisini getiren method

sonuc = kursAdi[0]; // K // istedigimiz index'i bu sekilde de cagirabiliriz

sonuc = kursAdi.slice(0,20); // Komple Uygulamali We // stringi girdimiz baslangic index'inden bitis index'ine kadar getirir;

sonuc = kursAdi.substring(0,6) // slice methodu'ile aynı isi yapiyor

sonuc = kursAdi.replace("Egitimi", "Kursu"); // "Eğitimi" kelimesini bul ve onu "Kursu" ile degistir

sonuc = kursAdi.trim(); // bastaki ve sondaki bosluklari siler

sonuc = kursAdi.trimEnd(); // sondaki boluklari siler

sonuc = kursAdi.trimStart(); // sondaki bosluklari siler

sonuc = kursAdi.indexOf("Komple"); // "Komple" kelimesini arar ve bulursa baslangic index'ini getirir // bulamazsa -1 döner

sonuc = kursAdi.split(" "); // method icine yazdıgımız karaktere göre stringi ayırıp Array'e donüstürür

sonuc = kursAdi.split(" ")[3]; // Gelistirme // bosluklara göre ayrilmis string Array'inden 3. index'i getir

sonuc = kursAdi.includes("Gelistirme"); // true // Stringin içinde "Gelistirme" kelimesi var mi? varsa true yoksa false


console.log(sonuc);