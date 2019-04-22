// content.js

// Grab title tag from page
let doc_title = document.getElementsByTagName("TITLE")[0].text

// Send default information
chrome.runtime.sendMessage({title: doc_title, url: window.location.href});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.msg == "open") {
    	let selectedText = window.getSelection().toString();
      sendResponse({rsp: selectedText});
    }
  });