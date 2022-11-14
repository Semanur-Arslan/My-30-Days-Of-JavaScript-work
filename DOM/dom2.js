function eklenenYazı(){
    başlıkEkle.style.color = 'red'
    başlıkEkle.innerHTML += '  başlık eklendi';
 }



// ilk olarak işlem yapacağım noktayı dökümandan seçtik ve değişkene aktardık.
let başlıkEkle = document.querySelector('#başlık')


// değişkene addEventListener ile bir etkinlik ekledir. click = tıklandığında bir etkinlik vermesi.
başlıkEkle.addEventListener('click',eklenenYazı)

//addEventListener('event, function())  parantez içerisine bir event(etkinlik) alır. 
// eventlere burdan bakabilirsin https://www.w3schools.com/jsref/dom_obj_event.asp
// parantez içine yazılacak olan diğer şey ise fonksiyondur. belirttiğimiz event gerçekleştirildiğinde hangi fonksiyonun çalışacağını buraya yazmamız gerekir.


// BÖLÜM SONU ÇALIŞMASI
let sonuç = JSON.parse(localStorage.getItem('kayıt')) ? JSON.parse(localStorage.getItem('kayıt')) : 0 ;
//localstorage ile çağırdık

let sonuçDOM = document.querySelector('#sonuç');
let arttırDOM = document.querySelector('#arttır');
let azaltDOM = document.querySelector('#azalt');

sonuçDOM.innerHTML = sonuç

arttırDOM.addEventListener('click',clickEvent)
azaltDOM.addEventListener('click',clickEvent)


function clickEvent(){
    if(this.id == 'arttır'){
        sonuçDOM.innerHTML = ++sonuç;
        sonuçDOM.style.color = 'blue'
        localStorage.setItem('kayıt', JSON.stringify(sonuç)) // localstorage ile kaydettik

    }else{
        sonuçDOM.innerHTML = --sonuç
        sonuçDOM.style.color = 'red'
        localStorage.setItem('kayıt', JSON.stringify(sonuç)) // localstorage ile kaydettik
    }
}


/* fonksiyonun kısa hali şu şekilde yazılabilir

function clickEvent(){
  this.id == 'arttır' ? sonuçDOM.innerHTML = ++sonuç : sonuçDOM.innerHTML = --sonuç
}
*/

//LOCALSTORAGE

// kaynak -> https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

// web sayfasında yapılan değişikliklerin kaydının tutulmasıdır

//iki kayıt türü (localstoga ve sessionstrage) arasındaki en temel fark localStorage kayıtları zaman aşımı olmaksızın tutarken sessionStorage kayıtları oturum sonlanana kadar ya da veri kaybolana kadar tutmaktadır. 

/*
veri ekleme -> window.localStorage.setItem("key","value");
veri okuma ->  	window.localStorage.getItem("key");
veri silme ->  localStorage.removeItem("key");
*/


// localstorage ile sadece string ifade tutlabilir.
// örneğin bir diziyi kaydetmek istersek JSON.strigfy kullanmalıyız

let movies = ["Kasaba", "Kış uykusu","Bir Zamanlar Anadolu"];

localStorage.setItem('nuri bilge ceylan', JSON.stringify(movies)); // bu şekilde diziyi localstorage içine kaydettik

// eğer bu diziyi tekrar dizi olarak çağırmak istersek JSON.parse kullanmamız gerekir

JSON.parse(localStorage.getItem('nuri bilge ceylan'))
// string olarak kaydettiğimiz diziyi bu şekilde tekrar dizi olarak çağırdık

console.log(JSON.parse(localStorage.getItem('nuri bilge ceylan')))
// çıktı => (3) ['Kasaba', 'Kış uykusu', 'Bir Zamanlar Anadolu'] yani bir dizidir