// import { startExtenstionFPCFinder } from "./scripts/background/fpc-finder.background.js"

import { startExtensionsTabler } from "./scripts/background/tabler-tools.js"



export function main() {

  // Executes a code only when on the relevant domain

    if(window.location.href.indexOf("browser.synthrone.io") != -1){ 
      // startExtenstionFPCFinder();
    } else if(window.location.href.indexOf("tabler.synthrone.io") != -1) {
    
      startExtensionsTabler();
    
    }

}

