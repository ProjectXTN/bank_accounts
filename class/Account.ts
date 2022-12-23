// name, accountNumner
// deposit, withdraw

export abstract class Account {
    private name: string
    private readonly accountNumber: number
    balance: number = 10
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Name successfully changed!')
    }

    deposit = (deposit:number): void | number=> {
        if(this.validationStatus()){
            this.balance += deposit
            console.log("You deposit " + this.balance)
            return this.balance
        }
    }

    withdraw = (withdraw:number): void | number => {
        if(this.validationStatus() && this.balance >= withdraw){
            this.balance -= withdraw
            console.log('You withdraw ' + withdraw)
            return this.balance
        }

        console.log('Insufficient funds.')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validationStatus = (): boolean => {
        if(this.status){
            return this.status
        }

        throw new Error('invalid account')
    }
}