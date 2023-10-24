let simdi = new Date(); // date sınıfından nesne olusturduk. içinde şimdiki tarih - saat bilgisi var

let sonuc;

// ************* GET METHODS ***************

sonuc = simdi; // 2023-10-24T17:43:55.571Z // data type object

sonuc = simdi.getDate(); // 24 // gün bilgisini getiren method

sonuc = simdi.getDay(); // hangi günde oldugumuz söyleyen method // 0: Pazar - 6: Cumartesi "0" ile "6" arasında deger döner

sonuc = simdi.getFullYear(); // 2023 // yil bilgisini getiren method

sonuc = simdi.getHours(); // 20 // saat bilgisini getiren method

sonuc = simdi.getTime(); // 1698169725150 // şuanki zamanı milisaniye cinsinden getiren method

// ************* SET METHODS *****************

simdi.setFullYear(2025); // 2025-10-24T17:51:53.438Z // zamanı istedigimiz yıla almamızı saglayan method

simdi.setMonth(7); //  2025-08-24T17:53:01.594Z // 0: Ocak - 12: Aralik // index olarak algıladıgı için 7 yazınca 8. ayi getirdi çünkü index 0 ' dan baslar

simdi.setDate(15); // 2025-08-15T17:55:36.068Z //  15. güne çektik


sonuc = simdi; 

simdi = new Date();

let dogumTarihi = new Date(1996, 2, 3);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear(); // 27 // mevcut yaşı hesapladik

let milisecond = simdi - dogumTarihi; // 872366443361

let saniye = milisecond/1000; // mili saniyeyi saniyeye çevirdik

sonuc = saniye; // 872366535.756

let minute = saniye/60; // saniyeyi dakikaya çevirdik

sonuc = minute; // 872366582.623

let hour = minute/60; // saniyeyi saate cevirdik

sonuc = hour; // 242324.07334444442

let day = hour/24; // 10096.837317847221

sonuc = day; // 8077.469580981482

let month = day/30; // günü aya cevirdik

sonuc = month; // 336.5612587380402

let year = month/12 // ayı yıla cevirdik

sonuc = year; // 28.046772627443417

console.log(sonuc);
console.log(typeof sonuc);