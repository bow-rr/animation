
window.onload = function(){
let pos = 0;
//get box element
let box = document.getElementById('box');
let container = document.getElementById('container');
//set interval function
let t = setInterval(move, 10);

//define move function
 function move(){
    if (pos >=350){
        clearInterval(t);
    }else{
    pos +=1;
    box.style.left = pos+'px';
    container.style.left = pos+'px';
    }
 }
};
