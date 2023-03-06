
const findProducts = () => { 

    var products = document.querySelectorAll(".name-inner")
    var result = Object.keys(products).map((key) => products[key].innerText)

    return result

//    return [... document.querySelectorAll(".name-inner")].map(i => i.innerText);

}

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



setTimeout(() => {

    
    let elemm = findProducts()
    cutNames(elemm)

    const badge = document.createElement("a");
    badge.setAttribute('href', 'https://pg.browser.synthrone.io/search?type=pdpd&contains=04015400627807%2004015400627968%2004015400628088%2008001090065964%2008001090065988%2008001090066008%2008001090983961%2008001090983992%2008001841104249%2008006540013762%2008006540256107%2008006540351963%2008006540351987%2008006540352052%2008006540352083%2008006540492819%2008006540492956%2004015400628262%2008001090439055%2008001841543680%2008001841543710%2008006540011393%2008001090959447%2008006540011379%2008001090438973%2008006540806975%2008001090893277%2008001090065988');
    badge.style.cssText = 'color: black; font-weight: 500; margin: 0px 5px; font-size: 13px;'
    badge.textContent = `FPCs`;
    const searchTab = document.querySelector(".files-browser-bar");
    searchTab.insertAdjacentElement("beforeend", badge);

}, 5000)





let productsInfoObject = {}
let productsInfoArray = []
let productsInfoArrayTwo = []

const cutNames = (array) => {

    console.log(array)

    array.forEach((product, index) => {

        let tempEan = Number(product.split('-')[0])
        let tempFpc = Number(product.split('-')[1])
        let tempArr = [tempEan, tempFpc]
    
        productsInfoArray.push(tempArr)
        productsInfoArrayTwo.push(tempEan)
    
    })

   

    
    var sortedArray = productsInfoArray.sort((a, b) => { return a[1] - b[1] })

    console.log(sortedArray)

    productsInfoArrayTwo.forEach((product, index) => {

        let doubleIndex = productsInfoArrayTwo.indexOf(product, index + 1)
    
        if(doubleIndex > 0) {
             
    
        }
    
      })

    sortedArray = sortedArray.reduce((a, v, i) => ({ ...a, [v[0]]: v}), {}) 

    console.log(sortedArray)

}














  


// `document.querySelector` may return null if the selector doesn't match anything.
// if (article) {
//   const text = article.textContent;
//   const wordMatchRegExp = /[^\s]+/g; // Regular expression
//   const words = text.matchAll(wordMatchRegExp);
//   // matchAll returns an iterator, convert to array to get word count
//   const wordCount = [...words].length;
//   const readingTime = Math.round(wordCount / 200);
//   const badge = document.createElement("p");
//   // Use the same styling as the publish information in an article's header
//   badge.classList.add("color-secondary-text", "type--caption");
//   badge.textContent = `⏱️ ${readingTime} minut read`;

//   // Support for API reference docs
//   const heading = article.querySelector("h1");
//   // Support for article docs with date
//   const date = article.querySelector("time")?.parentNode;

//   (date ?? heading).insertAdjacentElement("afterend", badge);
// }