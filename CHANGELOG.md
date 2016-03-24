# CHANGELOG

## v0.2.1 &mdash; 2016-03-23

* Removed the 'return false' statement from the Bookmarklet run method. This
  was added to accommodate reuse of the library as a page script, but caused
  problems in IE.

* Deleted hrefutil.js, which was used to dynamically add the bookmarklet href
  JavaScript code to installation links on a web page. This did not work in IE,
  which evidently has undocumented security restrictions on setting the href
  property of a elements. Replaced it with build-html.js, which is a node.js
  script that accepts a command-line argument <url> that provides the value of
  the URL from which to load the scripts, and prints UL/LI markup to stdout
  with all of the bookmarklet links based on the given URL.

* Added an Array.prototype.find method polyfill (from Mozilla MDN) to make up
  for IE's lack of support for the ES6 find method.

* Added version information to bookmarklets-library in constants.js, starting
  with v0.2.1. The version ID is shared by all bookmarklets in the library and
  was added for improved issue tracking.

* Added console.log call to display bookmarklet title and version information
  in the browser console. The message only appears when a bookmarklet is loaded
  for a particular page (called from Bookmarklet.js constructor).
