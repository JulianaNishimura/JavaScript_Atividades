let temperaturaCelsius = prompt("Digite a temperatura em Celsius:");

let Celsius = Number(temperaturaCelsius);
let Fahrenheit = (Celsius *9/5) + 32;
let Kelvin = Celsius+273.15;

document.body.insertAdjacentHTML('afterbegin', "Temperatura em Fahrenheit: " + Fahrenheit + " Temperatura em Kelvin: " + Kelvin);


