"use strict"

{
    let box;
    let card;
    let card_front;
    let card_back;
    let syudan = ["グー","チョキ","パー"];
    

    function init(){
        for(let i = 0; i < 3; i++){
            document.querySelector(".box1").appendChild(createCard(syudan[i]));
        }
    }

    function createCard(text){
        card = document.createElement("div");
        card.className="card";

        card_front = document.createElement("div");
        card_front.className="card-front";
        card_front.textContent = text;

        card_back = document.createElement("div");
        card_back.className="card-back";
        card_back.textContent = "?";

        card.appendChild(card_front);
        card.appendChild(card_back);

        card.addEventListener("click", function(){
            console.log("a");
            card.className = "card open";
        });

        return card;
    }

    init();
}