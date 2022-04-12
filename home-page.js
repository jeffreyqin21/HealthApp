
const dietClick = document.getElementById("dietClick");
const exerciseClick = document.getElementById("exerciseClick");
const slumberClick = document.getElementById("slumberClick");
const homeClick = document.getElementById("homeClick");
const quote = document.getElementById("quote");
const newQuote = document.getElementById("newQuote");
const fact = document.getElementById("fact");
const newFact = document.getElementById("newFact");
const timer = document.getElementById("gameStart");
const nameTag = document.getElementById("login-header");
var now = new Date();

if(now.getHours() > 12 && now.getHours() <= 17)
    nameTag.innerHTML = ("Good Afternoon!")
if(now.getHours >= 18 )
    nameTag.innerHTML = ("Good Evening!")



let a = Math.round(Math.random() * 3 + 1);
let y = Math.round(Math.random() * 5 + 1)
let time = 60;

if(a == 1)
    quote.innerHTML = "\“Stay hungry. Stay foolish.\” – Steve Jobs";
if(a == 2)
    quote.innerHTML = "\"If you can dream it, you can do it.\" - Walt Disney";
if(a == 3)
    quote.innerHTML = "\“Impossible is for the unwilling.\” - John Keats"
if(a == 4)
    quote.innerHTML = "\“Keep going. Be all in.\” – Bryan Hutchinson"

if(y == 1)
    fact.innerHTML = "dark chocolate has huge health benefits?";
if(y == 2)
    fact.innerHTML = "broccoli contains more protein than steak?";
if(y == 3)
    fact.innerHTML = "pecans are rich with antioxidants?";
if(y == 4)
    fact.innerHTML = "exercising improves brain performance?";
if(y == 5)
    fact.innerHTML = "exercise prevents signs of aging?";
if(y == 6)
    fact.innerHTML = "workouts can improve the look of your skin?";


newQuote.addEventListener("click", (e) => {
    let b = Math.round(Math.random() * 3 + 1);
    while(b == a)
        b = Math.round(Math.random() * 3 + 1);
    a = b;
    if(a == 1)
        quote.innerHTML = "\“Stay hungry. Stay foolish.\” – Steve Jobs";
    if(a == 2)
        quote.innerHTML = "\"If you can dream it, you can do it.\" - Walt Disney";
    if(a == 3)
        quote.innerHTML = "\“Impossible is for the unwilling.\” - John Keats"
    if(a == 4)
        quote.innerHTML = "\“Keep going. Be all in.\” – Bryan Hutchinson";
    
})

newFact.addEventListener("click", (e) => {
    let z = Math.round(Math.random() * 5 + 1);
    while(z == y)
        z = Math.round(Math.random() * 5 + 1);
    y = z;
    if(y == 1)
        fact.innerHTML = "dark chocolate has huge health benefits?";
    if(y == 2)
        fact.innerHTML = "broccoli contains more protein than steak?";
    if(y == 3)
        fact.innerHTML = "decans are rich with antioxidants?";
    if(y == 4)
        fact.innerHTML = "exercising improves brain performance?";
    if(y == 5)
        fact.innerHTML = "exercise prevents signs of aging?";
    if(y == 6)
        fact.innerHTML = "workouts can improve the look of your skin?";
    
})

document.getElementById("gameStart").addEventListener("click", function(){
    var timeleft = 60;

    var downloadTimer = setInterval(function function1(){
    var sectionTime = timeleft % 10;
    if(sectionTime == 0 || sectionTime == 9 || sectionTime == 8 || sectionTime == 7 )
        document.getElementById("countdown").innerHTML = timeleft + "s (Breathe IN)";
    if(sectionTime == 6 || sectionTime == 5 || sectionTime == 4)
        document.getElementById("countdown").innerHTML = timeleft + "s (HOLD Breath)";
    if(sectionTime == 3 || sectionTime == 2 || sectionTime == 1)
        document.getElementById("countdown").innerHTML = timeleft + "s (Breathe OUT)";
    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Good Job!"
    }
    }, 1000);

    console.log(countdown);
});


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

