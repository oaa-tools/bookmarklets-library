function createBookmarkletHref (name, url) {
  var bookmarklet = "window.a11y" + name;
  var scriptname = name.toLowerCase() + '.js';
  var baseUrl = url.trim();
  if (!baseUrl.endsWith('/')) baseUrl += '/';

  return "javascript:if(" + bookmarklet + ")" + bookmarklet + ".run();else{(function(){var%20link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href='" + baseUrl + "build/styles.css';document.getElementsByTagName('head')[0].appendChild(link);var%20script=document.createElement('script');script.type='text/javascript';script.src='" + baseUrl + "build/" + scriptname + "';document.getElementsByTagName('head')[0].appendChild(script);})();}";
}
