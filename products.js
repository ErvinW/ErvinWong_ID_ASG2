var obj = JSON.parse(localStorage.getItem("User"));
document.getElementById("Welc").innerHTML = "Welcome! " + obj.Username;
