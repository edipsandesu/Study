"use strict"

{
    let syudan = ["グー","チョキ","パー"];
    

    function init(){
        for(let i = 0; i < 3; i++){
            document.querySelector(".box1").appendChild(createCard(syudan[i]));
        }
        for(let i = 0; i < 3; i++){
            document.querySelector(".box2").appendChild(createCard2(syudan[i]));
        }
    }

    function createCard(text){
        let card;  //グローバル変数ににcard,card_front,card_backを持っていくと後にくるカードの内容に上書きされてしまうから変数は中に入れる
        let card_front;
        let card_back;
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
            card.className = "card open";
        });
        
        return card;
    }

    function createCard2(text){
        let card;  //グローバル変数ににcard,card_front,card_backを持っていくと後にくるカードの内容に上書きされてしまうから変数は中に入れる
        let card_front;
        let card_back;
        card = document.createElement("div");
        card.className="card";

        card_front = document.createElement("div");
        card_front.className="card-back";
        card_front.textContent = text;

        card_back = document.createElement("div");
        card_back.className="card-front";
        card_back.textContent = "?";

        card.appendChild(card_front);
        card.appendChild(card_back);

        card.addEventListener("click", function(){
            card.className = "card change";
        });

        return card;
    }

    init();
}