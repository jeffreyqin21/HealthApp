
const calorieCount = 0;
const calorieHeader = document.getElementById("calories-header");
const newMeal = document.getElementById("newMeal");
const meal = document.getElementById("meal");
const food = document.getElementById("Result");

var curr_food = 0;



let a = Math.round(Math.random() * 3 + 1);

if(a == 1)
    meal.innerHTML = "Grilled Chicken with Broccoli";
if(a == 2)
    meal.innerHTML = "Quinoa with Salmon";
if(a == 3)
    meal.innerHTML = "Chicken Alfredo";
if(a == 4)
    meal.innerHTML = "Chicken Ceaser Salad";

curr_food = a;

newMeal.addEventListener("click", (e) => {
    let b = Math.round(Math.random() * 3 + 1);
    while(b == a)
        b = Math.round(Math.random() * 3 + 1);
    a = b;
    if(a == 1)
        meal.innerHTML = "Grilled Chicken with Broccoli";
    if(a == 2)
        meal.innerHTML = "Quinoa with Salmon";
    if(a == 3)
        meal.innerHTML = "Chicken Alfredo";
    if(a == 4)
        meal.innerHTML = "Chicken Ceaser Salad";
    
    curr_food = a;
})

addMeal.addEventListener("click", (e) => {

    var tbl = document.getElementById("total-intake");
    var row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();

    if(curr_food == 1){
        cell1.innerHTML = "Grilled Chicken with Broccoli";
        cell2.innerHTML = 241;
    }else if(curr_food == 2){
        cell1.innerHTML = "Salmon with Quinoa";
        cell2.innerHTML = 486;
    }else if(curr_food == 3){
        cell1.innerHTML = "Chicken Alfredo";
        cell2.innerHTML = 650;
    }else if(curr_food == 4){
        cell1.innerHTML = "Chicken Ceaser Salad";
        cell2.innerHTML = 470;
    }
})

