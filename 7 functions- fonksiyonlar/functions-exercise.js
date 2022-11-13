// LEVEL 1

//Exercise 6
function volumeOfRectPrism(height, width, length){
    return height * width * length
}
console.log(volumeOfRectPrism(2,3,4))

//Exercise 7
function areaOfCirle(r, π = 3.14){
    return π * r * r
}
console.log(areaOfCirle(2))


//Exercise 13
function vücutKitleİndeksi(){
    let kg = prompt('Lütfen kilonuzu giriniz')
    let boy = prompt('lütfen boyunuzu giriniz', 'örn : 1.68')
    let BMI =  kg / (boy * boy);
if(BMI <= 18.5){
    console.log('zayıf')
}else if(BMI > 18.5 && BMI <= 24.9){
    console.log('normal')
}else if(BMI > 24.9 && BMI <= 29.9){
    console.log('fazla kilolu')
}else if(BMI >= 30){
    console.log('obez')
}else{
    console.log('geçerli sayı giriniz')
}
}
// vücutKitleİndeksi() fonksiyonu çağırınca boy ve kilo girilir ve hesaplanır


//Exercise 14

function checkSeason(ay){
    if(ay == 'mart' || ay == 'nisan' || ay == 'mayıs'){
        console.log('ilkbahar')
    }else if(ay == 'haziran' || ay == 'temmuz' || ay == 'ağustos'){
        console.log('yaz')
    }else if(ay == 'eylül' || ay == 'ekim' || ay == 'kasım'){
        console.log('sonbahar')
    }else if(ay == 'aralık' || ay == 'ocak' || ay == 'şubat'){
        console.log('kış')
    }
}
// checkSeason('temmuz') fonksiyona ay yazdığımızda bize mevsimi verir



// LEVEL 2
//Exercise 3
let frontEnd = ['html', 'css' , 'javascript']
let backEnd = ['PHP', 'NodeJs', 'Python' ]

function array(dizi){
    let single = 0
    for(let i =0; i<dizi.length; i++){
        single = dizi[i]
      console.log(single) 
    }
}
array(frontEnd)
array(backEnd)

// burada fonksiyonu çağırıp hangi diziyi yazarsak o dizinin elemanlarını consola yazdırıyor.


//Exercise 4
function showDateTime(){
    const now = new Date() 
    let years = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate(),
        day = now.getDay(),
        hours = now.getHours(),
        minutes = now.getMinutes()
        return `${date} / ${month} / ${years}  ${hours}:${minutes} `
    }
    console.log(showDateTime()) //=> 12 / 10 / 2022  20:11


//Exercise 5 
function swapValues(x,y){
    return `x = ${y}  y = ${x}`
}
console.log(swapValues(4,5)) //=>x = 5  y = 4 x ile y nin değerlerini değiştiren bir fonksiyon


//Exercise 7
function capitalizeArray(dizi){
    let single = 0
    let newArray = []
    for(let i =0; i<dizi.length; i++){
        newArray.push(dizi[i].toUpperCase()) 
    }
    console.log(newArray)
} 
capitalizeArray(frontEnd) // dizi elemanlarını büyük harfe döndürür ve yeni diziye yazdırır.



//Exercise 10
function sumOfNumbers(num1,num2){
    sum = 0
    for(let i = num1; i<= num2; i++ ){
        sum += i
    }
    console.log(sum)
} 
sumOfNumbers(2,10) // fonksiyona girdiğimiz iki parametre arasındaki sayıları yoplayarak bize toplamı verir.


//Exercise 11
function sumOfOdds(num1,num2){
    sum = 0
    for(let i = num1; i<= num2; i++){
        if(i % 2 == 1){
            sum += i
        }
    }
    console.log(sum)
} 
sumOfOdds(2,10)// iki parametre arasındaki sayılardan tek olanları toplar ve toplamı verir.


//Exercise 12
function sumOfEven(num1,num2){
    sum = 0
    for(let i = num1; i<= num2; i++){
        if(i % 2 == 0){
            sum += i
        }
    }
    console.log(sum)
}
sumOfEven(2,10) // iki parametre arasındaki sayılardan çift olanları toplar ve toplamı verir.


//Exercise 14
function değişken(...args){
    sum = 0
    for(const element of args){ // burada args teki değerleri element değişkenine aktardık(kısayol)
        sum += element
    }
    return sum
}
 console.log(değişken(2,5,6,8,7))// burada istediğimiz kadar değer girelim fonksiyon bize toplamını verir.





