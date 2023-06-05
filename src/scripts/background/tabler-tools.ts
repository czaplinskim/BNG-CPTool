const createBagde: Function = (bagdeName : string) => {

    const badge: HTMLButtonElement = document.createElement('button')

    const badgesStyles: string | HTMLStyleElement = 'border: none; color: black; font-weight: 500; margin: 0px 5px; font-size: 15px; cursor: pointer;'
    badge.setAttribute('target', '_blank')
    badge.style.cssText = badgesStyles
    badge.textContent  = bagdeName
    
    return badge 

}

const appendBagde: Function = () => {

    setTimeout(() => {

        const badgeAreaSeparetor: HTMLDivElement = document.createElement('div')
        badgeAreaSeparetor.className = 'btn-separator'

        const menuBar: Element = document.querySelector('.topbar-actions')

        menuBar.insertAdjacentElement('beforeend', createBagde('FPC'))
        menuBar.insertAdjacentElement('beforeend', createBagde('SoS'))
        menuBar.insertAdjacentElement('beforeend', createBagde('NSoS'))
        menuBar.insertAdjacentElement('beforeend', badgeAreaSeparetor)


    }, 5000)
    
}

const cutNames: Function = (array) => {

    let productsInfoArray = []

        array.forEach((product) => {

            let tempEan = Number(product.split('-')[0])
            let tempFpc = Number(product.split('-')[1])
            let tempArr = [tempEan, tempFpc]
        
            productsInfoArray.push(tempArr)
        
        })

    return productsInfoArray

}


const copyTable: Function = () => {

    setTimeout(() => {

        const productsTable: HTMLTableElement = document.querySelector('.htCore')
        const productsRows: HTMLTableSectionElement = document.querySelector('tbody')
        const productRow = document.querySelectorAll('tr')

        console.log(productRow)

        const productsArray: Array<String | Array<String>> = []

       


        productRow.forEach((e, i) => {

            // const tempArray: Array<String> = []

            // console.log(e.childNodes[2].firstChild.textContent)

            if(e.childNodes.length > 10) {
                const FPC = e.childNodes[2].firstChild.textContent
                productsArray.push(FPC)
            }
            
            // const StartOfShip = e.childNodes[17].childNodes[1]
            console.log(i)
            console.log(e)

            console.log(e.querySelector("th div span"))

            
        })

        // console.log(productsArray)



    }, 10000)
}

export const startExtensionsTabler: Function = () => {

    appendBagde();
    copyTable();

}