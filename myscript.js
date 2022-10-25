//////////////// Query Selector Exercise //////////////////
/*
1. Given the boiler plate use query selector console log the following items on the page:​

    - The text Content of the H1 element​
    - The text content of the id “Hero”​
    -The text content of the first instance of the class “list”​

2. Add some text to the p tag with the id “dynamic-text”​
​*/

// Add Your JavaScript Below
let head = document.querySelector("h1");
console.log(head)
let div = document.querySelector("#hero");
console.log(div)
let listing = document.querySelector(".list");
console.log(listing)
let text = document.querySelector("#dynamic-text").textContent = "keep going!..You can do this!";
console.log(text)


