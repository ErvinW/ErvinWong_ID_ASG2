
let cart = JSON.parse(localStorage.getItem("Cart"))
console.log(cart)


for (let i = 0; i<cart.length; i++){
    let Root = document.querySelector("#List")
    let html = document.createElement("div")
    html.setAttribute("id", i)
    html.classList.add("ToCheckOut")
    html.innerHTML = `
        <div class="productdeets">
            <h2 id="ProductName">${cart[i].ProductName}</h2>
            <div class="price-amt">
                <h2 id="price-amt">$${cart[i].Price}</h2>
        `
    
    Root.appendChild(html)
}



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
    let Order = cart;
    let User_Email = localStorage.getItem("User").User_Email;



    let jsondata = {
        "Address": Address,
        "CardNo": CardNo,
        "Order": Order,
        "User_Email": User_Email
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

})
       