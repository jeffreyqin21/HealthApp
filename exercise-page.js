window.onload = main
let isValid = false;
var check =null;

const timer = document.getElementById("timer");






function main () {
    days();
    document.querySelector("#genBut").onclick = generate;
    document.querySelector("#submit").onclick = flow;
    document.querySelector("#finish").onclick = finish;
    document.querySelector("#backk").onclick = backk;
    document.querySelector("#back").onclick = back;

    document.querySelector("#timer").onclick = start;
    document.querySelector("#stop").onclick = stop;
    document.querySelector("#weightC").onclick = graph;
    document.querySelector("#return").onclick = front;
    document.querySelector("#sumLWB").onclick = closeKey;


}

function closeKey() {
    document.getElementById("sumLW").style.display = "inline";
    document.getElementById("sumLWT").style.display = "inline";


}

function graph() {
    document.getElementById("return").style.display = "block";
    document.getElementById("graph").style.display = "block";
    document.getElementById("genBut").style.display = "none";
    document.getElementById("summary").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("keyboard").style.display = "none";


}

function front() {
    document.getElementById("return").style.display = "none";
    document.getElementById("graph").style.display = "none";
    document.getElementById("genBut").style.display = "block";
    document.getElementById("summary").style.display = "block";
    document.getElementById("header").style.display = "block";

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
    document.getElementById("navigation").style.display = "none";
    document.getElementById("keyboard").style.display = "none";


}

    function stop () {
        document.getElementById("countdown").innerHTML = ""
        clearInterval(check);
        check = null;
        document.getElementById("timer").style.display = "block";
    
    
    }

    function stop2 () {
        document.getElementById("countdown").innerHTML = ""
        clearInterval(check);
        check = null;
    
    
    }
    
    
    function start () {
        var timeleft = 60;
        if (check == null) {
            check = setInterval(function function1(){
        document.getElementById("countdown").innerHTML = timeleft
        document.getElementById("timer").style.display = "none";
        timeleft -= 1;
        if(timeleft <= 0){
            document.getElementById("countdown").innerHTML = "Good Job!"
            stop();
        }
        }, 1000);
        }
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
    document.getElementById("timer").style.display = "none";
    document.getElementById("instr").style.display = "none";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("stop").style.display = "none";
    stop2();

}

function backk () {
    closeForm();
    document.getElementById("genBut").style.display = "inline";
    document.getElementById("summary").style.display = "block";
    document.getElementById("error").style.display = "none";
    document.getElementById("navigation").style.display = "block";


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
    document.getElementById("timer").style.display = "none";
    document.getElementById("instr").style.display = "none";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("stop").style.display = "none";
    document.getElementById("summary").style.display = "block";
    document.getElementById("navigation").style.display = "block";

}

function focus() {
    let l = document.getElementById("focus-choice");
    let foc = l.options[l.selectedIndex].value;
    document.getElementById("focus").innerHTML = foc;
}

function flow () {
    var e = document.getElementById("focus-choice");
    var foc = e.options[e.selectedIndex].text;
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    var value = radios.length>0? radios[0].value: null;    
    if (value == null || (foc != "Arms" && foc != "Legs" &&foc != "HIIT")) {
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("error").style.display = "none";
        focus();
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
    document.getElementById("timer").style.display = "block";
    document.getElementById("instr").style.display = "block";
    document.getElementById("countdown").style.display = "block";
    document.getElementById("stop").style.display = "none";

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
                document.getElementById("w1").innerHTML = "Bicep Curls &#9432;";
                document.getElementById("d1").innerHTML = "4 x 15";
                document.getElementById("w2").innerHTML = "Tricep Pushdowns &#9432;";
                document.getElementById("d2").innerHTML = "4 x 15"; 
                document.getElementById("w3").innerHTML = "Hammer Curls &#9432;";
                document.getElementById("d3").innerHTML = "4 x 15"; 
                document.getElementById("w4").innerHTML = "Lateral Raises &#9432;";
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
                document.getElementById("d1").innerHTML = "5 x 20";
                document.getElementById("w2").innerHTML = "Tricep Pushdowns";
                document.getElementById("d2").innerHTML = "5 x 20"; 
                document.getElementById("w3").innerHTML = "Hammer Curls";
                document.getElementById("d3").innerHTML = "5 x 20"; 
                document.getElementById("w4").innerHTML = "Lateral Raises";
                document.getElementById("d4").innerHTML = "5 x 20";    
                break;
            case "Legs":
                document.getElementById("w1").innerHTML = "Squats";
                document.getElementById("d1").innerHTML = "5 x 20";
                document.getElementById("w2").innerHTML = "Leg Curls";
                document.getElementById("d2").innerHTML = "5 x 20"; 
                document.getElementById("w3").innerHTML = "Leg Extensions";
                document.getElementById("d3").innerHTML = "5 x 20"; 
                document.getElementById("w4").innerHTML = "Calf Raises";
                document.getElementById("d4").innerHTML = "5 x 20";    
                break;
            case "HIIT":
                document.getElementById("w1").innerHTML = "Jumping Jacks";
                document.getElementById("d1").innerHTML = "5 x 30";
                document.getElementById("w2").innerHTML = "Mountain Climbers";
                document.getElementById("d2").innerHTML = "4 x 60 seconds"; 
                document.getElementById("w3").innerHTML = "Plank";
                document.getElementById("d3").innerHTML = "4 x 60 seconds"; 
                document.getElementById("w4").innerHTML = "High Knees";
                document.getElementById("d4").innerHTML = "4 x 60 seconds";    
                break;
        } 
    }
}


/*

<div id="summary">
        <fieldset id="field">
          <legend id= "checklist2"><strong>Weight Progress</strong></legend> 
          <label id="sumLl">Input Current Weight</label>           <br>
          <input type="text" name="weight" size="4" id="sumLW"> <label id="sumLWT"> lbs</label>
          <br>
          <input id="weightC" type="button" value="See Weight Progress" /> 
      </div>
*/