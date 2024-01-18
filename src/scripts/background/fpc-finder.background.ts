export const startExtensionFPCFinder = () => {
    const observeDOM = (targetNode: Node, callback: MutationCallback) => {
        const config = { childList: true, subtree: true };

        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);

        return observer;
    };

    const findUrlLanguage = () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const language = urlParams.get('language');
        return language;
    };

    const findProducts = () => {
        const products = document.querySelectorAll(".name-inner");
        const result = Array.from(products).map((product) => product.innerText);
        return result;
    };

    const createBadge = (badgeName: string) => {
        const badge = document.createElement("a");
        const badgesStyles = 'color: black; font-weight: 500; margin: 0px 5px; font-size: 13px; cursor: pointer;';
        badge.setAttribute('target', '_blank');
        badge.style.cssText = badgesStyles;
        badge.textContent = badgeName;

        const searchTab = document.querySelector(".files-browser-bar");
        searchTab?.insertAdjacentElement("beforeend", badge);

        const createLinkAndDetachObserver = () => {
            createLink(findProducts());
            observer.disconnect();
        };

        const observer = observeDOM(searchTab, (mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    createLinkAndDetachObserver();
                    break;
                }
            }
        });

        badge.addEventListener("click", createLinkAndDetachObserver);
    };

    const createLink = (array: Array<string>) => {
        const myUrl = new URL("https://pg.browser.synthrone.io/search");
        myUrl.searchParams.append('type', 'pdpd');

        const language = findUrlLanguage();
        if (language) {
            myUrl.searchParams.append('language', language);
        }

        myUrl.searchParams.append('contains', Object.values(cutNames(array)).join(' '));

        window.open(myUrl.toString(), '_blank').focus();
    };

    const cutNames = (array: Array<string>) => {
        let productsInfoArray: Record<number, number> = {};

        array.forEach((product) => {
            const [tempEan, tempFpc] = product.split('-').map(Number);
            productsInfoArray[tempEan] = tempFpc;
        });

        return productsInfoArray;
    };

    createBadge('FPCs');
};
