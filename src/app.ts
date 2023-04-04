import { startExtenstion } from "./scripts/background/fpc-finder.background.js"

export function main() {

    if(window.location.href.indexOf("pdpd") != -1){ startExtenstion() }
    
  }

