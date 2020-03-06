window.onload = function() {
  let oBox = document.getElementById("d1");
  let oColor = document.getElementById("color");
  alert(oColor);
  function setColor(oColor) {
    oBox.style.backgroundColor = oColor;
  }
};
