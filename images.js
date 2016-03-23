/*
*   images.js: highlight image elements
*/

import { Bookmarklet } from './Bookmarklet';
import { InfoObject } from './InfoObject';
import { getUniqueCssClass } from './utils/constants';

(function () {
  initImages().run();
})();

function initImages () {

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
    appName:    "Images",
    cssClass:   getUniqueCssClass("Images"),
    msgText:    "No image elements (" + selectors + ") found.",
    targetList: targetList,
    getInfo:    getInfo,
    dndFlag:    true
  };

  return new Bookmarklet(params);
}
