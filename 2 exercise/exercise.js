// EXERCİSE LEVEL1

let challenge = '30 Days Of JavaScript'
let ornek1 = 'Semanur'
let a = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let b = 'You cannot end a sentence with because because because is a conjunction'

console.log(ornek1.length) // .length bize uzunluğunu verir. ->7 çünkü 7 harf uzunluğunda
console.log(ornek1.toUpperCase()) //.toUpperCase() bütün harfleri büyük yapar. -> SEMANUR
console.log(ornek1.toLowerCase()) // .toLowerCase() bütün harfleri küçük yapar. -> semanur
console.log(ornek1.substr(0,4)) // .substr kesme işlemidir. 0 dan 4 e kadar olan değeri keser. -> Sema
console.log(ornek1.substring(4,7))  // .substring ile 4. eleman ile 7. elaman arasındakini kes demektir.7 hariç ->nur
console.log(ornek1.includes('script')) // değer içinde script geçiyor mu ?  -> false
console.log(ornek1.split()) // değeri bir diziye çevirir -> [Semanur] bir elemanlı bir dizi
console.log(ornek1.split('')) // değeri parçalayarak bir diziye dönüştürür. ->  ['S', 'e', 'm', 'a', 'n', 'u', 'r']
console.log(challenge.split(' ')) // eğişkeni eğeri dizi olarak boşluklardan parçalar. ->['30', 'Days', 'Of', 'JavaScript']
console.log(a.split(',')) // virgüllerden ayırarak dizi oluşturu. ->['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']
console.log(challenge.replace('JavaScript', 'Python')) // -> 30 Days Of Python
console.log(challenge.charAt(5)) //5. index te ne var? -> y
console.log(b.indexOf('because')) // ilk bacuse yakalandı. ->31
console.log(b.lastIndexOf('because')) // son because yakalandı. ->47
console.log(b.search('cannot')) // cannot yakaldı ->4
console.log(ornek1.startsWith('Se')) //ornek1 değişkeni Se ile mi başlıyor? ->true
console.log(challenge.endsWith('Script')) // değişken Script ile mi bitiyor? -> true
console.log(challenge.match(/a/gi)) // tüm a ları bulur -> ['a', 'a', 'a']
console.log(challenge.repeat(2)) // değişkeni 2 defa yazdırır. -> 30 Days Of JavaScript30 Days Of JavaScript


//EXERCİSE LEVEL2

/*
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
*/

/*  YUKARIDAKİ ÖRNNEKLERİN ÇIKTILARI
I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020
*/


let ornek2 = ('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log(ornek2) // eğer yazdırcağımız paragraf içinde alıntı var ise /' arasına yazılır. 

let ornek3 = ('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

let K = '10' //string
let L = 10  //number
let M = '9.8' //string

console.log(K==L) // K ve L değerleri eşit mi? -> true
console.log(K===L) // K ve L değerleri ve türleri eşit mi ->false

console.log(+K===L) 
console.log(parseInt(K)===L) // K typoff string, L typoff ise number dir. +K olarak yazarsak K da number olur. bu nedenle eşitlenir -> true

// '9.8' i yani ondalık bir stringi number yapmak için parsFloat(M) olarak yazmalıyım. ondalık olmayan sayılarda parsInt veya + kullanılabilir.

console.log(L===M) // ->false
console.log(Math.ceil(M)) // M değerini yukarı yuvarladık.

let orn1 = 'I hope this course is not full of jargon'
console.log(orn1.includes('jargon')) // orn1 değişkeninde jargon geçiyor mu ? ->true

console.log(Math.floor(Math.random() * 100)) // 0 ile 99 arasınada random bir tam sayı üretir.

console.log(Math.floor(Math.random()*50)+50) // = console.log(math.floor(math.random()*üst sayı - alt sayı)+alt sayı)
//50 ile 100 arasında 100 hariç random sayı üretir

console.log(Math.floor(Math.random()*51)+50) //console.log(math.floor(math.random()*üst sayı - alt sayı + 1 )+alt sayı) 
//50 ile 100 arasında 100 dahil random sayı üretir


let orn2 = 'JavaScript'
console.log(Math.floor(Math.random()*11)) // ilk çıktı 7
console.log(orn2.charAt(7)) // 7. dizide ne var -> i 


console.log('1\t 1\t 1\t 1\t 1 \n 2\t 1\t 2\t 4\t 8 \n 3\t 1\t 3\t 9\t 27 \n 4\t 1\t 4\t 16\t 64 \n 5\t 1\t 5\t 25\t 125')
 /*   1	 1	 1	 1	 1 
      2	 1	 2	 4	 8 
      3	 1	 3	 9	 27 
      4	 1	 4	 16	 64 
      5	 1	 5	 25	 125
*/ 



let orn3 = 'You cannot end a sentence with because because because is a conjunction'
console.log(orn3.substring(31,54)) // -> because because because


// EXERCİSE LEVEL3

let orn4 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(orn4.match(/love/gi)) // orn4 değişkenindeki tüm love yazılarını buldu ->(3) ['Love', 'love', 'love']

let orn5 = 'You cannot end a sentence with because because because is a conjunction'
console.log(orn5.match(/because/gi))


const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
 
let newsentence = sentence
.replaceAll('%','')
.replaceAll('$','')
.replaceAll('@','')
.replaceAll('&','')
.replaceAll('#','')
.replaceAll(';','')
.replaceAll('!','')
.replaceAll('?','')

// üstteki komutlar girildiğinde çıktı şu şekilde olur.
/*
I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher This 30DaysOfJavaScript is also the result of love of teaching
*/



