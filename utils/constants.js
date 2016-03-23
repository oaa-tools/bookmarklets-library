/*
*   constants.js
*/

export { getGlobalName, getTitle, getUniqueCssClass, getVersion };

var CONSTANTS = {};
Object.defineProperty(CONSTANTS, 'classPrefix',  { value: 'a11yGfdXALm' });
Object.defineProperty(CONSTANTS, 'globalPrefix', { value: 'a11y' });
Object.defineProperty(CONSTANTS, 'title',        { value: 'oaa-tools/bookmarklets' });
Object.defineProperty(CONSTANTS, 'version',      { value: '0.2.1' });

function getGlobalName (appName) {
  return CONSTANTS.globalPrefix + appName;
}

function getUniqueCssClass (appName) {
  const prefix = CONSTANTS.classPrefix;

  switch (appName) {
    case 'Forms':       return prefix + '0';
    case 'Headings':    return prefix + '1';
    case 'Images':      return prefix + '2';
    case 'Landmarks':   return prefix + '3';
    case 'Lists':       return prefix + '4';
    case 'Interactive': return prefix + '5';
  }

  return 'unrecognizedName';
}

function getTitle ()   { return CONSTANTS.title }
function getVersion () { return CONSTANTS.version }
