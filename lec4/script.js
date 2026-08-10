// get element by class

let boxes = document.getElementsByClassName("box"); //will return an array of all the elements with class name as box
boxes[1].style.backgroundColor = "red"
console.log(boxes)

let box1 = document.getElementById("box1") //return the element with the given id name
box1.style.backgroundColor = "yellow"

let boxK = document.querySelector(".box") //returns the 1st element of given class or id
boxK.style.borderRadius = "50%"

let box = document.querySelectorAll(".box")//returns all elements of given id or class
box.forEach(e=> {
    e.style.color = "blue"
})
