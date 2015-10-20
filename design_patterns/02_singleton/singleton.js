var LoggerSingleton = (function(){

  var instance;
  
  return {
    get_instance: function() {

      if( !instance ) {
        // This is annoying stuff that needs to happen but can only happen once
        var object = new Object();
        object.user_id = Math.random();
        instance = object;
      }

      return instance;
    }
  };

})();

