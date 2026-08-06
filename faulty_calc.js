// this is a faulty calculator which performs wrong calculations in 10% of the inputs
// + --> -
// - --> *
// * --> /
// / --> +
const calculator = (a, b, op) => {
    let x = Math.random();
    if(x <= 0.1) {
        switch(op) {
            case '+':
                return a-b;
            case '-':
                return a*b;
            case '*':
                return a/b;
            case '/':
                return a+b;
        }
    }
    else {
        switch(op) {
            case '+':
                return a+b;
            case '-':
                return a-b;
            case '*':
                return a*b;
            case '/':
                return a/b;
        }
    }
}

while(true) {
    let flag = prompt("Do you wish to start the calculation");
    if(!flag) {
        console.log("terminating......")
        break;
    }
    let a = Number(prompt("Enter first value"));
    let b = Number(prompt("Enter second value"));
    let op = prompt("Enter operator")
    let result = calculator(a, b, op);
    console.log(result);
}