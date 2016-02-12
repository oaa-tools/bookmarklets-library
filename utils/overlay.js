/*
*   overlay.js: functions for creating and modifying DOM overlay elements
*/

import { getScrollOffsets, drag } from './utils';
let zIndex = 100000;

/*
*   createOverlay: Create overlay div with size and position based on the
*   boundingRect properties of its corresponding target element.
*/
export function createOverlay (tgt, rect, cname) {
  let scrollOffsets = getScrollOffsets();
  const MINWIDTH  = 68;
  const MINHEIGHT = 27;

  let node = document.createElement("div");
  node.setAttribute("class", [cname, 'oaa-element-overlay'].join(' '));
  node.startLeft = (rect.left + scrollOffsets.x) + "px";
  node.startTop  = (rect.top  + scrollOffsets.y) + "px";

  node.style.left = node.startLeft;
  node.style.top  = node.startTop;
  node.style.width  = Math.max(rect.width, MINWIDTH) + "px";
  node.style.height = Math.max(rect.height, MINHEIGHT) + "px";
  node.style.borderColor = tgt.color;
  node.style.zIndex = zIndex;

  let label = document.createElement("div");
  label.setAttribute("class", 'oaa-overlay-label');
  label.style.backgroundColor = tgt.color;
  label.innerHTML = tgt.label;

  node.appendChild(label);
  return node;
}

/*
*   addDragAndDrop: Add drag-and-drop and reposition functionality to an
*   overlay div element created by the createOverlay function.
*/
export function addDragAndDrop (node) {

  function hoistZIndex (el) {
    let incr = 100;
    el.style.zIndex = zIndex += incr;
  }

  function repositionOverlay (el) {
    el.style.left = el.startLeft;
    el.style.top  = el.startTop;
  }

  let labelDiv = node.firstChild;

  labelDiv.onmousedown = function (event) {
    drag(this.parentNode, hoistZIndex, event);
  };

  labelDiv.ondblclick = function (event) {
    repositionOverlay(this.parentNode);
  };
}
