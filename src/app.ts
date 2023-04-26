import { startExtenstionFPCFinder } from "./scripts/background/fpc-finder.background.js"

export function main() {

    if(window.location.href.indexOf("pdpd") != -1){ 
      startExtenstionFPCFinder();
    } else if (window.location.href.indexOf("") != -1){
      
    }
    
  }

