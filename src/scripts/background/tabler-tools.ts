export const startExtensionsTabler: Function = () => {

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

    appendBagde();




}