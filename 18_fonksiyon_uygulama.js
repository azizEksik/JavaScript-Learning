// 1- Kendisine gönderilen kelimeyi belirten kez ekranda yazan fonksiyonu yapınız

function kelimeYazdir(kelime,sayi){

    for(let i = 1; i<=sayi; i++){
        console.log(kelime);
    };

};

kelimeYazdir("aziz",5);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız

function dikdortgen(kisaKenar, uzunKenar){

    let alan = kisaKenar*uzunKenar;
    let cevre = 2*(kisaKenar+uzunKenar);

    console.log(`Dikdörgenin alani ${alan} ve çevresi ${cevre}`);
};

dikdortgen(2,2)

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız

function yaziTura(){

    let randomsayi = Math.random()*10;

    let yazi;
    let tura;

    if(randomsayi < 5){
        tura = "tura"
        console.log(tura);
    }else{
        yazi = "yazi"
        console.log(yazi);
    }

};

yaziTura();

// 4- Kendisine gönderilen bir sayinin tam bölenlerini dizi seklinde dödüren fonksiyonu yazınız

function tamBolen(sayi){

    let dizi =[];

    for(let i = 1; i <= sayi; i++){

        if(sayi%i == 0){

            dizi.push(i);

        };
    };

    return dizi;
};

console.log(tamBolen(20));


// 5- Değişken sayida parametre alan toplam isminde bir fonksiyon tanımlayınız

function topla(){

    let sonuc = 0;

    for( let i = 0; i < arguments.length; i++){ // arguments degiskeni bize parametre sayini verir ve arguments bir object'tir
        
        sonuc += arguments[i]; // arguments'ten girdigimiz parametreleri index yardımı ile cagırıyoruz. burada indexler key'dir parametrelerimiz de value

    };

    return sonuc;

}

console.log(topla(1,1,1));