
function selamlama(){
    console.log("merhaba");
}; // function key word ile fonksiyonu javadaki adıyla methodu olusturuyoruz

selamlama(); // fonksiyonu direkt adıyla cagırıyoruz

function selamlama2(msg){
    console.log(msg);
}; // bu sekilde parametre gönderebiliyoruz

selamlama2("selam"); // selam
selamlama2("merhaba"); // merhaba
selamlama2("hello"); // hello
selamlama2("hi"); // hi 

function yasHesaplama(dogumYili){

    return new Date().getFullYear() - dogumYili;
}; // retorn key word'ü ile dödüren method olusturduk, bize yas döndericek

console.log(yasHesaplama(1996)); // 27 // döndüren method oldugu için console.log ile yazdırdık

function emekliligeKacYilKaldi(dogumYili, isim){
    
    let yas = yasHesaplama(dogumYili);
    let kalanSene = 65-yas;

    if(yas > 65){
        console.log("Emekli olabilirsiniz");
    }else{
        console.log(`${isim} beyin emekli olmasina ${kalanSene} yil kaldi`);
    };

};


emekliligeKacYilKaldi(1996,"aziz"); // aziz beyin emekli olmasina 38 yil kaldi

