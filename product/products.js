var obj = JSON.parse(localStorage.getItem("User"));
console.log(obj);
document.getElementById("Welc").innerHTML = "Welcome! " + obj.Username;


var addToCartButtons = document.querySelectorAll(".cartadd")
for (var i = 0; i < addToCartButtons.length; i++){
  var button = addToCartButtons[i]
  button.addEventListener('click',addToCartClicked)
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.querySelector('.product-desc').innerText
    var price = shopItem.querySelector('.price').innerText
    var imageSrc = shopItem.querySelector('.picture').src
    var quantity = 1
    let itemData = []

    if (localStorage.getItem("itemData") != null) {
        itemData = JSON.parse(localStorage.getItem("itemData"));
    }

    if(itemData.some((item)=>item.title === title)){
        alert(title + " has been added to cart.")
        return
    }

    let newData = new Data(title, price, imageSrc, quantity);

    itemData.push(newData);
    localStorage.setItem("itemData", JSON.stringify(itemData));

}

function Data(title, price, imageSrc, quantity){
    this.title = title;
    this.price = price;
    this.imageSrc = imageSrc
    this.quantity = quantity;
}
