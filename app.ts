const person: {name: string, age: number} = {  // Describing the type after colun(:)
    name: 'shubham',
    age: 40,
};

console.log(person.name);


const students: any[] = ['shubham', 'shivam', 5];
let i = 0;

const data: [string, number] = ['shubham', 19]; // Tuple is for defining data structure

do {
    console.log(students[i]);
    i++;
} while (i < students.length);


// Understanding Enums Typescript

enum Role { ADMIN, READ_ONLY, AUTHOR };
          // 0 ,      1,        2

const humans = {
    name: 'shubham',
    role: Role.READ_ONLY,
};

if (humans.role === Role.ADMIN) {
    console.log("Is admin");
} else {
    console.log('Not admin')
};



// Any type  
// const students: any[] = ['shubham', 'shivam', 5];


// ------------>   Union Type

function combine(input1: string | number, input2: string | number, input3: 'suvi' | 'negi') { // uinion type  // literals:- input3: 'suvi' | 'negi'
    let result;
    if(input1 === 'number' && input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    };

    return result;
};

const combineAges = combine(30, 20, 'negi');

const combineNames = combine('Max', 'Sam', 'suvi');


// ---------------> type Alises

type Combinable = number | string;
type FixedStrings = 'Suvi' | 'negi';

const TypeAlises: Combinable = 'suvi';


// ----------------> Function return and Voids

function setReturnType(n1: number, n2: number): string {
    return n1.toString() + n2.toString();
}


// Function that doesn't return anything call Void Functions

function voidFunction(num: number): void {
    console.log('Result: '+ num);
};

// undefined is a type in TypeScript


// Function Types
function add(n1: number, n2: number) {
    return n1 + n2;
};

const functionType: Function = voidFunction;

let addValues: (a: number, b: number) => number; 
addValues = add;


// Unknown Type
let userInput: unknown;
userInput = 'suvi';

// The Never Type
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
};

generateError('An Error Occurred! ', 500);

