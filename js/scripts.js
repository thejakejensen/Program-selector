$(document).ready(function(){
  $("#answerButton").click(function(event){
    var colorAnswer = parseInt($("#color").val())
    var hobbyAnswer = parseInt($("#hobby").val())
    var animalAnswer = parseInt($("#animal").val())
    var seasonAnswer = parseInt($("#season").val())
    // this var will add togethter the values
    var totalValue = foodAnswer + hobbyAnswer + animalAnswer + seasonAnswer;


  });
});
