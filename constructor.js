function CreateBank() {
  var bank = {};
  function Account(bal) { // Creates bank functionality
    var _balance = bal; // Stores balance as a private variable
    this.getBalance = function () { return _balance; };
    this.deposit = function (amount) { _balance += amount; };
    this.withdraw = function (amount) { _balance -= amount; };
  }
  function CreateCustomer(account, cash) { // Creates a new person with a bank account
    var _cash = cash;
    var _account = account;
    bank[account] = new Account(0);
    this.deposit = function (acc,amount) { // Depositing money
      try{
        if (_cash>amount) { // Prohibits deposit if funds are not sufficient
          _cash-=amount;
          bank[acc].deposit(amount)
          console.log("Deposit Successful");
        }
        else throw new Error("Insufficient Funds for Deposit");
      } catch (e) { console.warn(e); }
    };
    this.withdraw = function (amount) {
      try {
        if (bank[_account].getBalance()>amount) {
          bank[_account].withdraw(amount);
          _cash+=amount;
          console.log("Withdrawal Successful")
        }
        else throw new Error("Insufficient Funds for Withdrawal");
      } catch (e) { console.warn(e); }
    };
    this.cash = function () { return _cash; };
    this.balance = function () { return bank[_account].getBalance(); };
  }
  this.CreateCustomer = CreateCustomer;
}
var chase = new CreateBank();
var julie = new chase.CreateCustomer(1234,2000);
var chris = new chase.CreateCustomer(5678,5000);
julie.deposit(1234,1000);
julie.withdraw(300);
chris.deposit(1234,2000);
chris.deposit(5678,1500);
chris.deposit(5678,4000);
console.log("Julie's cash: "+julie.cash());
console.log("Julie's balance "+julie.balance());
console.log("Chris's cash: "+chris.cash());
console.log("Chris's balance: "+chris.balance());
