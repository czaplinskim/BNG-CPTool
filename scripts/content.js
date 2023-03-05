const article = document.querySelector("article");
const longProductsNames = [
        "08001090705662-83736412-Tampax Compak Super Tampons Applicator.pdpd",
        "04015400269793-83736394-Tampax Pearl Super Tampons Applicator.pdpd",
        "08001090705600-83736410-Tampax Compak Regular Tampons 18.pdpd",
        "08001090705600-83736410-Tampax Compak Regular Tampons 18.pdpd",
        "08001090705600-83736410-Tampax Compak Regular Tampons 18.pdpd",
        "04015400755548-83734842-Always Ultra Long (Size 2.pdpd",
        "04015400755548-83734840-Always Ultra Long (Size 2.pdpd",
        "08001090705723-83736414-Tampax Compak Super Tampons Applicator.pdpd",
        "08001090733795-83736540-Tampax Pearl Regular Tampons Applicator.pdpd"

]

let productsInfoObject = {}
let productsInfoArray = []
let productsInfoArrayTwo = []

longProductsNames.forEach((product, index) => {


    let tempEan = Number(product.split('-')[0])
    let tempFpc = Number(product.split('-')[1])
    let tempArr = [tempEan, tempFpc]

    productsInfoArray.push(tempArr)
    productsInfoArrayTwo.push(tempEan)

 
});



var sortedArray = productsInfoArray.sort(function(a, b) {
    return a[1] - b[1];
  })

// productsInfoArrayTwo = productsInfoArrayTwo.sort(function(a, b) {
//     return b - a;
//   })


  productsInfoArrayTwo.forEach((product, index) => {

    // console.log(productsInfoArrayTwo.indexOf(product, index + 1))

    let doubleIndex = productsInfoArrayTwo.indexOf(product, index + 1)

    if(doubleIndex > 0) {
         
        // console.log(doubleIndex)
        // sortedArray.splice(doubleIndex, 1)
    }

  })

// const [keys, ...values] = sortedArray;
// const objects = values.map(array => array.reduce((a, v, i) => ({...a, [keys[i]]: v}), {}));

  sortedArray = sortedArray.reduce((a, v, i) => ({ ...a, [v[0]]: v}), {}) 

console.log(sortedArray)

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} minut read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}