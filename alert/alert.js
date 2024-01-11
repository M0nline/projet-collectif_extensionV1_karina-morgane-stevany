document.getElementById("open-popup-btn").addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.remove("active");
});

function showPopup() {
    document.getElementById("blur-container").classList.add("blurred");
    document.getElementById("popup").style.display = "block";

}
function closePopup() {
    document.getElementById("blur-container").classList.remove("blurred");
    document.getElementById("popup").style.display = "none";

}

/* var blur=document.getElementById("blur");
    blur.classList.toggle("active");*/