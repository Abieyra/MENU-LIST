import inquirer from "inquirer";
let menu = [];
let condition;
{
    let menulist = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "list",
            message: "what would you like to order?",
            choices: ["Pizza", "Zinger Burger", "lasigna", "Pasta"]
        },
        {
            name: "secondQuestion",
            type: "list",
            message: "would you like to order some drink",
            choices: ["Cola Next", "Pakola", "Sprite", "Dew"]
        },
        {
            name: "thirdQuestion",
            type: "list",
            message: "would you like to order some dessert",
            choices: ["Kunafa", "Teramesu", "Molten Lava", "Cheese Cake"]
        }
    ]);
    menu.push(menulist.firstQuestion);
    menu.push(menulist.secondQuestion);
    console.log(menu);
    console.log(" Thank You for ordering , Your order will be here in 10 to 15 minutes");
}
;
