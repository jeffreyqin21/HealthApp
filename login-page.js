const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const key = document.getElementById("keyboard");
const clickOut = document.getElementById("header");

key.style.display = "none";
loginErrorMsg.style.opacity = 0;
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    if ((username === "Bob" || username === "Sally") && password === "434") {
        if(username === "Bob")
            localStorage.setItem('name', "Bob")
        else 
            localStorage.setItem('name', "Sally")
       window.location = './home.html';

    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

loginForm.addEventListener("click", (e) => {
    key.style.display = "inline"
})

clickOut.addEventListener("click", (e) => {
    key.style.display = "none"
})


