// EXERCİSE 5 

//LEVEL1

let firstArray = ['istanbul', 34, 'izmir', 35, 'ankara', 06, 'eskişehir', 26, 'muğla', 48 ]

console.log(firstArray.length) // di<inin uzunluğunu verir -> 10 
console.log(firstArray[0]) // dizinin ilk elemanını verir -> istanbul
console.log(firstArray[9]) // uzunluk-1 yazarsak son elemanı veriri -> 48
//veya
let lastİndex = firstArray.length-1
console.log(firstArray[lastİndex]) // dizinin son elemanına ulaşabiliriz -> 48



let ıtCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(ıtCompanies)

let element1 = ıtCompanies[0].toUpperCase() 
console.log(element1)  // dizinin 0. elemanını büyük harflerle yazdırır

// diziyi bir cümle olarak yazacağız
 // Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. dizimizi bu cümleye dönüştürelim
let element = ıtCompanies.splice(6,7) // spilce ile amazon yazısını çektik.
let cümle = ıtCompanies.join(', ') // dizi elemanlrını aralarına virgül olacak şekilde bir yazıya dönüştürdük
let cümleSon = cümle + 'and Amazon are big IT companies.'// cümle sonunu ekledik.
console.log(cümleSon)
// son çıktı -> "Facebook, Google, Microsoft, Apple, IBM, Oracleand Amazon are big IT companies."

// arama yap eğer varsa company yoksa company is not found dönsün
if (ıtCompanies.includes('Google')){
    console.log('Company')
}else {
    console.log('Company is not found')
}

// dizideki elemanları sıralar (burada alfabetik sıra yaptı - sayılarda küçükten büyüğe doğru sıralar)
let sırala = ıtCompanies.sort()
    console.log(sırala) // ->(6) ['Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle']


// elemanları tesrten yazdır
let ters = ıtCompanies.reverse()
console.log(ters) // ->(6) ['Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple']

// ilk üç , son üç ve ortadaki  elemanı yazdır 
let ilkÜç = ıtCompanies.slice(0,3) 
console.log(ilkÜç) // -> (3) ['Oracle', 'Microsoft', 'IBM']

let sonÜç = ıtCompanies.slice(3,6)
console.log(sonÜç) // -> (3) ['Google', 'Facebook', 'Apple']

let orta = ıtCompanies.slice(2,4)
console.log(orta) // -> (2) ['IBM', 'Google']


// diziden çıkrama 
ıtCompanies.shift()
console.log(ıtCompanies) // dizinin ilk elemanını shift ile çıkarmış olduk

ıtCompanies.pop()
console.log(ıtCompanies) // dizinin son elemanını pop ile çıkarmış olduk

ıtCompanies.splice(1,2)
console.log(ıtCompanies) // splice ile ortadaki ili elemanı sildik

ıtCompanies.splice(0,6)
console.log(ıtCompanies) // tüm elemenları sildik



//LEVEL2
// exercise2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let newText = text.replaceAll('.', '')
                  .replaceAll(',','')

console.log(newText) // ->I love teaching and empowering people I teach HTML CSS JS React Python

let dizi = newText.split(' ') // string ifadeyi diziye çevirdik
console.log(dizi) // -> ['I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach', 'HTML', 'CSS', 'JS', 'React', 'Python']

console.log(dizi.length) // -> 13 13 elemanlı bir dizi

// exercise3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart.includes('Meat')) // -> false döner çünkü dizi içinde yok
shoppingCart.unshift('Meat') // ilk başa Meat ekledik
console.log(shoppingCart) // ->(5) ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey'] 
shoppingCart.push('Sugar') // en sona sugar ekledik
console.log(shoppingCart)
shoppingCart.splice(4,1) // 4 elemandan itibaren sadece 1 eleman sil demektir. Honey elemanını sildik
console.log(shoppingCart)
shoppingCart[3]='Green Tea' // tea elemanını green tea ile değiştirdik
console.log(shoppingCart)


// exercise4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
console.log(countries.includes( 'Ethiopia')) // true döner 
countries[4] = 'ETHİOPİA'
console.log(countries)


// exercise5
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
}else{
    webTechs.push('Sass')
    console.log(webTechs)
}


// exercise6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

fullStack = frontEnd.concat(backEnd) // iki diziyi concat ile birleştirdik
console.log(fullStack)



//LEVEL3
// exercise1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort() // yaşları sıraladık
ages[0] // min eleman
ages[9] // max eleman veya 
ages[ages.length-1] // bu da max elemanı verir
ortalamaYaş = (ages[0] + ages[1]+ ages[2]+ ages[3]+ ages[4]+ ages[5]+ ages[6]+ ages[7]+ ages[8]+ ages[9]) / 10
console.log(ortalamaYaş) // ->22.8


