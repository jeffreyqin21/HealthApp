const dietClick = document.getElementById("dietClick");
const exerciseClick = document.getElementById("exerciseClick");
const slumberClick = document.getElementById("slumberClick");
const homeClick = document.getElementById("homeClick");
//eventually want to get calories count from diet page (with export
const calorieCount = 0;
const calorieHeader = document.getElementById("calories-header");
//need to get exercise stat from exercise page as well
const exerciseDone = false;
const exerciseHeader = document.getElementById("exercise-header");


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

