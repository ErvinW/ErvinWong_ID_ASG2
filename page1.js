let products = document.getElementById("products")

let shopitemdata = [
    ];

let basket = [];

let productdata = [
    {
        id: "Item-1",
        ProductName: "Sony WH-1000xm5",
        Price: 499.90,
        ProdDesc: "Product desc of the XM5s",
        img: "Images/XM5.jpg"
    },
    {
        id: "Item-2",
        ProductName: "Sennheiser Momentum 4",
        Price: 499.00,
        ProdDesc: "Product desc of the Sennheisers",
        img: "Images/SennM4.jpg"
    },
    {   
        id: "Item-3",
        ProductName: "Sony WH-1000xm5",
        Price: 499.90,
        ProdDesc: "Product desc of the XM5s",
        img: "Images/XM5.jpg"
    },
    {
        id: "Item-4",
        ProductName: "Sony WH-1000xm5",
        Price: 499.90,
        ProdDesc: "Product desc of the XM5s",
        img: "Images/XM5.jpg"
    }]

    for (let i = 0; i<productdata.length; i++){
        let Root = document.querySelector("#products")
        let html = document.createElement("div")
        html.setAttribute("id","data"+productdata[i].id)
        html.classList.add("Headphones")
        html.innerHTML = `
        <img width = "300" src= ${productdata[i].img} alt=""></img>
        <div class="productdeets">
            <h2>${productdata[i].ProductName}</h2>
            <p>${productdata[i].ProdDesc}</p>
            <div class="price-amt">
                <h2>$${productdata[i].Price}</h2>
                <div class="button">
                    <i id = "Add${productdata[i].id}" class="bi bi-plus-lg"></i>
                    <div id=${productdata[i].id} class="Quantity">0</div>
                    <i id = "Subtract${productdata[i].id}" class="bi bi-dash-lg"></i>
                </div>
            </div>
        </div>
        `
        
        Root.appendChild(html)
        document.getElementById("Add" + productdata[i].id).addEventListener("click", function(){let selectedItem = productdata[i].id;
            let search = basket.find((x) => x.id === selectedItem.id);
          
            if (search === undefined) {
              basket.push({
                id: selectedItem.id,
                item: 1,
              });
            } else {
              search.item += 1;
            }
            console.log(basket);
            localStorage.setItem("data", JSON.stringify(basket));})


        document.getElementById("Subtract" + productdata[i].id).addEventListener("click", function(){let selectedItem = productdata[i].id;
             let search = basket.find((x) => x.id === selectedItem.id);

            if (search === undefined) return;
            else if (search.item === 0) return;
            else {
                search.item -= 1;
            }
            basket = basket.filter((x) => x.item !== 0);
            console.log(basket);
            localStorage.setItem("data", JSON.stringify(basket));})
        





    }

        