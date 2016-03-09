/*
*   Bookmarklet.js
*/

import { addNodes, removeNodes } from './utils/dom';
import { MessageDialog } from './utils/dialog';
export { Bookmarklet };

function Bookmarklet (globalName, params) {
  // use singleton pattern
  if (typeof window[globalName] === 'object')
    return window[globalName];

  this.cssClass = params.cssClass;
  this.msgTitle = params.msgTitle;
  this.msgText  = params.msgText;
  this.params   = params;
  this.show     = false;

  let dialog = new MessageDialog();
  window.addEventListener('resize', event => {
    removeNodes(this.cssClass);
    dialog.resize();
    this.show = false;
  });

  window[globalName] = this;
}

Bookmarklet.prototype.run = function () {
  let dialog = new MessageDialog();

  dialog.hide();
  this.show = !this.show;

  if (this.show) {
    if (addNodes(this.params) === 0) {
      dialog.show(this.msgTitle, this.msgText);
      this.show = false;
    }
  }
  else {
    removeNodes(this.cssClass);
  }

  return this.show;
};
