# Modules

## Overview

This document describes the various modules in the bookmarklets-library
codebase.

## Primary Modules

### Bookmarklet.js

#### Description
The `Bookmarklet` function is a singleton object constructor whose purpose
is to store various parameters used for selecting particular elements from
the DOM and displaying or hiding the accessibility-related results for those
elements.

#### Notes
1. When the `Bookmarklet` object is instantiated, a reference to the object
is automatically stored as a property of the browser's global `window` object.
1. The `Bookmarklet` object's `run` method toggles between (a) selecting
elements and displaying the results for those elements, and (b) removing the
displayed results.

#### Exports
`Bookmarklet` : the constructor function

### InfoObject.js

#### Description
The `InfoObject` function is an object constructor whose purpose is to store
information associated with an element in the DOM.
