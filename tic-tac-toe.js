let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");


let winningPattern = [ 
 [0,1,2],
 [0,3,6],
 [2,5,8],
 [6,7,8],
 [3,4,5],
 [1,4,7],
 [0,4,8],
 [2,4,6],
];

let xTurn = true;
let count = 0;

const disableButtons = () => {
    btnRef.forEach((Element) => (Element.disabled = true));
    
    popupRef.classList.remove("hide");

};

const winFunction = (letter) => {
    disableButtons();
    if (letter == "X"){
        msgRef.innerHTML = "&#x1F389; <br> 'X' WINS"
    }
    else{
        msgRef.innerHTML = "&#x1F389; <br> 'O' WINS"
    }
};

const drawFunctions = (letter) => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> it is a 'Draw' "

}

 const enableButtons = () => {
    btnRef.forEach(Element => {
        Element.innerText = "";
        Element.disabled = false;
    });

    popupRef.classList.add("hide");
 };

 newgameBtn.addEventListener("click", () => {
   count = 0;
   enableButtons(); 
 });

 restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons(); 
 });


const winChecker = () => {
    for(let i of winningPattern) {
        let [Element1, Element2, Element3] = [
            
            btnRef[i[0]].innerText, 
            btnRef[i[1]].innerText, 
            btnRef[i[2]].innerText,
         ];


 if(Element1 != "" && Element2 != "" & Element3 != "") {
    if(Element1 == Element2 && Element2 == Element3) {
        winFunction(Element1);
    }
 }
}
};

btnRef.forEach((Element) => {
    Element.addEventListener("click", () => {
       if(xTurn){
        xTurn = false;

        Element.innerText = "X";
        Element.disabled = true;
       }
       else {
        xTurn = true;

        Element.innerText = "O";
        Element.disabled  = true;
       }

       count += 1;
       if (count == 9) {
        drawFunctions();
       }

       winChecker();
    });
});

window.onload = enableButtons;
