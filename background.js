chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ totalTime: 0, activityStartTime: null });
});

chrome.windows.onCreated.addListener((activeInfo) => {
    chrome.storage.local.set({ activityStartTime: new Date().getTime() });
    chrome.action.setBadgeBackgroundColor({ color: [134, 206, 233, 255] });
    chrome.action.setBadgeText({ text: '0' });
});

chrome.windows.onRemoved.addListener(() => {
    chrome.storage.local.set({ activityStartTime: null });
})