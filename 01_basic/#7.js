
//  Function 

function myfun(num1 ,num2){
   return num1+num2
}

const result = myfun(4,5);

// console.log(result);


//suppose while making a shopping cart ..we dont know how many product user 
// cart in the shopping cart
// we use (rest/spread) ...() type thing 

function cakculateCartPrice(...num1){
    return num1
}
console.log(cakculateCartPrice(3434,333,444,555));
// return an array 

// ++++++++++++++++ mini hoisting+++++++++++++++

// no error
// console.log(printName("shri"));

function printName(name){
    return name + "hello"
}


// another way 

// its throw error
// Cannot access 'printAnotherName
// printAnotherName("dhruv");


const printAnotherName = function(name){
    return name + "hi"
}

// +++++++++++++++    arrow and this     +++++++++++

const user ={
    name : "sam",
    price : 34,

    welcomeMessage : function(){
        console.log(`${this.name} welcome sir `);
    }
}
 user.welcomeMessage( user);


 const sum = ()=>{
    //  {} agar ye use hua hai to return to likh na he pade ga..

 }

const sumn2 (num1 ,num2)=> num1+num2;
// iska mthlab hai ab num1+num2 return kr na cha rhr hai


const sum3 = (num1 , num2) => ( num1+num2 ) 
// by () this u dont have to  write return ..
// () means return 