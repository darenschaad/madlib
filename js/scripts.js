$(document).ready(function() {
  var madlib = ["adjective1", "person1", "animal1", "animal2", "verbpast", "adjective2", "adjective3"];



  $("#blanks form").submit(function(event) {
    madlib.forEach(function(word){
      $("." + word).text($("input#" + word).val());
    })
    // var adjective1Input = $("input#adjective1").val();
    // var person1Input = $("input#person1").val();
    // var animal1Input = $("input#animal1").val();
    // var animal2Input = $("input#animal2").val();
    // var verbpastInput = $("input#verbpast").val();
    // var adjective2Input = $("input#adjective2").val();
    // var adjective3Input = $("input#adjective3").val();
    //
    //
    // $(".adjective1").text(adjective1Input);
    // $(".person1").text(person1Input);
    // $(".animal1").text(animal1Input);
    // $(".animal2").text(animal2Input);
    // $(".verbpast").text(verbpastInput);
    // $(".adjective2").text(adjective2Input);
    // $(".adjective3").text(adjective3Input);

    $("#story").show();

    event.preventDefault();
  });
});
