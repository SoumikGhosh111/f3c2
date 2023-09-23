document.addEventListener("DOMContentLoaded", function () {
    let Name = document.getElementById("name");
    let Email = document.getElementById("email");
    let Token = document.getElementById("token");
    let Pass = document.getElementById("pass");
    let logOutButton = document.querySelector("button");
    function checkingLoginStatus() {
        const userData = JSON.parse(localStorage.getItem("user"));
        const sessionToken = userData.Token;
        if (!userData || !sessionToken) {
            window.location.href = "index.html";
        } else {
            Name.innerHTML = userData.name;
            Email.innerHTML = userData.email;
            Token.innerHTML = userData.Token;
            Pass.innerHTML = userData.password;
        }
    }

    logOutButton.addEventListener("click", () => {
        localStorage.removeItem("user");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);

    })

    checkingLoginStatus();
})