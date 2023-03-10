//document.querySelector("button").addEventListener("click", handleClick); //addEventListener(type, function to call)
                                                                         //dont put handleClick() since this is a straight up method call 
                                                                         //and will call that func right away when the html script add the eventListener                                                       
// function handleClick(){
//     alert("I got clicked!");
// }
//----------------------------------------------

//detect the clicked button
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){  //anonymous func
        //this.style.color = "white" //this is <button class"_ drum">_</button>
        var chosenButton = this.innerHTML;
        audioChoice(chosenButton);
        buttonAnimation(chosenButton);
    });
}


//detect the pressed letter on keyboard
document.addEventListener("keydown", function (event){  //add eventListener to the whole document
                                                        //event here is KeyBoardEvent, which includes many properties such as key, charCode, etc,.
    var chosenButton = event.key;
    audioChoice(chosenButton);
    buttonAnimation(chosenButton);
    
});

//pick the corresponding sound
function audioChoice(chosenButton){
    var audio; //this var declaration can be eliminated
    switch(chosenButton){
        case "w":
            audio = new Audio('sounds/tom-1.mp3');  //creat Audio object
            audio.play();
            break;
        case "a":
            audio = new Audio('sounds/tom-2.mp3');  //creat Audio object
            audio.play();
            break;
        case "s":
            audio = new Audio('sounds/tom-3.mp3');  //creat Audio object
            audio.play();
            break;
        case "d":
            audio = new Audio('sounds/tom-4.mp3');  //creat Audio object
            audio.play();
            break;
        case "j":
            audio = new Audio('sounds/snare.mp3');  //creat Audio object
            audio.play();
            break;
        case "k":
            audio = new Audio('sounds/crash.mp3');  //creat Audio object
            audio.play();
            break;
        case "l":
            audio = new Audio('sounds/kick-bass.mp3');  //creat Audio object
            audio.play();
            break;
        default:
            console.log(chosenButton);
    }    
}

//add animation to button
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){   //setTimeout(func, millisecond)
        activeButton.classList.remove("pressed")
    }, 100)
};





//Audio constructor is provided by javascript but is written here for explanation:
// function Audio(fileLocation){
//     this.fileLocation = fileLocation;
//     this.play = function(){
//         //tap into the audio hardware
//         //check if file at fileLocation exists
//         //check if file at fileLocation if a sound file
//         //play the file at fileLocation
//     }
// }
// var audio = new Audio('sounds/tom-1.mp3');  //creat Audio object
// audio.play(); //access play() method