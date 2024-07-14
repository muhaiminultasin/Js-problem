



// 1.  Answer is I am var. let and const are block scope variable.. We can't access any block scope variable from outside of block  scope.

// 2.

function greet (name , greeting = "hello,") {
    return `${greeting} ${name}.`
}



// 3.

function sum(...a){
    let total = 0 ; 
    for(let i of a) {
        total += i;
    }
    return total;
}




// 4.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const margedArray = [...array1, ...array2, ...array3];


// 5.

let person = {
    name: "Tasin Muhaiminul",
    age: 30,
    greet() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
};

// 6.

const fruits = ["apple", "banana", "cherry"];
for(let i of fruits){
    // console.log(i);
}

// 7.

const name = "Alice";
const age = 25;

let message = `My name is ${name} is ${age} years old `;

// 8.

const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];

  for(let i of students){
    console.log(i.name , i.grade)
  }

//   9

const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

 for(IA of nestedArrays){

    sum = 0;
    for (elements of IA){
        sum += elements;
    }
    console.log(sum)
 }
  

//   10.

const a = 5;
const b = 10;

// Your code here
const result = `${a} and ${b} = ${a+b}`;