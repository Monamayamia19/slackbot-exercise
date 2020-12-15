// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  {
    label: 'Would you rather!',
    prompt: 'Would you rather go shopping or out to eat?',
    handler: function () {
      return 'its 2020, solid food is for the weak! lets go shopping';
    },
    isCaseSensitive: false,
    isReply: true,
    isLitening: true
  },

  {
    label: 'Would you rather the aliens that make first contact be organics or robots',
     prompt: 'I would rather #{name} make first contact. ',
      handler: function (params) {
        
        if ( params.name === "robots"  ){
          return " really?" + params.name1 + "would be my last choice"
        }
        else  {
          return "See your smart!";
        }
      },
      isCaseSensitive: false,
      isReply: true,
      isLitening: true
    },
      {
        label: "Dance break",
        prompt:"#{playerTwo} challanges #{playerOne} to a dance off, who will win?",
        handler: function (params) {
          if (params.playerTwo > playerOne) {
            return params.playerOne + "cant move like me!";
          } 
          else if (params.playerOne === params.playerTwo) {
            return "Oh dang, I got a cramp, lets go again!";

          } 
          else {
            return params.playerTwo + " take your beating with some pride!";

          }
          
        }

      },
      
      {

      }

];
