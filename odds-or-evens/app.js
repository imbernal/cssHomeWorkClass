var numWins = 0;
var numLosses = 0;

var wins = $('#wins');
var losses = $('#losses');
var userHand = $('#user-choice');
var compHand = $('#comp-choice');

var one = "<img class='img-responsive' src='https://upload.wikimedia.org/wikipedia/commons/0/04/Wrinkly_Fingers_001.JPG' alt='one finger'>";

var two = "<img class='img-responsive' src='http://previews.123rf.com/images/bloodua/bloodua1207/bloodua120700156/14472283-hand-with-two-fingers-up-in-the-peace-or-victory-symbol-also-the-sign-for-the-letter-v-in-sign-langu.jpg' alt='two fingers'>";

var cheater = "<img class='img-responsive' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hands-Fingers-Crossed.jpg/352px-Hands-Fingers-Crossed.jpg' alt='cheating fingers'>";

function getNumFingers() {
  return prompt('How many fingers would you like to throw down? Enter either 1 or 2.');
}

function getParity() {
  return prompt('What parity do you choose? Enter 0 for even and 1 for odd.');
}

function randChoice() {
  var randInt = Math.round(Math.random());
  return randInt + 1;
}

function userWon(user, comp, parity) {
  var sum = comp + user;
  var sumParity = sum % 2;
  return sumParity == parity;
}

function showPlayerHand(player, numHands) {
  if (numHands== 1) {
    player.html(one);
  } else if(numHands== 2) {
    player.html(two);
  } else {
    player.html(cheater);
  }
}

function showHands(user, comp) {
  showPlayerHand(userHand, user);
  showPlayerHand(compHand, comp);
}

function playGame() {
  var parity = getParity();
  var user = getNumFingers();
  var comp = randChoice();
  
  showHands(user, comp);
  if (userWon(user, comp, parity)) {
    numWins++;
    wins.html(numWins);
    alert("You've won! Congrats!");
  } else {
    numLosses++;
    losses.html(numLosses);
    alert("I'm sorry to say that you've lost. Play again?");
  }
}

$('#runPlay').click(function(){
  playGame();
});
