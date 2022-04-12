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

function change() 
{
    var elem = document.getElementById("name");
    if (elem.value == 'Drowsy') elem.value = "Sleep Advice";
    if (elem.value == 'Normal') elem.value = "Basic Advice";
    else elem.value == "Good Job ... No advice needed"
    
}

document.getElementById("advice").addEventListener("click", function(){
    var elem = document.getElementById("level1").checked;

    if(document.getElementById("level1").checked)
        document.getElementById("advice").innerHTML = "s (Breathe IN)";
    if(document.getElementById("level2").checked)
        document.getElementById("advice").innerHTML = "s (HOLD Breath)";
    if(document.getElementById("level3").checked)
        document.getElementById("advice").innerHTML = "s (Breathe OUT)";
});
