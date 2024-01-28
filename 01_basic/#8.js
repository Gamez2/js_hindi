

//+++++++++++++++++++++ #ifee++++++++++++++++

// jab global var ke polution se bach ne ke liye 
// ()() use kr te hai or instand invoked 

function chai(){
    // defination 
    console.log("hello");
}//() 
// now it throw a error  {Unexpected token ')'}

// to soleve this u have to put function in ()
 (function chai1 () {
    // defindation 
    console.log("hello threr")
 })()

// note++++ agar 2 ifee use kr rhe ho to 1 ifee ko ; semicoloum laga kr band kr an nhi top wo work nhi kare ga

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Global Execution 
// memory phase 
// Execution phsae




// +++++++++++++++++++++++++++++++++++++++++++++++
 
// Special loops for Array and Object

let user ={
    username : "sam"
}

let arr = [1,2,3,4,5,6,67,7,8,9];
for( let i of arr){
    console.log(i);
}

