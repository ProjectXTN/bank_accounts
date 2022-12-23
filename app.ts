// DIO banking
import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { StudentAccount } from "./class/StudentAccount"


// Creation accounts

const peopleAccount: PeopleAccount = new PeopleAccount(5, 'Camille', 10)
peopleAccount.deposit(35)
peopleAccount.withdraw(20)
console.log(peopleAccount)


const companyAccount: CompanyAccount = new CompanyAccount('Pedro', 2)
companyAccount.getLoan(50)
console.log(companyAccount)


const studentAccount: StudentAccount = new StudentAccount('Daniel', 5)
studentAccount.deposit(20)
console.log(studentAccount)



// const companyAccount: CompanyAccount = new CompanyAccount('Pedro', 1)
// companyAccount.deposit()