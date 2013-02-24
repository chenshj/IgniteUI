function insertNav () {
	var url = document.URL.split('/');
	url_e = url[url.length - 1];
	url_b = (url.length > 1 ? url[url.length - 2] : "");
	document.write('<iframe src="../nav.html?top=' + url_b + '/' + url_e + '" class="side-nav noprint"></iframe>');
}