const kelvin = 0;
//todays forecast 293 Kelvin and will not change
const celsius = kelvin - 273;
console.log(celsius)
//celsius is 273 degrees cooler than kelvin
let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit)
var farenheit = 68;
//fahrenheit to cel
fahrenheit = Math.floor(fahrenheit);
//ensure fahrenheit rounds down to the nearest temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
