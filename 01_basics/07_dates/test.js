
let currentDateTime = new Date();

console.log(typeof currentDateTime);
console.log(currentDateTime.toDateString());
console.log(currentDateTime.toISOString());
console.log(currentDateTime.toJSON());
console.log(currentDateTime.toLocaleDateString());
console.log(currentDateTime.toLocaleTimeString());
console.log(currentDateTime.toTimeString());
console.log(currentDateTime.toUTCString());

//timestamp

let myTimeStamp = Date.now();
console.log(currentDateTime.getTime());
//Converting the time to milliseconds
console.log(Math.round(Date.now()/1000));


