window.onload = function () {
    let oIcon = document.getElementById("icon");
    let oInfo = document.getElementById("info");
    let timer = null;

    //show the info tab when mouse over icon
    oIcon.onmouseover = function () {
        clearTimeout(timer);
        oInfo.style.display = "block";
    }

    //close the info tab after 1 sec the mouse leave
    oIcon.onmouseout = oInfo.onmouseout = function () {
        timer = setTimeout(function () {
            oInfo.style.display = "none";
        }, 1000);
    }

    //show the info tab when mouse over info
    oInfo.onmouseover = function () {
        clearTimeout(timer);
        oInfo.style.display = "block";
    }

    //close the info tab after 1 sec the mouse leave
    oInfo.onmouseout = function () {
        timer = setTimeout(function () {
            oInfo.style.display = "none";
        }, 1000);
    }
}