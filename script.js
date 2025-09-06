let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let trun0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () =>{
    trun0 = true;
    enableBoxes();
   msgContainer.classList.add("hide");

}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (trun0) {
      box.innerText = "o";
      box.classList.add("red");    // Red class for 0
      trun0 = false;
    } else {
      box.innerText = "x";
      box.classList.add("black");  // Black class for x
      trun0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}
const showWinner = (winner) => {
    msg.innerText = `congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val ===pos3Val){
            console.log("winner");

            showWinner(pos1Val);
        }
    }
  }
};


newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


