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
let sonuç = 0 ;
let sonuçDOM = document.querySelector('#sonuç');
let arttırDOM = document.querySelector('#arttır');
let azaltDOM = document.querySelector('#azalt');

sonuçDOM.innerHTML = sonuç

arttırDOM.addEventListener('click',clickEvent)
azaltDOM.addEventListener('click',clickEvent)


function clickEvent(){
    if(this.id == 'arttır'){
        sonuçDOM.innerHTML = ++sonuç

    }else{
        sonuçDOM.innerHTML = --sonuç
    }
}


/* fonksiyonun kısa hali şu şekilde yazılabilir

function clickEvent(){
  this.id == 'arttır' ? sonuçDOM.innerHTML = ++sonuç : sonuçDOM.innerHTML = --sonuç
}
*/


