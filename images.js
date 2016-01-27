/*
*   images.js: bookmarklet script for highlighting image elements
*/

import Bookmarklet from './Bookmarklet';
import InfoObject from './InfoObject';
import { imagesCss } from './utils/dom';

(function () {
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
    cssClass:   imagesCss,
    getInfo:    getInfo,
    dndFlag:    true
  };

  let blt = new Bookmarklet("a11yImages", params);
  blt.run();
})();
