
//calls backgroud.js to show icon on page action
chrome.extension.sendRequest({}, function(response) {});

//ajax call append statusbar.html to the page
$.get(chrome.extension.getURL("statusbar.html"), {}, function(data) {$('body').append(data);}, 'html');

//when document is ready
$(document).ready(function(){
	countCharacters();
	
});

//character count logic
function countCharacters() {
	var number = 0;

	$('input:text').each(function(i, obj){//selector is subjected to change for improvement
		number += $(obj).val().length;
	});

    $('span#Cc_totalCharacters').text(number + ' total characters');
	timeout = setTimeout('countCharacters()', 5000);
}//End countCharacters function