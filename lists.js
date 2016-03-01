var Bookmarklet = require('./Bookmarklet');
var InfoObject = require('./InfoObject');
var constants = require('./utils/constants'),
    getAppName = constants.getAppName,
    getUniqueCssClass = constants.getUniqueCssClass;
var countChildrenWithTagNames = require('./utils/dom').countChildrenWithTagNames;

/*
*   bookmarklet wrapper
*/
(function () {
  initLists().run()
})();

/*
*   lists.js: highlight list elements
*/

function initLists () {
  const appName  = getAppName('Lists');
  const cssClass = getUniqueCssClass('Lists');

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
    msgTitle:   "Lists",
    msgText:    "No list elements (" + selectors + ") found.",
    targetList: targetList,
    cssClass:   cssClass,
    getInfo:    getInfo,
    dndFlag:    true
  };

  return new Bookmarklet(appName, params);
}
