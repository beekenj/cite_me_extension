// backgound.js

chrome.runtime.onMessage.addListener(reciever);

function reciever(request, sender, sendResponse) {
	// Set global vars to message results
	// author = request.author;
	title = request.title;
	url = request.url;
}

// Context Menus:
chrome.contextMenus.create({
	"title": "Cite Author",
	"contexts": ["selection"],
	"onclick": authHandler
});

chrome.contextMenus.create({
	"title": "Cite Title",
	"contexts": ["selection"],
	"onclick": ttlHandler
});

chrome.contextMenus.create({
	"title": "Cite Publisher",
	"contexts": ["selection"],
	"onclick": pubHandler
});

// Click Handlers:
function ttlHandler() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "open"}, function(response) {
    title = response.rsp;
    // console.log(response.rsp);
  });
});
}

function pubHandler() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "open"}, function(response) {
    pub = response.rsp;
    // console.log(response.rsp);
  });
});
}

function authHandler() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "open"}, function(response) {
    author = response.rsp;
    // console.log(author);
  });
});
}