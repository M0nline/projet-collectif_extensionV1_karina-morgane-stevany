// on stocke le counter nul
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ totalTime: 0, activityStartTime: null });
});

// on lance le timer et on initialise le badge
chrome.windows.onCreated.addListener((activeInfo) => {
    chrome.storage.local.set({ activityStartTime: new Date().getTime() });
    chrome.action.setBadgeBackgroundColor({ color: [134, 206, 233, 255] });
    chrome.action.setBadgeText({ text: '0' });
});

// on clear à la fermeture de la fenêtre
chrome.windows.onRemoved.addListener(() => {
    chrome.storage.local.set({ activityStartTime: null });
})

// on ferme le nav à la réception du message
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'closeBrowser') {
        chrome.tabs.query({ currentWindow: true }, function (tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.remove(tabs[i].id);
            }
        });
    }
});