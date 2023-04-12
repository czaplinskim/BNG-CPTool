
export const startExtenstionSyndigoDownloader = () => {

    const iframeLink: string = document.querySelector("iframe").src;

    const downloadButton: HTMLButtonElement = document.createElement("button");
    downloadButton.setAttribute("class", "cxh-copy-url");
    downloadButton.textContent = "Download Images";

    const downloadLink: HTMLElement = document.createElement("a");
    downloadLink.setAttribute("href", iframeLink)
    downloadLink.setAttribute("target", "_blank")

    downloadLink.appendChild(downloadButton)

    const buttonContainer: any = document.querySelector(".cxh-flex")

    buttonContainer.insertAdjacentElement("afterend", downloadLink)

}




if (window.location.href.indexOf("https://content.syndigo.com/content/") != -1){

const createImage = (link) => {

    let img = document.createElement("img")
    img.setAttribute("src", link)
    img.setAttribute('crossorigin', 'anonymous')

    console.log(img)

    let canvas: HTMLCanvasElement = document.createElement("canvas")
    canvas.width = img.width
    canvas.height = img.height

    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    console.log(ctx)

    let dataURL = canvas.toDataURL("image/png");

    console.log(dataURL)
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

let apiWidgets;

let imgArray = []
const assetsDomain = 'https://content.syndigo.com/asset/';
    
        // Defining async function
        async function getapi(url) {

            // Storing response
            const response = await fetch(url);


            // Storing data in form of JSON
            var data = await response.json();
            apiWidgets = data.experiences['power-page'].widgets
                        
            Object.keys(apiWidgets).forEach((key, ele) => {

                if(apiWidgets[key].widgetType === 'ComparisonTable'){

                } else if(apiWidgets[key].widgetType === 'Carousel') {

                    // console.log(apiWidgets[key].items) 

                    let tempItemsArray = apiWidgets[key].items;

                    tempItemsArray.forEach(item => {
                        // console.log(item)
                        // console.log(item.asset.url)

                        const link = item.asset.url.replace("{0}", item.asset.originalWidth);

                        imgArray.push(createImage(link))
                        // console.log(link)

                    })

                } else if(apiWidgets[key].widgetType === "FeatureSet") {

                    // console.log(apiWidgets[key].items) 

                    let tempItemsArray = apiWidgets[key].items;

                    tempItemsArray.forEach(item => {
                        item.features.forEach(item => {
                            
                            const link = item.asset.url.replace("{0}", item.asset.originalWidth);
                            // console.log(link)
                            imgArray.push(createImage(link))

                        })
                            
                    })

                }


            })



        }


        setTimeout(() => {
        
            const iframe: any = document.getElementsByTagName("syndigo-powerpage");
            const iframeLink: any = iframe[0].getAttribute("ecjsonurl");
            getapi(iframeLink);

            console.log(imgArray)
            
        }, 5000)
        

    
    

}
