let obj = {
    name: "Aniket",
    age: 18,
    gender: "male"
}
for (const key in obj) {  //forin loop used to iterate objects
    const element = obj[key];
    console.log(key, element)
}

for (const element of object) {  //forof loop used to iterate array
    
}