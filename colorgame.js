var numsquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent ==="Easy" ? numsquares = 3 : numsquares = 6;
        reset();
    })
};

function reset(){
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];    
        }else{
            squares[i].style.display ="none";
        }
    }
    h1.style.background = "steelblue";
}


// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numsquares =3;
//     colors = generateRandomColors(numsquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i =0;i<squares.length;i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function () {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numsquares =6;
//     colors = generateRandomColors(numsquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//             squares[i].style.background = colors[i];
//             squares[i].style.display = "block";
//     }
// }) 

resetButton.addEventListener("click", function(){
    reset();
})

colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length;i++){
    //add initial colors to all colors
    squares[i].style.backgroundColor = colors[i];   

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
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