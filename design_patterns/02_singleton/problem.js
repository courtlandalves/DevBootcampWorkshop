var LoggerSingleton = (function(){
  
  return {
    get_instance: function() {

      // This is annoying stuff that needs to happen but can only happen once
      var object = new Object();
      object.user_id = Math.random();

      return object;
    }
  };

})();
