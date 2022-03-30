const user = document.getElementById("userInput");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const firstName;
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = user.username.value;
    const password = user.password.value;
    firstName = username;
    if (username === "user" && password === "434") {
        alert("You have successfully logged in.");
        window.location = 'home.html';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
export {firstName};
