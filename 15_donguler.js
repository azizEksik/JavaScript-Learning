
let toplam = 0;

for(let i = 0; i<10; i++){

    toplam+= i;
};

console.log(toplam); // 45

let sayilar = [1,5,4,3,8,4,7];

toplam=0;

for(let i in sayilar){
 // in operatörünü kullanarak sayiların dizisinin bütün indexlerini aldık ve onları kullanarak sayilar dizisinden elman cagirdik.
 // bu yapıda döngü sayilarin indexi kadar döner

    toplam+= sayilar[i];

};

console.log(toplam); // 32

toplam =0;

for(let i of sayilar){
// of operatörünü kullanarak sayilarin index yerine direkt elemanlarını getirdik
// bu yapıda döngü sayiların elman sayisi kadar döner

    toplam+=i;
}

console.log(toplam); // 32

let user = {
    "name": "aziz",
    "userName": "aziz21",
    "password": "12345",
    "email": "info@gmail.com"
};

for(let key in user){
// user objesinin içindeki bütün keylere ulaş ve buları getir
// bu yapıyı objeler için kullanıyoruz
    console.log(key); // name UserName password email
    console.log(user[key]); // aziz aziz21 1234 info@gmail.com
};


