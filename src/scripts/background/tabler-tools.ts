const createBadge = (badgeName: string): HTMLButtonElement => {
    const badge = document.createElement('button');
    const badgesStyles = 'border: none; color: black; font-weight: 500; margin: 0px 5px; font-size: 15px; cursor: pointer;';
    
    badge.setAttribute('target', '_blank');
    badge.style.cssText = badgesStyles;
    badge.textContent = badgeName;

    badge.addEventListener('click', copyTable);

    return badge;
};

const appendBadge = () => {
    setTimeout(() => {
        const badgeAreaSeparator = document.createElement('div');
        badgeAreaSeparator.className = 'btn-separator';

        const menuBar = document.querySelector('.topbar-actions') as Element;

        menuBar.insertAdjacentElement('beforeend', createBadge('FPC'));
        menuBar.insertAdjacentElement('beforeend', createBadge('SoS'));
        menuBar.insertAdjacentElement('beforeend', createBadge('NSoS'));
        menuBar.insertAdjacentElement('beforeend', badgeAreaSeparator);
    }, 5000);
};

const cutNames = (array: string[]): Array<number[]> => {
    const productsInfoArray: Array<number[]> = [];

    array.forEach((product) => {
        const [tempEan, tempFpc] = product.split('-').map(Number);
        const tempArr = [tempEan, tempFpc];
        productsInfoArray.push(tempArr);
    });

    return productsInfoArray;
};

const copyTable = () => {
    const productsTable = document.querySelector('.htCore') as HTMLTableElement;
    const productsRows = productsTable.querySelector('tbody') as HTMLTableSectionElement;
    const productRow = productsRows.querySelectorAll('tr');

    const productsArray: Array<number[] | string> = [];

    productRow.forEach((e) => {
        if (e.childNodes.length > 10) {
            const FPC = e.childNodes[2].firstChild?.textContent;
            if (FPC) {
                productsArray.push(FPC);
            }
        }

        const startOfShip = e.childNodes[17].childNodes[1];

        if (e.querySelector('th div span')?.textContent && parseInt(e.querySelector('th div span').textContent || '0', 10) >= 3) {
            productsArray.push(startOfShip?.textContent || '');
        }
    });
};

export const startExtensionsTabler = () => {
    appendBadge();
};
