// Variables
let currentValue = "0" 
let historyValue = undefined;

// Initialisation
displayCurrentValue()

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


 
