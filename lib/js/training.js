let $deptCardContainer = document.querySelector("#deptCardContainer");
let $deptCard = document.querySelectorAll(".deptCard");
let $tndept = document.getElementById("tn.dept");
let $tnpos = document.getElementById("tn.pos");
let $trHeader = document.getElementById("header-section");


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
});