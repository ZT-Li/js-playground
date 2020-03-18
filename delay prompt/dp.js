window.onload = function () {
    let oIcon = document.getElementById("icon");
    let oInfo = document.getElementById("info");
    oIcon.onmouseover = function () {
        oInfo.style.visibility = "visible";
    }
    oIcon.onmouseleave = function () {
        oInfo.style.visibility = "hidden";
    }
}