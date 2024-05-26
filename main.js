import inquirer from "inquirer";
let currentBalance = 10000;
let pincode = 1123;
let pinanswer = await inquirer.prompt([
    {
        message: "what's your pin code?",
        type: "number",
        name: "pin",
    }
]);
if (pinanswer.pin === pincode) {
    console.log("correct pin code");
}
else {
    "not correct";
}
let operations = await inquirer.prompt([
    {
        name: "operations",
        message: "Please select your account title",
        type: "list",
        choices: ["current account", "Saving account"]
    }
]);
if (operations.operations === "currect account") {
    console.log("your current balance is" + " " + (currentBalance));
}
else if (operations.operations === "Saving account") {
    console.log("your current balance is" + " " + (currentBalance));
}
let Amount = await inquirer.prompt([
    {
        name: "operations",
        message: "Please select option",
        type: "list",
        choices: ["With Draw", "Fast Cash"]
    },
    {
        message: "Enter Amount",
        type: "number",
        name: "amount",
    }
]);
currentBalance -= Amount.amount;
console.log("Remaining Balance is" + "" + currentBalance);
