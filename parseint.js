// //Tipe Data
// //Tipe data string akan 'terkonvensi' menjadi number jika 
// //dikenakan operasi pembagian
// var a="9"  //tipe: string
// var b=3    //tipe: number

// hasil1= a/b;
// console.log(hasil1);    //hasil = 3 bertipe number;

// hasil2= a + b;
// console.log(hasil2)    //hasil = 93 bertipe string;   

// // konversi menjadi Number
// var a="9"
// var b=3;
// var c=true;

// hasil1 = a + b;
// console.log(hasil1);     // hasil1= 93 (karena a adalah string)

// hasil2 = Number (a) + b;
// console.log(hasil2);     // hasil2= 12 (karena a adalah number)

// var d = Number(a);      // d sekarang bertipe Number: 9

// hasil3 = d + b;
// console.log(hasil3);     // hasil3= 12 (karena d adalah number)

// hasil4 = Number(c) + d;
// console.log(hasil4)      // hasil4= 10 (karena c dikonversi menjadi number 1)

// // parseInt() dan parseFloat()
// var a="13.78";
// var b="9 naga";
// var c="100.99 meter";

// hasil1= parseInt(a);      //a menjadi number 13
// console.log(hasil1);

// hasil2= parseInt(b);      // b menjadi number 9
// console.log(hasil2);

// hasil3= parseInt(c);      // c menjadi number 100
// console.log(hasil3);

// hasil4= parseFloat(a);    // a menjadi number 13.78
// console.log(hasil4);

// hasil5= parseFloat(b);    // b menjadi number 9
// console.log(hasil5);

// hasil6= parseFloat(c);    // c menjadi number 100.99
// console.log(hasil6);

// // Konversi menjadi String
// var a=123.45;
// var b=99999;
// var c=true;
// var d=false;

// hasil1= String(a)         // a menjadi String "123.45"
// console.log(hasil1)

// hasil2= b.toString()     // b menjadi String "99999"
// console.log(hasil2)

// hasil3= String(c)        // c menjadi String "true"
// console.log(hasil3)

// hasil4= d.toString();    // d menjadi String "false"
// console.log(hasil4)

// // Konversi menjadi Boolean
// var a=123.45;
// var b="duniailkom";
// var c=[1,2,3];
// var d=0;

// hasil1= Boolean(a);      // a menjadi boolean true
// console.log(hasil1);

// hasil2= Boolean(b);      // b menjadi boolean true
// console.log(hasil2);

// hasil3= Boolean(c);      // c menjadi boolean true
// console.log(hasil3);

// hasil4= Boolean(d);      // d menjadi boolean false
// console.log(hasil4);


var a=123.45;
var b="duniaikom";
var c=false;
var d=[1,2,3];
var e= new String("Belajar Javascript");
var f=null;
var g=undefined;

// Operator typeof
hasil1= typeof(a);     // hasil : number
console.log(hasil1);

hasil2= typeof(b);    // hasil : string
console.log(hasil2);

hasil3= typeof(c);    // hasil : boolean
console.log(hasil3);

hasil4= typeof(d);    // hasil : object
console.log(hasil4);

hasil5= typeof(e);    // hasil : object
console.log(hasil5);

hasil6= typeof(f);    // hasil : object
console.log(hasil6)

hasil7= typeof(g);    // hasil : undefined
console.log(hasil7);