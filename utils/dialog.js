/*
*   dialog.js: functions for creating, modifying and deleting message dialog
*/

import { getScrollOffsets } from './utils';
export { MessageDialog };

/*
*   setBoxGeometry: Set the width and position of message dialog based on
*   the width of the browser window. Called by functions resizeMessage and
*   createMsgOverlay.
*/
function setBoxGeometry (dialog) {
  let width  = window.innerWidth / 3.2;
  let left   = window.innerWidth / 2 - width / 2;
  let scroll = getScrollOffsets();

  dialog.style.width = width + "px";
  dialog.style.left  = (scroll.x + left) + "px";
  dialog.style.top   = (scroll.y + 30) + "px";
}

/*
*   createMsgDialog: Construct and position the message dialog whose
*   purpose is to alert the user when no target elements are found by
*   a bookmarklet.
*/
function createMsgDialog (cssClass, handler) {
  let dialog = document.createElement("div");
  let button  = document.createElement("button");

  dialog.className = cssClass;
  setBoxGeometry(dialog);

  button.onclick = handler;

  dialog.appendChild(button);
  document.body.appendChild(dialog);
  return dialog;
}

/*
*   deleteMsgDialog: Use reference to delete message dialog.
*/
function deleteMsgDialog (dialog) {
  if (dialog) document.body.removeChild(dialog);
}

/*
*   MessageDialog: Wrapper for show, hide and resize methods
*/
function MessageDialog () {
  this.GLOBAL_NAME = 'a11yMessageDialog';
  this.CSS_CLASS = 'oaa-message-dialog';
}

/*
*   show: show message dialog
*/
MessageDialog.prototype.show = function (title, message) {
  const MSG_DIALOG = this.GLOBAL_NAME;
  let h2, div;

  if (!window[MSG_DIALOG])
    window[MSG_DIALOG] = createMsgDialog(this.CSS_CLASS, event => this.hide());

  h2 = document.createElement("h2");
  h2.innerHTML = title;
  window[MSG_DIALOG].appendChild(h2);

  div = document.createElement("div");
  div.innerHTML = message;
  window[MSG_DIALOG].appendChild(div);
};

/*
*   hide: hide message dialog
*/
MessageDialog.prototype.hide = function () {
  const MSG_DIALOG = this.GLOBAL_NAME;
  if (window[MSG_DIALOG]) {
    deleteMsgDialog(window[MSG_DIALOG]);
    delete(window[MSG_DIALOG]);
  }
};

/*
*   resize: resize message dialog
*/
MessageDialog.prototype.resize = function () {
  const MSG_DIALOG = this.GLOBAL_NAME;
  if (window[MSG_DIALOG])
    setBoxGeometry(window[MSG_DIALOG]);
};
