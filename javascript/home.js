

let userinfo = document.querySelector("#user_info");
let userdata = document.querySelector("#user_data");
let links = document.querySelector(".link1");
let link = document.querySelector(".link2");
let cart = document.querySelector("#cart");
let userPage = document.querySelector("#ueserpage");
let logout = document.querySelector("#logout");

if (localStorage.getItem("username")) {
    links.remove();
    link.remove();
    userinfo.style.display = "block";
    cart.style.display = "block";
    userPage.style.display = "block";
    logout.style.display = "block";
    userdata.innerHTML = "Welcome " + localStorage.getItem("username");
}

let cart_products=document.querySelector(".cart_products")
function veiwItems(){
  if(cart_products.style.display=="block"){
    cart_products.style.display="none"
  }else{
    cart_products.style.display="block"
  }
}
// logout
logout.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    }, 1500);
});

let Userinof=document.querySelector("#userinfo")
let getusername = localStorage.getItem("username")
let getpassword =localStorage.getItem("password")
let getemail =localStorage.getItem("email")
let y=`
  <center>
    <i class="fa-solid fa-circle-user" id="user_account"></i>
    <h3>${getusername} </h3>
    <hr>
  </center>
  <h3  style="display: inline;">Email: <p style="display: inline;color:blue;" >${getemail}</p> </h3>`
  Userinof.innerHTML=y;
  // ////////////////////////////////////////////

// renderProducts(list_of_products);

function check(id) {
    if (!localStorage.getItem("username")) {
        window.location = "register.html";
    } else {
        AddToCart(id);
    }
}

let items_num_span = document.querySelector(".items_num");
let items_div = document.querySelector(".items_titles");
let itemsarray = localStorage.getItem("cartproducts") ? JSON.parse(localStorage.getItem("cartproducts")) : [];



function draw_in_cartDiv() {
    items_div.innerHTML = "";
    if (itemsarray.length > 0) {
        itemsarray.forEach(item => {
            items_div.innerHTML += `
                <i class="fa-solid fa-circle-plus" onclick="increment(${item.id})"></i>
                <p style="display:inline;">${item.title}</p>
                <i class="fa-solid fa-circle-minus" id="minus_${item.id}" onclick="decrement(${item.id})"></i>
                <div id="number_${item.id}">${item.count}</div>
                <br>
            `;
        });
        items_num_span.style.display = "block";
        items_num_span.innerHTML = itemsarray.reduce((acc, item) => acc + item.count, 0);
    } else {
        items_num_span.style.display = "none";
    }

}
draw_in_cartDiv();
// /////////////////////////////////////////////////////

function AddToCart(id) {
    let existingItem = itemsarray.find(item => item.id === id);
    if (!existingItem) {
        let chosenItem = list_of_products.find(item => item.id === id);
        chosenItem.count = 1;
        itemsarray.push(chosenItem);
    } else {
        existingItem.count++;
    }
    localStorage.setItem("cartproducts", JSON.stringify(itemsarray));
    draw_in_cartDiv();
}

function increment(id) {
    let item = itemsarray.find(item => item.id === id);
    if (item) {
        item.count++;
        document.querySelector(`#number_${id}`).innerHTML = item.count;
        localStorage.setItem("cartproducts", JSON.stringify(itemsarray));
        draw_in_cartDiv();
    }
}

function decrement(id) {
    let index = itemsarray.findIndex(item => item.id === id);
    if (index !== -1) {
        itemsarray[index].count--;
        if (itemsarray[index].count < 1) {
            itemsarray.splice(index, 1);
        }
        localStorage.setItem("cartproducts", JSON.stringify(itemsarray));
        draw_in_cartDiv();
    }
}

