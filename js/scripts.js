$(document).ready(function(){
  $("#answerButton").click(function(event){
    var colorAnswer = parseInt($("#color").val())
    var hobbyAnswer = parseInt($("#hobby").val())
    var animalAnswer = parseInt($("#animal").val())
    var seasonAnswer = parseInt($("#season").val())
    var heroAnswer = parseInt($("#hero").val())
    // this var will add togethter the values
    var totalValue = colorAnswer + hobbyAnswer + animalAnswer + seasonAnswer + heroAnswer;

    if (totalValue <= 7 ){
      $(".python").toggle();
      $(".ruby").hide();
      $(".csharp").hide();
    }
    else if (totalValue <= 15 ){
      $(".ruby").toggle();
      $(".python").hide();
      $(".csharp").hide();
    }
    else if (totalValue <= 20 ){
      $(".csharp").toggle();
      $(".ruby").hide();
      $(".python").hide();
    }
    event.preventDefault();
  });
});
