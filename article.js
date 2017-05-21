var author;

var title;

var description;

var url;

var urlToImage;

var publishedAt;

var weight;

var locale[];

function article(article, weight, locale[]) {
	this = JSON.parse(article)
	this.weight = weight;
	this.locale[] = locale;
}

function setImage(elementID) {
	document.getElementByID(elementID).src = this.urlToImage;
}

function setTitle(elementID) {
	document.getElementByID(elementID).innerHTML = this.title;
}

function setDescription(elementID) {
	document.getElementByID(elementID).innerHTML = this.description;
}

function setURL(elementID) {
	document.getElementByID(elementID).src = this.url;
}

function setPublishedDate(elementID) {
	document.getElementByID(elementID).title = this.publishedAt;
}