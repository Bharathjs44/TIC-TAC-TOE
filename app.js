let boxes=document.querySelectorAll(".box");
let resBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg1")

let turnO=true;//playerX, player0;
let count=0;

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
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


const disableBoxes=() => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=() => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

boxes.forEach((box)=> {
box.addEventListener("click",()=> {
    //console.log("Box was clicked");
    if(turnO)
        {
            //player0
        box.innerText="O";
        turnO=false;
        }
        else{
        box.innerText="X"
         turnO=true;
        }
        count++;
        box.disabled=true;//to disable when box is filled
        
    

        let isWinner = checkWinner();
          if(count ===9  && !isWinner)
        {
            gameDraw();
        }
});
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
    //    // console.log(pattern);//acccess pattern
    //    console.log(pattern[0],pattern[1],pattern[2]); //access pattern index
    //    //console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);//access boxes
    //    console.log(
    //     boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText 
    // );
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

  if(pos1val!="" && pos2val!="" && pos3val!="" ){
    if(pos1val=== pos2val && pos2val===pos3val){
       // console.log("winner",pos1val);
        showWinner(pos1val);
         return true;
     }
     }
    }
};

const showWinner=(winner)=>{
  msg.innerText='Congratulations, Winner is' +" " +winner;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const gameDraw = ()=>{
    msg.innerText="Game Was a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};



newGameBtn.addEventListener("click",resetGame)
resBtn.addEventListener("click",resetGame)

