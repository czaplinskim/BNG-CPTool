import { startExtenstionFPCFinder } from "./scripts/background/fpc-finder.background.js"
import { startExtenstionSyndigoDownloader } from "./scripts/background/syndigo-downloader.background.js";

export function main() {

    if(window.location.href.indexOf("pdpd") != -1){ 
      startExtenstionFPCFinder();
    } else if (window.location.href.indexOf("https://platform.syndigo.com/enhanced-content/previews/") != -1){
      startExtenstionSyndigoDownloader();
    }
    
  }

