/*
*   images.js: highlight image elements
*/

import { Bookmarklet }  from './Bookmarklet';
import { InfoObject }   from './InfoObject';
import { getCssClass }  from './utils/constants';
import { addPolyfills } from './utils/utils';

(function () {
  initImages().run();
})();

function initImages () {

  addPolyfills();

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
    cssClass:   getCssClass("Images"),
    msgText:    "No image elements (" + selectors + ") found.",
    targetList: targetList,
    getInfo:    getInfo,
    dndFlag:    true
  };

  return new Bookmarklet(params);
}
