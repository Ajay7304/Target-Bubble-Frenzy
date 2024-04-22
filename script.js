var timer = 60;
var score = 0;
var hitRn = 0;


function getNewHit(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitRn
}

function makeBubble(){
    var clutter = "";
    for(var i=1;i<=112;i++){
        var rn = Math.floor(Math.random()*10)
         clutter += `<div class="bubble">${rn}</div>`
     }
     
     document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerVal = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer
        }
        else{
            clearInterval(timerVal)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`;
            
        }
    },1000)
}

function increaseScore(){
    score += 10 ;
    document.querySelector("#score").textContent = score
}

function getClickedNo(){
    var pbtm = document.querySelector("#pbtm");
    pbtm.addEventListener("click",function(dets){
        var clickedNo = Number(dets.target.textContent);
        if(clickedNo === hitRn){
            increaseScore();
            getNewHit();
            makeBubble();
        }
    })
}

makeBubble();
runTimer();
getNewHit();
getClickedNo();