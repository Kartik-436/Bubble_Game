var score = 0;
var timer = 60;
var hitrn;


function makeBubble(){
    var clutter = "";

    for (let i = 1; i <= 140; i++) 
    {
        var rn = Math.ceil(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    var pbtm = document.querySelector("#pbtm");
    pbtm.innerHTML = clutter;
}


function runTimer(){
    var t = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVl").textContent = timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER ! </h1>`;
            document.querySelector("#hitVal").textContent = '';
            clearInterval(t);
        }
    }, 1000);
}


function newHit(){
    hitrn = Math.ceil(Math.random() * 10);
    var hit = document.querySelector("#hitVal");
    hit.textContent = hitrn;
}


function increaseScore(){
    score += 10;
    var sc = document.querySelector("#scoreVal");
    sc.textContent = score; 
}


function decreaseScore(){
    score -= 5;

    if (score < 0) {
        score = 0;
    }

    document.querySelector("#scoreVal").textContent = score;
}


makeBubble();
newHit();
runTimer();

document.querySelector("#pbtm").addEventListener('click', function(details)
{
    if (timer > 0)
    {
        var clickedNum = Number(details.target.textContent);

        if (clickedNum === hitrn) 
        {
            increaseScore();
        } 

        else 
        {
            decreaseScore();
        }

        newHit();
        makeBubble();
    }
});