function updatename(playerId){
    var name=prompt("Enter the name");
    if(name==null || name.trim()==""){
        if(playerId==1){
            document.querySelector("#player-1").textContent = "Player 1";
        }
        else{
            document.querySelector("#player-2").textContent = "Player 2";
        }
    }
    else{
        if(playerId==1){
            document.querySelector("#player-1").textContent = name;
        }
        else{
            document.querySelector("#player-2").textContent = name;
        }
    }
}



function rollTheDice(){
    var d1=Math.floor(Math.random()*6)+1;
    var d2=Math.floor(Math.random()*6)+1;
    document.querySelector("#player-1-dice").src="./images/dice"+d1+".jpeg";
    document.querySelector("#player-2-dice").src="./images/dice"+d2+".jpeg";
    if(d1>d2){
        var player1=document.querySelector("#player-1").textContent;
        document.querySelector("#winner").textContent=player1+" won!";
    }
    else if(d1<d2){
        var player2=document.querySelector("#player-2").textContent;
        document.querySelector("#winner").textContent=player2+" won!";
    }
    else{
        document.querySelector("#winner").textContent="Draw!";
    }
}