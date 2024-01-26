
// stack (Primitive dataType) ,
//  Heap(Non Primitive dataType hai)

let myUser = {
    
    userName :"HelloThwere@gmail.com",
    userUpiId : "helloybl",
    userPass : 3243455454,

            }

let userTwo = myUser;

console.log(myUser); //hello
console.log(userTwo);//hello

userTwo.userName = "newONe@gmail.com";

console.log(myUser); //newone
                        
console.log(userTwo); //newone

//whole concept is to show that how refernce var work 
//and single change can show to each and every variable 
