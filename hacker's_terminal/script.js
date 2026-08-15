let loadings = document.querySelectorAll(".load")
const loading_animation = (element) => {
    let count = 0;
    let id = setInterval(() => {
        if(count === 3) {
            element.innerText = ".";
            count=0;
        }
        else {
           element.innerText += ".";
            count++; 
        }
    }, 1000);

    setTimeout(() => {
        clearInterval(id);
        element.innerText = "";
    }, 5000);
}

let paras = document.querySelectorAll(".para")
paras.forEach(element => {
    element.hidden = true;
});

paras.forEach((element, index) => {
    setTimeout(() => {
        element.hidden = false;
        console.log("test")
    }, index*5000);
});

loadings.forEach((element, index) => {
    setTimeout(() => {
        loading_animation(element);
    }, index*5000);
});