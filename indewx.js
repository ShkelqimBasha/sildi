/*let email="shkelqimbasha8@gmail.com"
let result= email.includes("@")
let names=['leo','sindi','era']
console.log(names.includes("Reni"))
let age= 25
console.log(age===25)
console.log(age===30)
console.log(age!=30)
console.log(age<20)
console.log(age>20)
console.log(age<=25)
console.log(age>=25)

let name='shaban'
console.log(name=='shaban')
console.log(name == "Shaban")
console.log(name>"Cimi")
console.log(name>"Shaban")
console.log(name>"cimi")
let age = 25
console.log(age=="25")
console.log(age===25)//loop comparision
console.log(age==='25')//strict comparision
console.log(age!=="25")

let score= '100'
score=Number(score)//kthen srtingun ne numer int
console.log(score + 1)
console.log(typeof score)//tipin e te dhenave
let result= "Arben"
console.log(Number(result))//NaN

let result=Boolean("")
console.log(typeof result,result)

for(let i=0;i<5;i+=2){
    console.log("Interohet",i)
}
for(let i=0;i<names.length;i++){
    console.log(names[i])
}

const names =["eliseo","klajdi","eri"]


for(let i=0;i<names.length;i++){    
    let html =` <div> ${names[i]} </div>`;
    console.log(html)
 }const names =["eliseo","klajdi","eri","dea","miri","era"]
let i = 3
do {
    console.log(names[i])
    i++;
}
while(i <5)

 

const age = 25
const students =["joan","eri","leo","miri"]
if (students.length>3)
console.log("T'ju rregullojme klasen")


const pass = "fjaleK@lim123"
if (pass.length>12){
    console.log("Fjalekalimi teper i forte")
}
else if (pass.length>8){ 
    console.log("Fjalekalim i forte")
} else{
    console.log("Fjalekalim i dobet")
}


function array(vargu1, vargu2) { // krinjimi e funksionit

   // Krijohet një varg i ri duke bashkuar elementet e dy vargjeve
    const vargu3 = vargu1.concat(vargu2);

    
    const rezultati = vargu3.filter((vlera, indeksi) => {  // perdoret metoda filter per te hequr elementet e dublikuar
        return vargu3.indexOf(vlera) === indeksi;
    });

    return rezultati;
}


const vargu1 = [1, 7, 3, 4];
const vargu2 = [3, 4, 8, 6];
1
const rezultati = array(vargu1, vargu2);
console.log(rezultati);



//function 
function greet() {
    console.log("hello word")
}

greet()
greet()
//expretion
const speak = function () {
    console.log("good day")
}
speak()
//hoisting
greet()
function greet() {
    console.log("hello")
}

const speak = function (name = 'eri', time = 'morning') {
    console.log(`good ${time}  ${name}`)
}
speak('miri', 'morning')
//hoisting
greet()
function greet() {
    console.log("hello")
}*/


function Array(x) {
    // Bëjmë një kopje të array për të mos ndryshuar originalen
    let Array1 = x.slice();
    let rezultati = [];
  
    // Përzierja e elementeve në mënyrë të rastit
    while (Array1.length > 0) {
      // Zgjedh një element të rastit nga kopja e array
      let indeksiRastit = Math.floor(Math.random() * Array1.length);
      
      // Shto elementin e zgjedhur në array-in rezultues
      rezultati.push(Array1[indeksiRastit]);
      
      // Hiq elementin e zgjedhur nga kopja e array
      Array1.splice(indeksiRastit, 1);
    }
  
    return rezultati;
  }
  

  let njeArray = [1, 7, 43, 10, 5];
  let arrayPerzier = Array(njeArray);
  console.log(arrayPerzier);
  