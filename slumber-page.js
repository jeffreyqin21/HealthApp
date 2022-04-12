const dietClick = document.getElementById("dietClick");
const exerciseClick = document.getElementById("exerciseClick");
const slumberClick = document.getElementById("slumberClick");
const homeClick = document.getElementById("homeClick");

dietClick.addEventListener("click", (e) => {
     window.location = 'diet.html';   
})
exerciseClick.addEventListener("click", (e) => {
     window.location = 'exercise.html';   
})
slumberClick.addEventListener("click", (e) => {
     window.location = 'slumber.html';   
})
homeClick.addEventListener("click", (e) => {
     window.location = 'home.html';   
})

document.getElementById("advice").addEventListener("click", function(){
    console.log("check")
    if(document.getElementById("level1").checked)
        document.getElementById("advice").innerHTML = "Try sleeping earlier than usual and take melatonin.";
    if(document.getElementById("level2").checked)
        document.getElementById("advice").innerHTML = "Nice! Try and put your phone away before getting into bed.";
    if(document.getElementById("level3").checked)
        document.getElementById("advice").innerHTML = "Great job! Keep up the sleep.";
});
