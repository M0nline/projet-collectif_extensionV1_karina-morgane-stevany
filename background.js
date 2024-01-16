chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ totalTime: 0, activityStartTime: null });
});

// est-ce que ça ne serait pas plutôt un chrome.runtime.onStartup  ? 
//(event déclenché lorsque Chrome démarre plutôt que qd on ouvre une fenêtre)
chrome.windows.onCreated.addListener((activeInfo) => {
    chrome.storage.local.set({ activityStartTime: new Date().getTime() });
    chrome.action.setBadgeBackgroundColor({ color: [134, 206, 233, 255] });
    chrome.action.setBadgeText({ text: '0' });
});

chrome.windows.onRemoved.addListener(() => {
    chrome.storage.local.set({ activityStartTime: null });
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'closeBrowser') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.remove(tabs[0].id);
        });
    }
});
