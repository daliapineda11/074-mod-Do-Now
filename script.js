


$("button").click(function() {
    let name = $(".question1").val();
    let shopping = $(".question2").val();
    let times = $(".question3").val();
    //Write code below!
    $(".prediction").append(name + " you will have spent  " + shopping);

});