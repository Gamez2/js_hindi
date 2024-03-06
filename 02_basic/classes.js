class user{
    constructor(UserName , email , password){
        this.UserName =UserName;
        this.email = email;
        this.password =password;
    }

    setEncryptPass(password){
        return `${password}o;abf;odf`;
    }
}
let clint = new user("chai" , "heY@gmail.com" ,"dasfnb32");

console.log(clint.setEncryptPass("hey threere f"));