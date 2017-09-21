/**
 * Twitter AutoFollow Code with Javascript
 * Please run on "browser console"
 */
var buttons = document.getElementsByClassName( 'EdgeButton--secondary' ); // get all follow buttons
var i = 0; // counter
var timing = 500; // repeat time from ms

setInterval(function(){
	buttons[i].click();
	i++;
},timing);
