window.onload = function () {
    let oBox = document.getElementById("div1");
    function colorChange() {
        oBox.style.backgroundColor = "orange";
    }
    function colorChange2() {
        oBox.style.backgroundColor = "pink";
    }
    setTimeout(setInterval(colorChange, 1000), 500);
    setInterval(colorChange2, 1000);
}