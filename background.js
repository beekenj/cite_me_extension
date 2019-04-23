// backgound.js

chrome.runtime.onMessage.addListener(reciever);

function reciever(request, sender, sendResponse) {
	// Set global vars to message results
	def_title = request.title;
	title = request.title;
	url = request.url;
}

// Context Menus:
chrome.contextMenus.create({
	"title": "Clear Citations",
	"contexts": ["page"],
	"onclick": clearCite
});

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

chrome.contextMenus.create({
	"title": "Cite Source Name",
	"contexts": ["selection"],
	"onclick": webHandler
});

chrome.contextMenus.create({
	"title": "Cite 2nd Author",
	"contexts": ["selection"],
	"onclick": auth2Handler
});

chrome.contextMenus.create({
	"title": "Cite 3rd Author",
	"contexts": ["selection"],
	"onclick": auth3Handler
});

// Click Handlers:


function ttlHandler() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "open"}, function(response) {
    title = response.rsp;
  });
});
}

function pubHandler() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "open"}, function(response) {
    pub = response.rsp;
  });
});
}

function authHandler() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "open"}, function(response) {
    author = response.rsp;
  });
});
}

function webHandler() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "open"}, function(response) {
    web = response.rsp;
  });
});
}

function auth2Handler() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "open"}, function(response) {
    author2 = response.rsp;
  });
});
}

function auth3Handler() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "open"}, function(response) {
    author3 = response.rsp;
  });
});
}

function clearCite() {
	title = def_title;
	author = undefined;
	author2 = undefined;
	author3 = undefined;
	pub = undefined;
	web = undefined;
;}