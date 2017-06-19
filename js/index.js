$("#new-quote-text").on("click",function(){
  $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(json){
    $("#author").html("<em>- "+json.author+"</em>");
    $(".quote-text").html(json.quote);
    $("#twitter").prop("href","https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22" + json.quote + "%20-%20"+ json.author);
    var a = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var c = Math.floor(Math.random()*256);
  $(".quote").css("color",`rgb(${a},${b},${c})`);
  $(".quote-author").css("color",`rgb(${a},${b},${c})`);
  $("#twitter").css("background-color",`rgb(${a},${b},${c})`);
  $("#new-quote-text").css("background-color",`rgb(${a},${b},${c})`);
  $("body").css("background-color",`rgb(${a},${b},${c})`);
  })
})