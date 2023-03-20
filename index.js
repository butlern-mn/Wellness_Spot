console.log("Is running")

$(document).ready(function(){
  $(".dashboardButtons").hover(function(){
    $(this).css("background-color", "#29a3fc");
    }, function(){
    $(this).css("background-color", "#8FCDFB");
  });
});

