window.onload = function () {
    let oIcon = document.getElementById("icon");
    let oInfo = document.getElementById("info");
    let timer = null;
    let opc = 1;

    //show the info tab when mouse over icon and info tab
    oIcon.onmouseover = oInfo.onmouseover = function () {
        //clearTimeout(timer);
        clearInterval(timer);
        opc = 1;
        oInfo.style.opacity = opc;
        oInfo.style.display = "block";
    }

    //close the info tab after 1 sec the mouse leave
    oIcon.onmouseout = oInfo.onmouseout = function () {
        // timer = setTimeout(function () {
        //     oInfo.style.display = "none";
        // }, 1000);
        if (opc == 0)
            oInfo.style.display = "none";
        else {
            timer = setInterval(function () {
                opc -= 0.01;
                oInfo.style.opacity = opc;
            }, 10)
        }
    }
}