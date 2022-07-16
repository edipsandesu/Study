"use strict"
{

    let gamen = document.querySelector(".gamen");
    let val = Array(16);
    let ans = 0; //最後に算出する値。ここにstrから変換した数値を加えていく
    let str = ""; //数値に変換する前に一度文字列に戻す
    let str2 = ""; //数値に変換する前に一度文字列に戻す
    let kigo = ""; //クリックされた演算子を記憶する
    let flag = false; //演算子が最初にクリックされたかどうか

    //演算処理を行う関数
    function keisan(){
        if(kigo == "+"){
            ans = parseFloat(str) + parseFloat(str2);
        } else if(kigo == "-"){
            ans = parseFloat(str) - parseFloat(str2);
        } else if(kigo == "x"){
            ans = parseFloat(str) * parseFloat(str2);
        } else if(kigo == "÷"){
            ans = parseFloat(str) / parseFloat(str2);
        }
    }

    for(let i=0; i < 16; i++){
        val[i] = document.querySelectorAll(".val")[i];
    }

    for(let i=0; i< 10; i++){
        val[i].addEventListener("click",function(){
            gamen.textContent += val[i].textContent;
            if(!flag){
                str += val[i].textContent;
            } else {
                str2 += val[i].textContent;
            }
        });
    }
    
    for(let i=11; i<15; i++){
        val[i].addEventListener("click",function(){
            flag = true;
            gamen.textContent = "";
            kigo = val[i].textContent;
            if(str2 != ""){
                keisan();
                gamen.textContent = ans;
                str = ans;
                str2 = "";
                flag = false
            }
        });
    }

    val[10].addEventListener("click",function(){
        gamen.textContent = "";
        str = "";
        str2 = "";
        flag = false
    });

    val[15].addEventListener("click",function(){
        if(str != "" && str2 != ""){
            keisan();
            gamen.textContent = ans;
            str = ans;
            str2 = "";
            flag = false
        }
    });
}