const add_item = async (item) => {
    let div = document.createElement("div");
    div.innerText = item;
    document.body.append(div);
};

const random_timeout = () => {
    return new Promise((resolve) => {
        let n = Math.random();
        let timeout = 1000 + n * 6000;
        setTimeout(() => {
            resolve();
        }, timeout);
    });
};




const main = async () => {
    let id = setInterval(() => {
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3);
        }
        else {
            last.innerHTML += "."
        }
        ;
    }, 500);
    let text = [
    "Initializing Hacking",
    "Reading your files",
    "Password files detected",
    "Sending files to server",
    "Cleaning up"
    ];

    for (const element of text) {
        await add_item(element);
        await random_timeout();
    }
    clearInterval(id);
}

main();