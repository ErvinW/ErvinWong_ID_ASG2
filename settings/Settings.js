$(document).ready(function(){
  var obj = JSON.parse(localStorage.getItem("User"));
  document.getElementById("Cfm").style.visibility = "hidden";



  //Displays option to confirm user's choice to delete their account and removes it from the database
  //Upon second confirmation
  $("#Delete").on("click", function(e){
    e.preventDefault();
    console.log("ll");
    document.getElementById("Cfm").style.visibility = "visible";
    

    $("#Yes").on("click",function(f){
      f.preventDefault();
      console.log("Ok");



         //From RestDB
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://idasg2-d416.restdb.io/rest/useraccount/${obj.id}`,
        "method": "DELETE",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "63ce3dc1969f06502871b0f1",
          "cache-control": "no-cache"
        }
      }

      $.ajax(settings).done(function (response) {
        console.log("Delete successful");
        console.log(response);
        window.location.assign("DeleteAcc/Goodbye.html");
      });
  

    })


    $("#No").on("click", function(no){
      no.preventDefault();
      document.getElementById("Cfm").style.visibility = "hidden";

    })


    


   
  
  
  
  })

//Redirects user to another page after account is deleted
  $("#Edit").on("click", function(edit){
    edit.preventDefault();
    window.location.assign("/EditAccDeets/EditAccDeets.html");

  })
  



})




  