// EXERCİSE 3

// LEVEL1
let firstName = 'semanur'
let lastName ='arslan' 
let country = 'türkiye'
let city ='izmir'
let age = 23
let isMarried = false
let year = 1999

console.log(typeof(isMarried)) // -> boolean ... typeof ile veri türlerini öğrenebliriz.


let num1 = '10'
let num2 = 10
console.log(num1 === num2) //değer ve veri türü bakımındam eşit mi ? ->false
let num3 = '9.8'
console.log(num2 === num3) //->false
console.log(parseInt(num3) === num2) //-> false
console.log(parseInt(num1) === num2) //-> true


console.log(Boolean(56)) //-> true
console.log(Boolean('truthy')) //-> true
console.log(Boolean(-58)) //-> true
console.log(Boolean(NaN)) //-> false
console.log(Boolean('')) //-> false
console.log(Boolean(0)) //-> false


/*
4 > 3   true
4 >= 3  true
4 < 3   false
4 <= 3  false
4 == 4  true
4 === 4  true
4 != 4   false
4 !== 4  false
4 != '4'  false
4 == '4'   true
4 === '4'  false
Find the length of python and jargon and make a falsy comparison statement.
*/
/*
let p = 'python'
let j = 'jargon'
console.log(p.length)
console.log(j.length)
console.log(p.length === j.length) // -> true
console.log(p.length !== j.length) // -> false
*/

// && bu işaret VE oparötörüdür. bir yanlış varsa bile yanlıştır.
//  || bu işaret VEYA oparötörüdür. hepsi yanlışsa yanlış olur.
//  ! bu ise NEGATİVE oparötörüdür.


/*
4 > 3 && 10 < 12   true   
4 > 3 && 10 > 12   false
4 > 3 || 10 < 12   true
4 > 3 || 10 > 12   true
!(4 > 3)           false
!(4 < 3)           true
!(false)            true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12)  true
!(4 === '4')         true

There is no 'on' in both dragon and python  
let userone = 'dragon'
let usertwo = 'python'

console.log(userone.endsWith('on'))
console.log(usertwo.endsWith('on')) 
-> true
*/


/*
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

const now = new Date() //tarih işlemleri için date sınıfını bu şekilde başlatıyoruz

 let years = now.getFullYear(),
    month = now.getMonth(),
    date = now.getDate(),
    day = now.getDay(),
    hours = now.getHours(),
    minutes = now.getMinutes()

    // şimdi soruda istenenleri yapalım
    console.log(years) // -> 2022
    console.log(month) // -> 9  sıfırdan başlar 
    console.log(date) // -> 21   21. gündeyiz
    console.log(day) // ->5  haftanın 5. günündeyiz
    console.log(hours) // ->16 saat 16:37
    console.log(minutes) // -> 37

// daha anlaşılabilir bir tam tarih nasıl yazabiliriz?

let monthstil = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']

let daystil = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']

// yazdırmak istediğimiz 21 Ekim 2022 Cuma 16:47

let nowdate = `${date} ${monthstil[month]} ${years} ${daystil[day]} ${hours}:${minutes} `

//console.log(nowdate)  -> "21 Ekim 2022 Cuma 16:55 " 


// üçgenin alanını hesaplama
// kullanıcıdan tabanı ve yüksekliği girmesini istedik, sabiti tanımladık ve üçgenin alanının hesaplanmasını sağladık. burada en önemli prompt kullanılması.

      let base = prompt('Enter Base', 'only positive number')
      let height = prompt('Enter Height', 'only positive number')
      let sabit = 0.5
      let sonuç = base * height * sabit 

    //console.log(sonuç) // consolda sonuç yazdırılmış oldu.

// üçgenin çevresini hesaplama
     let a = prompt('bir uzunluk giriniz', 'sadece poziitif sayılar')
     let b = prompt('bir uzunluk giriniz', 'sadece poziitif sayılar')
     let c = prompt('bir uzunluk giriniz', 'sadece poziitif sayılar')

     let üçgeninAlanı = parseInt(a) + parseInt(b) + parseInt(c)
     //console.log(üçgeninAlanı)

     // promptta tanımladıklarımız number olarak yazmak için parsInt kullandık.


// dikdörtgen çevresi hesaplama
    let hight1 = prompt('yüksekliği giriniz', 'sadece poziitif sayılar')
    let weight1 = prompt('genişliği giriniz', 'sadece poziitif sayılar')

    let çevre = 2 * (parseInt(hight1) + parseInt(weight1))
    //console.log(çevre)


// daire alanı ve çevresini hesaplama 
    let çapDeğeri = prompt('yarıçap değeri giriniz', 'sadece poziitif sayılar')
    const PI = 3.14
    let area = PI * (parseInt(çapDeğeri) ** 2)
    let circumference = 2 * PI * parseInt(çapDeğeri)
    //console.log(area)
    //console.log(circumference)


 // adım kısa mı? uzun mu?
 let myName = 'sema'
 let myNameWeight = myName.length

if(myNameWeight<7){
   alert('adın kısa')
}
else {
   alert('adın uzun')
}
// if else yapısı ile adım uzunsa adın uzun kısa ise adı kısa olarak alert veriyor.


// isim ve soyisim uzunluğu karşılaştırma
let myFirstName = 'semanur'
let myLastName = 'arslan'
let myFirstNameWeight = myFirstName.length
let myLastNameWeight = myLastName.length

if(myFirstNameWeight>myLastNameWeight){
    alert(`Your first name, ${myFirstName} is longer than your last name, ${myLastName}`)
}
else {
    alet (`Your last name, ${myLastName} is longer than your first name, ${myFirstName}`)
}


//yaş karşılaştırma
let myAge = 35 
let yourAge = 23

if(myAge>yourAge){
    alert(`Ben senden ${myAge - yourAge} yaş büyüğüm`)
}
// sonuç ben senden 12 yaş büyüğüm. olarak çıktı. yaşları değiştirirsek bu sonuç değişir


// yaşına göre araba sürme izni
let doğumYılı = prompt('doğum yılınızı giriniz', 'sadece poziitif sayılar')
let yaş = 2022 - doğumYılı
let yıl = 18 - yaş

if(yaş>18){
    alert(`${yaş} yaşındasın. Araba Kullanabilirsin`)
}
 else{
    alert(`${yaş} yaşındasın. ${yıl} yıl sonra araba kullanmana izin verilecek`)
 }



















