// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

console.log("// Exercise 1");

const letters = ["a","b","c"];
// show b in the console 

console.log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning
console.log("// Exercise 2");
const friends = [];

// What a lonely array. Add at least 3 friend objects to it.
const friend1 = {name: "Tobias", age: 5}
const friend2 = {name: "Betty", age: 5}
const friend3 = {name: "Koko", age: 5}

friends.push(friend1, friend2, friend3);

console.log(friends);




// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 
console.log("// Exercise 3");
const significantMathNumbers = [0, 2.718, 3.14159, 1729];

let number = significantMathNumbers.indexOf(1729);
console.log(number);


// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 


// --------------------------------------
// Exercise 4 - Inserting elements
console.log("// Exercise 4");
const diet = ["tomato", "cucumber", "rocket"];


diet.splice(2, 0, ...diet);

console.log(diet);


// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket


// --------------------------------------
// Exercise 5 - Remove element
console.log("// Exercise 5");

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full alread

diet.splice(diet.length-1, 1);

console.log(diet);


// --------------------------------------
// Exercise 6 - Copy array
console.log("// Exercise 6");

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = [...diet];

diet.push("soda2");
dinnerTray.push("pizza");


// --------------------------------------
console.log("// Exercise 7");


const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
lettersExpanded.map(letter=> {console.log(letter)});


// --------------------------------------
// Exercise 8 - For loop and if statement
console.log("// Exercise 8");

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];
const discardedNumbers = [];

numbers.map(number => {
    if (number > 6 || number < 0){
        console.log(number);
    } else {
        discardedNumbers.push(number);
    }
})

console.log(discardedNumbers);

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

// --------------------------------------


