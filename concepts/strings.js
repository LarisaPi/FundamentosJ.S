//Hi! I´m Larisa and I´m from Huamantla
//I´m Larisa 

const name = "Larisa";
const city = "Huamantla";

console.log("Hi! I'm " + name + "\n I'm from" + city);

console.log('Hi! I\'m' + name + 'and I\'m from' + city);

//Template literals
console.log( `Hi! I'm ${ name } and I'm from ${ city }`);

//Template literals
console.log(`Hi! I'm ${ name } 
    I'm from ${city}`);
const message = `Hi! I'm ${ name } and I'm from ${ city }`;
    
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLocaleLowerCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hi!'));
console.log(message.indexOf('Larisa'));
console.log(message.split(' '));
console.log("(=^.^=🦜".repeat(5));