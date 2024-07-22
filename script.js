var symbol = "X";
var cells = document.querySelectorAll('.cell');

document.querySelector('.board').addEventListener('click', (event) => {
  if (event.target.classList.contains('cell') && event.target.innerHTML != "X" && event.target.innerHTML != "O") {
    event.target.innerHTML = symbol;
    symbol = symbol == 'X' ? 'O' : 'X';
    const ele=document.getElementById("result");
    if(checkDraw()){
       ele.innerHTML= " woopps !!No Player wins"
       ele.style.visibility = "visible";
       symbol=""
    }
    else
    if (checkWin(symbol)) {
      if (symbol == "X") {
         ele.innerHTML= " woohhh !!Player O wins"
      } else {
       ele.innerHTML = " woohhh !!Player X wins"
      }
      
      ele.style.visibility = "visible";
      symbol=""
    }
  }
});

function checkDraw() {
 
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") {
      return false; 
    }
  }
  return true; 
}
function checkWin() {
    if (cells[0].innerHTML === cells[1].innerHTML && cells[1].innerHTML === cells[2].innerHTML && cells[1].innerHTML!="") {
      return true;
    } else if (cells[3].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[5].innerHTML&& cells[5].innerHTML!="") {
      return true;
    } else if (cells[6].innerHTML === cells[7].innerHTML && cells[7].innerHTML === cells[8].innerHTML && cells[8].innerHTML!="") {
      return true;
    }
    
    
    else if (cells[0].innerHTML === cells[3].innerHTML && cells[3].innerHTML === cells[6].innerHTML&& cells[6].innerHTML!="") {
      return true;
    } else if (cells[1].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[7].innerHTML&& cells[4].innerHTML!="") {
      return true;
    } else if (cells[2].innerHTML === cells[5].innerHTML && cells[5].innerHTML === cells[8].innerHTML&& cells[8].innerHTML!="") {
      return true;
    }
    else if (cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML&& cells[8].innerHTML!="") {
      return true;
    } else if (cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML&& cells[6].innerHTML!="") {
      return true;
    }
    
    return false;
  }