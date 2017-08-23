var index=0;
var leftBtn=document.getElementById("carousel_leftBtn");
var rightBtn=document.getElementById("carousel_rightBtn");
var imageLi=document.getElementById("imageUl").getElementsByTagName("li");
var circle=document.getElementById("imageOl").getElementsByTagName("li");
var i;
(function(i) {
    rightBtn.onclick = function () {
        index++;
        if (index >= imageLi.length) {
            index = 0
        }
        changeImg()
    }
    leftBtn.onclick = function () {
        index--;
        if (index < 0) {
            index = imageLi.length - 1;
        }
        changeImg()
    }
    for (var i = 0; i < circle.length; i++) {
        (function (i) {
            circle[i].onmouseover = function () {
                index = i;
                changeImg()
            }
        })(i)
    }

    function changeImg() {
        for (var i = 0; i < imageLi.length; i++) {
            imageLi[i].className = "";
        }
        imageLi[index].className = "current"
        for (var i = 0; i < circle.length; i++) {
            circle[i].className = "";
        }
        circle[index].className = "current"
    }
})(i)