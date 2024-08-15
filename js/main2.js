//Data types in JS (undifined, boolean, object)
//let matn = "Salom";
//let raqam = 12345;
//let soz;
//document.write(typeof raqam);

//let rost = true;
//document.write(rost);
//let rost = 45 == 44 ? true:false;
//document.write(rost);

//let arrayObject = [45,78,"salom","matn",true,false,552];
//console.log(arrayObject[6])

//let oddiyObject = {ism: "Abdurauf", yoshi: 14, mahallasi: "Iqbol mahallasi", dosti: "Ibo" };
//console.log(oddiyObject.ism, oddiyObject.yoshi, oddiyObject.dosti); 

//Fuctions in JS
//function savatchaniTekshir(uzatilganContainer = [45,"false",false,858]){
//    if(uzatilganContainer.length == 0){
 //       document.write("Savatchaning ichida " + uzatilganContainer.length + " dona ma'lumot bor");
 //   }
 //   else{
 //       document.write("Savatchaning ichida " + uzatilganContainer.length + "ta ma'lumot bor");
 //   }
//}
//let container = [12,"matn",78,true,"js"]
//savatchaniTekshir();

let sana = new Date;

sana.setFullYear(2008)
sana.setMonth(10);
sana.setDate(14);

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();

let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"];

let Haftaning = ["yakshanba","dushanba","seyshanba","chorshanba","payshanba","juma","shanba"]

document.write("Bugun " + yil + "-yil " + oylar[oy] + " oyning " + kun + "-kuni. Haftaning " + Haftaning[ haftaKuni] + " kuni.");