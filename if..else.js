
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
