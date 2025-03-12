// let userinfo=document.querySelector("#user_info")
// let userdata=document.querySelector("#user_data")
// let links=document.querySelector(".link1")
// let link=document.querySelector(".link2")
// let cart =document.querySelector("#cart");
// let ueserPage =document.querySelector("#ueserpage");
// let logout =document.querySelector("#logout")


// if(localStorage.getItem("username")){
//     links.remove()
//     link.remove()
//     userinfo.style.display="block"
//     cart.style.display="block"
//     ueserPage.style.display="block"
//     logout.style.display="block"
//     userdata.innerHTML="Welcom "+localStorage.getItem("username")
// }

// // /////////////   move to loin page when logout

// logout.addEventListener("click",function(){
//   localStorage.clear();
//   setTimeout(()=>{
//     window.location="login.html";
//   },1500)
// })
// // /////////////////////user page 
// let Userinof=document.querySelector("#userinfo")
// let getusername = localStorage.getItem("username")
// let getpassword =localStorage.getItem("password")
// let getemail =localStorage.getItem("email")
// let y=`
//   <center>
//     <i class="fa-solid fa-circle-user" id="user_account"></i>
//     <h3>${getusername} </h3>
//     <hr>
//   </center>
//   <h3  style="display: inline;">Email: <p style="display: inline;color:blue;" >${getemail}</p> </h3>`
//   Userinof.innerHTML=y;
//   // ////////////////////////////////////////////
// let dark_mode=document.querySelector("#mode_icon1")
// let light_mode=document.querySelector("#mode_icon2")
// let body =document.querySelector("body")

// function turn_light(){
//   body.style.backgroundColor="rgb(159, 212, 147)"
//   light_mode.style.display="none"
//   dark_mode.style.display="block"
// }
// function turn_dark(){
//   body.style.backgroundColor="rgb(8, 43, 1)"
//   dark_mode.style.display="none"
//   light_mode.style.display="block"
// }



// // /////////////////////////////////////////
// var products =document.getElementById("products");
// var list_of_producrs=[
//     {
//         id:1,
//         title:"num1",
//         price:100,
//         imageUrl1:"images/Screenshot 2025-01-14 151318.png" ,
//     count:1
//     },
//     {
//         id:2,
//         title:"num2",
//         price:200,
//         imageUrl1:"images/Screenshot 2025-01-14 151318.png" ,
//       count:1

//     },
//     {
//         id:3,
//         title:"num3",
//         price:300,
//         imageUrl1:"images/Screenshot 2025-01-14 151342.png" ,
//       count:1

     
//     },
//     {
//         id:4,
//         title:"num4",
//         price:400,
//         imageUrl1:"images/Screenshot 2025-01-14 151342.png" ,
//       count:1

//     },
//     {
//       id:5,
//       title:"num1",
//       price:100,
//       imageUrl1:"images/Screenshot 2025-01-14 151318.png" ,
//     count:1

//   },
//   {
//       id:6,
//       title:"num2",
//       price:200,
//       imageUrl1:"images/Screenshot 2025-01-14 151318.png" ,
//     count:1

//   },
//   {
//       id:7,
//       title:"num3",
//       price:300,
//       imageUrl1:"images/Screenshot 2025-01-14 151342.png" ,
//     count:1

//   },
//   {
//       id:8,
//       title:"num4",
//       price:400,
//       imageUrl1:"images/Screenshot 2025-01-14 151342.png" ,
//     count:1

//   },
//     {
//         id:9,
//         title:"num5",
//         price:500,
//         imageUrl1:"images/moringa mask.png" ,
//       count:1

//     },
//     {
//       id:10,
//       title:"num5",
//       price:500,
//       imageUrl1:"images/Screenshot 2025-01-14 151430.png" ,
//     count:1

//   },
//   {
//     id:11,
//     title:"num5",
//     price:500,
//     imageUrl1:"images/Screenshot 2025-01-14 151430.png" ,
//   count:1

// },
// {
//   id:12,
//   title:"num5",
//   price:500,
//   imageUrl1:"images/Screenshot 2025-01-14 151430.png" ,
// count:1

// },
// {
//   id:13,
//   title:"num5",
//   price:500,
//   imageUrl1:"images/Screenshot 2025-01-14 151430.png" ,
// count:1

// },
// {
//   id:14,
//   title:"num5",
//   price:500,
//   imageUrl1:"images/Screenshot 2025-01-14 151430.png" ,
// count:1

// },
// {
//   id:15,
//   title:"num5",
//   price:500,
//   imageUrl1:"images/Screenshot 2025-01-14 151430.png" ,
// count:1

// },
// {
//   id:16,
//   title:"num5",
//   price:500,
//   imageUrl1:"images/Screenshot 2025-01-14 151430.png" ,
// count:1

// }
// ];
// function Add(){
//     let y=list_of_producrs.map((item)=>{
//         return `
//         <div class="item ">
//       <div class="image">
//           <img src="${item.imageUrl1}" class="d-block w-100  " id="img" alt="...">
//       </div><!-- /image -->
//       <div class="item_info">
//         <h4>${item.title}</h4>
//         <p>Lorem ipsum dolor sit amet consectetur.</p>
//         <div class="price_div">
//           <b><p>price :</p></b>
//           <div class="price"> ${item.price}</div>
//         </div><!-- /price_div -->
//       </div><!-- /item_info -->
//       <div class="fav">
//       <i class="fa-solid fa-heart-circle-plus" id="favicon" ></i>
//       <button class="addcart" onclick="check(${item.id})">Add to Cart</button>
//       </div>
//     </div>
//   `
//     }) 
//     products.innerHTML=y;
      
// }
// Add();

// // function to color the favuorit icon
// // fav_icon=document.getElementById("favicon")
// // function colored(){

// //   if(fav_icon.style.color=="red"){
// //       fav_icon.style.color="black"
// //   }else{
// //       fav_icon.style.color="red"
// //   }
// // }
// // check function => to check the registeration

// function check(id){
//   if(localStorage.getItem("username")== null){
//     window.location="register.html"
//   }else{
//     AddToCart(id);

//   }
// }
// let items_num_span=document.querySelector(".items_num")
// let items_div=document.querySelector(".items_titles")
// let itemsarray=localStorage.getItem("cartproducts")?JSON.parse(localStorage.getItem("cartproducts")):[];


// function draw_in_cartDiv(){
//   if(itemsarray){
//     // items_div.innerHTML=""
//     itemsarray.map((item)=>{
//       items_div.innerHTML +=`
// <i class="fa-solid fa-circle-plus" onclick="increment(${item.id})"></i>
//       <p style="display:inline;">${item.title}</p>
//       <i class="fa-solid fa-circle-minus" id="minus_${item.id}" onclick="decrement(${item.id})" ></i>
//   <div id="number_${item.id}">${item.count}</div>
//           <br>
//       `
//       let minus = document.querySelector(`#minus_${item.id}`);
//       if(item.count===1||item.count<1){
//         minus.style.visibility="hidden"
//       }else{
//         minus.style.visibility="visible"
//       }
//     })
//     items_num_span.style.display="block"
//     items_num_span.innerHTML=itemsarray.length;
//   }
// }


// function AddToCart(id){

// let product_array = localStorage.getItem("cartproducts");
// product_array = product_array ? JSON.parse(product_array) : [];

// if (!product_array.some(item => item.id === id)) {
//     console.log("العنصر غير موجود، يمكن إضافته.");
//     let choosenItem=list_of_producrs.find((item)=>item.id===id)
//     // items_div.innerHTML+=`<p>${choosenItem.title}</p>`
//     items_div.innerHTML +=`
//     <i class="fa-solid fa-circle-plus" onclick="increment(${choosenItem.id})"></i>
//           <p style="display:inline;">${choosenItem.title}</p>
//           <i class="fa-solid fa-circle-minus" id="minus_${choosenItem.id}" onclick="decrement(${choosenItem.id})" ></i>
//       <div id="number_${choosenItem.id}">${choosenItem.count}</div>
//               <br>  `
//     // to add the item in the array and stro it in the localstorage 
//     itemsarray=[...itemsarray,choosenItem];
//     localStorage.setItem("cartproducts",JSON.stringify(itemsarray))
//   // to increase the number over the cart icon
//     let numberOfItems=document.querySelectorAll(".items_titles p")
//     items_num_span.style.display="block"
//     items_num_span.innerHTML=numberOfItems.length;

        

// }
// else{
//     increment(id)
//   }
 
// }


// let cart_products=document.querySelector(".cart_products")
// function veiwItems(){
//   if(cart_products.style.display=="block"){
//     cart_products.style.display="none"
//   }else{
//     cart_products.style.display="block"
//   }
// }

// function increment(id){
//   // getting data fron storage
//   let product_array = localStorage.getItem("cartproducts");
//   product_array = product_array ? JSON.parse(product_array) : [];
//   let y=product_array
//   let index = y.findIndex((item) => item.id === id);   //  finding index of the element
  
 
//   if (index !== -1) { // making sure that the element exists
//     y[index].count++   
//     let number_div = document.querySelector(`#number_${id} `);
//     if (number_div) {
//         number_div.innerHTML = y[index].count;
//     }
//   }


//   let minus = document.querySelector(`#minus_${id}`);
//   if( y&&y[index].count>0){
//     minus.style.visibility="visible"
//   }  
//   localStorage.setItem("cartproducts",JSON.stringify(y))      // editing data int the localstorage 
// }

// function decrement(id){
//   // getting data fron storage
//   let product_array = localStorage.getItem("cartproducts");
//   product_array = product_array ? JSON.parse(product_array) : [];
//   let y=product_array;
//   let index = y.findIndex((item) => item.id === id);     //  finding index of the element
//   if (index !== -1) { // making sure that the element exists
//     y[index].count--  

//     let number_div = document.querySelector(`#number_${id} `);
//     if ( y&&y[index].count > 0) {
//         number_div.innerHTML = y[index].count;
//     }
//   }

//   let minus = document.querySelector(`#minus_${id}`);
//   if (minus && y[index].count === 1) {
//       minus.style.visibility = "hidden";
//   }
//   localStorage.setItem("cartproducts",JSON.stringify(y))      // editing data int the localstorage 
// }

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



  // ///////////////////////////////////////////////////




// let products1 = document.getElementById("products1");
// let products2 = document.getElementById("products2");
// let products3 = document.getElementById("products3");
// let list_of_products = [
//     { id: 1, title: "Sedr Yamany", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 2, title: "Hene", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 3, title: "Moringa Mask", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 4, title: "Yaqtin Oil", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 5, title: "Namla Oil", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 6, title: "Arabian Meshat", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 7, title: "Qatran Oil", price: 100, imageUrl1: "images/qatran.png", count: 1 },
//     { id: 8, title: "Amla Bowder", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 9, title: "Nime Oil", price: 100, imageUrl1: "images/nime oil.png", count: 1 },
//     { id: 10, title: "Kittan Oil", price: 100, imageUrl1: " images/kettan.png", count: 1 },
//     { id: 11, title: "Moringa Oil", price: 100, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 12, title: "num12", price: 200, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 13, title: "num13", price: 300, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 14, title: "num14", price: 400, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 15, title: "num15", price: 400, imageUrl1: "images/moringa mask.png", count: 1 },
//     { id: 16, title: "num16", price: 400, imageUrl1: "images/moringa mask.png", count: 1 }
// ];

// function renderProducts(arr) {
//     let html = arr.map(item => `
//         <div class="item me-4">
//             <div class="image">
//                 <img src="${item.imageUrl1}"id="img" class="d-block w-100" alt="...">
//             </div>
//             <div class="item_info">
//                 <h4>${item.title}</h4>
//                 <p>Product description here.</p>
//                 <div class="price_div">
//                     <b>Price:</b> <span class="price">${item.price}</span>
//                 </div>
//             </div>
//             <div class="fav">
              
//                 <i class="fa-solid fa-cart-plus addcart" onclick="check(${item.id})" data-bs-toggle="tooltip" title="Add To Your Cart"></i>
//             </div>
//         </div>
//     `).join("");
//     products1.innerHTML = html;
//     products2.innerHTML = html;

// }
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

// function search(term){
//   let searched_item=[]
//   for(let i=0;i<list_of_products.length;i++){
//     if(list_of_products[i].title.toLowerCase().includes(term.toLowerCase())){
//       searched_item.push(list_of_products[i])
//       console.log("done")
//     }
//   }
//   renderProducts(searched_item);
// }

// let prev =document.querySelector("#prev") 
// let next =document.querySelector("#next") 
// function change1(){
//     prev.style.display="none"
//     next.style.display="block"
// }
// function change2(){
//     next.style.display="none"
//     prev.style.display="block"
// }
// search("number")