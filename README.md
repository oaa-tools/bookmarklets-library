# bookmarklets-library

To install the bookmarklets, please visit the [Accessibility Bookmarklets website](https://accessibility-bookmarklets.org).

A bookmarklet is a JavaScript snippet that can be run within a web browser and that typically performs an action related to the currently
loaded web page.

The bookmarklets in this repository have a particular purpose related to web accessibility: To visually highlight and provide relevant information for the elements on a web page that relate to a specific category of accessibility requirements.

These categories and their corresponding bookmarklets are currently broken down as follows:

* Landmarks
* Headings
* Images
* Lists
* Forms

Notes regarding the visual display and interactive behavior of accessibility bookmarklets:

* An outlined area (e.g., a heading outline with label 'h2') is referred
  to as an overlay. It has the same geometry as the element it outlines.
* Hovering over the label of an overlay (the solid-color rectangle in the
  top-right corner) will display a tooltip with information on the
  underlying element's type, ARIA role, and accessible name and description.
* You can move an overlay with mouse drag-and-drop using its label as the
  drag handle.
* After moving an overlay, double clicking its label will move the overlay
  back to its original position.
* The last overlay that was clicked or moved has the highest z-index of all
  overlays. Thus if the label of one overlay is partially obscured by the
  label of another, clicking the partially obscured label will expose the
  entire label.
* In some cases, one overlay may completely obscure another, hiding even
  the label of the other overlay. Although you can move the top overlay to
  expose the hidden one, we plan to address this issue by also adding
  page-level information that indicates how many overlays of each type
  were found on the page.
