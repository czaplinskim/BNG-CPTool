import { startExtensionFPCFinder } from "./scripts/background/fpc-finder.background.js";
import { startExtensionsTabler } from "./scripts/background/tabler-tools.js";

import { SYNTHRONE_BROWSER_URL, SYNTHRONE_TABLER_URL } from "./constants/constants.js";

export function main() {
    if (window.location.href.includes(SYNTHRONE_BROWSER_URL)) {
        startExtensionFPCFinder();
    } else if (window.location.href.includes(SYNTHRONE_TABLER_URL)) {
        if (typeof startExtensionsTabler === "function") {
            startExtensionsTabler();
        } else {
            console.error("startExtensionsTabler is not defined!");
        }
    } else {
        console.warn("Unknown or unsupported URL:", window.location.href);
    }
}


