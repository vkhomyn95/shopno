function checkType() {
    getCheckedRadioValue('slider-2');
}

function getCheckedRadioValue(name) {
    var elements = document.getElementsByName(name);

    for (var i=0, len=elements.length; i<len; ++i)
        if (elements[0].checked) {
            document.querySelector(".right-text-1").style.display = 'block';
            document.querySelector(".right-text-2").style.display = 'none';
            document.querySelector(".right-text-3").style.display = 'none';
            document.querySelector(".right-text-4").style.display = 'none';
            document.querySelector(".right-text-5").style.display = 'none';
        }
        else if (elements[1].checked){
            document.querySelector(".right-text-2").style.display = 'block';
            document.querySelector(".right-text-1").style.display = 'none';
            document.querySelector(".right-text-3").style.display = 'none';
            document.querySelector(".right-text-4").style.display = 'none';
            document.querySelector(".right-text-5").style.display = 'none';
        }
        else if (elements[2].checked){
            document.querySelector(".right-text-3").style.display = 'block';
            document.querySelector(".right-text-2").style.display = 'none';
            document.querySelector(".right-text-1").style.display = 'none';
            document.querySelector(".right-text-4").style.display = 'none';
            document.querySelector(".right-text-5").style.display = 'none';
        }
        else if (elements[3].checked){
            document.querySelector(".right-text-4").style.display = 'block';
            document.querySelector(".right-text-2").style.display = 'none';
            document.querySelector(".right-text-1").style.display = 'none';
            document.querySelector(".right-text-3").style.display = 'none';
            document.querySelector(".right-text-5").style.display = 'none';
        }
        else if (elements[4].checked){
            document.querySelector(".right-text-5").style.display = 'block';
            document.querySelector(".right-text-2").style.display = 'none';
            document.querySelector(".right-text-1").style.display = 'none';
            document.querySelector(".right-text-3").style.display = 'none';
            document.querySelector(".right-text-4").style.display = 'none';
        }
}