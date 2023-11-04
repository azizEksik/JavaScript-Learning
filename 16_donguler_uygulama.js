let sayilar = [1,5,7,15,3,25];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.

for(let sayi of sayilar){
    //console.log(sayi*sayi);
};

// 2- sayilar listesindeki hangi sayılar 5'in katıdır?

for(let sayi of sayilar){
    if(sayi%5==0){
        //console.log(sayi);
    };
};

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.

let ciftSayilarToplam = 0;

for(let sayi of sayilar){
    if(sayi%2==0){
        ciftSayilarToplam+=sayi;
    };
};

//console.log(ciftSayilarToplam);

let urunler = ["iphone 12","samsung s22","iphone13","samsung s23"];

// 4- urunler listesindeki tum urunleri büyük harf ile yazdırınız

for(let urun of urunler){
    //console.log(urun.toUpperCase());
};

// 5- urunler listesinde içinde samsung geçen kaç urun vardır

let sayac = 0;

for(let urun of urunler){
    if(urun.includes("samsung")){
        sayac++;
    }
};

//console.log(sayac);

let ogrenciler = [
    {"ad":"yigit","soyad":"bilgi","notlar":[60,70,60]},
    {"ad":"ada","soyad":"bilgi","notlar":[80,70,80]},
    {"ad":"cinar","soyad":"bilgi","notlar":[70,70,60]}
];

// 6- ogrenciler listesindeki her ogrencinin not ortalaması ve başarı durumlarını yazdırınız.

let toplamNot= 0;
let ortNot;
let notSayisi = 0; 
for(let i = 0; i <ogrenciler.length; i++){
    for(let k = 0; k<ogrenciler[i].notlar.length; k++){
        toplamNot+= ogrenciler[i].notlar[k];
        notSayisi++;
    };
    
    ortNot = toplamNot/notSayisi;

    if(ortNot>=50 && ortNot<=75){
        console.log(i+1+". ogrencinin not ortalamasi = " +  ortNot);
        console.log(i+1+". ogrencinin basari durumu = " +  "iyi");
    };

    if(ortNot>75 && ortNot<=100){
        console.log(i+1+". ogrencinin not ortalamasi = " +  ortNot);
        console.log(i+1+". ogrencinin basari durumu = " +  "çok iyi");
    };

    if(ortNot<50){
        console.log(i+1+". ogrencinin not ortalamasi = " +  ortNot);
        console.log(i+1+". ogrencinin basari durumu = " +  "kötü");
    };

    notSayisi=0;
    toplamNot=0;
    ortNot=0;
};

// 7- tüm ogrencilerin not ortalaması kaçtır?

let tumToplamNot = 0;
let = tumNotSayisi = 0;
for(let i = 0; i< ogrenciler.length; i++){
    for(let k = 0; k<ogrenciler[i].notlar.length; k++){
        tumToplamNot+= ogrenciler[i].notlar[k];
        tumNotSayisi++;
    };
}

console.log(tumToplamNot/tumNotSayisi);
