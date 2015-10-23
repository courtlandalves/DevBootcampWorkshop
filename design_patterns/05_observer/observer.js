var students = (function(){

  var students = [];
  var listeners = {};

  var fire = function(type, student_id) {

    callbacks_to_fire = listeners[type];
    callbacks_to_fire.forEach( function(callback) {
      callback(student_id);
    });

  };

  return {
    add: function(student_id) {
      students.push( student_id );
      fire("add", student_id);
    },
    subscribe: function(type, callback) {
      listeners[type] = listeners[type] || [];
      listeners[type].push( callback );
    },
    unsubscribe: function(type, callback ) {
      index_to_delete = listeners[type].indexOf(callback);
      delete listeners[type][index_to_delete];
    }
  };

})();

