$(document).ready(function(){
  
    var magic8Ball = {};
    magic8Ball.listofanswers = ["It is certain.","Without a doubt.", "Yes, definitely.", "Most likely.", "Outlook good.", "Yes.","Ask again later.","Cannot predict now.","Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
   
    magic8Ball.getAnswer = function(question)
    {
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answer = this.listofanswers[randomAnswer];
      
      $("#8ball").effect( "shake" );
      $("#answer").text( answer );
      $("#answer").fadeIn(3000);
      $("#8ball").attr("src", "knutanswer.png");
  
      console.log(question);
      console.log(answer);
    };
    $("#answer").hide();
  
    var onClick = function()
    {
      $("#answer").hide();
      $("#8ball").attr("src", "knutanswer.png");
      var question = prompt("What do you want to know?");
      magic8Ball.getAnswer(question);
    };
    
    $("#questionButton").click( onClick );
  });