//Array 

//go and mdn array or use window to see array protolet

let myArr = [1,2,4,5,6,6,7,8];
myArr.unshift(3);
// console.log(myArr);//3,1,2,4,5,6,6,7,8

myArr.shift();
// console.log(myArr); //orginal array 


//methid => include $ indexof $ 


//join(add array)
let myArr2 =myArr.join();
// console.log(myArr2);

//it  bind & convert the btype of an array to string 

//SLICE & SPLICE 

let myNewArr = [1,2,3,4,5,6,7,8,9,0];
console.log(` normal array ${myNewArr} `);

let myNewArr2 = myNewArr.slice(1,5);
console.log(`after slice ${myNewArr2}`);
console.log(myNewArr2);

let myNewArr3 = myNewArr.splice(1,3);

console.log(` after splice  ${myNewArr3}`);
console.log(myNewArr3);


//the =main diff bwt splice abs sclise
// splise change the origional arr
// not slice 


/********************************************* */
const dcuHero =["batman ", " superman", " wonderWomen"];
const marvelHero =["ironman ", " Hulk", " Spiderman"];

const teamUnite= [...dcuHero , ...marvelHero];
console.log(teamUnite);


// spred has been used to combine 2 array and it retuen the new array 
