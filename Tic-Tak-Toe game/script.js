let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('#reset-btn');
let newgmbtn=document.querySelector('#new-game');
let msgcontainers=document.querySelector('.msg-container');
let resultmsg=document.querySelector('.message');

let turn= true;
//playerO playerX

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerHTML="O";
            turn=false;
        }
        else{
            box.innerHTML="X";
            turn=true;
        }
       box.disabled=true;
       box.style="background-color:#ffffc7";
       checkWinner();
     });
})


const resetbtn=()=>{
    turn =true;
    enablebox();
    resultmsg.classList.add('hide'); 

}

const disablebox=()=>{
for(box of boxes){
    box.disabled=true;
}}
const enablebox=()=>{
for(box of boxes){
    box.disabled=false;
    box.innerHTML="";
    box.style="background-color:#ffffc7";
}
}

const showWinner=(winner)=>{
    resultmsg.innerText=`Congratulations, Winner is ${winner}`;
    resultmsg.classList.toggle('hide');  
    disablebox();
};

const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val ){
                console.log("Winner",pos1val);
                showWinner(pos1val);
             }
            }
        }
    }

    reset.addEventListener("click",resetbtn);
    newgmbtn.addEventListener("click",resetbtn);