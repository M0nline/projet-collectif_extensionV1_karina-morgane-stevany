let minutesBadges;

document.addEventListener('DOMContentLoaded', () => {
    updateCounter();
    // Mettre à jour le compteur toutes les secondes
    setInterval(updateCounter, 1000);
    // Mettre à jour le badge toutes les minutes
    setInterval(updateBadge, 1000);
});

// on update le counter
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
            const counterElement = document.getElementById('counter');
            counterElement.textContent = formatTime(totalSeconds);
        }
    });
}

// on affiche le compteur
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    minutesBadges = minutes;
    const seconds = Math.floor(totalSeconds % 60);
    const timing = `${minutes} minutes and ${seconds} seconds`;
    return timing;
}

// on update l'affichage du text sur le badge
const updateBadge = () => {
    console.log(minutesBadges);
    let minutesString = String(minutesBadges);
    chrome.action.setBadgeText({ text: minutesString });
}

// bouton reset de la popup
document.addEventListener('DOMContentLoaded', () => {
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', reset);
});

// on reinitialise les valeurs du timer 
function reset() {
    chrome.storage.local.set({ 'totalTime': 0, 'activityStartTime': new Date().getTime() }, () => {
        console.log('Reset time.');
        updateCounter();
    });
}