let n = 0;
let button = document.querySelector(".btn");
button.addEventListener("click", () => {
    n+=1;
    console.log("I was clicked ", n, " times")
})

let btn2 = document.querySelector(".reset");
btn2.addEventListener("dblclick", ()=> {
    n=0;
    console.log("Reset complete");
})