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
*/

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
