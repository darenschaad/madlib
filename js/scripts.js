$(document).ready(function() {
  var madlib = ["adjective1", "person1", "animal1", "animal2", "verbpast", "adjective2", "adjective3"];



  $("#blanks form").submit(function(event) {
    for(var i=0; i< madlib.length; i++){
      $("." + madlib[i]).text($("input#" + madlib[i]).val());
    }
    $("#story").show();

    event.preventDefault();
  });
});
