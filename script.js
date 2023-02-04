$(document).ready(function(){
    const User_list = [];


    function User(User_Email, User_password){
        this.User_Email = User_Email,
        this.User_password = User_password

        
    }

    


        //From RestDB
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-d416.restdb.io/rest/useraccount",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "63ce3dc1969f06502871b0f1",
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        //console.log(response);
        for (let i = 0; i < response.length; i++){
            User_list.push( new User(response[i].User_Email, response[i].User_password));
            console.log(User_list[i])
        }
      });



      //Form Listener
    $("#submit").on("click", function(e){
        e.preventDefault();


        let User_Email = $("#email").val();
        let User_password = $("#password").val();

        for (let i = 0; i < User_list.length; i++){
            if (User_Email == User_list[i].User_Email && User_password == User_list[i].User_password){
                localStorage.setItem("User", User_list[i]);
                window.location.assign("page1.html"); 
            }
           

            
        }
        
    })

    

})





















// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://idasg2-d416.restdb.io/rest/useraccount",
//     "method": "GET",
//     "headers": {
//       "content-type": "application/json",
//       "x-apikey": "63ce3dc1969f06502871b0f1",
//       "cache-control": "no-cache"
//     }
//   }
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });

  
