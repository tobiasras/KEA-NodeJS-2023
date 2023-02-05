// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = { message: "Hello, earthling! I bring peace." };

console.log(myObj.message)


// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const object = {
    name: "tobias",
    age: 25
};

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};
stackOverflow.newProperty = "string";
stackOverflow.isAllowed = true;


// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };
delete thisSong.description;
thisSong.about = "Just a tribute.";

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

console.log(thisSong.about)
// --------------------------------------


