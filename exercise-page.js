window.onload = main

function main () {
    days();
    document.querySelector("#genBut").onclick = generate;
    document.querySelector("#submit").onclick = flow;
    document.querySelector("#finish").onclick = finish;



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

function finish() {
    document.getElementById("back").style.display = "none";
    document.getElementById("finish").style.display = "none";
    document.getElementById("genBut").style.display = "inline";
    document.getElementById("w").style.display = "none";
    document.getElementById("desc").style.display = "none";
    document.getElementById("summary").style.display = "block";

}

function focus() {
    let l = document.getElementById("focus-choice");
    let foc = l.options[l.selectedIndex].value;
    document.getElementById("focus").innerHTML = foc;
}

function flow () {
    focus();
    closeForm();
    displayWork();  
}

function closeForm() {
    document.getElementById("form").style.display = "none";

}

function displayWork() {
    document.getElementById("back").style.display = "inline";
    document.getElementById("finish").style.display = "inline";
    document.getElementById("w").style.display = "block";
    document.getElementById("desc").style.display = "block";
}


/* function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width += 1;
        elem.style.width = width + "%";
      }
    }
  
}
*/