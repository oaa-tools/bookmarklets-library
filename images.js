var Bookmarklet = require('./Bookmarklet');
var InfoObject = require('./InfoObject');
var constants = require('./utils/constants'),
    getAppName = constants.getAppName,
    getUniqueCssClass = constants.getUniqueCssClass;

/*
*   bookmarklet wrapper
*/
(function () {
  initImages().run()
})();

/*
*   images.js: highlight image elements
*/

function initImages () {
  const appName  = getAppName('Images')
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
