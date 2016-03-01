var Bookmarklet = require('./Bookmarklet');
var InfoObject = require('./InfoObject');
var constants = require('./utils/constants'),
    getAppName = constants.getAppName,
    getUniqueCssClass = constants.getUniqueCssClass;

/*
*   bookmarklet wrapper
*/
(function () {
  initHeadings().run()
})();

/*
*   headings.js: highlight heading elements
*/

function initHeadings () {
  const appName  = getAppName('Headings')
  const cssClass = getUniqueCssClass('Headings');

  let targetList = [
    {selector: "h1", color: "navy",   label: "h1"},
    {selector: "h2", color: "olive",  label: "h2"},
    {selector: "h3", color: "purple", label: "h3"},
    {selector: "h4", color: "green",  label: "h4"},
    {selector: "h5", color: "gray",   label: "h5"},
    {selector: "h6", color: "brown",  label: "h6"}
  ];

  let selectors = targetList.map(function (tgt) {return tgt.selector;}).join(', ');

  function getInfo (element, target) {
    let info = new InfoObject(element, 'HEADING INFO');
    info.addProps('level ' + target.label.substring(1));
    return info;
  }

  let params = {
    msgTitle:   "Headings",
    msgText:    "No heading elements (" + selectors + ") found.",
    targetList: targetList,
    cssClass:   cssClass,
    getInfo:    getInfo,
    dndFlag:    true
  };

  return new Bookmarklet(appName, params);
}
