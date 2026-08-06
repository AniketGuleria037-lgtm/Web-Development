console.log("Hello World")

var a = 5;          //var variable is global
var b = "Aniket";
var c = true

console.log(a, b, c)
console.log(typeof(a), typeof(b), typeof(c))

{
    let x = 10;  //let is block scoped
    console.log(x)
}
{
    const k = 5; //const is block scoped but it's value is fixed
    console.log(k)
}
let obj = {
    name: "Aniket",
    age: 18,
    gender: "male"
}
console.log(obj.name, obj.age, obj.gender)
