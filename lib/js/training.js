window.onload = function(){

let $deptCardContainer = document.querySelector("#deptCardContainer");
let $deptCard = document.querySelectorAll(".deptCard");
let $tndept = document.getElementById("tn.dept");
let $tnpos = document.getElementById("tn.pos");
let $trHeader = document.getElementById("header-section");
let $deptDesc = document.getElementById("deptDesc");
let $middleContainer = document.querySelector("#middle-container");



//SELECTING THE DEPARTMENT
$deptCardContainer.addEventListener("click", function(e){
    for (let i=0; i<$deptCard.length; i++){
        setTimeout(function(){
            if($deptCard[i] !== e.target.parentNode){
                $deptCard[i].style.opacity = 0;
                setTimeout(function(){
                    $deptCard[i].style.width = 0;
                },500);
                setTimeout(function(){
                    $deptCard[i].style.display = "none";
                    $tndept.style.display = "inline-block";
                    if (window.innerWidth>768){
                        $trHeader.style.width = "20%";
                    }
                },900);
            }
            $tndept.innerText = e.target.getAttribute("data-card-name");
        },200*i)
    }
    if (e.target.getAttribute("data-card-name") == "Concessions"){
        $deptDesc.innerText = $cPosObj.description;
        $cPosObj.positions.forEach(function(val){
            createPositionDiv(val);
        });
        var $posCardDiv = document.querySelectorAll(".positionCard");
        setTimeout(function(){
            $posCardDiv.forEach(function(i,x){
                setTimeout(function(){
                    i.style.opacity = 1;
                    i.style.transition = "all 0.5s"
                },150*x)
            })
        },1600)
    }
    if (e.target.getAttribute("data-card-name") == "Kitchen"){
        $deptDesc.innerText = $kPosObj.description;
        $kPosObj.positions.forEach(function(val){
            createPositionDiv(val);
        });
        var $posCardDiv = document.querySelectorAll(".positionCard");
        setTimeout(function(){
            $posCardDiv.forEach(function(i,x){
                setTimeout(function(){
                    i.style.opacity = 1;
                    i.style.transition = "all 0.5s"
                },150*x)
            })
        },1600)
    }
    if (e.target.getAttribute("data-card-name") == "Pounders Restaurant"){
        $deptDesc.innerText = $pPosObj.description;
        $pPosObj.positions.forEach(function(val){
            createPositionDiv(val);
        });
        var $posCardDiv = document.querySelectorAll(".positionCard");
        setTimeout(function(){
            $posCardDiv.forEach(function(i,x){
                setTimeout(function(){
                    i.style.opacity = 1;
                    i.style.transition = "all 0.5s"
                },150*x)
            })
        },1600)
    }
});

//Position Cards Object

var $cPosObj = {
    title: "Concessions",
    description: "Concessions is in-charge of delivering world-class food to guests as they walk around the villagers.",
    positions: ["Cashier", "Food Prep", "Griller", "Runner"]
};
var $kPosObj = {
    title: "Kitchen",
    description: "The Main Kitchen of the PCC is the heart and soul of the operations in the center.",
    positions: ["Culinary", "Custodian", "Dishwasher", "Kitchen&nbsp;Support", "Laundry", "Runner", "Smoothies"]
};
var $pPosObj = {
    title: "Pounders Restaurant",
    description: "Pounders Restaurant is the flagship restaurant of the Hukilau Marketplace and is one of the top food destinations in the North Shore of Oahu",
    positions: ["Baker", "Busser", "Cashier", "Dishwasher", "Expo", "Runner", "Cook"]
};

//Creating and appending position cards

function createPositionDiv(posName){
    let $posIns = document.getElementById("insertPos");
    var posCardHTML = "<div class='inline-block positionCard' data-pgc='ct.positionCard'><div class='h-4/6 overflow-hidden positionCardImg relative rounded-2xl' data-pgc-field='ct.positionImg' data-position-title="+posName+"></div><span class='text-base tropiline-txt' data-pgc-field='ct.positionName'>"+posName+"</span></div>"
    let createdPosCard = document.createElement("div")
    createdPosCard.innerHTML = posCardHTML;
    $posIns.append(createdPosCard);
}

//SELECTING THE JOB POSITION

var insPosCont = document.querySelector("#insertPos");
var moduleWrapper = document.querySelector("#moduleWrapper");
insPosCont.addEventListener("click", function(e){
    if (e.target.classList.contains("positionCardImg")){
        $tnpos.innerText = e.target.getAttribute("data-position-title");
        $tnpos.style.display = "inline-block";
        this.style.transition = "all 0.5s ease-in-out";
        this.style.opacity = 0;
        if(window.innerWidth<768){
            $trHeader.style.transition = "all 0.5 ease-in-out";
            $trHeader.style.opacity = 0;
            setTimeout(function(){
                $trHeader.style.display = "none";
            },500);
        }
        setTimeout(function(){
            insPosCont.style.display = "none";
        },500);
        setTimeout(function(){
            moduleWrapper.style.transition = "all 0.5s ease-in-out";
            moduleWrapper.style.display = "block";
            moduleWrapper.style.opacity = 1;
        },1000);

    }
});


/* Hide all of Assessment Div */

let $hiddenDiv = $('.assessmentDiv');
$hiddenDiv.slideUp();


/* Assessment Check */
let $checkBoxNo = document.querySelectorAll(".checkMark");
let boxesChecked = 0;

let $taskListCard = document.querySelectorAll('.taskListCard');
for (let i=0; i<$taskListCard.length; i++){
    $taskListCard[i].addEventListener("click", function(e){
        if ($taskListCard[i].classList.contains("unassignedCard")){
            if (e.target.classList.contains("uaCheckBox")){
                if (e.target.checked === true){
                    this.style.opacity = "0.3";
                    boxesChecked++;
                    completedTraining();
                    e.target.disabled = true;
                } else {
                    this.style.opacity = "1";
                    boxesChecked--;
                }
            }
        }
        else {
            this.style.opacity = 1;
            e.target.checked = false;
            if (e.target.classList.contains("expandButton")){
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
let $modalBox = document.querySelector(".modal");

function showModal(){
    $modal.show();
}

$modalButton.addEventListener("click", function hideModal(){
    $modal.hide();
});

/* Get Value of choice and Assessment Validation*/

let $choicesBtn = document.querySelectorAll('.circleButton')

    moduleWrapper.addEventListener("click", function(e){
        if(e.target.classList.contains("circleButton")){
            if (e.target.getAttribute("value") == 1){
                $modalButton.innerText = "Awesome!";
                $modalMsg.innerText = "You got it!"
                showModal();
                boxesChecked++;
                e.target.parentNode.parentNode.parentNode.children[0].children[0].children[0].children[0].checked = true;
                e.target.parentNode.parentNode.parentNode.children[0].children[0].children[0].children[0].disabled = true;
                e.target.parentNode.parentNode.parentNode.style.opacity = "0.3";
                completedTraining();
            }
            else {
                $modalButton.innerText = "Try Again";
                $modalMsg.innerText = "You might want to try again."
                showModal();
            };
        }
    })

    let $checkInput = document.querySelectorAll("input[type='checkbox'");

    function completedTraining(){
        if (boxesChecked == $checkInput.length){
            $modalBox.style.backgroundColor = "var(--surf)";
            $modalButton.innerText = "Let's go!";
            $modalMsg.innerText = "Congratulations! You completed the training, and now you're ready to work!"
            showModal();
        }
    }


//
//
//
//
//
//END BEFORE THIS
//
//
//
//
//
};

