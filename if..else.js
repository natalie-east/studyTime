
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
}

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


//As a function declaration:
function canIVote(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

// Write your function here:
function agreeOrDisagree(num1, num2) {
    if (num1 === num2) {
        return 'You agree!';
    } else {
        (num1 != num2);
        return 'You disagree!'
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep"))
//Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!

// Write your function here:
const lifePhase = (age)
let age = 5;
switch (lifePhase){
    case (age >= 0 && age <= 3):
        console.log ('baby');
        break;
    case (age >= 4 && age <= 12):
        console.log ('child');
        break;
    case (age >= 13 && age <= 19):
        console.log ('teen');
        break;
    case (age >= 20 && age <= 64):
        console.log ('adult');
        break;
    case(age >= 65 && age <= 140):
        console.log ('senior citizen');
        break;
    case(age <= 0 && age >= 140):
        console.log ('This is not a valid age');
        break;

}








// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!

const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}


const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

/*
//as a function declaration:
function finalGrade(midterm, final, homework) {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}
*/

let getSleepHours = 'Monday'
switch (getSleepHours){
    case ('Monday'):
        console.log (8);
        break;
    case ('Tuesday'):
        console.log (8);
        break;
    case ('Wednesday'):
        console.log (8);
        break;
    case ('Thurday'):
        console.log (8);
        break;
    case ('Friday'):
        console.log (8);
    case('Saturday'):
        console.log (8);
        break;
    case('Sunday'):
        console.log (8);
        break;
    case ('Default'):
        console.log('You need more sleep');
        break;
}

console.log()


let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
    retreat(){
        console.log(retreatMessage)
    },
    takeOff () {
        console.log('Spim... Borp... Glix... Blastoff!')
    }
};
alienShip.retreat();
alienShip.takeOff();

// nested object and retrieving and changing a variable within an object
let spaceship = {
    passengers: [{name: 'Space Dog'}],
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};

let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0];