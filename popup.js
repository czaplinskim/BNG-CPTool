// (function () {
//     var otherWindows = chrome.extension.getBackgroundPage();
//     console.log(otherWindows.backgroundFunction()); 
// })();

//   function reddenPage() {
//     document.body.style.backgroundColor = 'red';
//     console.log("Hello Background")
//   }

  
//   chrome.action.onClicked.addListener((tab) => {
//     if (!tab.url.includes('chrome://')) {
//       chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: reddenPage
//       });
//     }
//   });
