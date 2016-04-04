//To show the icon when called
chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		chrome.pageAction.show(sender.tab.id);
		sendResponse({});
	}
);
