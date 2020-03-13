function setColor() {
  let oBox = document.getElementById("d1");
  let oColor = document.getElementById('color').value;
  oBox.style.backgroundColor = oColor;
  if (oColor != oBox.style.backgroundColor)
    alert("color invalid");
}

