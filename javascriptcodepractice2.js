//DOM: document object model
//all html all component are node and nodes comes with element. and dom is all web page all over you sees is dom.

//dom manupulation:
//dom = body for now 
//all website you see is dom
//dom manupulation means change karna kya dom.
//changing means after clicking download button start downloading message appears.

//DOM manupulation ke liye kya kare
//1) html se element select karna
//2) text badalna
//3) html badalna
//4) css badalna
//5) attributes badalna
//6)event listners

//selecting element:
//getElenentById, getElementByClassName, querySelector, querySelectorAll
//let a = document.getElementById("ab");
/*console.log(a);
console.dir(a);

let b = document.getElementsByClassName("abcd");
console.log(b);
console.dir(b);*/
//getElementsByClassName returns html collection
//html collection is array like object
//html collection me array ke sare method nhi hote hai
//html collection me index se access kar sakte hai
//let abcd = document.querySelector("h1");
//console.dir(abcd);
//querySelector returns first element
//let abcde = document.querySelectorAll("h1");
//console.dir(abcde);
//querySelectorAll returns nodelist
//nodelist is array like object
//nodelist me array ke sare method hote hai
//nodelist me index se access kar sakte hai
//nodelist me forEach method hota hai

let h1= document.querySelector("h1");
h1.textContent = "hello world";