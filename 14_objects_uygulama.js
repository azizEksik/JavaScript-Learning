/*
1- sipariş bilgilerini object içerisinde saklayınız.
2- her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv %18)
3- tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

siparis id: 101
siparis tarihi: 31.12.2022
odeme sekli: kredi karti
kargo adresi: istanbul turkey
satın alınan urunler : 
    urun id: 5
    urun basligi: IPhone 13 Pro
    urun url: https://abc.com/iphone-13-pro
    urun fiyati: 22000

    urun id: 6
    urun basligi: IPhone 13 Pro Max
    urun url: https://abc.com/iphone-13-pro-max
    urun fiyati: 25000
musteri:
    musteri id: 12
satici: 
    firma id: 34
    firma adi: Apple Turkiye

siparis id: 102
siparis tarihi: 30.12.2022
odeme sekli: kredi karti
kargo adresi: ankara turkey
satın alınan urunler : 
    urun id: 6
    urun basligi: IPhone 13 Pro Max
    urun url: https://abc.com/iphone-13-pro-max
    urun fiyati: 25000
musteri:
    musteri id: 12
satici: 
    firma id: 34
    firma adi: Apple Turkiye
        
*/


let siparisler = [
    {
        "siparis_id": 101,
        "siparis_tarihi" : "31.12.2022",
        "odeme_sekli": "kredi karti",
        "kargo_adresi": "istanbul/turkey",
        "satin_alinan_urunler": [
            {
                "urun_id": 5,
                "urun_basligi": "IPhone 13 Pro",
                "urun_url": "https://abc.com/iphone-13-pro",
                "urun_fiyati": 22000
            },
                
            {
                "urun_id": 6,
                "urun_basligi": "IPhone 13 Pro Max",
                "urun_url": "https://abc.com/iphone-13-pro-max",
                "urun_fiyati": 25000
            }
        ],
        "musteri": {
            "musteri_id": 12
        },
        "satici": {
            "firma_id": 34,
            "firma_adi": "Apple Turkiye"
        }
    },

    {
        "siparis_id": 102,
        "siparis_tarihi" : "30.12.2022",
        "odeme_sekli": "kredi karti",
        "kargo_adresi": "ankara/turkey",
        "satin_alinan_urunler": [
               
            {
                "urun_id": 6,
                "urun_basligi": "IPhone 13 Pro Max",
                "urun_url": "https://abc.com/iphone-13-pro-max",
                "urun_fiyati": 25000
            }
        ],
        "musteri": {
            "musteri_id": 12
        },
        "satici": {
            "firma_id": 34,
            "firma_adi": "Apple Turkiye"
        }
    }

]

let siparis1ToplamUcret = (((siparisler[0].satin_alinan_urunler[0].urun_fiyati)*0.18) + (siparisler[0].satin_alinan_urunler[0].urun_fiyati)) +
                          (((siparisler[0].satin_alinan_urunler[1].urun_fiyati)*0.18) + (siparisler[0].satin_alinan_urunler[1].urun_fiyati));

let siparis2ToplamUcret = (((siparisler[1].satin_alinan_urunler[0].urun_fiyati)*0.18) + (siparisler[1].satin_alinan_urunler[0].urun_fiyati));  

let tumSiparislerToplamOdenenTutar = siparis1ToplamUcret+siparis2ToplamUcret;

console.log("Birinci siparis Toplam ucret + kdv = " + siparis1ToplamUcret);
console.log("Ikinci siparis Toplam ucret + kdv = " + siparis2ToplamUcret);
console.log("Tum siparis Toplam ucret + kdv = " + tumSiparislerToplamOdenenTutar);





















