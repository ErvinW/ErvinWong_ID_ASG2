
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


       