const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    console.log(document.cookie);
    if ((username === "Bob" || username === "Sally") && password === "434") {
        setCookie('username', username, 30);
        alert("You have successfully logged in.");
        window.location = 'home.html';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
});

