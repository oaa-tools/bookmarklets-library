/*
*   lists.js: highlight list elements
*/

import { Bookmarklet } from './Bookmarklet';
import { InfoObject } from './InfoObject';
import { getUniqueCssClass } from './utils/constants';
import { countChildrenWithTagNames } from './utils/dom';

(function () {
  initLists().run();
})();

function initLists () {

  let targetList = [
    {selector: "dl", color: "olive",  label: "dl"},
    {selector: "ol", color: "purple", label: "ol"},
    {selector: "ul", color: "navy",   label: "ul"}
  ];

  let selectors = targetList.map(function (tgt) {return tgt.selector;}).join(', ');

  function getInfo (element, target) {
    let listCount;

    switch (target.label) {
      case 'dl':
        listCount = countChildrenWithTagNames(element, ['DT', 'DD']);
        break;
      case 'ol':
      case 'ul':
        listCount = countChildrenWithTagNames(element, ['LI']);
        break;
    }

    let info = new InfoObject(element, 'LIST INFO');
    info.addProps(listCount + ' items');
    return info;
  }

  let params = {
    appName:    "Lists",
    cssClass:   getUniqueCssClass("Lists"),
    msgText:    "No list elements (" + selectors + ") found.",
    targetList: targetList,
    getInfo:    getInfo,
    dndFlag:    true
  };

  return new Bookmarklet(params);
}
