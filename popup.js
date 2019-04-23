// popup scripts

// Access background.js global scope
let bgpage = chrome.extension.getBackgroundPage();

// Defince vars from background.js
let author = bgpage.author;
let author2 = bgpage.author2;
let author3 = bgpage.author3;
let title = bgpage.title;
let url = bgpage.url;
let pub = bgpage.pub;
let web = bgpage.web;

// Fill forms
function fillForm() {
	// Fill author field
	var input = document.getElementById("first");
	if(author != undefined) {
		input.value = "";
		input.value = getFirst(author);		
	}

	var input = document.getElementById("last");
	if(author != undefined) {
		input.value = "";
		input.value = getLast(author);		
	}

	// Fill 2nd author field
	var input = document.getElementById("first2");
	if(author2 != undefined) {
		document.getElementById("author2").style.display = "block";
		input.value = "";
		input.value = getFirst(author2);		
	}

	var input = document.getElementById("last2");
	if(author2 != undefined) {
		input.value = "";
		input.value = getLast(author2);		
	}

	// Fill 3rd author field
	var input = document.getElementById("first3");
	if(author3 != undefined) {
		input.value = "";
		input.value = getFirst(author3);		
	}

	var input = document.getElementById("last3");
	if(author3 != undefined) {
		input.value = "";
		input.value = getLast(author3);		
	}

	// Fill pub field
	var input = document.getElementById("pub");
	if(pub != undefined) {
		input.value = "";
		input.value = pub;
	}

	// Fill title field
	var input = document.getElementById("article_title");
	input.value = "";
	input.value = title;

	// Fill url field
	var input = document.getElementById("url");
	input.value = "";
	input.value = url;

	// Fill website title field
	// var type = document.getElementById("doc_type").value;
	if(document.getElementById("doc_type").value == "Webpage")
		var input = document.getElementById("website_title");
	else if(document.getElementById("doc_type").value == "Journal")
		var input = document.getElementById("journal_name");
	if(web != undefined) {
		input.value = "";
		input.value = web;		
	}
}

// Helper functions
function parseName(name) {
	let first = name.split(' ').slice(0, -1).join(' ');
	let last = name.split(' ').slice(-1).join(' ');
	return last + ', ' + first;
}

function getFirst(name) {
	return name.split(' ').slice(0, -1).join(' ');
}

function getLast(name) {
	return name.split(' ').slice(-1).join(' ');
}

// Implement button clicks
document.getElementById('load').onclick = fillForm;

// Form scripts
function addAuthorDisp(){
	if (document.getElementById("author2").style.display == "none"){
		document.getElementById("author2").style.display = "block";
		document.getElementById("authorLabel").style.display = "block";
	} else if (document.getElementById("author3").style.display == "none"){
		document.getElementById("author3").style.display = "block";
	} else {
		alert("You cannot add more than three authors");
	}
}

function changeForm(){
	var type = document.getElementById("doc_type").value;
	var style = document.getElementById("doc_style").value;
	if (type == "Book"){
		//no additional title required
		document.getElementById("website_input").style.display = "none";
		document.getElementById("journal_input").style.display = "none";
		document.getElementById("newspaper_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		if (style == "MLA"){
			//yes city of publication
			document.getElementById("city").style.display = "block";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//yes publisher
			document.getElementById("publisher").style.display = "block";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//no URL
			document.getElementById("URL_input").style.display = "none";
		} else if (style == "APA"){
			//yes city of publication
			document.getElementById("city").style.display = "block";
			//yes state of publication
			document.getElementById("state").style.display = "block";
			//yes publisher
			document.getElementById("publisher").style.display = "block";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//no URL
			document.getElementById("URL_input").style.display = "none";
		} else if (style == "Chicago"){
			//yes city of publication
			document.getElementById("city").style.display = "block";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//yes publisher
			document.getElementById("publisher").style.display = "block";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//yes edition
			document.getElementById("edition").style.display = "block";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//no URL
			document.getElementById("URL_input").style.display = "none";
		}
	} else if (type == "Webpage"){
		//yes website title, no other titles
		document.getElementById("website_input").style.display = "block";
		document.getElementById("journal_input").style.display = "none";
		document.getElementById("newspaper_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		if (style == "MLA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//yes publisher
			document.getElementById("publisher").style.display = "block";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//no page numbers
			document.getElementById("pages").style.display = "none";
			//yes date accessed
			document.getElementById("date_accessed_input").style.display = "block";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "APA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//no publication date
			document.getElementById("publication_date").style.display = "none";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//no page numbers
			document.getElementById("pages").style.display = "none";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "Chicago"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//yes publisher
			document.getElementById("publisher").style.display = "block";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//no page numbers
			document.getElementById("pages").style.display = "none";
			//yes date accessed
			document.getElementById("date_accessed_input").style.display = "block";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		}
	} else if (type == "Journal"){
		//yes journal title, no other titles
		document.getElementById("journal_input").style.display = "block";
		document.getElementById("website_input").style.display = "none";
		document.getElementById("newspaper_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		if (style == "MLA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//yes issue
			document.getElementById("issue").style.display = "block";
			//yes volume
			document.getElementById("volume").style.display = "block";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "APA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//yes issue
			document.getElementById("issue").style.display = "block";
			//yes volume
			document.getElementById("volume").style.display = "block";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "Chicago"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//yes volume
			document.getElementById("volume").style.display = "block";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		}
	} else if (type == "Newspaper"){
		//yes newspaper title, no other titles
		document.getElementById("newspaper_input").style.display = "block";
		document.getElementById("website_input").style.display = "none";
		document.getElementById("journal_input").style.display = "none";
		document.getElementById("magazine_input").style.display = "none";
		if (style == "MLA"){
			//yes city of publication
			document.getElementById("city").style.display = "block";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "APA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "Chicago"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//no page numbers
			document.getElementById("pages").style.display = "none";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		}
	} else if (type == "Magazine"){
		//yes magazine title, no other titles
		document.getElementById("magazine_input").style.display = "block";
		document.getElementById("website_input").style.display = "none";
		document.getElementById("journal_input").style.display = "none";
		document.getElementById("newspaper_input").style.display = "none";
		if (style == "MLA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "APA"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//yes page numbers
			document.getElementById("pages").style.display = "block";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		} else if (style == "Chicago"){
			//no city of publication
			document.getElementById("city").style.display = "none";
			//no state of publication
			document.getElementById("state").style.display = "none";
			//no publisher
			document.getElementById("publisher").style.display = "none";
			//yes publication date
			document.getElementById("publication_date").style.display = "block";
			//no edition
			document.getElementById("edition").style.display = "none";
			//no issue
			document.getElementById("issue").style.display = "none";
			//no volume
			document.getElementById("volume").style.display = "none";
			//no page numbers
			document.getElementById("pages").style.display = "none";
			//no date accessed
			document.getElementById("date_accessed_input").style.display = "none";
			//yes URL
			document.getElementById("URL_input").style.display = "block";
		}
	}
}

document.getElementById("addAuthor").onclick = addAuthorDisp;


document.getElementById("doc_type").onchange = changeForm;
document.getElementById("doc_style").onchange = changeForm;

// document.getElementById("submit").onclick = window.close;

