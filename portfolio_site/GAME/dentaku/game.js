"use strict"
{

    let gamen = document.querySelector(".gamen");
    let val = Array(16);
    let ans = 0; //最後に算出する値。ここにstrから変換した数値を加えていく
    let str = ""; //数値に変換する前に一度文字列に戻す
    let kigo = ""; //演算記号の種類を記憶する

    //最初の数字かどうかの判定
    let flag_hiku = false; 
    let flag_kake = false; 
    let flag_wari= false; 

    //数値か記号か判定する関数。数値じゃなければfalseを返す。
    function hantei(val){
        if(val ==  "+" || val == "-" || val == "x" || val == "÷"){
            console.log(val);
            kigo = val;
            return false;
        }
        
        return true;
    }

    //演算処理を行う関数
    function keisan(){
        if(kigo == "+"){
            ans += parseFloat(str);
        } else if(kigo == "-"){
            if(flag_hiku == false && ans == 0){
                ans+=parseFloat(str);
                flag_hiku = true;
            } else{
                ans -= parseFloat(str);
            }
        } else if(kigo == "x"){
            if(flag_kake == false && ans == 0){
                ans+=parseFloat(str);
                flag_kake = true;
            } else{
                ans *= parseFloat(str);
            }
        } else if(kigo == "÷"){
            if(flag_wari == false && ans == 0){
                ans+=parseFloat(str);
                flag_wari = true;
            } else{
                ans /= parseFloat(str);
            }
        }
        str="";
    }

    for(let i=0; i < 16; i++){
        val[i] = document.querySelectorAll(".val")[i];
    }

    for(let i=0; i< 10; i++){
        val[i].addEventListener("click",function(){
                gamen.textContent += val[i].textContent;
        });
    }
    
    for(let i=11; i<15; i++){
        val[i].addEventListener("click",function(){
            gamen.textContent += val[i].textContent;
        });
    }

    val[10].addEventListener("click",function(){
        gamen.textContent = "";
    });

    val[15].addEventListener("click",function(){
        let len = gamen.textContent.length;
        let arr = [...gamen.textContent];  //gamenのテキストコンテントを配列arrに変換

        /*演算記号がでてくるところまで1つ1つ調べていき、見つかったらそこまでをいったん数値に変換する。
        そして演算記号の次の添え字から再び同様の処理を最後まで行う*/
        let k = 0;
        for(let i=0; i<len; i++){
            if(i==len-1){
                for(let j=k; j < len; j++){
                    str+=arr[j];
                }
                keisan();
            } else if(!hantei(arr[i+1])){
                for(let j=k; j<i+1; j++){
                    str+=arr[j];
                }
                //演算処理
                keisan();
                k = i+2;
                i++;
            }
        }
        gamen.textContent = ans.toString(10);
        str = "";
    });

}