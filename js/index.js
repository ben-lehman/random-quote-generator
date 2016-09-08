function chooseQuote(loq, k) {
  q = Math.floor(Math.random() * loq.length);
  if (q == k) {
    if (q > 0) {
      q -= 1;
    } else {
      q += 1;
    };
  };
  return q;
};

$(document).ready(function() {
  var l = ["It's the possibility of having a dream come true that makes life interesting." , "The secret of life, though, is to fall seven times and to get up eight times.","Everyone seems to have a clear idea of how other people should lead their lives, but none about his or her own.", "Every blessing ignored becomes a curse.","Perhaps it's impossible to wear an identity without becoming what you pretend to be.", "I do not think the forest would be so bright, nor the water so warm, nor love so sweet, if there were no danger in the lakes.", "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.", "What do you despise? By this are you truly known.", "The Fremen were supreme in that quality the ancients called \"spannungsbogen\" -- which is the self-imposed delay between desire for a thing and the act of reaching out to grasp that thing.", "Choose not to be harmed—and you won’t feel harmed. Don’t feel harmed—and you haven’t been.", "Focus on the moment, not the monsters that may or may not be up ahead."];

var cred = ["Paulo Coelho - The Alchemist", "Paulo Coelho - The Alchemist", "Paulo Coelho - The Alchemist", "Paulo Coelho - The Alchemist", "Orson Scott Card - Ender's Game", "C.S. Lewis - Out of the Silent Planet", "Frank Herbert - Dune", "Frank Herber - Dune", "Frank Herbert - Dune", "Ryan Holiday - The Obstacle is the Way", "Ryan Holiday - The Obstacle is the Way"];
  var index = chooseQuote(l, k);
  var k = index;
  $("#quote").text(l[index]);
  $("#credit").text(cred[index]);
  
  $(".tweet .twitter-share-button").remove();
  var tweet = $('<a></a>')
    .addClass("twitter-share-button")
    .attr('href', 'http://twitter.com/share')
    .attr('data-text', l[index]);
  $(".tweet").append(tweet);
  twttr.widgets.load();
  
  $("#new-quote").click(function() {
    index = chooseQuote(l, k);
    $(".tweet .twitter-share-button").remove();
    
    $("#quote").fadeOut(100, function() {
      $(this).text(l[index]).fadeIn(300);
    });
    
    $("#credit").fadeOut(100, function() {
      $(this).text(cred[index]).fadeIn(300);
    });
   
    var tweet = $('<a></a>')
    .addClass("twitter-share-button")
    .attr('href', 'http://twitter.com/share')
    .attr('data-text', l[index]);
    $(".tweet").append(tweet);
    twttr.widgets.load();
    k = index;
  });
});