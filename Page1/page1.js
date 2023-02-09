let products = document.getElementById("products")

let shopitemdata = [
    ];


    function AddedtoCart(ProductName, Price){
        this.ProductName = ProductName,
        this.Price = Price
        
    }

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
        Price: 29.00,
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
        ProductName: "Sennheiser Momentum TWS 3",
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
    },
    {
        id: "Item-11",
        ProductName: "SteelSeries TUSQ",
        Price: 75.00,
        img: "/Images/SSTusq.jpg"
    },
    {
        id: "Item-12",
        ProductName: "Bose Quiet Comfort 35 Gaming",
        Price: 350.00,
        img: "/Images/QC35.jpg"
    },
    {
        id: "Item-13",
        ProductName: "G502 HERO",
        Price: 68.00,
        img: "/Images/G502.jpg"
    },
    {
        id: "Item-14",
        ProductName: "G305",
        Price: 35.00,
        img: "/Images/G305.jpg"
    },
    {
        id: "Item-15",
        ProductName: "Gpro Superlight",
        Price: 149.90,
        img: "/Images/GPro.jpg"
    },
    {
        id: "Item-16",
        ProductName: "Logitech Lift",
        Price: 85.00,
        img: "/Images/Lift.jpg"
    }
    ]

   



    $("#gotocart").on("click", function(gocart){
        gocart.preventDefault();
        localStorage.setItem("Cart", JSON.stringify(basket));
        window.location.assign("/Shoppingcart/shoppingcart.html");

        
    })

  $("#Mb").on("click", function(m){
    products.innerHTML = "";
    for (let i = 12; i<productdata.length; i++){
        let Root = document.querySelector("#products")
        let html = document.createElement("div")
        html.setAttribute("id","data"+productdata[i].id)
        html.classList.add("Mice")
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
            let itemAdded = new AddedtoCart(productdata[i].ProductName, productdata[i].Price)
            console.log(itemAdded);
            basket.push(itemAdded);
            document.getElementById("cartAmt").innerHTML = basket.length;
    
        })



    }
  })


  $("#Hp").on("click", function(m){
    products.innerHTML = "";
    for (let i = 0; i<12; i++){
        let Root = document.querySelector("#products")
        let html = document.createElement("div")
        html.setAttribute("id","data"+productdata[i].id)
        html.classList.add("Mice")
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
            let itemAdded = new AddedtoCart(productdata[i].ProductName, productdata[i].Price)
            console.log(itemAdded);
            basket.push(itemAdded);
            document.getElementById("cartAmt").innerHTML = basket.length;
    
        })



    }
  })


    


   
  
  
  
  

   


  var obj = JSON.parse(localStorage.getItem("User"));
  document.getElementById("Welc").innerHTML = "Welcome! " + obj.Username;

