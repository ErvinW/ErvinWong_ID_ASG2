let products = document.getElementById("products")

let shopitemdata = [
    ];

let basket = [];

let productdata = [
    {
        id: "Item-1",
        ProductName: "Sony WH-1000XM5",
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
<<<<<<< Updated upstream
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
=======
        ProductName: "Sony WH-1000XM4",
        Price: 399.00,
        ProdDesc: "Product desc of the XM4s",
        img: "Images/XM4.jpg",
    },
    {
        id: "Item-4",
        ProductName: "Anker Soundcore Space 45",
        Price: 209.95,
        ProdDesc: "Product desc of the 45s",
        img: "Images/SoundCore45.jpg",
        
    }, {
        id: "Item-5",
        ProductName: "Moondrop Aria",
        Price: 112.41,
        ProdDesc: "Product desc of the Arias",
        img: "Images/Arias.jpg",
    },
    {
        id: "Item-6",
        ProductName: "Moondrop Chu",
        Price: 499.00,
        ProdDesc: "Product desc of the Chus",
        img: "Images/Chu.jpg",

    },
    {   
        id: "Item-7",
        ProductName: "7Hz Salnotes Dioko",
        Price: 149.00,
        ProdDesc: "Product desc of the Diokos",
        img: "Images/Dioko.jpg",
    },
    {
        id: "Item-8",
        ProductName: "Sennheiser Momentum True wireless 3",
        Price: 322.89,
        ProdDesc: "Product desc of the SennM3s",
        img: "Images/SennM3.jpg",
        
>>>>>>> Stashed changes
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
                    <i id = "button${productdata[i].id}" class="bi bi-plus-lg"></i>
                    <div id=${productdata[i].id} class="Quantity">0</div>
                    <i id = "button2${productdata[i].id}" class="bi bi-dash-lg"></i>
                </div>
            </div>
        </div>
        `
        
        Root.appendChild(html)
        document.getElementById("button" + productdata[i].id).addEventListener("click", function(){console.log(productdata[i].id)})
        document.getElementById("button2" + productdata[i].id).addEventListener("click", function(){console.log(productdata[i].id)})
    }
   








<<<<<<< Updated upstream
=======

   

        
>>>>>>> Stashed changes
