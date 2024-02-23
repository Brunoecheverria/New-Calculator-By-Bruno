//This adds the value of the button we touch on the calculator to the screen.

function agree(value){
    document.getElementById("screen").value += value;
}

// This action erase the screen.

function erase(){
    document.getElementById("screen").value = "";
}

// This action takes the values ​​from the screen and executes the corresponding calculations.

function calculate(){
    const valueScreen = document.getElementById("screen").value
    const result = eval(valueScreen)
    document.getElementById("screen").value = result
}