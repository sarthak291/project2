/* let a=[1,2,3];
let b=a;
b.push(4);
console.log(a);
console.log(b);
// Output:
// [1, 2, 3, 4]
// [1, 2, 3, 4]
// Both a and b point to the same array in memory, so changes to b affect a.
// To avoid this, create a shallow copy of the array:
let c=[...a];
c.push(5);
console.log(a);
console.log(c); // Output:
// [1, 2, 3, 4]
// [1, 2, 3, 4, 5]  // Now a remains unchanged when c is modified.


// The spread operator (...) creates a shallow copy of the array, so changes to c do not affect a.
// Note: This only creates a shallow copy. For nested objects or arrays, a deep copy is needed to avoid reference issues.
// Example of shallow copy issue:
let original = [{ x: 1 }, { y: 2 }];
let shallowCopy = [...original];
shallowCopy[0].x = 99;
console.log(original);
console.log(shallowCopy);
// Output:
// [ { x: 99 }, { y: 2 } ]
// [ { x: 99 }, { y: 2 } ]
// Both original and shallowCopy reflect the change because they reference the same nested object.


// Symbols are unique and immutable data types used as identifiers for object properties.
// They help avoid property name collisions in objects, especially when integrating code from different sources.    
let object1 = { uid: '1',
                name: 'John',
                age: 21 };
                let ul= Symbol('uid');
                object1[ul]='123';
console.log(object1);
// Output: { uid: '1', name: 'John', age: 21, [Symbol(uid)]: '123' }
// The symbol property does not show up in standard enumeration methods like Object.keys() or for...in loops.
// To access symbol properties, use Object.getOwnPropertySymbols() or Reflect.ownKeys().
// Example:
let symbols = Object.getOwnPropertySymbols(object1);
console.log(symbols); // Output: [ Symbol(uid) ]
console.log(object1[symbols[0]]); // Output: '123'
// This demonstrates how symbols can be used to create unique property keys that do not interfere with other properties in the object.
// Symbols are not included in JSON serialization, so they won't appear in JSON.stringify() output.
// Example:
let jsonString = JSON.stringify(object1);
console.log(jsonString); // Output: {"uid":"1","name":"John","age":21}

// This shows that the symbol property is not included in the JSON representation of the object.


let a= 37646456434n;
console.log(a);
console.log(typeof a);
// Output: bigint   
// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.
// BigInt can be created by appending 'n' to the end of an integer or by calling the BigInt() constructor.
// Example:
let bigIntFromConstructor = BigInt(9007199254741991);
console.log(bigIntFromConstructor);
console.log(typeof bigIntFromConstructor);
// Output: 9007199254741991n
// bigint
// BigInt supports standard arithmetic operations like addition, subtraction, multiplication, and division, but it does not support mixed operations with Number types.
let big1 = 9007199254741991n;
let num1 = 10;
// let result = big1 + num1; // This will throw a TypeError
let result = big1 + BigInt(num1); // Correct way to add BigInt and Number
console.log(result); // Output: 9007199254742001n
// BigInt is particularly useful for applications that require precise representation of large integers, such as cryptography, financial calculations, and scientific computations.
// Note: BigInt is not supported in all environments, so check compatibility if you're working in a browser or older JavaScript engine.


let abc={
    name:"John",
};
let ab=abc;
ab.name="Doe";
console.log(abc.name);
console.log(ab.name);
// Output:
// Doe
// Doe
// Both abc and ab point to the same object in memory, so changes to ab affect abc.
// To avoid this, create a shallow copy of the object.



let a=12;
var b=23.5;
let c=45.67;
let d='A';
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);


let a ="10";
let b=1;
console.log(a+b);
console.log(typeof(a+b));
console.log(Number(a)+b);
console.log(typeof(Number(a)+b));
console.log(parseInt(a)+b);
// Output:
// string
// number
// number
// number
// JavaScript performs type coercion when using the + operator with a string and a number, resulting in string concatenation.
// To perform numerical addition, explicitly convert the string to a number using Number() or parseInt().
// Note: parseInt() parses up to the first non-digit character, while Number() converts the entire string to a number or returns NaN if it cannot be converted.


let x;
console.log(x);
let y=null;
console.log(y);
console.log(typeof x);
console.log(typeof y);
// Output: 
// undefined
// null
// undefined
// object
// In JavaScript, undefined means a variable has been declared but not assigned a value, while null is an assignment value that represents no value or no object.
// The typeof operator returns "undefined" for undefined variables and "object" for null, which is a known quirk in JavaScript.
// Always use strict equality (===) to compare values to avoid unexpected type coercion.
// Example:
console.log(x === undefined); // true
console.log(y === null); // true
console.log(x == null); // true (because null and undefined are loosely equal)
console.log(y == undefined); // true (because null and undefined are loosely equal)
// This demonstrates the differences between undefined and null, as well as the importance of using strict equality for comparisons.
// Note: Avoid using null and undefined interchangeably to prevent confusion in your code.
// Use cases:
// Use undefined for uninitialized variables and function parameters.
// Use null to explicitly indicate the absence of a value or object.


let i = 1;
while (i <= 10) {
    if (i == 5) {
        i++;         // move i forward so you don't get stuck
        continue;    // skip logging 5
    }
    console.log(i);
    i++;
}
// Output: 1 2 3 4 6 7 8 9 10
// The continue statement skips the current iteration of the loop when i equals 5, so 5 is not logged.
// Note: Always ensure to increment the loop variable (i in this case) before the continue statement to avoid infinite loops.  
// The continue statement can be useful for skipping specific conditions within loops without breaking out of the loop entirely.

function hello() {
    console.log("Hello, World!");
}

let hii = hello;
hii(); // Output: Hello, World!
// In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.
// In this example, the function hello is assigned to the variable hii. When hii() is called, it invokes the original hello function, demonstrating that functions can be treated like any other variable.
// This feature allows for higher-order functions, callbacks, and functional programming techniques in JavaScript.
// Note: When assigning a function to a variable, do not include parentheses after the function name (e.g., use hii = hello, not hii = hello()) to avoid immediately invoking the function. 
// Functions can also be passed as arguments to other functions:
function greet(fn) {
    fn();
}
greet(hello); // Output: Hello, World!
// Here, the greet function takes another function as an argument and calls it, demonstrating the use of functions as first-class citizens in JavaScript.
let hi = function() {
    console.log("Hi, there!");
}
hi(); // Output: Hi, there!
// This is an example of a function expression, where an anonymous function is assigned to the variable hi. When hi() is called, it executes the function and logs "Hi, there!" to the console.
// Function expressions are useful for creating functions that are used only once or passed as arguments to other functions.
// Note: Function expressions can be named or anonymous. Named function expressions can be useful for recursion or debugging, while anonymous functions are often used for short-lived tasks.
// Arrow functions provide a concise syntax for writing functions and lexically bind the this value.
let add = (a, b) => { return a + b};
console.log(add(5, 3)); // Output: 8
// In this example, the add function is defined using arrow function syntax. It takes two parameters, a and b, and returns their sum.
// Arrow functions are particularly useful for short functions and callbacks, as they provide a more concise syntax compared to traditional function expressions.
// Note: Arrow functions do not have their own this context; they inherit this from the surrounding lexical scope. This makes them ideal for use in methods like map, filter, and reduce where you want to maintain the context of the enclosing scope.
// Example of arrow function with no parameters
let greet2 = () => console.log("Hello!");
greet2(); // Output: Hello!


function add( a,b,c,... val)
{
    console.log(val);
    console.log(a);
    console.log(b);
    console.log(c);
}
add(1,2,3,4,5,6,7,8,9,0);

function ab(val)
{
    val();
}
ab(function(){
    console.log("hey");
})

function abc()
{
    return function(){console.log("hey buddy")};
}
abc()();
let a= abc();
a();



//closure
function abcd()
{
    let a=12;
    return function(){console.log(a)};
};
abcd()();


function calculatedis(discount)
{
    return function(price){
        return price-price*(discount/100);
    };
}
let ten= calculatedis(10);
let twenty= calculatedis(20);
console.log(ten(1200));
console.log(twenty(2000));



(function(){
    const password="secrete";
    console.log(password);

})();
console.log(password);
*/


/*
let arr=[1,2,3,4,5];
let arr2= new Array();
console.log(arr[1]);
arr2[0]=1;
console.log(arr[0]);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
arr.unshift(0);
console.log(arr);
let p = arr.splice(2,2);
console.log(arr);
console.log(p);
let arr3=arr.slice(1,4);
console.log(arr3);
console.log(arr);

arr.reverse();
console.log(arr);

let arr=[3,5,1,4,2];
arr.sort();
console.log(arr);
let sr= arr.sort(function (a,b){
    return b-a;
});
console.log(sr);


let arr = [11,64,3,4,25];
arr.forEach(function(val){
    console.log(val+5);
});
let i;
arr.forEach(function(val, idx, array) {
    if (val == 3) {
        array[idx] = val + 2;
    }
});
console.log(arr);

let newarr = arr.map(function(val){
    return val*2;
});
console.log(newarr);



//filter:
let arr = [11,64,3,4,25];
let newarr= arr.filter(function(val)
{
    if(val>11)return true;
});
console.log(newarr);

//reduce:
let arr=[1,2,3,4,5,6];
let newarr=arr.reduce(function (accumulator,val){
    return accumulator+val;
},0);
console.log(arr);
console.log(newarr);

let arr = [
    {id: 1, key: 1},
    {id: 2, key: 2},
    {id: 3, key: 3}
];

let val = arr.find(function(item){
    return item.key === 1;
});

console.log(val); // Output: {id: 1, key: 1}
let val2 = arr.findIndex(function(item){
    return item.key === 1;
});

console.log(val2); // Output: 0
let has = arr.some(function(item){
    return item.key === 1;
});
console.log(has);

 let all = arr.every(function(item){
    return item.key > 0;
 });
 console.log(all); // Output: true

// The find method returns the first element in the array that satisfies the provided testing function. If no elements satisfy the condition, it returns undefined. 
// The findIndex method returns the index of the first element that satisfies the testing function. If no elements satisfy the condition, it returns -1.
// The some method tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value.
// The every method tests whether all elements in the array pass the test implemented by the provided function. It also returns a boolean value.
// These methods are useful for searching and validating data within arrays, providing a more functional approach to array manipulation in JavaScript.
// Note: These methods do not modify the original array; they return new values based on the conditions specified in the callback functions.

//destructuring and spread operator
let arr=[1,2,3,4,5];
let [a,b,...c]=arr;
console.log(a);
console.log(b);
console.log(c); //output: 1 2 [3,4,5]
let [x,y]=arr;
console.log(x);
console.log(y); //output: 1 2
let [p,,q]=arr;
console.log(p);
console.log(q); //output: 1 3
let arr2=[...arr,6,7,8];
console.log(arr2); //output: [1,2,3,4,5,6,7,8] 
//spread operator (...) copies all elements of arr into arr2 and adds 6,7,8 at the end. and arr2=arr give referance of arr to arr2 thatswhy when we change arr2 it also change arr.


//splice once more 
let color=["green", "red"];
color.splice(1,0,"blue","yellow");
console.log(color); //output: ['green', 'blue', 'yellow', 'red']
color.splice(2,1);
console.log(color); //output: ['green', 'blue', 'red']

//for each loop dont have to return anything but map have to return something.




//objects:
let obj={
    name:"John",
    age:21,
    hobbies:["reading","travelling"],
};
console.log(obj.name);
console.log(obj["age"]);
obj.age=22;
console.log(obj.age);
let aa="name";
console.log(obj[aa]); //it takes the output of variable aa and print the value of that property
console.log(obj.aa); //undefined //it is not get output because it is not a property of object 
*/


const user={
    name:"John",
    age:21,
    address:{
        city:"New York",
        state:"NY",
        location:{
            lat:40.7128,
            long:74.0060,
        },
    },
};
console.log(user.address.location.lat);
console.log(user?.address?.location?.lat); //this ? is used for if any time name of any property get changed or deleted then it will not give error it will give undefined
console.log(user?.address?.location?.latt); //undefined
//optional chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to check if each reference in the chain is valid. 
//If any reference in the chain is null or undefined, the entire expression short-circuits and evaluates to undefined, preventing runtime errors.
//This is particularly useful when dealing with complex objects where certain properties may not always be present, allowing for cleaner and more readable code.

let {lat, long}= user.address.location;
console.log(lat);
console.log(long); //output: 40.7128 74.006
//this used for destructuring the object and getting the value of that property
