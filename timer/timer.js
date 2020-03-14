window.onload = function () {
    let oBox = document.getElementById("d1");
    function colorChange() {
        oBox.style.backgroundColor = "orange";
    }
    function colorChange2() {
        oBox.style.backgroundColor = "pink";
    }
    setInterval(colorChange, 750);
    setInterval(colorChange2, 1000);

    //to change the date from number into string
    function toStr(n) {
        if (n < 10)
            return "0" + n;
        else
            return "" + n;
    }

    //to match the numbers of the time with the pictures that needed to be display
    function run() {
        let oDate = new Date()
        let sTime = toStr(oDate.getHours()) + toStr(oDate.getMinutes()) + toStr(oDate.getSeconds());
        let oImg = document.getElementsByTagName("img");
        for (let i = 0; i < sTime.length; i++) {
            oImg[i].src = "./num/" + sTime[i] + ".png";
        }
    }

    //refresh the function every 0.5 sec
    setInterval(run, 500)
    run();
}