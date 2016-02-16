function createBookmarkletHref (name) {
  var baseURI = document.baseURI;
  var bookmarklet = "window.a11y" + name;
  var scriptname = name.toLowerCase() + '.js';
  return "javascript:if(" + bookmarklet + ")" + bookmarklet + ".run();else{(function(){var%20link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href='" + baseURI + "build/styles.css';document.getElementsByTagName('head')[0].appendChild(link);var%20script=document.createElement('script');script.type='text/javascript';script.src='" + baseURI + "build/" + scriptname + "';document.getElementsByTagName('head')[0].appendChild(script);})();}";
}
