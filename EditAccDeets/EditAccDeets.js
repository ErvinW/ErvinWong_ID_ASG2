var obj = JSON.parse(localStorage.getItem("User"));  //Get the account info of the user currently logged in
console.log(obj.id);


//Get the new account information to replace old info
$("#submit").on("click", function(sub){
    sub.preventDefault();

    let User_Email = $("#email").val();
    let Username = $("#username").val();
    let User_password = $("#password").val();

    let jsondata = {
        "User_Email": User_Email,
        "Username": Username,
        "User_password": User_password
      };



    //From RestDB
    //Replaces the account details with the new saved details
var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://idasg2-d416.restdb.io/rest/useraccount/${obj.id}`,
    "method": "PUT",
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
  
  window.location.assign("/EditAccDeets/EditDone.html");  //redirects user to another page after change has been made.
})




