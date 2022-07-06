"use strict"
{

    let gamen = document.querySelector(".gamen");
    let val = Array(10);

    for(let i=0; i < 10; i++){
        val[i] = document.querySelectorAll(".val")[i];
    }

    for(let i=0; i< 10; i++){
        val[i].addEventListener("click",function(){
            if(val[i].textContent == "0"){
                gamen.textContent += 0;
            } else{
                gamen.textContent += (i + 1);
            }
        });
    }
}