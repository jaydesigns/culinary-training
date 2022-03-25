$(function(){

    /* Intro Video */

    let $welcomeVid = document.querySelector(".welcome-vid");
    let $welcomeVidTrigger = document.querySelector("#introStart");
    let $afterVidBtn = document.querySelector("#tapToContinue");

    $afterVidBtn.style.transition = "all 0.5s ease-in-out";
    //$afterVidBtn.style.opacity = "0";

    $welcomeVidTrigger.addEventListener("click", function(){
        setTimeout(function(){
            console.log("wow");
            $welcomeVid.currentTime = 0;
            $welcomeVid.controls = true;
            $welcomeVid.muted = false;
            $welcomeVid.loop = false;
            if (screen.width < 768){
                $welcomeVid.style.transform = "scale(100%,100%)";
            }
            $welcomeVid.play();
        }, 1000);
    });

    $welcomeVid.addEventListener("timeupdate",function(){
        if($welcomeVid.currentTime >= 8){
            //console.log("OK na");
            $afterVidBtn.style.opacity = "1";
        }
    });


    /* Key Results */
    let $choices = document.querySelector("#keyResultsChoices");
    let $wrongChoice = document.querySelector("[data-value-key='wrong']");
    let $correctChoices = 0;
    $choices.addEventListener("click", function(e){
        if (e.target.classList.contains("choices")){
            if (e.target.getAttribute("data-value-key") == "correct"){
                e.target.style.backgroundColor = "#a5d08B";
                $correctChoices++;
                if($correctChoices == 3){
                    alert("Good job");
                    $wrongChoice.style.display = "none";
                }
            }
            else {
                e.target.style.backgroundColor = "#ff9b9b";
                alert("Sorry. That is not one of the Key Results.s");
            }
        }
    });

    //Transition delay
    let $jumpPage = document.querySelector("#trAnchor");
    $jumpPage.addEventListener("click", function(e){
        e.preventDefault;
        console.log(this)
        var goTo = this.getAttribute("data-ref-loc");
        console.log(goTo)
        setTimeout(function(){
            window.location = goTo;
        },2600);
    });

    

});