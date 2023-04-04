(async () => {
    const src = chrome.runtime.getURL('app.js');
    const contentScript = await import(src);
    contentScript.main();
  })();