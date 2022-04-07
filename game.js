let sgninbtn=document.querySelector("#signin");
let sgnupbtn=document.querySelector("#signup");
let btn=document.querySelectorAll(".close");
let nwgmbtn=document.querySelector("#new");
let rollbtn=document.querySelector("#roll");
let passbtn=document.querySelector("#pass");
let fnls=document.querySelector("input");

let sin=document.querySelector("#in");
let sup=document.querySelector("#up");
let player1=document.querySelector("#player1");
let player2=document.querySelector("#player2");
let dice=document.querySelector("#dice");

let score1=player1.querySelector("#score1");
let cscore1=player1.querySelector("#cscore1");
let stat1=player1.querySelector(".stat");
let score2=player2.querySelector("#score2");
let cscore2=player2.querySelector("#cscore2");
let stat2=player2.querySelector(".stat");

let finals;
let cp=1;

sgninbtn.addEventListener("click",signin);
sgnupbtn.addEventListener("click",signup);
btn.forEach(e => {
    e.addEventListener("click",close);
});
nwgmbtn.addEventListener("click",newgame);
rollbtn.addEventListener("click",roll);
passbtn.addEventListener("click",pass);
fnls.addEventListener("input",(e)=>{
    finals=e.target.value;
});

function newgame() {
    dice.setAttribute("src","./images/dice.png");
    score1.innerHTML=score2.innerHTML=cscore1.innerHTML=cscore2.innerHTML=0;
    stat1.setAttribute("src","./images/active.png");
    stat2.setAttribute("src","./images/inactive.png");
    rollbtn.disabled=false;
    passbtn.disabled=false;
    fnls.disabled=false;
    fnls.value="";
}

function roll() {
    let a=(Math.floor(Math.random()*6)+1);
    dice.setAttribute("src",`./images/dice${a}.png`);
    let b;
    
    if(cp==1){
        if(a==1){
            cscore1.innerHTML=0;
            pass();
        }
        else{
            b=parseInt(cscore1.innerHTML);
            b+=a;
            cscore1.innerHTML=b;
        }
    }
    else{
        if(a==1){
            cscore2.innerHTML=0;
            pass();
        }
        else{
            b=parseInt(cscore2.innerHTML);
            b+=a;
            cscore2.innerHTML=b;
        }
    }
}

function pass() {
    let b,a;
    if(cp==1){
        b=parseInt(cscore1.innerHTML);
        a=parseInt(score1.innerHTML);
        a+=b;
        score1.innerHTML=a;
        cscore1.innerHTML=0;
        
        if(a>=finals){
            rollbtn.disabled=true;
            passbtn.disabled=true;
            fnls.disabled=true;
            alert("PLAYER 1 IS THE WINNER ")
            return;
        }

        stat1.setAttribute("src","./images/inactive.png");
        stat2.setAttribute("src","./images/active.png");
        cp=2;

    }
    else{
        b=parseInt(cscore2.innerHTML);
        a=parseInt(score2.innerHTML);
        a+=b;
        score2.innerHTML=a;
        cscore2.innerHTML=0;

        if(a>=finals){
            rollbtn.disabled=true;
            passbtn.disabled=true;
            fnls.disabled=true;
            alert("PLAYER 2 IS THE WINNER ")
            return;
        }

        stat2.setAttribute("src","./images/inactive.png");
        stat1.setAttribute("src","./images/active.png");
        cp=1;
    }
}

function signin() {
    sin.style.display="block";
}

function signup() {
    sup.style.display="block";
}

function close(e) {
    let a=e.target.parentElement.parentElement;
    a.style.display="none";
}