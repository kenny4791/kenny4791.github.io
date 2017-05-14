function widthset(){
	document.getElementById('titlebackground').style.width = '100%';
	document.getElementById('titlebackground').style.height = '600px';
}

function menuhide(){
    document.getElementById("menu").classList.toggle("show");
}

function unlock1(){
	document.getElementById("image1").src="unlocked.jpg";
	document.getElementById("chap1").display="block";
	document.getElementById("chap2").display="none";
	document.getElementById("chap3").display="none";
	document.getElementById("chap4").display="none";
	document.getElementById("chap5").display="none";
}

function unlock2(){
	document.getElementById("image2").src="unlocked.jpg";
	document.getElementById("chap1").display="none";
	document.getElementById("chap2").display="block";
	document.getElementById("chap3").display="none";
	document.getElementById("chap4").display="none";
	document.getElementById("chap5").display="none";
}

function unlock3(){
	document.getElementById("image3").src="unlocked.jpg";
	document.getElementById("chap1").display="none";
	document.getElementById("chap2").display="none";
	document.getElementById("chap3").display="block";
	document.getElementById("chap4").display="none";
	document.getElementById("chap5").display="none";
}

function unlock4(){
	document.getElementById("image4").src="unlocked.jpg";
	document.getElementById("chap1").display="none";
	document.getElementById("chap2").display="none";
	document.getElementById("chap3").display="none";
	document.getElementById("chap4").display="block";
	document.getElementById("chap5").display="none";
}

function unlock5(){
	document.getElementById("image5").src="unlocked.jpg";
	document.getElementById("chap1").display="none";
	document.getElementById("chap2").display="none";
	document.getElementById("chap3").display="none";
	document.getElementById("chap4").display="none";
	document.getElementById("chap5").display="block";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("menuholder").style.position = "fixed";
        document.getElementById("menuholder").style.top = "0";
    } else {
        document.getElementById("menuholder").style.position = "static";
    }
}