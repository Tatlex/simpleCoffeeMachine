/*
const readline = require('readline').createInterface({

    input: process.stdin,
    output: process.stdout
});
console.log("Write how many cups of coffee you will need:");
readline.question('>', cups => {
    console.log(`For ${cups} cups of coffee you will need:`);
    readline.close();
    console.log(`${200 * cups} ml of water`);
    console.log(`${50 * cups} ml of milk`);
    console.log(`${15 * cups} g of coffee beans`);
});
 */

/*
const input = require('sync-input');
let water = input("Write how many ml of water the coffee machine has:\n");
let milk = input("Write how many ml of milk the coffee machine has:\n");
let beans = input("Write how many g of coffee beans the coffee machine has:\n");
let cups = input("Write how many cups of coffee you will need:\n");
const waterNeeded = 200;
const milkNeeded = 50;
const beansNeeded = 15;
let waterState = water / waterNeeded;
let milkState = milk / milkNeeded;
let beansState = beans / beansNeeded;
let maxNumberOfCups = Math.floor(Math.min(Math.min(waterState, milkState), beansState));
let result = Math.floor(maxNumberOfCups - cups);
console.log(result === 0 ? `Yes, I can make that amount of coffee`
    : result < 0 ? `No, I can make only ${maxNumberOfCups} cup(s) of coffee`
        : `Yes, I can make that amount of coffee (and even ${result} more than that)`);

 */
/*
let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;
let result

const input = require('sync-input');
let exp1 = input("Write action (buy, fill, take, remaining, exit):\n>");
while(!result){
switch (exp1) {
    case 'buy':
        let exp2 = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n>");
        switch (exp2) {
            case '1':
                water = water - 250;
                beans = beans - 16;
                cups = cups - 1;
                money = money + 4;
                break;
            case '2':
                water = water - 350;
                milk = milk - 75;
                beans = beans - 20;
                cups = cups - 1;
                money = money + 7;
                break;
            case '3':
                water = water - 200;
                milk = milk - 100;
                beans = beans - 12;
                cups = cups - 1;
                money = money + 6;
                break;
        }
        break;

    case 'fill':
        let moreWater = parseInt(input("Write how many ml of water you want to add\n>"));
        water = water + moreWater;
        let moreMilk = parseInt(input("Write how many ml of milk you want to add\n>"));
        milk = milk + moreMilk;
        let moreBeans = parseInt(input("Write how many g of beans you want to add\n>"));
        beans = beans + moreBeans;
        let moreCoffeeCups = parseInt(input("Write how many disposable coffee cups you want to add\n>"));
        cups = cups + moreCoffeeCups;
        break;

    case 'take':
        console.log(`I gave you $${money}`);
        money = money - money;
        break;

    case 'remaining':
        console.log("\nThe coffee machine has:");
        console.log(`${water} ml of water`);
        console.log(`${milk} ml of milk`);
        console.log(`${beans} g of coffee beans`);
        console.log(`${cups} disposable cups`);
        console.log(`$${money} of money\n`);
        break;

    case 'exit':
        result = true;
        break;

}

}

 */

// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
let water = 400;
let milk = 540;
let coffee = 120;
let cups = 9;
let money = 550;

const remaining = () => {
    console.log(`
The coffee machine has:
${water} ml of water
${milk} ml of milk
${coffee} g of coffee beans
${cups} disposable cups
$${money} of money
`);
}

let drinks = {
    espresso : {
        water:250,
        coffee:16,
        milk:0,
        money:4,
    },
    latte:{
        water:350,
        milk: 75,
        coffee:20,
        money:7,
    },
    capuccino:{
        water:200,
        milk: 100,
        coffee:12,
        money:6,
    },
    americano:{
        water:250,
        milk: 50,
        coffee:25,
        money:10,
    }
}
const isEnoughResources = (drink) => {
    if(water < drink.water){
        console.log("Sorry, not enough water!\n");
    }
    else if(coffee < drink.coffee){
        console.log("Sorry, not enough coffee!\n");
    }
    else if(milk < drink.milk){
        console.log("Sorry, not enough milk!\n");
    }
    else if(cups < 1){
        console.log("Sorry, not enough cups!\n");
    }
    else{
        console.log("I have enough resources, making you a coffee!\n");
        water -= drink.water;
        milk -= drink.milk;
        coffee -= drink.coffee;
        money += drink.money;
        cups--;
    }
}
const buy = () =>{
    console.log("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
    let drink = input("");
    switch(drink){
        case "1":
            isEnoughResources(drinks.espresso);
            break;
        case "2":
            isEnoughResources(drinks.latte);
            break;
        case "3":
            isEnoughResources(drinks.capuccino);
            break;
        case "4":
            isEnoughResources(drinks.americano);
            break;
        case "back":
            break;
        default:
            console.log("Wrong input");
            break;
    }
};
const fill = () => {
    console.log("\nWrite how many ml of water you want to add:")
    water += +input("");
    console.log("Write how many ml of milk you want to add:")
    milk += +input("");
    console.log("Write how many grams of coffee beans you want to add:");
    coffee += +input("");
    console.log("Write how many disposable coffee cups you want to add:");
    cups += +input("");
    console.log();
};
const take = () => {
    console.log(`
I gave you $${money}
`);
    money = 0;
};

while(true){
    console.log("Write action (buy, fill, take, remaining, exit):");
    let action = input("");
    if(action === "buy"){
        buy();
    }
    else if(action === "fill"){
        fill();
    }
    else if(action === "take"){
        take();
    }
    else if(action === "remaining"){
        remaining();
    }
    else if(action === "exit"){
        break;
    }
    else{
        console.log("Unkown action");
    }
}
