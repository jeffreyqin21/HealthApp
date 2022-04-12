window.onload = main
let isValid = false;

function main () {
    days();
    document.querySelector("#genBut").onclick = generate;
    document.querySelector("#submit").onclick = flow;
    document.querySelector("#finish").onclick = finish;
    document.querySelector("#backk").onclick = backk;
    document.querySelector("#back").onclick = back;



}



function days() {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = days[d.getDay()];
    document.getElementById("date").innerHTML = day + "'s Focus: ";
}

function generate() {
    document.getElementById("genBut").style.display = "none";
    document.getElementById("summary").style.display = "none";
    document.getElementById("form").style.display = "inline";
}

function back() {
    document.getElementById("genBut").style.display = "none";
    document.getElementById("summary").style.display = "none";
    document.getElementById("form").style.display = "inline";
    document.getElementById("back").style.display = "none";
    document.getElementById("finish").style.display = "none";
    document.getElementById("r1").style.display = "none";
    document.getElementById("r2").style.display = "none";
    document.getElementById("r3").style.display = "none";
    document.getElementById("r4").style.display = "none";    
    document.getElementById("w1").style.display = "none";
    document.getElementById("d1").style.display = "none";
    document.getElementById("w2").style.display = "none";
    document.getElementById("d2").style.display = "none";
    document.getElementById("w3").style.display = "none";
    document.getElementById("d3").style.display = "none";
    document.getElementById("w4").style.display = "none";
    document.getElementById("d4").style.display = "none";
}

function backk () {
    closeForm();
    document.getElementById("genBut").style.display = "inline";
    document.getElementById("summary").style.display = "block";
    document.getElementById("error").style.display = "none";

}

function finish() {
    document.getElementById("back").style.display = "none";
    document.getElementById("finish").style.display = "none";
    document.getElementById("genBut").style.display = "inline";
    document.getElementById("r1").style.display = "none";
    document.getElementById("r2").style.display = "none";
    document.getElementById("r3").style.display = "none";
    document.getElementById("r4").style.display = "none";    
    document.getElementById("w1").style.display = "none";
    document.getElementById("d1").style.display = "none";
    document.getElementById("w2").style.display = "none";
    document.getElementById("d2").style.display = "none";
    document.getElementById("w3").style.display = "none";
    document.getElementById("d3").style.display = "none";
    document.getElementById("w4").style.display = "none";
    document.getElementById("d4").style.display = "none";
    document.getElementById("summary").style.display = "block";
}

function focus() {
    let l = document.getElementById("focus-choice");
    let foc = l.options[l.selectedIndex].value;
    document.getElementById("focus").innerHTML = foc;
}

function flow () {
    focus();
    var e = document.getElementById("focus-choice");
    var foc = e.options[e.selectedIndex].text;
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    var value = radios.length>0? radios[0].value: null;    
    if (value == null || (foc != "Arms" && foc != "Legs" &&foc != "HIIT")) {
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("error").style.display = "none";
        closeForm();  
        displayWork();
    }
    
}



function closeForm() {
    document.getElementById("form").style.display = "none";

}

function displayWork() {
    var e = document.getElementById("focus-choice");
    var foc = e.options[e.selectedIndex].text;
    var level = document.querySelector('input[name="level"]:checked').value;
    org(foc, level);
    document.getElementById("back").style.display = "inline";
    document.getElementById("finish").style.display = "inline";
    document.getElementById("w1").style.display = "block";
    document.getElementById("d1").style.display = "block";
    document.getElementById("w2").style.display = "block";
    document.getElementById("d2").style.display = "block";
    document.getElementById("w3").style.display = "block";
    document.getElementById("d3").style.display = "block";
    document.getElementById("w4").style.display = "block";
    document.getElementById("d4").style.display = "block";
    document.getElementById("r1").style.display = "block";
    document.getElementById("r2").style.display = "block";
    document.getElementById("r3").style.display = "block";
    document.getElementById("r4").style.display = "block";


}

function org(foc, level) {
    if (level == "Beginner") {
        switch(foc) {
            case "Arms":
                document.getElementById("w1").innerHTML = "Bicep Curls";
                document.getElementById("d1").innerHTML = "3 x 10";
                document.getElementById("w2").innerHTML = "Tricep Pushdowns";
                document.getElementById("d2").innerHTML = "3 x 10"; 
                document.getElementById("w3").innerHTML = "Hammer Curls";
                document.getElementById("d3").innerHTML = "3 x 10"; 
                document.getElementById("w4").innerHTML = "Lateral Raises";
                document.getElementById("d4").innerHTML = "3 x 10";    
                break;
            case "Legs":
                document.getElementById("w1").innerHTML = "Squats";
                document.getElementById("d1").innerHTML = "3 x 10";
                document.getElementById("w2").innerHTML = "Leg Curls";
                document.getElementById("d2").innerHTML = "3 x 10"; 
                document.getElementById("w3").innerHTML = "Leg Extensions";
                document.getElementById("d3").innerHTML = "3 x 10"; 
                document.getElementById("w4").innerHTML = "Calf Raises";
                document.getElementById("d4").innerHTML = "3 x 10";    
                break;
            case "HIIT":
                document.getElementById("w1").innerHTML = "Jumping Jacks";
                document.getElementById("d1").innerHTML = "3 x 20";
                document.getElementById("w2").innerHTML = "Mountain Climbers";
                document.getElementById("d2").innerHTML = "3 x 30 Seconds"; 
                document.getElementById("w3").innerHTML = "Plank";
                document.getElementById("d3").innerHTML = "3 x 30 seconds"; 
                document.getElementById("w4").innerHTML = "High Knees";
                document.getElementById("d4").innerHTML = "3 x 30 seconds";    
                break;
        } 
    } else if (level == "Intermediate") {
        switch(foc) {
            case "Arms":
                document.getElementById("w1").innerHTML = "Bicep Curls";
                document.getElementById("d1").innerHTML = "4 x 15";
                document.getElementById("w2").innerHTML = "Tricep Pushdowns";
                document.getElementById("d2").innerHTML = "4 x 15"; 
                document.getElementById("w3").innerHTML = "Hammer Curls";
                document.getElementById("d3").innerHTML = "4 x 15"; 
                document.getElementById("w4").innerHTML = "Lateral Raises";
                document.getElementById("d4").innerHTML = "4 x 15";    
                break;
            case "Legs":
                document.getElementById("w1").innerHTML = "Squats";
                document.getElementById("d1").innerHTML = "4 x 15";
                document.getElementById("w2").innerHTML = "Leg Curls";
                document.getElementById("d2").innerHTML = "4 x 15"; 
                document.getElementById("w3").innerHTML = "Leg Extensions";
                document.getElementById("d3").innerHTML = "4 x 15"; 
                document.getElementById("w4").innerHTML = "Calf Raises";
                document.getElementById("d4").innerHTML = "4 x 15";    
                break;
            case "HIIT":
                document.getElementById("w1").innerHTML = "Jumping Jacks";
                document.getElementById("d1").innerHTML = "4 x 20";
                document.getElementById("w2").innerHTML = "Mountain Climbers";
                document.getElementById("d2").innerHTML = "4 x 45 Seconds"; 
                document.getElementById("w3").innerHTML = "Plank";
                document.getElementById("d3").innerHTML = "4 x 45 seconds"; 
                document.getElementById("w4").innerHTML = "High Knees";
                document.getElementById("d4").innerHTML = "4 x 45 seconds";    
                break;
        } 
    } else if (level == "Advanced") {
        switch(foc) {
            case "Arms":
                document.getElementById("w1").innerHTML = "Bicep Curls";
                document.getElementById("d1").innerHTML = "5 X 20";
                document.getElementById("w2").innerHTML = "Tricep Pushdowns";
                document.getElementById("d2").innerHTML = "5 X 20"; 
                document.getElementById("w3").innerHTML = "Hammer Curls";
                document.getElementById("d3").innerHTML = "5 X 20"; 
                document.getElementById("w4").innerHTML = "Lateral Raises";
                document.getElementById("d4").innerHTML = "5 X 20";    
                break;
            case "Legs":
                document.getElementById("w1").innerHTML = "Squats";
                document.getElementById("d1").innerHTML = "5 X 20";
                document.getElementById("w2").innerHTML = "Leg Curls";
                document.getElementById("d2").innerHTML = "5 X 20"; 
                document.getElementById("w3").innerHTML = "Leg Extensions";
                document.getElementById("d3").innerHTML = "5 X 20"; 
                document.getElementById("w4").innerHTML = "Calf Raises";
                document.getElementById("d4").innerHTML = "5 X 20";    
                break;
            case "HIIT":
                document.getElementById("w1").innerHTML = "Jumping Jacks";
                document.getElementById("d1").innerHTML = "5 X 30";
                document.getElementById("w2").innerHTML = "Mountain Climbers";
                document.getElementById("d2").innerHTML = "4 x 60 Seconds"; 
                document.getElementById("w3").innerHTML = "Plank";
                document.getElementById("d3").innerHTML = "4 x 60 seconds"; 
                document.getElementById("w4").innerHTML = "High Knees";
                document.getElementById("d4").innerHTML = "4 x 60 seconds";    
                break;
        } 
    }
}