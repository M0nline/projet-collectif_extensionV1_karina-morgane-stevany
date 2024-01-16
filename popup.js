let minutesBadges;

document.addEventListener('DOMContentLoaded', () => {
    updateCounter();
    // Mettre à jour le compteur toutes les secondes
    setInterval(updateCounter, 1000);
    // // Mettre à jour le badge toutes les minutes
    setInterval(updateBadge, 60000);
});

function updateCounter() {
    chrome.storage.local.get(['totalTime', 'activityStartTime'], (result) => {
        const totalTime = result.totalTime || 0;
        const activityStartTime = result.activityStartTime;

        if (activityStartTime) {
            const stopTime = 11;
            const currentTime = new Date().getTime();
            const elapsedSeconds = (currentTime - activityStartTime) / 1000;
            const totalSeconds = totalTime + elapsedSeconds;
            console.log("total : ", totalSeconds)
            // if (totalSeconds > stopTime) {
            //     console.log("stop");
            //     affiche popup.html
            // } else {
            const counterElement = document.getElementById('counter');
            counterElement.textContent = formatTime(totalSeconds);
            // }
        }
    });
}


function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    minutesBadges = minutes;
    const seconds = Math.floor(totalSeconds % 60);
    const timing = `${minutes} minutes and ${seconds} seconds`;
    return timing;
}

const updateBadge = () => {
    console.log(minutesBadges);
    let minutesString = String(minutesBadges);
    chrome.action.setBadgeText({ text: minutesString });
}

