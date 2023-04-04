
export const startExtenstionSyndigoDownloader = () => {

    const downloadButton: HTMLButtonElement = document.createElement("button");
    downloadButton.setAttribute("class", "cxh-copy-url")

    downloadButton.textContent = "Download Images"
    const buttonContainer: any = document.querySelector(".cxh-flex")

    buttonContainer.insertAdjacentElement("afterend", downloadButton)

}

const createImage = (img: HTMLImageElement) => {

    let canvas: HTMLCanvasElement = document.createElement("canvas")
    canvas.width = img.width
    canvas.height = img.height

    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    let dataURL: string = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

}

const iframe = document.querySelector("iframe");
const container = iframe.querySelector(".syndi_powerpage");


console.log(iframe)
console.log(container)

const images = iframe.querySelectorAll("img");

console.log(images)