let ogrenciler = ["çinar", "yigit","ada"];

sonuc = ogrenciler.length; // eleman sayisini veren method

sonuc= ogrenciler.toString(); // diziyi stringe cevirdik // çinar,yigit,ada

sonuc = ogrenciler.join(" "); // diziyi istedigimiz karakteri baz alarak elmanlara ayirip stringe ceviren method // çinar yigit ada

// sonuc = ogrenciler.pop(); // dizinin son elemanini silen ve silenen elemani dödüren method // ada

// sonuc = ogrenciler.shift() // dizinin ilk elemanini silen ve silenen elemani dödüren method // çinar

sonuc = ogrenciler.push("sena"); // [ 'çinar', 'yigit', 'ada', 'sena' ] // dizinin sonuna eleman ekleme methodu

sonuc = ogrenciler.unshift("aziz"); // [ 'aziz', 'çinar', 'yigit', 'ada', 'sena' ] // dizinin basina eleman ekleyen method

let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

sonuc = markalar1.concat(markalar2).concat(markalar3); // [ 'mazda', 'toyota', 'opel', 'renault', 'mercedes' ] // dizileri birlestiren method

sonuc = markalar1.splice(0, 1, "bmw", "audi"); // [ 'mazda' ] // [ 'bmw', 'audi', 'toyota' ] // splice() methodu bizden 2 veya üç parametre ister
                                               // birinci parametre başlangıç index'i, 
                                               // ikinci parametre silinecek eleman sayisi, son parametreler eklenecek elemanlar
                                               // belirttigimiz index ve indexten sonra elemanları siler ve ekler
                                               // silinen elmanlari bize dönderir

                        
sonuc = markalar1.splice(0, 1,); // eleman eklemek zorunda degiliz // baslangic indexini verip bu indexve indexten sonra verilen saı kadar eleman sil diyebiliriz

                                            
console.log(sonuc);
console.log(markalar1);
