import inquirer from "inquirer";
let loop = true;
while (loop) {
    const systemgeneratedno = Math.floor(Math.random() * 10);
    const answer = await inquirer.prompt([
        {
            name: "userguess",
            type: "number",
            message: "Enter guessing number betweem 1 to 10."
        },
        {
            type: "confirm",
            name: "AddMore",
            message: "Do you want to add more Todo?",
            default: false
        }
    ]);
    const { userguess, AddMore } = answer;
    console.log(userguess, "user no", systemgeneratedno, "sys");
    loop = AddMore;
    if (userguess === systemgeneratedno) {
        console.log("your answer is correct \n you win Reward 10Rs.");
    }
    else {
        console.log("please try again better luck next time.");
    }
    ;
}
;
