// prototype is state that ..js script ko child pe kuch nhi mila to wo paents pe jye ge ===> furter grandParents
// until it gets "NUlL "value' 

// child => parents ==> grand parnets

// evey thing on js is nothing just object


function multi(num){
    return num*5;
}

// console.log(multi(5));

// some time we want ouir function in prototpye list wo we have authority to build our own function 

function createUSer( username , score){
    this.username =username;
    this.score =score;
}

const chai = new createUSer("chai" , 25);
const Tea=  new createUSer("tea",250);
createUSer.prototype.increment = function(){
    score++;
}

createUSer.prototype.printme = function(){
    console.log(`this is price of ${this.score}`);
}

chai.printme();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++


// prototype

let myName = "dhruv    ";
// now creta a own function in object beacuse

// String ==>object 
// function==>Object
// array also a oject


function  setName(username){
    this.username =username;
}

function cretaeUserId (username , email , password){
    setName.call(this,username);
    this.email =email;
    this.password =password;
}

const name1 = new cretaeUserId("chai","abcd@gmail.com","#pass_123");
console.log(name1);