// Variables
let currentValue = "0" 
let historyValue = undefined

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
  if (len === 1) {
    currentValue = "0"
  } else {
    currentValue = currentValue.substr(0, len - 1) 
  }
  displayCurrentValue()
}   

$("#add").click(function(){
  historyValue = currentValue + " + ";
  displayHistoryValue()
  currentValue = "0";
  concatRight()
  displayHistoryValue()
})
$("#minus").click(function(){
  historyValue = currentValue + " - ";
  displayHistoryValue()
  currentValue = "0";
  concatRight()
  displayHistoryValue()
})

$("#multiply").click(function(){
  historyValue = currentValue + " * ";
  displayHistoryValue()
  currentValue = "0";
  concatRight()
  displayHistoryValue()
})
$("#divide").click(function(){
  historyValue = currentValue + " / ";
  displayHistoryValue()
  currentValue = "0";
  concatRight()
  displayHistoryValue()
})
$("#final").click(function(){
  historyValue += currentValue
  displayHistoryValue()
  currentValue = eval(historyValue)
  displayCurrentValue()
})

function displayHistoryValue() {
  $("#history").text(historyValue)
}

function displayCurrentValue() {
  $("#result").text(currentValue)
}

document.getElementsByClassName("colorTheme")[0].addEventListener("click", function(){
  for (let i = 0; i < 11; i++) {
    document.getElementsByClassName("symbols")[i].style.backgroundColor= "#131313"
  }
  for (i = 0; i < 12; i++) {
    document.getElementsByClassName("black")[i].style.backgroundColor = "#060606"
  }
  document.getElementsByClassName("equal")[0].style.backgroundColor = "#6f1921"
  document.body.style.cssText = "background-color: #1f1f1f; color: #fff"
  document.getElementById("result").style.color = "#fff"
})

document.getElementsByClassName("colorTheme")[1].addEventListener("click", function(){
  for (let i = 0; i < 11; i++) {
    document.getElementsByClassName("symbols")[i].style.backgroundColor= "dimgrey"
  }
  for (i = 0; i < 12; i++) {
    document.getElementsByClassName("black")[i].style.backgroundColor = "grey"
  }
  document.getElementsByClassName("equal")[0].style.backgroundColor = "red"
  document.body.style.cssText = "background-color: #fff; color: #000"
  document.getElementById("result").style.color = "#000"
})
document.getElementsByClassName("colorTheme")[2].addEventListener("click", function(){
  for (let i = 0; i < 11; i++) {
    document.getElementsByClassName("symbols")[i].style.backgroundColor= "black"
  }
  for (i = 0; i < 12; i++) {
    document.getElementsByClassName("black")[i].style.backgroundColor = "gold"
  }
  document.getElementsByClassName("equal")[0].style.backgroundColor = "blue"
  document.body.style.cssText = "background-color: cornflowerblue; color: #fff"
  document.getElementById("result").style.color = "#fff"
})
document.getElementsByClassName("colorTheme")[3].addEventListener("click", function(){
  for (let i = 0; i < 11; i++) {
    document.getElementsByClassName("symbols")[i].style.backgroundColor= "orange"
  }
  for (i = 0; i < 12; i++) {
    document.getElementsByClassName("black")[i].style.backgroundColor = "khaki"
  }
  document.getElementsByClassName("equal")[0].style.backgroundColor = "red"
  document.body.style.cssText = "background-color: darkorange; color: #fff"
  document.getElementById("result").style.color = "#fff"
})
