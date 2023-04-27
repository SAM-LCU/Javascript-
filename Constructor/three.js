class Account { 
    min_Bal = 5000;
    constructor(name,acc_Id){
        this.name = name;
        this.acc_Id = acc_Id;
    }
}
let c1  = new Account(101,"Sam")
let c2  = new Account(102, "Amu")
console.log(c1);
console.log(c2);