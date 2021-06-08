$( document ).ready(function() {
    console.log("ready");
    $( "#header" ).on( "click", function() {
      $("header").toggle("slow");
    });


    $( "#color" ).on( "click", function() {
      $("#Favecolor").toggle("slow");
    });
  });

