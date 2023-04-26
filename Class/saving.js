class Savings_Accounts {
    min_Bal = 400;
    open_Account() {
        console.log("account opened succesfully");
    }
    deposite() {
        console.log("Amount Deposited Successfully");
    }
    withdrawl() {
        console.log("Cash Withdrawl");
    }
    getstatement() {
        console.log("Statement for the previous month");
    }
    getbal() {
        console.log("Current Balance");
    }
    close_Account() {
        console.log("Account Closed ");
    }
 }
 let c1 = new Savings_Accounts();
 let c2 = new Savings_Accounts();
 console.log(c1.min_Bal);
 console.log(c2.min_Bal);
 c1.open_Account()
 c1.deposite()
 c1.withdrawl()
 c1.getstatement()
 c1.getbal()
 c1.close_Account()