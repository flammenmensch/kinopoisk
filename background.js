chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'OPEN') {
        chrome.tabs.create({
            url: message.url,
        });
    }
});