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



let printproducts =()=>{
    return (products.innerHTML = productdata.map((i)=>{
        let {id, ProductName, Price, ProdDesc, img} = i; /* De-structuring */
        return  `
        <div id = product-id-${id} class="Headphones">    
        <img width = "300" src= ${img} alt="">
        <div class="productdeets">
            <h2>${ProductName}</h2>
            <p>${ProdDesc}</p>
            <div class="price-amt">
                <h2>$${Price}</h2>
                <div class="button">
                    <i onclick="decrement(${id})" class="bi bi-plus-lg"></i>
                    <div id=${id} class="Quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-dash-lg"></i>
                </div>
            </div>
        </div>
    </div>`;
    }).join(""));
};

printproducts();

let increment = (id) =>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else{
        search.id += 1;
    }

    //console.log(basket);
    update(selectedItem.id);
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search.item === 0)return;

    else{
        search.id -= 1;
    }

    //console.log(basket);
    update();
};

let update = (id) => {
    let search = basket.find((x)=>x.id === id);
    console.log(search);
    document.getElementById(id).innerHTML = search.item;
};


