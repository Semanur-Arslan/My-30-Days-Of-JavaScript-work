
// getElementById ile işlemler

//id'si run olan bölümü dökümanda seçtik ve konsola yazdırdık
let seçim = document.getElementById('run')
console.log(seçim)  // -> <h2 id="run">Merhaba Dünya</h2>

//eğer sadece içerisindeki yazıyı seçmek istersek . innerHTML kullanmalıyız
console.log(seçim.innerHTML) //-> Merhaba Dünya


// ve seçtiğimiz yazıyı da değiştirebiliriz
seçim.innerHTML='HELLO'
console.log(seçim.innerHTML) // -> merhaba dünya yazısı HELLO yazısı ile değişti





// querySelector ve querySelectorALL ile işlemler

let link = document.querySelector('#link')
link.innerHTML += ' değişti'
//yazıyı seçtik ve var olan yazıya değişti yazısını ekledik.
link.style.color= 'red' 
//yazının özelliklerini değiştirebiliriz
link.classList.add('btn')
//bir sınıf ekleyebiliriz





// liste ögelerine ulaşma
let öge3 = document.querySelector('ul#liste>li:last-child') // listenin son ögesini seçer
let öge1 = document.querySelector('ul#liste>li:first-child')//ilk ögesini seçer

öge1.innerHTML += ' eklendi'
öge3.style.color = 'blue'

//yeni liste ögesi ekleme
let listemiz = document.querySelector('ul#liste')
let oluşan = document.createElement('li')
oluşan.innerHTML = 'bizim eklediğimiz liste ögesi'
listemiz.append(oluşan)
let oluşan2 = document.createElement('li')
oluşan2.innerHTML = 'başa eklenecek liste'
//seçtiğimiz listeye yeni ögemizi append ile en sona ekliyoruz.
listemiz.prepend(oluşan2)
// prepend ile yeni ögemizi ilk başa ekliyoruz.




// class bilgisi ekleme ve çıkarma
let sınıf = document.querySelector('#run')
sınıf.classList.add('text-primary')
sınıf.classList.add('color', 'second-class')
// seçimi yaptık ve class ekledik birden fazla class eklenebilir

sınıf.classList.remove('color') // color classını remove ile sildik.


//ALIŞTIRMA
let renk = document.querySelector('#yazı')
let button = document.querySelector('#buton')
button.addEventListener('click', function(){
    renk.classList.toggle('arkaplan')
})









