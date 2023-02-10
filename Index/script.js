$(document).ready(function(){
    localStorage.clear(); //Ensures that there is no unneccessary data stored
    const User_list = [];

    //Create user object
    function User(User_Email, User_password, Username, id){
        this.User_Email = User_Email,
        this.User_password = User_password,
        this.Username = Username,
        this.id = id
        
    }

    


        //From RestDB
        //Gets the info of the users from RestDB, adds the user into a list
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
            User_list.push( new User(response[i].User_Email, response[i].User_password, response[i].Username, response[i]._id));
            console.log(User_list[i])
       
        }
      });



      //Form Listener runs through the list to check if user info entered matches a user in the database. 
      // If details match, User is then redirected to page1.html where products are displayed
    $("#submit").on("click", function(e){
        e.preventDefault();


        let User_Email = $("#email").val();
        let User_password = $("#password").val();

        for (let i = 0; i < User_list.length; i++){
            if (User_Email == User_list[i].User_Email && User_password == User_list[i].User_password){
                localStorage.setItem("User", JSON.stringify(User_list[i]));
                window.location.assign("/Page1/page1.html"); 
            }
           

            
        }
        
    })

    

})






















  
