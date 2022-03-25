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
                    $tndept.classList.remove("invisible");
                    $trHeader.style.gridColumn = "span 1";
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
                console.log(i,x);
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
                console.log(i,x);
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
                console.log(i,x);
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
    positions: ["Culinary", "Custodian", "Dishwasher", "Kitchen Support", "Laundry", "Runner", "Smoothies"]
};
var $pPosObj = {
    title: "Pounders Restaurant",
    description: "Pounders Restaurant is the flagship restaurant of the Hukilau Marketplace and is one of the top food destinations in the North Shore of Oahu",
    positions: ["Baker", "Busser", "Cashier", "Dishwasher", "Expo", "Runner", "Cook"]
};

//Creating and appending position cards

function createPositionDiv(posName){
    let $posIns = document.getElementById("insertPos");
    var posCardHTML = "<div class='inline-block positionCard' data-pgc='ct.positionCard'><div class='h-4/6 overflow-hidden positionCardImg relative rounded-2xl' data-pgc-field='ct.positionImg'></div><span class='text-sm' data-pgc-field='ct.positionName'>"+posName+"</span></div>"
    let createdPosCard = document.createElement("div")
    createdPosCard.innerHTML = posCardHTML;
    $posIns.append(createdPosCard);
}
