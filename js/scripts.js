$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var adjective1Input = $("input#adjective1").val();
    var person1Input = $("input#person1").val();
    var animal1Input = $("input#animal1").val();
    var animal2Input = $("input#animal2").val();
    var verbpastInput = $("input#verbpast").val();
    var adjective2Input = $("input#adjective2").val();
    var adjective3Input = $("input#adjective3").val();


    $(".adjective1").append(adjective1Input);
    $(".person1").append(person1Input);
    $(".animal1").append(animal1Input);
    $(".animal2").append(animal2Input);
    $(".verbpast").append(verbpastInput);
    $(".adjective2").append(adjective2Input);
    $(".adjective3").append(adjective3Input);

    $("#story").show();

    event.preventDefault();
  });
});
