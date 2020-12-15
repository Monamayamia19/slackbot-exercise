// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = false;

module.exports.botScripts = [
  // Write an interaction where one user says "I'm tired", the bot says "Wake up!"
  //
  {
    label: 'An Example Script',
    prompt: "i'm tired",
    handler: function () {
      return 'Wake up!';
    },
    
    isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },

  {
    label: 'Area of a circle',
    prompt: "What's the area of a circle with #{radiousCircle}?",
    handler: function calcArea (params){
      let circleOfArea = params.radiusCircle * paras.radiousCircle* Math.PI;
      return ('The area is' + circleOfArea);
    },
isListening: true, 

  },
  
  
  
  
  // mychatbot> I'm tired
  // mychatbot responds "Wake up!"
  // Write an interaction where one user asks the bot 
  // "What's the area of a circle with radius X?" where X is any number
  // The chatbot will respond to the user with the answer.
  // 
  // mychatbot> mychatbot What's the area of a circle with radius 5?
  // mychatbot responds to user "The area is 78.5398...."
  

  
  

  // Write an interaction where one user asks the bot 
  // "Tell me a story with NAME1 and NAME2" where NAME1 and NAME2 is any string
  // The chatbot will respond with the answer.
  // 
  // mychatbot> mychatbot Tell me a story with Jack and Jill
  // mychatbot responds to user "Jack and Jill went up the hill to fetch a pail of water
  
  {
    label: 'Tell Story', 
  prompt: "Tell me a story with #{NAME} and #{NAME}",
  handler: function (params){
  return params.NAME1 + ' and ' + params.NAME2 + ' Went up the hill to fetch a pail of water.';
},

isListening: true, 

}
];

