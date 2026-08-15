//APPROACH 1
// const get_data = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// };

// console.log("Starting program");
// console.log("Fetching data please wait....");
// let data = get_data();
// data.then((v) => {
//     console.log(data);
//     console.log(v);
//     console.log("Processing data....");
//     console.log("Task2");
// });

//APPROACH 2
const get_data = async () => {
    let promise_data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let json_data = await promise_data.json()
    return json_data;
};


const main = async () => {
    console.log("Starting program");
    console.log("Fetching data please wait....");
   
    let data = await get_data()
    console.log(data);
    console.log("Processing data....");
    console.log("Task2");
}
main();

