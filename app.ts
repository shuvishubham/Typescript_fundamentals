const person: {name: string, age: number} = {
    name: 'shubham',
    age: 40,
};

console.log(person.name);


const students: any[] = ['shubham', 'shivam', 5];
let i = 0;

const data: [string, number] = ['shubham', 19]; // Tuple

do {
    console.log(students[i]);
    i++;
} while (i < students.length);


// Understanding Enums Typescript



