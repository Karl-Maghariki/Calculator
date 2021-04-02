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
  $("#history").text(historyValue)
}

function displayCurrentValue() {
  $("#result").text(currentValue)
}

$(".colorTheme:first").click(function(){
  for (i = 0; i < 11;i++) {
    $('.symbols')[i].css('backgroundColor', "#131313")
  }
  for (i = 0; i < 12; i++) {
    $(".black")[i].css("backgroundColor", "#060606")
  }
  $(".equal:first").css('backgroundColor', '#6f1921')
  $(document.body).css({
    "backgroundColor": "#1f1f1f",
     "color": "#fff"
    })
  $("#result").css("color", "#fff")
})
  
$(".colorTheme")[1].click(function(){
  for (i = 0; i < 11;i++) {
    $(".symbols")[i].css("backgroundColor", "dimgrey")
  }
  for (i = 0; i < 12; i++) {
    $(".black")[i].css("backgroundColor", "gray")
  }
  $(".equal")[i].css("backgroundColor", "red")
  
  $(document.body).css({
    "backgroundColor": "#fff",
    "color": "#000"
  })
  $("#result").css("color", "#000")  
})
  
$(".colorTheme")[2].click(function(){
  for (i = 0; i < 11; i++) {
    $(".symbols")[i].css("backgroundColor", "black")
  }
  for (i = 0; i < 12; i++) {
    $('.black')[i].css("backgroundColor", "gold")
  }
  $(".equal:first").css("backgroundColor", "blue")
  $(document.body).css({
    "backgroundColor": "cornflowerblue",
     "color": "#fff"
    })
    $("#result").css("color", "#fff")
  })
  
  $(".colorTheme")[3].click(function(){
    
    for (i = 0; i < 11; i++) {
      $(".symbols")[i].css("backgroundColor", "orange")
    }
    for (i = 0; i < 12; i++) {
      $(".black")[i].css("backgroundColor", "khaki")
    }
    $(".equal:first").css("backgroundColor", "red")
    $(document.body).css({
      "backgroundColor": "darkorange",
       "color": "#fff"
      })
  $("#result").css("color", "#fff")
})
