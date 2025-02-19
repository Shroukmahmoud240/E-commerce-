let username = document.querySelector("#username")
let password =document.querySelector("#pwd")

let getUsername = localStorage.getItem("username")
let getpassword =localStorage.getItem("password")
let loginBtn= document.querySelector("#logbtn")

loginBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value===""||password.value===""){
        alert("please enter missed data ")
    }else{
        if(getUsername&&getUsername.trim()===username.value &&getpassword&&getpassword.trim()===password.value){
            setTimeout(()=>{
                window.location="index.html"
            } ,1500)
   

        }else{
            alert("username or password is incorrect , please try again ")
        }
    }
})

