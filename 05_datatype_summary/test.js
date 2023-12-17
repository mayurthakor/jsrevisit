//Primitive Datatypes - These are call by value.Always provided a copy

//7 types:- String, Number, Boolean, Null, undefined, Symbol, BigInt


//Reference Type(Non-Primitive):- Memory reference can be allocated.

// Array, Objects, Functions

//Is JS static or dynamic type language?
//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

const id = Symbol("123");
const anotherID = Symbol("123");
console.log(id===anotherID)
console.log([id,anotherID]);

//DataTupes of Functions and objects.

let myObje = {
    name: "Mayur",
    thakor: "Thakor"
};

let myFunction = function(){
    console.log("Print My Function");
}

console.log("typeof Object is: ", typeof(myObje));
console.log("typeof Function is: ", typeof(myFunction));
