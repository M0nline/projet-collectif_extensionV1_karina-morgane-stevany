chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ totalTime: 0, activityStartTime: null });
});

chrome.windows.onCreated.addListener((activeInfo) => {
    chrome.storage.local.set({ activityStartTime: new Date().getTime() });
});

chrome.windows.onRemoved.addListener(() => {
    chrome.storage.local.set({ activityStartTime: null });
});
