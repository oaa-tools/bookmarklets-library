function createBookmarkletHref (name) {
  var bookmarklet = "window.a11y" + name;
  var scriptname = name.toLowerCase() + '.js';

  var baseURI = document.baseURI;
  var baseURIArray = baseURI.split('/');
  var protocol = baseURIArray[0];
  var domain = baseURIArray[2];
  if (domain === 'accessibility-bookmarklets.org' || domain === 'oaa-tools.github.io' || domain === 'nhoyt.com') {
    if (protocol === 'http') baseURI = baseURI.replace(/http/, 'https');
  }
  return "javascript:if(" + bookmarklet + ")" + bookmarklet + ".run();else{(function(){var%20link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href='" + baseURI + "build/styles.css';document.getElementsByTagName('head')[0].appendChild(link);var%20script=document.createElement('script');script.type='text/javascript';script.src='" + baseURI + "build/" + scriptname + "';document.getElementsByTagName('head')[0].appendChild(script);})();}";
}
