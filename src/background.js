global.browser = require('webextension-polyfill');

let singletonTabId;

browser.runtime.onInstalled.addListener(function() {
  browser.browserAction.onClicked.addListener(async function(currentTab) {
    if (!singletonTabId) {
      const url = browser.runtime.getURL('popup/popup.html');
      const tab = await browser.tabs.create({ url });
      singletonTabId = tab.id;
      return;
    }

    const singletonTab = await browser.tabs.get(singletonTabId);
    const currentWindow = await browser.windows.getCurrent();
    if (currentWindow.id !== singletonTab.windowId) {
      await browser.windows.update(singletonTab.windowId, { focused: true });
    }
    await browser.tabs.update(singletonTab.id, { active: true });
  });
});
