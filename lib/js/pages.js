$(function(){

    /* Hide all of Assessment Div */

    let $hiddenDiv = $('.assessmentDiv');
    $hiddenDiv.slideUp();

    /* Open and close dynamic video container */
    // let vidContainer = document.querySelector(".trainingVideoContainer");
    // let vidContainerClose = document.querySelector("#trVidClose");
    // let trainingVid = document.querySelector("#training-video");
    // let startTrVid = document.querySelector("#startTrVid");
    // startTrVid.addEventListener("click", function(){
    //     vidContainer.style.display = "block";
    //     let vidTimer = setTimeout(function(){
    //         trainingVid.play();
    //     }, 1000);
    // })

    // vidContainerClose.addEventListener("click", function(){
    //     //trainingVid.muted = true;
    //     trainingVid.pause();
    //     vidContainer.style.display = "none";
    // });

    /* Assessment Check */
    let $checkBoxNo = document.querySelectorAll(".checkMark");
    let boxesChecked = 0;

    let $taskListCard = document.querySelectorAll('.taskListCard');
    for (let i=0; i<$taskListCard.length; i++){
        $taskListCard[i].addEventListener("click", function(e){
            if ($taskListCard[i].classList.contains("unassignedCard")){
                if (e.target.classList.contains("uaCheckBox")){
                    if (e.target.checked === true){
                        this.style.opacity = "0.5";
                        boxesChecked++;
                        console.log(boxesChecked);
                    } else {
                        this.style.opacity = "1";
                        boxesChecked--;
                        console.log(boxesChecked);
                    }
                }
            }
            else {
                e.target.checked = false;
                assessVald();
                if (e.target.classList.contains("expandButton")){
                    console.log("OK!");
                    let $assessmentDiv = $(this.children[1]);
                    $assessmentDiv.slideToggle();
                }
                if (e.target.classList.contains("adCheckBox")){
                    $modalButton.innerText = "I understand";
                    $modalMsg.innerText = "I'm sorry, but you have to complete the given assessment in order to complete this task."
                    showModal();
                }
            }
        })
    };



    /* MODAL FOR ALERTS */
    let $modal = $('.modalBackground');
    let $modalButton = document.querySelector('.modalButton');
    let $modalMsg = document.querySelector('.modalMessage');

    function showModal(){
        $modal.show();
    }
    
    $modalButton.addEventListener("click", function hideModal(){
        $modal.hide();
    });

    /* Get Value of choice and Assessment Validation*/

    let $choicesBtn = document.querySelectorAll('.circleButton')
    function assessVald(){
        for (let i=0; i<$choicesBtn.length; i++){
            $choicesBtn[i].addEventListener("click", function validateAssessment(){
                if (this.getAttribute("value") == 1){
                    $modalButton.innerText = "Awesome!";
                    $modalMsg.innerText = "You got it!"
                    showModal();
                    this.parentNode.parentNode.parentNode.children[0].children[0].children[0].children[0].checked = true;
                    this.parentNode.parentNode.parentNode.style.opacity = "0.5";
                    console.log("GOOD");
                }
                else {
                    $modalButton.innerText = "Try Again";
                    $modalMsg.innerText = "You might want to try again."
                    showModal();
                };
                
            });
        }
    }

})