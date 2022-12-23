import { Account } from "./Account"

export class CompanyAccount extends Account{
    private loan: number = 0

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (loan: number): void => {
        this.loan += loan
        this.balance += loan
        console.log('You took out a loan worth ' + loan)
        return 
    }

    deposit = (): void => {
        console.log('The company deposited!')
    }
}