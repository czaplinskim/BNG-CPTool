import { startExtenstionFPCFinder } from "./scripts/background/fpc-finder.background.js"
import { startExtenstionSyndigoDownloader } from "./scripts/background/syndigo-downloader.background.js";

export function main() {

    if(window.location.href.indexOf("pdpd") != -1){ 
      startExtenstionFPCFinder();
    } else if (window.location.href.indexOf("enhanced-content") != -1){
      startExtenstionSyndigoDownloader();
    }
    
  }

