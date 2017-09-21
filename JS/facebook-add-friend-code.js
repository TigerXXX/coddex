/**
 * Twitter Auto Add Friend Code with Javascript
 * Please run on "browser console" in this URI : https://www.facebook.com/friends/requests
 */
var buttons = document.getElementsByClassName( 'FriendRequestAdd' ); // get all follow buttons
var i = 0; // counter
var timing = 500; // repeat time from ms

setInterval(function(){
	buttons[i].click();
	i++;
},timing);
