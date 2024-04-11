#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//PRINT WELCOME MESSAGE.
console.log(chalk.magentaBright.bold("\n       WELCOME TO 'MUHAMMAD UMAR BIN AAMIR'S' CURRENCY CONVERTER!!!    \n"));
//DEFINE THE LIST OF COUNTRIES CURRECIES AND THEIR EXCHANGE RATES.
const Currency = {
    USD: 1, //Base Currency (US Dollar).
    EUR: 0.91, //European Currency (Euro).
    GBP: 0.76, //Great British Pound.
    INR: 74.57, //Indian Rupees.
    JYP: 113, //Japenese Currency(Yen).
    CAD: 1.3, //Canadian Currency(Dollar).
    AUS: 1.65, //Australian Dollar.
    PKR: 277.70, //Pakistan Currency(Rupees).
};
//PROMPT USER TO SELECT CURRENCIES FROM AND TOO.
let UserAns = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: chalk.green("Enter From Currency you want to convert:"),
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "JYP", "CAD", "AUS"],
    },
    {
        name: "To",
        type: "list",
        message: chalk.green("Enter conversion To desired Currency:"),
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "JYP", "CAD", "AUS"],
    },
    {
        name: "Amount",
        type: "number",
        message: chalk.blueBright("Enter your Amount:"),
    }
]);
//PERFORM CURRENCY CONVERSION BY USING FORMULA.
let userfromcurrency = UserAns.from;
let usertocurrency = UserAns.To;
let fromAmount = Currency[userfromcurrency]; //exchange rate.
let toAmount = Currency[usertocurrency]; //exchange rate.
let amount = UserAns.Amount;
//FORMULA OF CONVERSION
let baseAmount = amount / fromAmount; //USD base currency/exchange rate.
let ConvertedAmount = baseAmount * toAmount;
//DISPLAY THE AMOUNT CONVERTED.
console.log(chalk.red(ConvertedAmount.toFixed(3)));
