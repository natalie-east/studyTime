const kelvin = 0;
//todays forecast 293 Kelvin and will not change
const celsius = kelvin - 273;
console.log(celsius)
//celsius is 273 degrees cooler than kelvin
let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit)
var fahrenheit = 68;
//fahrenheit to cel
fahrenheit = Math.floor(fahrenheit);
//ensure fahrenheit rounds down to the nearest temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
//now convert celsius to newton
let newton = celsius * (33/100);
//newton to celsius formula
console.log(newton)
newton = Math.floor(newton); //ensures temperature is rounded down
console.log(`the temperature is ${newton} degrees Newton`);

//DOG YEARS for suzee =)
var myAge = 3;
//my age
var earlyYears = 2;
//this value will change
earlyYears *= 10.5;
let laterYears = myAge - 2;
//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
//Set the result equal to a variable called laterYears. We’ll be changing this value later.
laterYears *= 4
//Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.
//Write a comment that explains this line of code.
console.log(earlyYears, laterYears);
let myAgeInDogYears = earlyYears += laterYears;
var myName = "natalie".toLowerCase()
/*Let’s use a string method next.
Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName
The toLowerCase method returns a string with all lowercase letters.*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);

//daniel's timer
function countTimer(num) {
    var start = Date.now();
    console.log("Counting from 1 to " + num);
    for (var i = 1; i < num; i++)
         var end = Date.now();
    console.log("Done!");
    console.log("It took " + (end - start) + " milliseconds");
}