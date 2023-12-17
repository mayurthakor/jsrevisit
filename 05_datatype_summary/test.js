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



//++++++++++++++++++++++   Memory Types   ++++++++++++++++++++++++++++

//Stack(Primitive) and Heap(Non-Primitive)

//Stack
//Here you get a copy of actual variable. Valu of original variable remain intact.
let my1stString = "This is my 1st sample String";
let my2ndString = my1stString;
my2ndString = "I have updated it";

console.log(my1stString);
console.log(my2ndString);


//Heap
//You get a memory reference here.

let myObj1 = {
    name: "Mayur Thakor",
    email: "This@google.com"

}

let myObj2 = myObj1;

myObj2.email = "Updated@google.com"; // Updating Email will update the copy of this object in Heap.

console.log(myObj1);
console.log(myObj2);