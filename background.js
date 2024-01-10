chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ totalTime: 0, activityStartTime: null });
});

chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.storage.local.get(['activityStartTime'], (result) => {
        const activityStartTime = result.activityStartTime;
        if (!activityStartTime) {
            chrome.storage.local.set({ activityStartTime: new Date().getTime() });
        }
    });
});

chrome.tabs.onRemoved.addListener(() => {
    chrome.storage.local.set({ activityStartTime: null });
});


