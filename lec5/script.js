let box = document.querySelector(".box")
console.log(box.innerText) // returns the text inside the element

console.log(box.innerHTML) // returns the HTML code inside the element

console.log(box.outerHTML) // returns the inner HTML + element

box.hidden = true; // element dissapears
box.hidden = false; // element reappears

// element.hasAttribute("attribute name") => returns the boolean value corresponding to te presence of the given attribute
// element.getAttribute("attribute name") => returns the value of the given attribute
// element.setAttribute("attribute name", "value") => set the given attribute
// element.attribute => gives the list of all attributes

// creating elements
let div = document.createElement("div");
div.innerHTML = "<h1>Aniket Guleria</h1>";

// inserting element

document.querySelector(".container").append(div);
// other
// prepend => insert at beginning inside the node
// before => before outside of the node
// after => after outside the node