const extensions = 'https://developer.chrome.com/docs/extensions'
const webstore = 'https://developer.chrome.com/docs/webstore'



// Tworzy pustę tabicę, w której będą przechowywane obrazy
let arrayOfImages = [];


var images = document.getElementsByTagName('img'); 

console.log(images)


for(var i = 0; i < images.length; i++) {
    arrayOfImages.push(images[i].src);
}

console.log(arrayOfImages)


