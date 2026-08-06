let obj = {
    name: "Aniket",
    age: 18,
    gender: "male"
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}