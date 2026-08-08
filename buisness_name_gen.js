// We have to generate a buissname using adjective, shop name and another word

//Adjective
// Crazy, Amazing, Fire

// Shop
// Engine, Foods, Garments

//Another word
// Hub, Bros, Limited

const random_num = () => {
    return (Math.floor(Math.random()*3) + 1);
}

const Business_gen = () => {
    let result = "";
    let r1 = random_num();
    let r2 = random_num();
    let r3 = random_num();

    switch(r1) {
        case 1:
            result = result + "Crazy" + " ";
            break;
        case 2:
            result = result + "Amazing" + " ";
            break;
        case 3:
            result = result + "Fire" + " ";
            break;
    }
    switch(r2) {
        case 1:
            result = result + "Engine" + " ";
            break;
        case 2:
            result = result + "Foods" + " ";
            break;
        case 3:
            result = result + "Garments" + " ";
            break;
    }
    switch(r3) {
        case 1:
            result = result + "Bros";
            break;
        case 2:
            result = result + "Limited";
            break;
        case 3:
            result = result + "Hub";
            break;
    }
    return result;
}

let business = Business_gen();
console.log(business)