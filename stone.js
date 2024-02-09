let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
let userScore =document.querySelector("#user-score");
let compScore= document.querySelector("#comp-score");
let para=document.querySelector("#msg");


const gencomputerchoice= ()=>{
    //rock paper scissors
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame=()=>{
    console.log("the game is draw");
    para.innerText="Game is draw";
}

const showinner= (userwin)=>{
    if(userwin){
        console.log("user is winner");
        userScore.innerText=++userscore;
        para.innerText="woah!, you have won";
    }else{
        console.log("computer is winner");
        compScore.innerText=++compscore;
        para.innerText="beep! computer has won";;
    }

}


const playgame =(userchoice)=>{
    console.log("user choice=", userchoice);
    const compchoice= gencomputerchoice();
    console.log("computer choice=",compchoice);

    if(userchoice==compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=== "rock"){
            //paper,scissors
            userwin = compchoice==="scissors"?true:false;
        }
        else if(userchoice==="paper"){
            //scissors,rock
            userwin= compchoice==="rock"?true:false;
        }
        else{
            //rock,paper
            userwin= compchoice==="paper"?true:false;
        }
        showinner(userwin);
    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log(userchoice);
        playgame(userchoice);
    
    });
});