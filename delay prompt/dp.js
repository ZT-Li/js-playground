window.onload = function () {
  let oIcon = document.getElementById("icon");
  let oInfo = document.getElementById("info");
  let timer = null;
  let timer2 = null;

  //show the info tab when mouse over icon and info tab
  oIcon.onmouseover = oInfo.onmouseover = function () {
    clearTimeout(timer);
    clearInterval(timer2);
    oInfo.style.opacity = 1;
    oInfo.style.display = "block";
  };

  //close the info tab after 1 sec the mouse leave
  oIcon.onmouseout = oInfo.onmouseout = function () {
    let opc = 1;
    timer = setTimeout(function () {
      oInfo.style.display = "none";
    }, 1000);
    timer2 = setInterval(function () {
      opc -= 0.01;
      oInfo.style.opacity = opc;
    }, 10);
  };
};
