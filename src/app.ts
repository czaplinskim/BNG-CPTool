import { startExtenstionFPCFinder } from "./scripts/background/fpc-finder.background.js"

export function main() {

  // Executes a code only when on the relevant domain

    if(window.location.href.indexOf("browser.synthrone.io") != -1){ 
      startExtenstionFPCFinder();
    } 

}

