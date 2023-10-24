let ad = "sadik";
let soyad = "Turan";
let yas = 39;
let sehir = "Kocaeli";
let message = "Benim adim " + ad + ' ve soyadim ' + soyad + '. ' + sehir + '\'de yasiyorum '
            + "Emeklilige " + (65-yas) + " yilim kaldi.";

// backtick ve ${} işaretiyle de yazılabilir
message = `Benim adim  ${ad} ve soyadim ${soyad}. ${sehir}'de yasiyorum Emeklilige ${65 - yas} yilim kaldi`;            

let emeklilik = (65-yas > 0)

if(emeklilik){
    console.log(`Emekliliginize ${65-yas} yil kaldi`);
}else{
    console.log("Emekli olabilirsiniz");
}

// ternary operator

emeklilik = (65-yas > 0) ? "Emeklilige " + (65-yas) + " yilim kaldi" : "Emekli olabilirim";

message = `Benim adim  ${ad} ve soyadim ${soyad}. ${sehir}'de yasiyorum. ${emeklilik} yilim kaldi`; 

console.log(message);




