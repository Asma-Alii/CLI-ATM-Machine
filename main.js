#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 7799;
console.log(`my pin code ${myPin}`);
let pinAns = await inquirer.prompt([
    {
        name: "pinCode",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAns.pinCode === myPin) {
    console.log("Correct pin code");
    let select = await inquirer.prompt([
        {
            name: "options",
            message: "Select options",
            type: "list",
            choices: ["Withdraw", "Fast cash", "Check balance"],
        },
    ]);
    if (select.options === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        if (amountAns.amount > myBalance) {
            console.log("You Do Not Have Sufficient Amount To Make This Withdrawal!!");
        }
        else {
            console.log("Successfully Withdrawl !!");
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (select.options === "Fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select Amount",
                type: "list",
                choices: ["1000", "5000", "8000", "10000"],
            },
        ]);
        myBalance -= fastcashAns.fastcash;
        console.log("Successfully Withdrawl !!");
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (select.options === "Check balance") {
        console.log(`Your Balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
