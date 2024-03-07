class user{
    constructor(UserName , email , password){
        this.UserName =UserName;
        this.email = email;
        this.password =password;
    }


    // get wont work without set
    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password =value;
    }

    setEncryptPass(password){
        return `${password}o;abf;odf`;
    }
}
let clint = new user("chai" , "heY@gmail.com" ,"dasfnb32");

console.log(clint);