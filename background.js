chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'OPEN') {
    const url = message.url.replace(/(www\.)?kinopoisk/, 'kinopoiskk');
    chrome.tabs.create({
      url,
    });
    sendResponse({
      ok: true
    });
    return true;
  }
});
