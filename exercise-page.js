window.onload = main

function main () {
 daily()

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

function daily() {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = days[d.getDay()];
    document.getElementById("date").innerHTML = day + "'s Focus: ";


    switch (day) {
        case "Sunday":
            document.getElementById("focus").innerHTML = "Cardio";
            break;
        case "Monday":
            document.getElementById("focus").innerHTML = "Arms";
            break;
        case "Tuesday":
            document.getElementById("focus").innerHTML = "Legs";
            break;
        case "Wednesday":
            document.getElementById("focus").innerHTML = "Chest";
            break;
        case "Thursday":
            document.getElementById("focus").innerHTML = "Back";
            break;
        case "Friday":
            document.getElementById("focus").innerHTML = "HIIT";
            break;
        case "Saturday":
            document.getElementById("focus").innerHTML = "Rest";
            break;
    }
}