# CHANGELOG

## v0.2.2 &mdash; 2016-04-01

* Added a ```String.prototype.includes``` method polyfill (from Mozilla MDN) to
  compensate for IE's lack of support for the ES6 ```includes``` method.

* Added function ```addPolyfills``` to ```utils/utils.js``` and moved the
  ```String.prototype.includes``` and ```Array.prototype.find``` polyfill
  code into it. This function is now called by each top-level bookmarklet
  script in its ```init*``` function.

## v0.2.1 &mdash; 2016-03-23

* Removed the ```return false``` statement from the Bookmarklet ```run```
  method. This was added to accommodate reuse of the library as a page script,
  but caused problems in IE.

* Deleted ```hrefutil.js```, which was used to dynamically add the bookmarklet
  ```href``` JavaScript code to installation links on a web page. This did not
  work in IE, which evidently has undocumented security restrictions on
  dynamically changing the ```href``` property of ```a``` elements. Replaced it
  with ```build-html.js```, which is a ```node.js``` script that accepts a
  command-line argument ```<url>``` that provides the value of the URL from
  which to load the scripts, and prints ```ul/li``` markup to stdout with all
  of the bookmarklet links based on the given URL.

* Added an ```Array.prototype.find``` method polyfill (from Mozilla MDN) to
  compensate for IE's lack of support for the ES6 ```find``` method.

* Added bookmarklets-library version information in ```constants.js```,
  starting with ```v0.2.1```. The same version ID is shared by all bookmarklets
  in the library and was added for improved issue tracking.

* Added ```console.log``` call to display bookmarklet title and version
  information in the browser console. The message only appears when a
  bookmarklet is first activated for a particular page (called from the
  ```Bookmarklet.js``` constructor method). Subsequent toggling prior to
  reloading the page does not cause the message to redisplay.
