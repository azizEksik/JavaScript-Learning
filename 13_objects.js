let kullanici1 = {

    "ad" : "aziz",
    "soyad" : "eksik",
    "yas" : 27,
    "adres" : "Turkiye"
} 

// bu yapı ile degerleri key ve value olarak saklayabiliyoruz. Json Yapısına benziyor

let sonuc;

sonuc = kullanici1.ad; // aziz
sonuc = kullanici1.soyad; // eksik
sonuc = kullanici1.yas; // 27
sonuc = kullanici1.adres; // Turkiye

sonuc = kullanici1["ad"]; // aziz // bu sekilde de kullanılabilir

let kullanici2 = {

    "ad" : "aziz",
    "soyad" : "eksik",
    "yas" : 27,
    "adres" : {
        "ulke" : "Turkiye",
        "sehir" : "istanbul",
        "ilce" : "cihangir"
    }
} 

// bu şekilde obje içinde obje de key ve value olarak saklayabiliriz, Json'daki gibi

sonuc = kullanici2.adres.ulke; // Turkiye
sonuc = kullanici2.adres.sehir // istanbul
sonuc = kullanici2.adres.ilce // cihangir

sonuc = kullanici2["adres"]["ulke"]; // Turkiye // bu sekilde de kullanılabilir

let kullanici3 = {

    "ad" : "aziz",
    "soyad" : "eksik",
    "yas" : 27,
    "adres" : {
        "ulke" : "Turkiye",
        "sehir" : "istanbul",
        "ilce" : "cihangir"
    },
    "hobiler" : ["sinema","spor","müzik"]
} 

// bu şekilde obje içinde dizi de key ve value olarak saklayabiliriz, Json'daki gibi

sonuc = kullanici3.hobiler[0]; // sinema
sonuc = kullanici3.hobiler[1]; // spor
sonuc = kullanici3.hobiler[2]; // müzik

sonuc = kullanici3["hobiler"][0]; // sinema // bu şekilde de kullanabiliriz

// bu objeleri bir array içinde de saklayabilir ve orada ncagirabiliriz

let kullanicilar = [
    kullanici1,
    kullanici2,
    kullanici3
];

sonuc = kullanicilar[0].ad; // aziz
sonuc = kullanicilar[1].soyad // eksik
sonuc = kullanicilar[2].yas // 27

let urunler = [
    {
        "urun_adi" : "samsung s22",
        "urun_fiyat" : 15000
    },

    {
        "urun_adi" : "samsung s23",
        "urun_fiyat" : 20000
    }

];

// bu sekilde dizi içinde de objeleri tanımlayabliriz

sonuc = urunler[0].urun_adi; // samsung s22
sonuc = urunler[0].urun_fiyat; // 15000
sonuc = urunler[1].urun_adi; // samsung s23
sonuc = urunler[1].urun_fiyat; // 20000


console.log(sonuc);