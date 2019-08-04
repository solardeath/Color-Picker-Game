var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length;i++){
    //add initial colors to all colors
    squares[i].style.backgroundColor = colors[i];   

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }else{
            this.style.background = "#232323"; 
            messageDisplay.textContent = "Try Again"
        }
    });
}


function changeColors(color){
    for(var i =0;i<colors.length;i++){
        squares[i].style.background = color;
    }
}


function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make array 
    var arr =[]
    //add random colors to array
    for(var i=0;i<num;i++){
        arr.push(randomColor());

    }
    //return array
    return arr;
}

function randomColor(){
     var r = Math.floor(Math.random() *256);
     var g = Math.floor(Math.random() *256);
     var b = Math.floor(Math.random() *256);
     return "rgb(" + r +", " + g +", " + b +")";
}