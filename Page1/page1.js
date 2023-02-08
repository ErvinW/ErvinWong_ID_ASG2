let products = document.getElementById("products")

let shopitemdata = [
    ];

let basket = [];
let productdata = [
    {
        id: "Item-1",
        ProductName: "Sony WH-1000XM5",
        Price: 499.90,
        img: "/Images/XM5.jpg",
    },
    {
        id: "Item-2",
        ProductName: "Sennheiser Momentum 4",
        Price: 499.00,
        img: "/Images/SennM4.jpg",

    },
    {   
        id: "Item-3",
        ProductName: "Sony WH-1000XM4",
        Price: 399.00,
        img: "/Images/XM4.jpg",
    },
    {
        id: "Item-4",
        ProductName: "Anker Soundcore Space 45",
        Price: 209.95,
        img: "/Images/SoundCore45.jpg",
        
    }, {
        id: "Item-5",
        ProductName: "Moondrop Aria",
        Price: 112.41,
        img: "/Images/Arias.jpg",
    },
    {
        id: "Item-6",
        ProductName: "Moondrop Chu",
        Price: 499.00,
        img: "/Images/Chu.jpg",

    },
    {   
        id: "Item-7",
        ProductName: "7Hz Salnotes Dioko",
        Price: 149.00,
        img: "/Images/Dioko.jpg",
    },
    {
        id: "Item-8",
        ProductName: "Sennheiser Momentum True Wireless 3",
        Price: 322.89,
        img: "/Images/SennM3.jpg",
        
    },
    {
        id: "Item-9",
        ProductName: "Beyerdyanmic DT990 Pro",
        Price: 228.00,
        img: "/Images/Beyer.jpg"
    },
    {
        id: "Item-10",
        ProductName: "Razer Hammerhead 2021 TWS",
        Price: 169.90,
        img: "/Images/Hammerhead.jpg"
    }
    ]

    for (let i = 0; i<productdata.length; i++){
        let Root = document.querySelector("#products")
        let html = document.createElement("div")
        html.setAttribute("id","data"+productdata[i].id)
        html.classList.add("Headphones")
        html.innerHTML = `
        <img width = 300px height = 185px src= ${productdata[i].img} alt=""></img>
        <div class="productdeets">
            <h2 id="ProductName">${productdata[i].ProductName}</h2>
            <div class="price-amt">
                <h2 id="price-amt">$${productdata[i].Price}</h2>
            </div>
            <button id = "cart${productdata[i].id}" class="cartadd">Add to Cart</button>
        </div>
        `
        
        Root.appendChild(html)
        
        $("#cart" + productdata[i].id).on("click", function(c){
            c.preventDefault();
            let itemAdded = [productdata[i].ProductName, productdata[i].Price]
            console.log(itemAdded);
            basket.push(itemAdded);
            document.getElementById("cartAmt").innerHTML = basket.length;
    
        })



    }


    $("#gotocart").on("click", function(gocart){
        gocart.preventDefault();
        localStorage.setItem("Cart", basket);
        window.location.assign("/Shoppingcart/shoppingcart.html");

        
    })

   


  var obj = JSON.parse(localStorage.getItem("User"));
  document.getElementById("Welc").innerHTML = "Welcome! " + obj.Username;

