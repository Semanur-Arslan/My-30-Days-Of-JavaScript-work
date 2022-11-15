// FORM SUBMİT

let formDOM = document.querySelector('#firstForm')
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault() //bu kod sayesinde form verileri url üzerinde gösterilmiyor ve sayfa yenilenmiyor
    //yani default işlemini engelledik.
    console.log('işlem gerçekleşti')

    let firstİmput = document.querySelector('#kg')
    localStorage.setItem('kg', firstİmput.value)

    let secondİmput = document.querySelector('#boy')
    localStorage.setItem('boy', secondİmput.value)
    // firstİmput ve secondİmput ile alınan iki veriyi localStorage e kaydettik.

    let BMI = firstİmput.value / (secondİmput.value * secondİmput.value);

    let finish = document.querySelector('#sonuç')
    let kategori = document.querySelector('#kategori')

    finish.innerHTML = `Vücut Kitle İndeksiniz : ${BMI.toFixed(2)}`
    if(BMI <= 18.5){
        kategori.innerHTML= `Zayıf Kategorisindesiniz`
        kategori.style.color = 'blue'

    }else if(BMI > 18.5 && BMI <= 24.9){ 
        kategori.innerHTML = `Normal Kilodasınız`
        kategori.style.color = 'blue'

    }else if(BMI > 24.9 && BMI <= 29.9){
        kategori.innerHTML = `Fazla Kilolu Kategorisindesiniz`
        kategori.style.color = 'red'

    }else if(BMI >= 30){
        kategori.innerHTML = `Obez Kategorisindesiniz`
        kategori.style.color = 'red'

    }else{
        console.log('geçerli sayı giriniz')
    }


}













