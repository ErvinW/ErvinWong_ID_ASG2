$(document).ready(function(){

    $("#submit").on("click", function (e) {
        //prevent default action of the button 
        e.preventDefault();
    
        //[STEP 2]: let's retrieve form data
        //for now we assume all information is valid
        //you are to do your own data validation


        let User_Email = $("#email").val();
        let Username = $("#username").val();
        let User_password = $("#password").val();
        
    
        //[STEP 3]: get form values when user clicks on send
        //Adapted from restdb api
        let jsondata = {
          "User_Email": User_Email,
          "Username": Username,
          "User_password": User_password
        };




        //From RestDB
        //Sends new account info to the database
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-d416.restdb.io/rest/useraccount",
            "method": "POST",
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
            window.location.assign("/Index/Index.html"); 
        });
    })






       
})



