
//if else statements w/ else if//

let season = 'summer';

if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.');
}else if(season === 'fall') {
    console.log('It\'s fall! Leaves are falling!');
}else if(season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
}
else {
    console.log('Invalid season.');
}

let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case 'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    case 'default':
        console.log('No medal awarded.');
        break;
}

let fashionCapital = 'Paris'
switch (fashionCapital){
case ('Paris'):
    console.log('Paris is in France.');
    break;
case ('New York City'):
    console.log('New York City is in New York');
    break;
case ('Los Angeles'):
    console.log('LA is in California.');
    break;
case ('Default'):
    console.log('The fashion capital is everywhere you are');
    break;
}

let userName = ''
userName = '' ? console.log ('Hello' + userName + ' !') : console.log('Hello!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?
    console.log('I love that!'):
    console.log("I don't love that!");

let userName = 'Natalie';
userName = 'name' ? console.log ('Hello ' + userName + '!') : console.log('Hello!');

let userQuestion = 'Who will I Marry?';
switch (userQuestion){
    case "Who will I Marry?":
        console.log(userName + ', you will marry a life long friend.');
        break;
}

let userName = 'Natalie';
userName = 'name' ? console.log ('Hello ' + userName + '!') : console.log('Hello!');

let userQuestion = 'Who will I Marry?';
switch (userQuestion){
    case "Who will I Marry?":
        console.log(userName + ', you will marry a life long friend.');
        break;
}
//formula the outputs a random number//
let randomNumber = Math.floor(Math.random() * 8);
//introduced a variable and set it equal to a number//
let eightBall = 8;
//write a switch statement for each number//
switch (randomNumber){
    case (0):
        eightBall = 'It is certain';
        break;
    case (2):
        eightBall = 'It is decidedly so';
        break;
    case (3):
        eightBall = 'Reply is hazy, try again';
        break;
    case (4):
        eightBall = 'Cannot predict now';
        break;
    case (5):
        eightBall = 'Do not count on it';
        break;
    case (6):
        eightBall = 'My sources say no';
        break;
    case (7):
        eightBall = 'Outlook not so good';
        break;
    case (8):
        eightBall = 'Signs point to yes';
        break;
}
//statement expected output
console.log('The Magic Eight Ball answered: ' + eightBall);
// call a function and console.log with a name notice there is no no quotes for name as a parameter//
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
//created a name that says 'Cole'
sayThanks('Cole')

//setting default parameters// I set each item to a default variable.
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
//using the return key to output a number
function monitorCount(rows, columns){
    return (rows * columns);
}
//calculate cost of monitors by using the return action
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors)

function monitorCount(rows, columns) {
    return rows * columns;
}
function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5,4);
console.log(totalCost)

//SYNTAX PLEASE PAY ATTENTION//
const plantNeedsWater = function (day){
    if (day === 'Wednesday'){
        return true;
    }else {
        return false;
    }
};
plantNeedsWater('Tuesday');
console.log (plantNeedsWater('Tuesday'))
//SYNTAX PLEASE PAY ATTENTION//
// A NEW WAY TO WRITE A FUNCTION
const plantNeedsWater = (day) => {
    //NOTICE THE EQUAL SIGN THEN A 'FAT ARROW' POINTING TO CURLY BRACES'//
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

const city = 'New York City';

const logCitySkyline = () => {
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());

const satellite = ('The Moon');
const galaxy = ('The Milky Way');
const stars = ('North Star');
function callMyNightSky(){
    return ('Night Sky: ' + satellite + ', ' + stars + ' , and ' + galaxy);
}

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());