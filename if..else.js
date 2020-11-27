
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

