// Exercise Start

console.log(typeof 'JavaScript') //String
console.log(typeof 1)  //number
console.log(typeof true)  //Boolean
console.log(typeof null)   //object
console.log(typeof undefined) //undefined

// Exercise Finish 

// day2 deneme 

let numONE = 3
let numTWO = 3
 console.log (numONE == numTWO) // sonsola bunu yazdığımızda true cevabını alırız


//Dizi (array) kşeli parantez içine yazılır. şimdiye kadar yaptıklarımızda tek değer atıyorduk. Dizide ise birden fazla değer yazabiliyoruz 
 let nums = [1, 2, 3]
 let array = [1, 'semanur', true, null]
 console.log(nums)

 //Dizide ki herhangi bir elemanı değiştirmek için aşağıdaki şekilde tanımlamamız gerekir.
 nums[1] = 5
 console.log(nums)


 let nums1 = [3, 4, 5]
 let nums2 = [3, 4, 5]
 console.log(nums1 == nums2) //konsola bunu yazdığımızda false cevabını alırız çünkü iki dizi karşılaştırılamaz


 //bu bir objedir . bu şekilde yazılır. key: 'value' şeklinde yazılır. yanı anahtar: 'değer' olarak düşünebiliriz
 let user1 = {
    name: 'Semanur',
    surname: 'Arslan'
 }

 let user2 = {
    name: 'Semanur',
    surname: 'Arslan'
 }

 console.log(user1 == user2) // bunu yazdığımızda da false cevabını alırız çünkü objeler de karşılaştırılamaz