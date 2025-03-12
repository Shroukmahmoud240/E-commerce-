    let fname=document.querySelector("#fname")
    let lname =document.querySelector("#lname")
    let email =document.querySelector("#email")
    let password =document.querySelector("#pwd")
    let loginBtn =document.querySelector("#logbtn")

loginBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(fname.value===""||lname.value===""||password.value===""||email.value===""){
        alert("please enter missed data ")
    }else{
        localStorage.setItem("username",fname.value+" "+lname.value)
        // localStorage.setItem("last_name",lname.value) 
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        setTimeout(()=>{
            window.location="login.html"
        } ,1000)
    }
})