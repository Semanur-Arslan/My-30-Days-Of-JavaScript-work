// Exerzise 4

//LEVEL 1

//örnek1
let yas = prompt('Lütfen Yaşınızı Giriniz', 'Sadece Sayı Giriniz')

if(yas >= 18){
    console.log('Araba kullanmak için yeterince büyüksün')
}
else{
    console.log(`Araba kullanmak için ${18-yas} yıl daha beklemelisin`)
}


//örnek2
let myAge = 23
let yourAge = prompt('Yaşınızı Giriniz', 'Sadece sayı giriniz')

if(yourAge<myAge){
    console.log(`Ben senden ${myAge-yourAge} yaş büyüğüm`)
}
else if(yourAge==myAge){
    console.log('Aynı Yaştayız!')
}
else if (yourAge>myAge){
    console.log(`Ben senden ${yourAge-myAge} yaş küçüğüm`)
}


//örnek3
let a = 3
let b = 4
 if(a>b){
    console.log('a b\'den büyüktür')
 }
 else{
    console.log('a b\'den küçüktür')
 }

// örnek 3 ikinci kullanım (Ternary Operators ile kullanım)
let sonuç = a>b ? 'a b\'den büyüktür' : 'a b\'den küçüktür'
console.log(sonuç) 


// örnek 4 sayı çift mi? tek mi?
let number = prompt('Bir sayı giriniz')
let kalan = number % 2
if(kalan==0){
    console.log(`${number} sayısı çift sayıdır`)
}
else{
    console.log(`${number} sayısı tek sayıdır`)
}


//LEVEL 2

//örnek1
let sınavSonucu = prompt('Sınav Sonucunuzu Giriniz', '0 ile 100 arasında bir sayı olmalı!')
if(90 <= sınavSonucu && sınavSonucu<= 100){
    console.log('Harf notunuz A TEBRİKLER!')
}
else if(70 <= sınavSonucu && sınavSonucu<= 89){
    console.log('Harf notunuz B TEBRİKLER!')
}
else if(60 <= sınavSonucu && sınavSonucu<= 69){
    console.log('Harf notunuz C TEBRİKLER Çalışmaya Devam!')
}
else if(50 <= sınavSonucu && sınavSonucu<= 59){
    console.log('Harf notunuz D Daha sıkı çalışmalısınız!')
}
else if(0 <= sınavSonucu && sınavSonucu<= 49){
    console.log('Harf notunuz D Sınava tekrar girmelisin!')
}

//örnek2
let month = prompt('what month are we in?')
let month1 = month.toLowerCase() // BU SATIR BÜYÜK KÜÇÜK HARF DUYARLILIĞINI ETKİSİZ HALE GETİRMEK İÇİN ÖNEMLİ
switch(month1){
    case'september' : console.log(' the season is Autumn')
    break
    case'october' : console.log(' the season is Autumn')
    break
    case'november' : console.log(' the season is Autumn')
    break
    case'december' : console.log(' the season is Winter')
    break
    case'january' : console.log(' the season is Winter')
    break
    case'february' : console.log(' the season is Winter')
    break
    case'march' : console.log(' the season is Spring')
    break
    case'april' : console.log(' the season is Spring')
    break
    case'may' : console.log(' the season is Spring')
    break
    case'june' : console.log(' the season is Summer')
    break
    case'july' : console.log(' the season is Summer')
    break
    case'august' : console.log(' the season is Summer')
    break
}


//örnek3
const gün = new Date();
let day = gün.getDay()

if(day==0){
    console.log(` Sunday is a weekend.`)
}
else if(day==1){
    console.log(` Monday is a working day.`)
}
else if(day==2){
    console.log(` Tuesday is a working day.`)
}
else if(day==3){
    console.log(` Wednesday is a working day.`)
}
else if(day==4){
    console.log(` Thursday is a working day.`)
}
else if(day==5){
    console.log(` Friday is a working day.`)
}
else if(day==6){
    console.log(` Saturday is a weekend.`)
}











