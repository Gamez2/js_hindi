const newPro =new Promise(function(resolve , reject){
    setTimeout(()=>{
        console.log("hellow world");


        // it is necessay to put either reolve() || reject() to setup connection btw then and catch and final
        resolve()

    },1000)
   
})

newPro.catch(()=>{
    console.log("undone promise");
})


const