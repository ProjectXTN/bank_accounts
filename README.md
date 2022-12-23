# Developing Bank
developed by [Pedro MEIRELES](https://github.com/ProjectXTN)

#### Project developed with basic concepts of typescript

### Technologies
- Typescript

### How to run the project

1 - Clone the repository

2 - Install the dependencies
    
    npm install

3 - Run the project

    npm run dev

#### Challenges
[ ] Implement the deposit and withdraw methods in the DioAccount class
  - Balance values ​​must be changed, according to the amount informed for deposit
  - Only accounts with true status and balance (balance) greater than the requested amount can make withdrawals

[ ] Implement the loan method (getLoan) in the CompanyAccount class
  - The amounts of the balances must be added, according to the amount informed for the loan
  - Only accounts with true status can borrow

[ ] Create a new account type from DioAccount
  - This account must not receive new attributes
  - This account will have a deposit method, which adds 10 more to the amount informed for deposit. (Ex: A deposit of 100 will be 110 at the end)

[ ] All attributes of any account must be private

[ ] The name and accountNumber attributes cannot be changed internally or externally

[ ] Create instances for each of the app.ts account types and run the possible methods.