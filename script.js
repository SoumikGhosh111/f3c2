document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#button");
    let Name = document.querySelector(".name");
    let Email = document.querySelector(".email");
    let Password = document.querySelector(".pw");
    let ConfirmPassword = document.querySelector(".cpw");
    let ErrorMessage = document.querySelector("#error");
    let signUpForm = document.querySelector("#SignUp");
    let loadAnimation = document.querySelector(".loadAnimation"); 
    let p = document.querySelector(".p"); 
    let view1 =  document.querySelector(".view-1"); 
    let view2 =  document.querySelector(".view-2");
    
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const userName = Name.value;
        const eml = Email.value;
        const Pass = Password.value;
        const cpss = ConfirmPassword.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!userName || !eml || !Pass || !cpss) {
            ErrorMessage.innerHTML = "Error: All fields are required";
        } else if (Pass !== cpss) {
            ErrorMessage.innerHTML = "Error: Please make sure that the password and confirm password matches";
        }
        else if (!emailPattern.test(eml)) {
            ErrorMessage.innerHTML = "Error: Not a valid email address";
        }
        const accessToken = Math.random().toString(36).substring(2, 18);
        const user = {
            name: userName,
            email: eml,
            password: Pass,
            Token: accessToken
        }
        localStorage.setItem("user", JSON.stringify(user));

        if (validation(userName, eml, Pass, cpss, accessToken) === true) {
            setTimeout(() => {
                window.location.href = "secondPage.html";
            }, 500);
        }
    })
    function validation(name, email, pass, cpss, access) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!name || !email || !pass || !cpss || !access) {
            return false;
        } if (cpss !== pass) {
            return false;
        }if(!emailPattern.test(email)){ 
            return false; 
        }
        return true;
    }

    // let inputField = document.querySelector("input"); 
    let border  = document.querySelector(".border"); 
    let border1 =document.querySelector(".border-1"); 
    let border2 = document.querySelector(".border-2"); 
    let border3 = document.querySelector(".border-3"); 
    Name.addEventListener("focus", ()=>{ 
        border.style.transform = "translateX(0)"; 
        border.style.transition = "all 0.5s ease-in-out"; 
    })
    Name.addEventListener("blur", ()=>{ 
        border.style.transform = "translateX(-100%)"; 
        border.style.transition = "all 0.5s ease-in-out";
    })

    Email.addEventListener("focus", ()=>{ 
        border1.style.transform = "translateX(0)"; 
        border1.style.transition = "all 0.5s ease-in-out"; 
    })
    Email.addEventListener("blur", ()=>{ 
        border1.style.transform = "translateX(-100%)"; 
        border1.style.transition = "all 0.5s ease-in-out";
    })

    Password.addEventListener("focus", ()=>{ 
        border2.style.transform = "translateX(0)"; 
        border2.style.transition = "all 0.5s ease-in-out"; 
    })
    Password.addEventListener("blur", ()=>{ 
        border2.style.transform = "translateX(-100%)"; 
        border2.style.transition = "all 0.5s ease-in-out";
    })

    ConfirmPassword.addEventListener("focus", ()=>{ 
        border3.style.transform = "translateX(0)"; 
        border3.style.transition = "all 0.5s ease-in-out"; 
    })
    ConfirmPassword.addEventListener("blur", ()=>{ 
        border3.style.transform = "translateX(-100%)"; 
        border3.style.transition = "all 0.5s ease-in-out";
    })
    view1.addEventListener("click", (e)=>{ 
        e.preventDefault();
        if(Password.type === "password"){ 
            Password.type = "text"; 
        }else{ 
            Password.type = "password"; 
        }
    })
    view2.addEventListener("click", (e)=>{ 
        e.preventDefault();
        if(ConfirmPassword.type === "password"){ 
            ConfirmPassword.type = "text"; 
        }else{ 
            ConfirmPassword.type = "password"; 
        }
    })
     
})
