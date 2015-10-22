var students = (function(){

  var students = [];

  return {
    setStudentIds: function(students_array) {
      students = students_array;
    },
    forEach: function( callback ) {
      students.forEach( callback );
    }
  };

})();

