let cart = JSON.parse(localStorage.getItem("Cart"))
console.log(cart)
let totalprice = 0
let user = localStorage.getItem("User")
console.log(user)
for (let i = 0; i<cart.length; i++){
    totalprice += cart[i].Price
    let Root = document.querySelector("#List")
    let html = document.createElement("div")
    html.setAttribute("id", i)
    html.classList.add("ToCheckOut")
    html.innerHTML = `
    <div id="${cart[i].ProductName}" class="item">
      <div class="cart-description" src="">
      <span class="cart-title">${cart[i].ProductName}</span>
      </div>
      <span class="cart-price">${cart[i].Price}</span>
      <div class="lastpart">
      <button id="remove" class="remove-btn" type="button">REMOVE</button>
      </div>
    </div>
    `

    $("#remove").on("click",function(x){
      x.preventDefault()
      totalprice -= cart[i].Price
      document.getElementById(cart[i].ProductName).innerHTML = ""
      document.getElementById("total-price").innerHTML = totalprice
    })
    
    Root.appendChild(html)

}



document.getElementById("total-price").innerHTML = totalprice
// var removeCartItemButtons = document.querySelectorAll(".remove-btn")
// for (var i = 0; i<removeCartItemButtons.length; i++){
//     var button = removeCartItemButtons[i]
//     button.addEventListener('click',function(event){
//         var buttonClicked = event.target
//         buttonClicked.parentElement.parentElement.parentElement.remove()
//     }) 
// }




function Order(Address, CardNo, OrderDeets, User_Email){
    this.Address = Address,
    this.CardNo = CardNo,
    this.OrderDeets = OrderDeets,
    this.User_Email = User_Email
    
}

$("#submit").on("click", function(e){
    e.preventDefault();

    let Address = $("#Address").val();
    let CardNo = $("#CardNo").val();
    let User_Email = localStorage.getItem("User").User_Email;
    let Price = 0;
    for (let i = 0; i<cart.length;i++){
        Price+= cart[i].Price;
    }
    console.log(Price);




    let jsondata = {
        "User_Email": User_Email,
        "Address": Address,
        "CardNo": CardNo,
        "Price": Price
      };



     //From RestDB
     var settings = {
       "async": true,
       "crossDomain": true,
       "url": "https://idasg2-d416.restdb.io/rest/order",
       "method": "POST",
       "headers": {
         "content-type": "application/json",
         "x-apikey": "63ce3dc1969f06502871b0f1",
         "cache-control": "no-cache"
       },
       "processData": false,
       "data": JSON.stringify(jsondata)
     }
     
     $.ajax(settings).done(function (response) {
       console.log(response);
     });

     window.location.assign("/CheckOutPage/CheckOut.html");
     
     

})
       