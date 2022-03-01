$(function(){

    /* Intro Video */

    let $welcomeVid = document.querySelector(".welcome-vid");
    let $welcomeVidTrigger = document.querySelector("#introStart");
    let $afterVidBtn = document.querySelector("#tapToContinue");

    $afterVidBtn.style.transition = "all 0.5s ease-in-out";
    $afterVidBtn.style.opacity = "0";

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
        if($welcomeVid.currentTime >= 96){
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
                e.target.style.backgroundColor = "var(--lightgreen)";
                $correctChoices++;
                if($correctChoices == 3){
                    alert("Good job");
                    $wrongChoice.style.display = "none";
                }
            }
            else {
                e.target.style.backgroundColor = "var(--redorange)";
                alert("I'm not sure if that is one of the Key Results");
            }
        }
    });
    

});