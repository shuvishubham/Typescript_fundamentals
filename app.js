"use strict";
const person = {
    name: 'shubham',
    age: 40,
};
console.log(person.name);
const students = ['shubham', 'shivam', 5];
let i = 0;
const data = ['shubham', 19]; // Tuple is for defining data structure
do {
    console.log(students[i]);
    i++;
} while (i < students.length);
// Understanding Enums Typescript
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// 0 ,      1,        2
const humans = {
    name: 'shubham',
    role: Role.READ_ONLY,
};
if (humans.role === Role.ADMIN) {
    console.log("Is admin");
}
else {
    console.log('Not admin');
}
;
// Any type  
// const students: any[] = ['shubham', 'shivam', 5];
// ------------>   Union Type
function combine(input1, input2, input3) {
    let result;
    if (input1 === 'number' && input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    ;
    return result;
}
;
const combineAges = combine(30, 20, 'negi');
const combineNames = combine('Max', 'Sam', 'suvi');
const TypeAlises = 'suvi';
// ----------------> Function return and Voids
function setReturnType(n1, n2) {
    return n1.toString() + n2.toString();
}
// Function that doesn't return anything call Void Functions
function voidFunction(num) {
    console.log('Result: ' + num);
}
;
// undefined is a type in TypeScript
// Function Types
function add(n1, n2) {
    return n1 + n2;
}
;
const functionType = voidFunction;
let addValues;
addValues = add;
// Unknown Type
let userInput;
userInput = 'suvi';
// The Never Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
;
generateError('An Error Occurred! ', 500);
