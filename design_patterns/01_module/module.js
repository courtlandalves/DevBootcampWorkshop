var auth = (function(){
  var password = "mypassword";

  return {
    login: function(attempt) {
      if(attempt == password) {
        console.log("Success!");
      } else {
        console.log("Wrong Password");
      }
    }
  }
})();

