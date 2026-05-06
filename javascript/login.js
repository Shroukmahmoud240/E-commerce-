let username = document.querySelector("#username")
let password = document.querySelector("#pwd")

let getUsername = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

let loginBtn = document.querySelector("#logbtn")

loginBtn.addEventListener("click", function(e) {
    e.preventDefault()

    if (username.value.trim() === "" || password.value.trim() === "") {
        alert("Please enter missing data")
    } else {
        if (
            getUsername &&
            getPassword &&
            getUsername.trim().toLowerCase() === username.value.trim().toLowerCase() &&
            getPassword.trim() === password.value.trim()
        ) {
            alert("Login successful!")
            setTimeout(() => {
                window.location = "index.html"
            }, 1000)
        } else {
            alert("Username or password is incorrect, please try again")
        }
    }
})
