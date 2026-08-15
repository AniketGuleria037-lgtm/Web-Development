const thumbnail = document.querySelector(".thumbnail");

// Create an <img> element
const img = document.createElement("img");
img.src = "https://media.sketchfab.com/models/9ef1c68fbb944147bcfcc891d3912645/thumbnails/0893869b4e6748c1b4094a821eb37d82/185512607c1a47b99b36d9dc9327735e.jpeg";

// Insert it at the beginning of .thumbnail
thumbnail.insertAdjacentElement("afterbegin", img);


const title = document.querySelector(".title");
title.innerText = "Welcome to sun video"

const others = document.querySelector(".other");
others.innerText = "Ani  220k views  2y ago"