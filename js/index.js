// Variables
let currentValue = "0" 
let historyValue = undefined;

// Initialisation
displayCurrentValue()

// giving functions
document.getElementsByClassName("colorTheme")[0].addEventListener("click", changeColorDark)
document.getElementsByClassName("colorTheme")[1].addEventListener("click", changeColorLight)
document.getElementsByClassName("colorTheme")[2].addEventListener("click", changeColorBlue)
document.getElementsByClassName("colorTheme")[3].addEventListener("click", changeColorRed)

//user Chooses First Number 
function concatRight(chr) {
  const chrString = chr.toString()
  if (currentValue === "0") {
    // First time
    currentValue = chrString
  } else {
    currentValue += chrString
  }
  displayCurrentValue()
}

function clearAll() {
  currentValue = "0";
  historyValue = "";
  displayCurrentValue()
  displayHistoryValue()
}

function eraseOne() {
  const len = currentValue.length
  if(len === 1) {
    currentValue = "0"
  } else {
    currentValue = currentValue.substr(0, len - 1) 
  }
  displayCurrentValue()
}   

function add() {
  historyValue = currentValue + " + ";
  displayHistoryValue()
  currentValue = "0";
  concatRight()
  displayHistoryValue()
}
// when - Pressed, The Number is Substracted From The Other Number
function minus() {
  historyValue = currentValue + " - ";
  displayHistoryValue()
  currentValue = "0";
  concatRight()
  displayHistoryValue()
}

// when × Pressed, The Number is Multipilied By The Other Number
function multiply() {
  historyValue = currentValue + " * ";
  displayHistoryValue()
  currentValue = "0";
  concatRight()
  displayHistoryValue()
}

// when ÷ Pressed, The Number is Divided By The Other Number
function divide() {
  historyValue = currentValue + " / ";
  displayHistoryValue()
  currentValue = "0";
  concatRight()
  displayHistoryValue()
}

//this Function Displays The Result
function final() {
  historyValue += currentValue
  displayHistoryValue()
  currentValue = eval(historyValue)
  displayCurrentValue()
}

function displayHistoryValue() {
  document.getElementById('history').innerText = historyValue;
}

function displayCurrentValue() {
  document.getElementById('result').innerText = currentValue;
}

function changeColorDark() {
  for (i = 0; i < 11;i++) {
    document.getElementsByClassName("symbols")[i].style.backgroundColor = "#131313";
  }
  for (i = 0; i < 12; i++) {
    document.getElementsByClassName("black")[i].style.backgroundColor = "#060606";
  }
  document.getElementsByClassName("equal")[0].style.backgroundColor = "#6f1921";
  document.body.style.backgroundColor = '#1f1f1f';
  document.body.style.color = "#fff"
  document.querySelector("#result").style.color = "#fff"
} 

function changeColorLight() {
  for (i = 0; i < 11;i++) {
    document.getElementsByClassName("symbols")[i].style.backgroundColor = "dimgrey";
  }
  for (i = 0; i < 12; i++) {
    document.getElementsByClassName("black")[i].style.backgroundColor = "gray";
  }
  document.getElementsByClassName("equal")[0].style.backgroundColor = "red";
  document.body.style.backgroundColor = '#fff';
  document.body.style.color = "#000"
  document.querySelector("#result").style.color = "#000"
} 

function changeColorBlue() {
  for (i = 0; i < 11; i++) {
    document.getElementsByClassName("symbols")[i].style.backgroundColor = "#3c68ab";
  }
  for (i = 0; i < 12; i++) {
    document.getElementsByClassName("black")[i].style.backgroundColor = "#486187";
  }
  document.getElementsByClassName("equal")[0].style.backgroundColor = "#2068d6";
  document.body.style.backgroundColor = '#567eba';
  document.body.style.color = "#fff"
  document.querySelector("#result").style.color = "#fff"
} 

function changeColorRed() {
  for (i = 0; i < 11; i++) {
    document.getElementsByClassName("symbols")[i].style.backgroundColor = "#c73847";
  }
  for (i = 0; i < 12; i++) {
    document.getElementsByClassName("black")[i].style.backgroundColor = "#ad3b46";
  }
  document.getElementsByClassName("equal")[0].style.backgroundColor = "#9e2632";
  document.body.style.backgroundColor = '#99434c';
  document.body.style.color = "#fff"
  document.querySelector("#result").style.color = "#fff"
} 
