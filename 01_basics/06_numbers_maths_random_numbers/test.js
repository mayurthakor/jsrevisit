const balance = new Number(100);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 23.994;
console.log(otherNumber.toPrecision(3));

const formats = 10000000;
console.log(formats.toLocaleString());
console.log(formats.toLocaleString('en-IN'));


///////////////////////    MATH   //////////////

console.log(Math.random());
console.log(Math.floor((Math.random() * 10) + 1));

//Finding random values between min and max values.
const min = 10
const max = 100

console.log(Math.floor(Math.random() * (max - min + 1)) + min);