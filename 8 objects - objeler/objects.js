// KAPSAM

//WİNDOW SCPOE

ad = 'semanur' //window scope
//eğer var let const ile tanımlanmamışsa otomotik olarak window kapsamına yazılır



//GLOBAL SCOPE
let a= 'javaScript' // global scope 
let b = 30
 
function letsLearnScope() {
  console.log(a, b) // JavaScript 30, global ögeye fonksiyonun içinde ulaşılabilir
  let c = 'CSS'
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b,) // Python 100
  }
  console.log(a, b)// javaScript 30 
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible
//  console.log(c)  bulunamadı. fonksiyonun içinde tanımlanan değişkenler fonksiyon dışında kullanılamaz


//LOCAL SCOPE (Block Scope - Function Scope)

//yukarıdaki örnekte fonksiyon blou ve if blou içerisinde tanımlanan ve bunlar dışında kullanılamayan değişkenlerdir.



//OBJECT
const user = {
    key : 'value',
    key : 11,
    key : true
}

//objeler ile key ve value değerleri tutulur.

const userOne = {
    name : 'semanur',
    surname : 'arslan',
    age : 23,
    isMarried : false,
    mySkills : ['HTML', 'CSS', 'JavaScript', 'React'],
    skillAssessment : {
        HTML : 10,
        CSS :10,
        JavaScript : 8,
    },
    siblings : [  {
        name : 'Günnur',
        surname : 'Arslan'
    } , {
        name : 'onur',
        surname :'arslan'
        
    }],
    getFullName : function(){
        return `${this.name} ${this.surname}`
    }
}

console.log(userOne)


//string, number , boolean, array, fonksiyon gibi farklı veri türleri barındırabilir.
//obje içerisinde tekrar obje tanımlanabilir (skillAssessment)
// barıdırdığı array içerisinde tekrar obje tanımlaması yapılabilir. (siblings)
//fonksiyon içerisinde kullanılan this objenin kendisini (userOne) objesini ifade eder.
//obje içerisindeki bilgilere this. ile ulaşabliriz



// OBJEDEKİ DEĞERLERE ULAŞMAK
// objeismi.key ile içerisindeki değerlere ulaşabiliriz

console.log(userOne.name) // => semanur
console.log(userOne.isMarried) // => false


console.log(userOne['name']) // => semanur   bu şekilde de ulaşmak mümkündür.


let güncel = 'mySkills'
console.log(userOne[güncel]) // değişkene atadığımız değere de bu şekilde ulaşırız


console.log(userOne.getFullName()) // içerisindeki fonksiyona bu şekilde ulaşabiliriz.
// => semanur arslan ----  this objenin kendisini( userOne) ifade ettiği için içerisindeki name ve lastname bilgilerini yazdırdı. 


// DEĞERLERİ DEĞİŞTİRMEK GÜNCELLEMEK
userOne.age = 24;
userOne.mySkills.push('PHP');
userOne.isMarried = true



// OBJECT METHODS

                          //  Object.assign({} , obje ismi)
let userTwo = userOne
userTwo.name = 'sema'
console.log(userOne) // userOne yazdırdım ama userTwo da yaptığım değişiklik burada da(userOne) uygulandı. 
console.log(userTwo) // iki obje de aynı oldu.

// bunu engellemek için referanssız kopyalamamız gerekir

let newUser = Object.assign({}, userTwo)
newUser.name = 'fatma'
console.log(userTwo) // isim : sema
console.log(newUser) // isim : fatma 

                          //  Object.keys(  obje ismi  )
console.log(Object.keys(userOne)) 
// obje içindeki tüm anahtarları verir.


                          //  Object.values(  obje ismi  )
console.log(Object.values(userOne))
// obje içindeki tüm value (değerleri) verir.


                          //  Object.entries(  obje ismi  )
console.log(Object.entries(userOne))
// [['key', 'value'], ['key', 'value']] olarak anahtar ve değerleri dizi içinde verir


                          //  Object.entries(  obje ismi  )
console.log(userOne.hasOwnProperty('telepone'))
//  obje içerisinde telephone anahtarı var mı ?? => false



                          //  Object.freeze()
Object.freeze(userTwo)
//bu methodu kullandıktan sonra obje üzerinde hiçbir değişiklik yapamam



                          //  Object.seal()
Object.seal(newUser)
//bu methodu kullandıktan objenin değerlerini değiştirebiliyorum ama yeni anahtar-değer ekleyemem veya çıkaramam




