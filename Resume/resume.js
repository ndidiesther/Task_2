function displayContents(number){
    if(number == 1) {
        document.getElementById('button_1').style.display = "block";
        document.getElementById('btn1').style.display = "none";
        document.getElementById('showless_1').style.display = "block";
    }
    else if ( number == 2 ){
        document.getElementById('button_2').style.display = "block";
        document.getElementById('btn2').style.display = "none";
        document.getElementById('showless_2').style.display = "block";
    }
    else if ( number == 3){
        document.getElementById('button_3').style.display = "block";
        document.getElementById('btn3').style.display = "none";
        document.getElementById('showless_3').style.display = "block";
    }
}
function hideContents(number){
    if(number == 1) {
        document.getElementById('button_1').style.display = "none";
        document.getElementById('btn1').style.display = "block";
        document.getElementById('showless_1').style.display = "none";
    }
    else if ( number == 2 ){
        document.getElementById('button_2').style.display = "none";
        document.getElementById('btn2').style.display = "block";
        document.getElementById('showless_2').style.display = "none";
    }
    else if ( number == 3){
        document.getElementById('button_3').style.display = "none";
        document.getElementById('btn3').style.display = "block";
        document.getElementById('showless_3').style.display = "none";
    }
}
