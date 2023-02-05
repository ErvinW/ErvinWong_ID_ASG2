$(document).ready(function(){

})

//From RestDB
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://idasg2-d416.restdb.io/rest/useraccount/*[User_Email : obj.User_Email, User_password : obj,User_password, Username : obj.Username]",
    "method": "DELETE",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63ce3dc1969f06502871b0f1",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  