console.log("Conected");
var colors=generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var pickedColor= pickColor();
var messageDispaly=document.querySelector("#message");
var resetBtn=document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");
var numSquares=6;
colorDisplay.textContent=pickedColor;

for (var i=0;i<squares.length;i++){
    //add initial colors
    squares[i].style.backgroundColor=colors[i];  
    //event listener
    squares[i].addEventListener("click",function(){
        divColor=this.style.backgroundColor;
        console.log(divColor);

        if (divColor===pickedColor){
            console.log("Correct");
            messageDispaly.textContent="Correct";
            changeColors(pickedColor);
            document.querySelector("h1").style.backgroundColor=divColor;
            resetBtn.textContent="Play Again";

        }else{
            console.log("Not Corrent");
            this.style.backgroundColor="#232323";
            // this.style.border="#232323"
            messageDispaly.textContent="Try Again";   
        }
    });
};

//Easy Btn
easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;

    for (var i =0 ;i<squares.length;i++){
        if (colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
});

//Hard Btn
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;

    for (var i =0 ;i<squares.length;i++){
        if (colors[i]){
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        }
    }
});


resetBtn.addEventListener("click",function(){
    colors=generateRandomColors(numSquares);
    pickedColor= pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i =0;i<colors.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    messageDispaly.textContent="Welcome";
    document.querySelector("h1").style.backgroundColor="steelblue";
});

function changeColors(color){
    for (var i=0;i<colors.length;i++){
        squares[i].style.backgroundColor=color;  
    };
}

function pickColor(){
    var ranNum=Math.floor(Math.random()*colors.length);
    return colors[ranNum];
}

function generateRandomColors(num){
    var arr=[];

    for(var i =0;i<num;i++){
    arr.push(randomColor());
    }

    return arr;
};

function randomColor(){
    var red=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256);
    return "rgb("+red+", "+green+", "+blue+")";
};
