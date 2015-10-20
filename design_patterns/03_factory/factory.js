var elementFactory = (function(){

  return {
    create: function(type, params) {

      var element;

      if (type == "paragraph") {
        element = new ParagraphElement();
      } else if (type == "image") {
        element = new ImageElement();
      }

      element.params = params;
      return element

    }
  };

})();

var ParagraphElement = function() {
  this.params = {};
  this.tag = "p";
}

var ImageElement = function() {
  this.params = {};
  this.tag = "img";
}
