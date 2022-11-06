// FOR LOOP

// 1 dan 100 e kadar nasıl yazdırırız?
for(let i = 0 ; i<=100 ; i++){
    console.log(i)
} // console 1den 100e kadar yazdırır


// diziler ile kullanımı
const name = ['semanur', 'günnur', 'onur', 'fatma', 'ender']
for(let a = 0 ; a<=4 ; a++){
    console.log(name[a])
} // consola dizi elemanları sırası ile yazdırdır

const name1 = ['semanur', 'günnur', 'onur', 'fatma', 'ender','ceren']
for(let a = 0 ; a<=name1.length ; a++){
    console.log(name1[a])
}  // eğer dizinin uzunluğu ile işlem yaparsak sonradan eklediğimiz dizi elemanı da yazdırılır

 // dizideki elemanları toplayabiliriz
 const numaralar = [5, 6, 7, 8]
 let toplam = 0
 for(let a = 0; a<numaralar.length; a++){
   toplam = toplam + numaralar[a] // toplamı verir -> 26
 }
 console.log(toplam)


// mevcut diziye göre yeni bir dizi oluşturma

 const country = ['türkiye', 'kıbrıs', 'ingiltere']
 let newArray = []
 for(let c = 0; c< country.length; c++){
    newArray.push(country[c].toUpperCase())
 }
 console.log(newArray) // push metodu ile countries dizisindekileri istediğimiz şekilde yeni diziye yazdırdık



// FOR OF LOOP
const names = ['semanur', 'günnur', 'onur', 'fatma', 'ender']
for(let isim of names){
    console.log(isim)
}


// break ile döngüyü durdurma
const isim= ['ahmet', 'mehmet', 'berke', 'cenk', 'cengiz']
for(let s = 0; s<=isim.length; s++){
    if(s == 3){       
        break
    }
    console.log(isim[s])
}

// for içerisinde if yapısını kullandık ve 3. elemana geldiğinde durması için break kullandık


// continue ile atlamak
const isim1= ['ahmet', 'mehmet', 'berke', 'cenk', 'cengiz']
for(let s = 0; s<=isim1.length; s++){
    if(s == 3){       
        continue
    }
    console.log(isim1[s])
}

// continue kullandığmıda ise 3. elemanı atlayarak diğer elemaları yazdırmış olduk


// EXERCİSE 6 
//LEVEL1
//exercise 3
for(let sa = 0; sa<=15; sa++){
    console.log(sa)
} // 0 dan 15e kadar for döngüsü ile yazdırdık


//exercise4 ???
const simge = ['#', '##', '###', '####', '#####', '######', '#######' ]
for(let s = 0; s< simge.length; s++){
    console.log(simge[s])
}
/* çıktı
"#"
"##"
"###"
"####"
"#####"
"######"
"#######" */



// exercise5
for(let a = 0; a <= 10; a++){
    çarpım = a * a 
    console.log(`${a}*${a} = ${çarpım}`)
} 
/* çıktı
0*0 = 0
84 1*1 = 1
84 2*2 = 4
84 3*3 = 9
84 4*4 = 16
84 5*5 = 25
84 6*6 = 36
84 7*7 = 49
84 8*8 = 64
84 9*9 = 81
84 10*10 = 100 */

//exercise 6
for(let a = 0; a <= 10; a++){
    çarpım = a * a 
    çarpım1 = a * a * a
    console.log(`${a} - ${çarpım} - ${çarpım1}`)
} 
/* çıktı
0 - 0 - 0
1 - 1 - 1
2 - 4 - 8
3 - 9 - 27
4 - 16 - 64
5 - 25 - 125
6 - 36 - 216
7 - 49 - 343
8 - 64 - 512
9 - 81 - 729
0 - 100 - 1000 */

//exercise7 (0 dan 100 e kadar çift numaraları yazdırma)
for(let a = 0; a <= 100; a++){
   if(a % 2 == 0 ){
    console.log(a)
   }
}

//exercise8 (0 dan 100 e kadar tek numaraları yazdırma)
for(let a = 0; a <= 100; a++){
    if(a % 2 == 1 ){
     console.log(a)
    }
 }

 
//exercise10 ( 0dan 100e kadar sayıların toplamı)
let topla = 0
for(let a = 0; a <= 100; a++){
    topla += a
 }
 console.log(`The sum of all numbers from 0 to 100 is ${topla}.`)
 // çıktı -> The sum of all numbers from 0 to 100 is 5050.


// exercise11 ve 12 ( çiftlerin ve teklerin toplamını bulup yeni diziye ekleme)
let teklerinToplamı = 0
let çiftlerinToplamı = 0
for(let a = 0; a <= 100; a++){
    if(a % 2 == 1){
        teklerinToplamı += a
        
    }
    if(a % 2 == 0){
        çiftlerinToplamı += a
    }
 }
 console.log(`Teklerin Toplamı = ${teklerinToplamı}, Çiftlerin Toplamı = ${çiftlerinToplamı}`)
// çıktı -> Teklerin Toplamı = 2500, Çiftlerin Toplamı = 2550

let sonuçDizisi = []
sonuçDizisi.push(teklerinToplamı, çiftlerinToplamı)
console.log(sonuçDizisi)
// çıktı ->  [2500, 2550]

//LEVEL2
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

// exercise4
let arrayNew= []
 for(let c = 0; c< countries.length; c++){
    arrayNew.push(countries[c].toUpperCase())
 }
 console.log(arrayNew)
 // çıktı -> (11) ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']

// exercise5 ( dizideki elemanların uzunluklarını yeni bir diziye yazdırma)
let arrayNew1= []
 for(let c = 0; c< countries.length; c++){
    arrayNew1.push(countries[c].length)
 }
 console.log(arrayNew1)
 // çıktı -> (11) [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

 // exercise7 ( 'land' içeren elemanları yeni diziye aktardık)
let newArray2 = []
for(let c = 0; c<countries.length; c++){
    if(countries[c].includes('land')){
        newArray2.push(countries[c]) 
    }
}
console.log(newArray2) // çıktı -> (2) ['Finland', 'Ireland']

 // exercise8 ( sonu 'ia' ile biten elemanları yeni diziye yazdırma)
let newArray3 = []
for(let d = 0; d<countries.length; d++){
    if(countries[d].endsWith('ia'))
    newArray3.push(countries[d])
}
console.log(newArray3)// çıktı -> (3) ['Albania', 'Bolivia', 'Ethiopia']


// exercise9 ( karakter uzunluğu en uzun ülkeyi yazdır) ????????
let newArray5 = []
let newArray6 = []
let enUzun = 0
for(let d = 0; d<countries.length; d++){
    newArray5.push(countries[d].length)
   newArray5.sort()
   enUzun = newArray5[10]
}
// il for döngüsünde ülkelerin uzunluklarını diziye yazdırdık, diziyi sort ile sıraladık ve son elemanı aldık
// bu şekilde en uzun elemanın uzunluğunu biliyoruz. bunu enUzun olarak tanımladık

for(let d = 0; d<countries.length; d++){
  if(enUzun == countries[d].length){
    newArray6.push(countries[d])
 }
}
// ikinci for döngüsünde ise istediğimiz uzunluk ile aynı olan ülkenin yazdırılmasını sağladık
console.log(newArray6)// çıktı -> ['Ethiopia']





// exercise10 (karakter uzunluğu 5 olan üklerei yeni bir diziye yazdırdık)
let newArray4 = []
for(let d = 0; d<countries.length; d++){
    if(countries[d].length == 5){
        newArray4.push(countries[d])
    }
}
console.log(newArray4) // çıktı ->(2) ['Japan', 'Kenya']

// exercise11 (en uzun kelimeyi bulma) ????



//exercise12 
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

 dizi1 = 0
 dizi2 = []
  for(t = 0; t<webTechs.length; t++){
    dizi1 = [`${webTechs[t]}, ${webTechs[t].length}`]
    dizi2.push(dizi1)
  }
  console.log(dizi2) 
  /* çıktı-> 
  (7) [Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1)]
['HTML, 4']
['CSS, 3']
['JavaScript, 10'] 
['React, 5']
['Redux, 5'] 
['Node, 4'] 
['MongoDB, 7']
*/





  
