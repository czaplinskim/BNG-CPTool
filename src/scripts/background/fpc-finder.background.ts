export const startExtenstionFPCFinder: Function = () => {

    // Checks langauge of EANs

    const findUrlLanguage: Function = () => {

        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const language = urlParams.get('language')
    
        return language
    
    }

    // Finds products by looking for HTMLElements inside the code 

    const findProducts : Function = () => { 

        var products = document.querySelectorAll(".name-inner")

        
        // Creates an arrays of products that contains the product-page names ('EAN_FPC_name'). Ex. [05410076776382-81767173-Olay Regenerist Day Face Cream', '07702018401383-81739724-Venus Swirl Blades x6']

        var result = Object.keys(products).map((key) => products[key].innerText)

        return result

    }

    const createBagde = (badgeName : string) => {

        // Creates a new button that let to start execution of the FPCs finder

        setTimeout(() => {

            // Creates a new element

            const badge : HTMLAnchorElement = document.createElement("a")

            // Add styles and attributes to the new element 

            const badgesStyles : string | HTMLStyleElement = 'color: black; font-weight: 500; margin: 0px 5px; font-size: 13px; cursor: pointer;'
            badge.setAttribute('target', '_blank')
            badge.style.cssText = badgesStyles
            badge.textContent = badgeName

            // Injects an element into the page

            const searchTab : Element = document.querySelector(".files-browser-bar")
            searchTab.insertAdjacentElement("beforeend", badge)

            // Start 

            badge.addEventListener("click", () => { createLink(findProducts()) } )
    
        }, 5000)

    }

    // Creates a new link that will open a new page with filtered FPCs  

    const createLink = (array: Array<string>) => {

        const myUrl = new URL("https://pg.browser.synthrone.io/search");
        myUrl.searchParams.append('type', 'pdpd')

        // If choosen, appends language option to the link

        if(findUrlLanguage()) { myUrl.searchParams.append('language', findUrlLanguage()) }

        // Appends FPCs to the link

        myUrl.searchParams.append('contains', Object.values(cutNames(array)).join(' '))

        // Opens the link in the new window

        window.open(myUrl.toString(), '_blank').focus();

    }

    // Function that creates an array of arrays [[EAN1, FPC1], [EAN1, FPC2], [EAN2, FPC3], ...] by spliting names of product-page names collected before. Ex. '05410076776382-81767173-Olay Regenerist Day Face Cream' into ['5410076776382', '81767173']

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

    // Starts the functions by creating a clickable bagde and adding it to the page 

    createBagde('FPCs')

}