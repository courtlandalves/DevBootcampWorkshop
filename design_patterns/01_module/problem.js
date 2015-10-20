var auth = {
  password: "mypassword",

  login: function(attempt) {
    if(attempt == this.password) {
      console.log("Success!");
    } else {
      console.log("Wrong Password");
    }
  }

}


