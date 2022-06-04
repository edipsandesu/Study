"use strict"

{
    function page(){
        const m = document.getElementById("select");

        if(m.value == "akaibu/akaibu_2022_1.php"){
            location.href = m.value;
        }
    }

    document.getElementById("select").onchange = page;

    const open = document.getElementById("open");
    const menu_close = document.querySelector(".menu_close");
    const close = document.getElementById("close");

    open.addEventListener("click", function(){
        menu_close.classList.add("show");
        open.classList.add("not");
    });

    close.addEventListener("click", function(){
        menu_close.classList.remove("show");
        open.classList.remove("not");
    });
}