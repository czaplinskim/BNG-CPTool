
const findUrlLanguage = () => {

    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const language = urlParams.get('language')
    console.log(language)
    return language

}

export const startExtenstionFPCFinder = () => {


    findUrlLanguage() 

    const findProducts = () => { 

        var products = document.querySelectorAll(".name-inner")
        var result = Object.keys(products).map((key) => products[key].innerText)
        
        console.log(result)

        return result

    }


    const createBagde = (badgeName) => {

        setTimeout(() => {

            const badge = document.createElement("a")
            const badgesStyles = 'color: black; font-weight: 500; margin: 0px 5px; font-size: 13px; cursor: pointer;'
    
            badge.setAttribute('target', '_blank')
            badge.style.cssText = badgesStyles
            badge.textContent = badgeName
            const searchTab = document.querySelector(".files-browser-bar")
            searchTab.insertAdjacentElement("beforeend", badge)
            badge.addEventListener("click", () => { createLink(findProducts()) } )
    
        }, 5000)

    }

    createBagde('FPCs')
    const createLink = (array) => {

        const myUrl = new URL("https://pg.browser.synthrone.io/search");
        myUrl.searchParams.append('type', 'pdpd')
        myUrl.searchParams.append('language', findUrlLanguage())
        myUrl.searchParams.append('contains', Object.values(cutNames(array)).join(' '))

        window.open(myUrl.toString(), '_blank').focus();

    }

    

    const cutNames = (array) => {

        let productsInfoArray = []

        array.forEach((product, index) => {

            let tempEan = Number(product.split('-')[0])
            let tempFpc = Number(product.split('-')[1])
            let tempArr = [tempEan, tempFpc]
        
            productsInfoArray.push(tempArr)
        
        })

        productsInfoArray = productsInfoArray.sort((a, b) => { return a[1] - b[1] })
        productsInfoArray = productsInfoArray.reduce((a, v, i) => ({ ...a, [v[0]]: v[1]}), {}) 

        return productsInfoArray

    }

}
