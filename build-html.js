/* eslint no-console: 0 */
/* The url defaults to localhost for development. */
/* To override, pass in as command-line argument. */
var url = process.argv[2] || "http://localhost/bookmarklets/";
console.log(buildHtml(url));

function buildHtml (url) {
  var html = '<ul>\n';
  html += createListItem('Landmarks', url);
  html += createListItem('Headings', url);
  html += createListItem('Lists', url);
  html += createListItem('Images', url);
  html += createListItem('Forms', url);
  html += createListItem('Interactive', url);
  html += '</ul>';
  return html;
}

function createListItem (name, url) {
  return '  <li><a href="' + createBookmarkletHref(name, url) + '">' + name + '</a></li>\n';
}

function createBookmarkletHref (name, url) {
  var bookmarklet = "window.a11y" + name;
  var scriptname = name.toLowerCase() + '.js';
  var baseUrl = url.trim();
  if (!baseUrl.endsWith('/')) baseUrl += '/';

  return "javascript:if(" + bookmarklet + ")" + bookmarklet + ".run();else{(function(){var%20link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href='" + baseUrl + "build/styles.css';document.getElementsByTagName('head')[0].appendChild(link);var%20script=document.createElement('script');script.type='text/javascript';script.src='" + baseUrl + "build/" + scriptname + "';document.getElementsByTagName('head')[0].appendChild(script);})();}";
}
