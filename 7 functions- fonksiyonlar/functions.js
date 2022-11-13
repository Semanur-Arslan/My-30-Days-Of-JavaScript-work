// DECLARATİON FUNCTİON (FONKSİYON BİLDİRİMİ)

function fonksiyonİsmi(){
    console.log('hello!')
}

fonksiyonİsmi() // bu şekilde foksiyonu çağırırız
// fonksiyon içerisine yazdığımız kod ancak fonksiyonu çağrdığımızda çalışır.

// parametre alan fonksiyonlar ise şu şekildedir. fonksiyonlar genellikle parametre alarak kullanılır.
// ancak fazla parametre alması ise fonksiyon okunurluğunu azaltır
// parametre alan fonksiyona bir değer atamsı yapabiliriz. bu değere ARGÜMAN denir.

function consoleWrite(name){
    console.log('Hello' + name)
}
consoleWrite('semanur')
 // name bir parametredir. semanur ise argümanıdır. bir argüman vererek fonksiyonu çağırmış  olduk

function multiplication(number1,number2){
    console.log(number1 * number2)
}

multiplication(4,5)
// burada ise iki parametre aldı ve iki argüman girdik bize çarpımları veren bir fonksiyon oluşturduk.





// FONKSİYONLARIN DEĞER DÖNDÜRMESİ (RETURN)
function fonksiyonİsmi(){
    console.log('hello!')
}

let deneme = fonksiyonİsmi()
console.log(deneme)
//burada fonksiyonu bir değişkene aktardık. çıktı ->undefined oldu.
//çünkü örnekteki fonksiyon bir değer döndürmemektedir.
// bir değer döndürmesi için RETURN kullanırız.

function işlem(number1,number2){
    return (number1 * number2)
}
let değişken = işlem(4,2)
// buradaki fonksiyonumuz sayıların çarpımını döndürmektedir.
// eğer fonksiyon bir değer döndürüyorsa bunu bir değişkene aktarabiliriz.




// Fonksiyon İFADELERİ (Function Expressions)
// JavaScript bir değişkene fonksiyon atanmasına ve daha sonra bu değişkenin fonksiyon olarak kullanılmasına fonksiyon ifadeleri denir.


// ANONYMOUS FUNCTİONS
// Anonim fonksiyonların bir adı yoktur ve bir değişkene atanarak yeri geldiğinde kullanılırlar.
//Değişken adı kullanılarak çağrıldıkları için birden çok anonim fonksiyonu aynı dizide kullanabilirsiniz.
//bir değişkene atandıklarından bu değişkeni başka bir fonksiyonun parametresine koyarak callback (geri arama) yapabilirsiniz.

let sayHello = function(name){
    return `hello ${name}`
}
console.log(sayHello('semanur'));

//SELF INVOKİNG FUNCTİONS (KENDİ KENDİNİ ÇAĞIRAN FONKSİYON)

(function(n) {
    console.log(n * n)
  })(2);

// iki kullanımı vardır

  let squaredNum = (function(n) {
    return n * n
  })(10);


//RECURSİON (ÖZYİNELEME)
//Bir fonksiyon bir görevi çözdüğünde, süreçte birçok başka fonksiyonu çağırabilir.

// mesela sayının kendi kendi ile çarpımını veren bir fonksiyon yazmak istiyoruz
function çarpma(x,n){
    let sonuç = 1;
    for(let i = 0; i < n; i++){
        sonuç *=x;
    }
  return sonuç;
}

console.log(çarpma(2,3))// => çıktı 8 dir. 2 yi 3 kere kendisi ile çarpar

// diğer bir yol ise şu şekildedir.
function çarpma1(x,n){
    if(n == 1 ){
        return x
    }else{
        return x * çarpma1(x, n-1)
    }
}
console.log(çarpma1(2,3)) // => 8 

// kısa olarak şu şekilde yazılabilir
function çarpma2(x,n){
    return (n == 1 ) ? x : (x * çarpma2(x, n-1))
}
console.log(çarpma2(2,3)) // => 8

// ÖRNEK faktöriyal işlemini fonksiyon ile nasıl yazarız
//5 faktoriyal 5*4*3*2*1 = 120 dir

function factorial(n){
    return (n == 1) ? n : (n * factorial(n-1))
  }
  console.log(factorial(4))



  

// ARROW FUNCTİONS
// fonksiyon yazmanın  alternatif yoludur.
function square(n) {
    return n * n
  }
  console.log(square(2)) // 4

  //bu fonksiyonu aşağıdaki gibi yazabiliriz
  
  const square1 = n =>  n * n
  console.log(square1(2))  // -> 4
  
  // eğer arrow fonksiyon birden fazla parametre alıyor ve return işlemi tek satırda yazılmıyorsa aşağıdaki gibi kullanılır
  const square2 = (n,n1) => {
    let sayı = n * n1
    return sayı += 1
    
  }
  console.log(square2(3,2))

  // BİR KOŞULA GÖRE İKİ FONKSİYONDAN BİRİNİ ÇALIŞTIRMAMIZ GEREKİRSE???????
  
  /* HATIRLATMA
  durum = (yas >= 18) ? "yetişkin" : "küçük";
yas değeri 18’den büyük ve eşit olması durumunda durum değişikeninin değeri “yetişkin” değilse “küçük” olacaktır.*/


  let experience = prompt('kaç yıl tecrübeniz var?')
  const tecrübe = experience < 5 
  ? () => alert('kendini geliştirmelisin')
  : () => alert('bir çok konuyu biliyorsun');

tecrübe()


// VERSAYILAN DEĞER
function multiply(num1, num2=2){
    return num1 * num2
}
console.log(multiply(4,5)) // burada 4 ile 5 i çarpar
console.log(multiply(10))// burada ise num2 değerini girmediğimiz için varsayılan olarak atadığımız 2 ile girilen 10 değerini çarpar

// ARGUMENT NESNESİ

// arguments ile, oluşturduğunuz fonksiyonun kaç parametreli olacağını belirtmenize gerek yoktur. Direkt olarak yolladığınız değerlerin hepsine fonksiyon içerisinde erişebilirsiniz.

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
  }

  return sum;
}

console.log(sum(1, 2, 3, 4)) // meselam burada istediğimiz kadar sayı girelim bu sayıların toplamını bize verir.

//Arrow function’larda arguments nesnesi yerine rest parameter’ı kullanabiliriz.
const sum = (...arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }

  return sum;
}

console.log(sum(1, 2, 3, 4));

//rest parameter'in kısa kullanımı
const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}





// CALLBACK FONKSİYONLAR ve ASENKRON ÇALIŞMA

//javascripte kodlar yukarıdan aşağıya sırayla okunur ve çalıştırılır.
//Asenkron yapı kurduğumuzda ise fonksiyonların birbirini beklemez. fonksiyonlar aynı anda çalışabilir.
//asenkron yapı kurmak için setTimeout kullanılır

/* YAPISI ŞU ŞEKİLDEDİR.

setTimeout(function(){
     yapılacak işlemler.
  }, msSure); 
  
  */

// msSure = ne kadar gecikeceğini söyleriz. mesela 1000 yazdığımızda 1 saniye gecikme sağlarız.
function printScreen1 (){
    console.log('İlk ekran çıktısı');
}

 function printScreen2 (){
   setTimeout(function(){
console.log('İkinci ekran çıktısı')  
}, 3000);
}

function printScreen3 (){
    console.log('Üçüncü ekran çıktısı');
}
printScreen1();
printScreen2();
printScreen3();
// fonsiyonları 1 2 3 olarak sıra ile çağırdık ama ikinci fonksiyonda 3 saniye gecikme sağlamştık.
/* bu nedenle çıktı -> 
İlk ekran çıktısı
Üçüncü ekran çıktısı
İkinci ekran çıktısı
şeklinde olur.
*/


