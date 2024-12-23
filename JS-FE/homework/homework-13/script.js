const account = {
    balance: 0,
    withdrawnTransactions: [],
    depositTransactions: [],
    deposit (amount){
        if (amount > 0){
            this.balance += amount;
            this.depositTransactions.push(amount)
        } else {
            console.log('You do not have enough money to deposit to your account') 
        }
    },
    withdraw (amount){
        if (amount <= this.balance){
            this.balance -= amount;
            this.withdrawnTransactions.push(amount)
        } else {
            console.log('Not enough money on this account')
        }
    },
    getBalance (){
        return this.balance
    },
    getDepositTransactions (){
        return this.depositTransactions
    },
    getWithdrawTransactions (){
        return this.withdrawnTransactions
    }
}
account.deposit(1000);
account.withdraw(200);
account.deposit(13500);
console.log(account.getBalance())
console.log(account.getDepositTransactions())
console.log(account.getWithdrawTransactions())