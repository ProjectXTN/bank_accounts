import { Account } from "./Account";
import { PeopleAccount } from "./PeopleAccount";

export class StudentAccount extends Account{

    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    deposit = (deposit: number): number | void => {
        if(deposit > 0){
            this.balance += deposit + 10
            console.log('You deposit ' + deposit + ' and added +10 to your balance')
            return
        }
    }
}