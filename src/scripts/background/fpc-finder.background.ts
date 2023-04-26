// Checks langauge of EANS we are working on

const findUrlLanguage: Function = () => {

    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const language = urlParams.get('language')
    console.log(language)
    return language

}



export const startExtenstionFPCFinder: Function = () => {


    findUrlLanguage() 

    const findProducts : Function = () => { 

        var products = document.querySelectorAll(".name-inner")
        var result = Object.keys(products).map((key) => products[key].innerText)
        
        console.log(result)

        return result

    }


    const createBagde = (badgeName : string) => {

        setTimeout(() => {

            const badge : HTMLAnchorElement = document.createElement("a")
            const badgesStyles : string | HTMLStyleElement = 'color: black; font-weight: 500; margin: 0px 5px; font-size: 13px; cursor: pointer;'
            badge.setAttribute('target', '_blank')
            badge.style.cssText = badgesStyles
            badge.textContent = badgeName
            const searchTab : Element = document.querySelector(".files-browser-bar")
            searchTab.insertAdjacentElement("beforeend", badge)
            badge.addEventListener("click", () => { createLink(findProducts()) } )
    
        }, 5000)

    }

    createBagde('FPCs')

    // Creates a new link that will open a new page with filtered FPCs  

    const createLink = (array: Array<string>) => {

        const myUrl = new URL("https://pg.browser.synthrone.io/search");
        myUrl.searchParams.append('type', 'pdpd')
        myUrl.searchParams.append('language', findUrlLanguage())
        myUrl.searchParams.append('contains', Object.values(cutNames(array)).join(' '))

        window.open(myUrl.toString(), '_blank').focus();

    }

    // Function that creates an array of arrays [[EAN1, FPC1], [EAN1, FPC2], [EAN2, FPC3], ...]

    const cutNames = (array: Array<string>) => {

        let productsInfoArray = []

        array.forEach((product) => {

            let tempEan = Number(product.split('-')[0])
            let tempFpc = Number(product.split('-')[1])
            let tempArr = [tempEan, tempFpc]
        
            productsInfoArray.push(tempArr)
        
        })

        // Sort arrays by higher FPCs

        productsInfoArray = productsInfoArray.sort((a, b) => { return a[1] - b[1] })

        // Deletes smaller FPCs of doubled EANs

        productsInfoArray = productsInfoArray.reduce((a, v, i) => ({ ...a, [v[0]]: v[1]}), {}) 

        return productsInfoArray

    }

}
