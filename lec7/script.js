// JS is asyncrnous in nature 
// Js will hold the execution of the line inside the set setTimeout and will jump further
// console.log("Hello this is the start of the program");
// console.log("Hello my name is aniket");

// setTimeout(() => {
//     console.log("I am inside setTimeout");
// },2000);
// setTimeout(() => {
//     console.log("Meow!!!!!!");
// }, 1000);

// console.log("End");

// //callbacks - A function passed into another function as a parameter and invoked accordingly

// const greet = (name, callback) => {
//     console.log("Hello " + name);
//     callback(name)
// }
// const bye = (name) => {
//     console.log("Goodbye " + name);
// }

// greet("Aniket", bye);

//Promise



const myPromise1 = new Promise((resolve, reject) => {
    const success = () => {
        let a = Math.random();
        if(a<0.5) return false;
        else return true;
    };

    if(success()) {
        resolve("Program1 executed successfully");
    }
    else {
        reject("Opps!!1 something went wrong");
    }
});

const myPromise2 = new Promise((resolve, reject) => {
    const success = () => {
        let a = Math.random();
        if(a<0.5) return false;
        else return true;
    };

    if(success()) {
        resolve("Program2 executed successfully");
    }
    else {
        reject("Opps!!2 something went wrong");
    }
});

const myPromise3 = new Promise((resolve, reject) => {
    const success = () => {
        let a = Math.random();
        if(a<0.5) return false;
        else return true;
    };

    if(success()) {
        resolve("Program3 executed successfully");
    }
    else {
        reject("Opps!!3 something went wrong");
    }
});

let p3 = Promise.race([myPromise1, myPromise2, myPromise3])
p3.then(e => console.log(e));
p3.catch(e => console.log(e));