var isdisplayed = false;
var pallets = document.getElementsByClassName('pallets')[0];
var colors = document.getElementsByClassName('color');
document.querySelector('.icon i').addEventListener('click',function(){
    if(isdisplayed == false){
        isdisplayed = true;
        pallets.style.visibility= "visible";
    }
    else{

        pallets.style.visibility= "hidden";
        isdisplayed = false;

    }

});

var fav = document.getElementsByClassName('fav-note');

for(let i of fav){

    i.addEventListener('click',function(){

        i.style.color = "yellow";
    
    });

}

