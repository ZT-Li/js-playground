window.onload = function () {
    let oIcon = document.getElementById("icon");
    let oInfo = document.getElementById("info");

    //show the info tab
    oIcon.onmouseover = function () {
        oInfo.style.visibility = "visible";
    }

    //hide the info tab
    oIcon.onmouseleave = function () {
        oInfo.style.visibility = "hidden";
    }
}