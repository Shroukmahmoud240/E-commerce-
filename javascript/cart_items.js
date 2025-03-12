let addProducts = document.querySelector(".addproducts"); // div 
let productarray = localStorage.getItem("cartproducts"); // array (as string)
let priceDiv=document.querySelector(".totalPrice")
if (productarray) {
    let items = JSON.parse(productarray);
    draw(items);
}

function remove(Id) {
    let newArr = JSON.parse(localStorage.getItem("cartproducts")); // استرجاع المصفوفة المحدثة دائمًا
    let index = newArr.findIndex((item) => item.id === Id);

    if (index !== -1) { // التحقق إن العنصر موجود قبل الحذف
        newArr.splice(index, 1);
        draw(newArr);
        localStorage.setItem("cartproducts", JSON.stringify(newArr));
        
        // تحديث المتغير ليعكس التغيير
        productarray = JSON.stringify(newArr);
    }
}

// function with array parameter 
function draw(products){
    let y=products.map((item)=>{
        return `
        <div class="item ">
      <div class="image">
          <img src="${item.imageUrl1}" class="d-block w-100  " id="img" alt="...">
      </div><!-- /image -->
      <div class="item_info">
        <h4>${item.title}</h4>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <div class="price_div">
    <b><p>price :</p></b>
        <div class="price"> ${item.price}</div>
        </div><!-- /price_div -->
    </div><!-- /item_info -->
    <div class="fav">

    <i class="fa-solid fa-trash removecart" onclick="remove(${item.id})" data-bs-toggle="tooltip" title="Remove From Your Cart"></i>
    </div>
    </div>
  `
    }) 
    let totalPrice=calcPrice(products);
    console.log(products)
    addProducts .innerHTML=y;
    priceDiv.innerHTML=`<p id="totalPriceP">The total cost is :  </p> `+totalPrice+"$";

}


function calcPrice(array){
    let total=0 ;
    for(let i=0;i<array.length;i++){
        total+=array[i].count*array[i].price
    }
    return total;
}
