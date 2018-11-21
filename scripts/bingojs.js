var usedNums = new Array(76);

var phrases = [
	//Ads
	'Sam mentions Casper Mattresses',
	'Harry\'s Razors',
	'Quip Toothbrushes',
	'Blue Apron',
	'Liquid I.V.',
	'Third love / \"nice gams\"',
	'Just Coffee Co-Op',
	
	//Impressions
	'Trump impression',
	'Michael does an impression',
	'Michael does a Sam impression',
	'Right\-wing Mandela impression',
	'Nation of Islam Obama impression',
	'Maoist Bernie Sanders impression',
	'Mafioso Hillary Clinton impression',
	'Covfefe Annan impression',
	'Ivanka date\-night joke',
	'Russian accent / impression',
	
	
	//Soundboard
	'\"Mf\'er, I want more iced tea\"',
	'\"Fucking corporate sellout\"',
	'\"Competition would start kicking in\"',
	'\"Put down that pipe, and get my pipe up\"',
	'\"That\'s a fucking good point\"',
	'\"Get those white guys, get \'em\"',
	
	//Callers
	'John from San Antonio calls in',
	'Ronald Raygun calls in',
	'Ronald Raygun impersonates John from San Antonio',
	'Libertarian calls in',
	'Caller asks \"is this me?\", Sam responds \"this is you"',
	'Mindy calls in',
	'Jeff from Georgia calls in',
	'Caller defends Sam Harris',
	'Caller argues about I.Q.',
	
	//Music
	'Jimmy Reefercake song',
	'TART\'s MR Fun Remix is played',
	'DJ Danarchy\'s Fun-Half Remix is played\"',
	'\'La poupee qui fait non\' is heard',
	
	//Catchphrases - Michael
	'\"Do you see\?\"',
	
	//Catchphrases - Sam
	'Sam says \"Gotta be quick\"',
	'Sam says \"Gotta jump\"',
	'Zero sum game',
	'\"Pause it for one second\" / \"Pause it"',
	'Sam says \"To the extent that"',
	'Sam uses the word \'Bonafides\'',
	'Sam says \"It\’s stunning\"',
	'Sam says \"In some respects...\"',
	'Sam says \"a function of...\"',
	'Sam says \'Magnanimous\'',
	
	//Catchphrases - Jamie
	'Jamie Says: \"hell yeah\"',
	'Jamie: \"As an anarchist / socialist / marxist...\"',
	'\"Fully automated gay space luxury communism\"',
	
	//Guests
	'Benjamin Dixon as a guest',
	'Judy Gold as a guest',
	'Digby as a guest',
	'Marcy Wheeler as a guest',
	
	//Plugs
	'Literary Hangover is mentioned',
	'The Antifada is mentioned',
	'TMBS is mentioned',
	
	//Beefs
	'Jimmy Dore is mentioned',
	'Dave Rubin is mentioned',
	'Jordan Peterson is mentioned',
	'Dennis Miller is mentioned',
	
	//Misc
	'\*Background laughter\*',
	'Technical problems',
	'Phone system is down',
	
	//Common events
	'Michael mentions Lula',
	'Jamie is interrupted',
	'Michael is off sick',
	'Sam attempts a foreign language',
	'Sam mis-pronounces a name',
	'Sam attempts a foreign language',
	'Sam impedes on Michael\'s free speech',
	
	//Rare events
	'Sam drops an F-bomb',
	'Brendan speaks',
	'Matt references literature',
	'Judy Gold drops the F-bomb',
	'Michael is hosting',
	'Michael mentions his book',
	'Sam/Michael lose patience with a caller',
	
	];

	
	
(function() {
  var prev;
 
    document.body.onmouseover = handler;
 
  
  function handler(event) {
    if (event.target === document.body ||
        (prev && prev === event.target)) {
      return;
    }
    if (prev) {
      prev.className = prev.className.replace(/\bhighlight\b/, '');
      prev = undefined;
    }
    if (event.target) {
      prev = event.target;
      prev.className += "highlight";
    }
  }
  
})();	
	
	
	
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}	
	

function newCard() {
	//Randomly order the list of phrases
	phrases = shuffle(phrases);
	
	//Starting loop through each square card
	for(var i=0; i < 25; i++) {  //<--always this code for loops. change in red
		setSquare(i);
	}
}








function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;


	
	
	document.getElementById(currSquare).innerHTML = phrases[thisSquare%phrases.length];
}

function getNewNum() {
	return Math.floor(Math.random() * 75);
	
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
}
