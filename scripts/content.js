const article = document.querySelector("article");
const longProductsNames = [
        "04015400755548-83734842-Always Ultra Long (Size 2.pdpd",
        "04015400755692-83734888-Always Ultra Night (Size 3.pdpd",
        "08001090705662-83736412-Tampax Compak Super Tampons Applicator.pdpd",
        "04015400269793-83736394-Tampax Pearl Super Tampons Applicator.pdpd",
        "08001090705600-83736410-Tampax Compak Regular Tampons 18.pdpd",
        "08001090705723-83736414-Tampax Compak Super Tampons Applicator.pdpd",
        "08001090733795-83736540-Tampax Pearl Regular Tampons Applicator.pdpd"

]

let productsInfoObject = {}

longProductsNames.forEach((product, index) => {

    console.log(product.split('-')[0])
    let tempEan = product.split('-')[0]
    let tempFpc = product.split('-')[1]
    let tempObj = { tempEan : tempFpc }
    productsInfoObject = {...productsInfoObject, {tempEan : tempFpc}}

    // productsInfoArray.push(product.split('-'))
    // productsInfoArray[index][0] = Number(productsInfoArray[index][0])
    // console.log(productsInfoArray[index][0])

});

// productsInfoArray = productsInfoArray.reduce((a, v) => ({ ...a, [v]: v}), {}) 

console.log(productsInfoObject)

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