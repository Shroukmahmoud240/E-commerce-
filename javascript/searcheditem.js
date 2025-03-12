





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






































let products1 = document.getElementById("products1");
let products2 = document.getElementById("products2");
let products3 = document.getElementById("products3");
let list_of_products = [
    { id: 1, title: "Sedr Yamany", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 2, title: "Hene", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 3, title: "Moringa Mask", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 4, title: "Yaqtin Oil", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 5, title: "Namla Oil", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 6, title: "Arabian Meshat", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 7, title: "Qatran Oil", price: 100, imageUrl1: "images/qatran.png", count: 1 },
    { id: 8, title: "Amla Bowder", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 9, title: "Nime Oil", price: 100, imageUrl1: "images/nime oil.png", count: 1 },
    { id: 10, title: "Kittan Oil", price: 100, imageUrl1: " images/kettan.png", count: 1 },
    { id: 11, title: "Moringa Oil", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 12, title: "num12", price: 200, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 13, title: "num13", price: 300, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 14, title: "num14", price: 400, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 15, title: "num15", price: 400, imageUrl1: "images/moringa mask.png", count: 1 },
    { id: 16, title: "num16", price: 400, imageUrl1: "images/moringa mask.png", count: 1 }
];

function renderProducts(arr) {
    let html = arr.map(item => `
        <div class="item me-4">
            <div class="image">
                <img src="${item.imageUrl1}"id="img" class="d-block w-100" alt="...">
            </div>
            <div class="item_info">
                <h4>${item.title}</h4>
                <p>Product description here.</p>
                <div class="price_div">
                    <b>Price:</b> <span class="price">${item.price}</span>
                </div>
            </div>
            <div class="fav">
              
                <i class="fa-solid fa-cart-plus addcart" onclick="check(${item.id})" data-bs-toggle="tooltip" title="Add To Your Cart"></i>
            </div>
        </div>
    `).join("");
    products1.innerHTML = html;
    products2.innerHTML = html;

}
renderProducts(list_of_products);

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

draw_in_cartDiv();

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

function search(term){
  let searched_item=[]
  for(let i=0;i<list_of_products.length;i++){
    if(list_of_products[i].title.toLowerCase().includes(term.toLowerCase())){
      searched_item.push(list_of_products[i])
      console.log("done")
    }
  }
  renderProducts(searched_item);
}

let prev =document.querySelector("#prev") 
let next =document.querySelector("#next") 
let circle1=document.querySelector(".circle1")
let circle2=document.querySelector(".circle2")
function change1(){
    prev.style.display="none"
    next.style.display="block"
     circle1.style.backgroundColor ="blue"
     circle2.style.backgroundColor ="gray"
}
function change2(){
    next.style.display="none"
    prev.style.display="block"   
   
       circle2.style.backgroundColor ="blue"
     circle1.style.backgroundColor ="gray"


}