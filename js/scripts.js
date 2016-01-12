$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var adjective1Input = $("input#adjective1").val();
    var person1Input = $("input#person1").val();
    var animal1Input = $("input#animal1").val();
    var animal2Input = $("input#animal2").val();
    var verbpastInput = $("input#verbpast").val();
    var adjective2Input = $("input#adjective2").val();
    var adjective3Input = $("input#adjective3").val();


    $(".adjective1").text(adjective1Input);
    $(".person1").text(person1Input);
    $(".animal1").text(animal1Input);
    $(".animal2").text(animal2Input);
    $(".verbpast").text(verbpastInput);
    $(".adjective2").text(adjective2Input);
    $(".adjective3").text(adjective3Input);

    $("#story").show();

    event.preventDefault();
  });
});
