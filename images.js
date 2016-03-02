/*
*   images.js: highlight image elements
*/

import { Bookmarklet } from './Bookmarklet';
import { InfoObject } from './InfoObject';
import { getAppName, getUniqueCssClass } from './utils/constants';

(function () {
  initImages().run();
})();

function initImages () {
  const appName  = getAppName('Images');
  const cssClass = getUniqueCssClass('Images');

  let targetList = [
    {selector: "area", color: "teal",   label: "area"},
    {selector: "img",  color: "olive",  label: "img"},
    {selector: "svg",  color: "purple", label: "svg"}
  ];

  let selectors = targetList.map(function (tgt) {return tgt.selector;}).join(', ');

  function getInfo (element, target) {
    return new InfoObject(element, 'IMAGE INFO');
  }

  let params = {
    msgTitle:   "Images",
    msgText:    "No image elements (" + selectors + ") found.",
    targetList: targetList,
    cssClass:   cssClass,
    getInfo:    getInfo,
    dndFlag:    true
  };

  return new Bookmarklet(appName, params);
}
