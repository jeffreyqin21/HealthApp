const dietClick = document.getElementById("dietClick");
const exerciseClick = document.getElementById("exerciseClick");
const slumberClick = document.getElementById("slumberClick");
const homeClick = document.getElementById("homeClick");
const quote = document.getElementById("quote");
const newQuote = document.getElementById("newQuote");
const fact = document.getElementById("fact");
const newFact = document.getElementById("newFact");
const timer = document.getElementById("gameStart");


let a = Math.round(Math.random() * 3 + 1);
let y = Math.round(Math.random() * 5 + 1)
let time = 60;

if(a == 1)
    quote.innerHTML = "\"It always seems impossible until it's done.\" -Nelson Mandela";
if(a == 2)
    quote.innerHTML = "\"If you can dream it, you can do it.\" -Walt Disney";
if(a == 3)
    quote.innerHTML = "\"If you fell down yesterday, stand up today.\" -H. G. Wells";
if(a == 4)
    quote.innerHTML = "\"Don't watch the clock; do what it does. Keep going.\" -Sam Levenson";

if(y == 1)
    fact.innerHTML = "Dark chocolate has huge health benefits?";
if(y == 2)
    fact.innerHTML = "Broccoli contains more protein than steak?";
if(y == 3)
    fact.innerHTML = "Pecans are rich with antioxidants?";
if(y == 4)
    fact.innerHTML = "Exercising improves brain performance?";
if(y == 5)
    fact.innerHTML = "Exercise prevents signs of ageing?";
if(y == 6)
    fact.innerHTML = "Workouts can improve the look of your skin?";


newQuote.addEventListener("click", (e) => {
    let b = Math.round(Math.random() * 3 + 1);
    while(b == a)
        b = Math.round(Math.random() * 3 + 1);
    a = b;
    if(a == 1)
        quote.innerHTML = "\"It always seems impossible until it's done.\" - Nelson Mandela";
    if(a == 2)
        quote.innerHTML = "\"If you can dream it, you can do it.\" -Walt Disney";
    if(a == 3)
        quote.innerHTML = "\"If you fell down yesterday, stand up today.\" -H. G. Wells";
    if(a == 4)
        quote.innerHTML = "\"Don't watch the clock; do what it does. Keep going.\" -Sam Levenson";
    
})

newFact.addEventListener("click", (e) => {
    let z = Math.round(Math.random() * 5 + 1);
    while(z == y)
        z = Math.round(Math.random() * 5 + 1);
    y = z;
    if(y == 1)
        fact.innerHTML = "Dark chocolate has huge health benefits?";
    if(y == 2)
        fact.innerHTML = "Broccoli contains more protein than steak?";
    if(y == 3)
        fact.innerHTML = "Pecans are rich with antioxidants?";
    if(y == 4)
        fact.innerHTML = "Exercising improves brain performance?";
    if(y == 5)
        fact.innerHTML = "Exercise prevents signs of ageing?";
    if(y == 6)
        fact.innerHTML = "Workouts can improve the look of your skin?";
    
})

document.getElementById("gameStart").addEventListener("click", function(){
    var timeleft = 60;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + " (Breathe in for 4, Hold for 3, Breathe Out for 3)";

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

