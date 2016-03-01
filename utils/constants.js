/*
*   constants.js
*/

module.exports = {
  getAppName: getAppName,
  getUniqueCssClass: getUniqueCssClass
}

var CONSTANTS = {};
Object.defineProperty(CONSTANTS, 'appPrefix',   { value: 'a11y' });
Object.defineProperty(CONSTANTS, 'classPrefix', { value: 'a11yGfdXALm' });

function getAppName (name) {
  return CONSTANTS.appPrefix + name;
}

function getUniqueCssClass (name) {
  const prefix = CONSTANTS.classPrefix;

  switch (name) {
    case 'Forms':       return prefix + '0';
    case 'Headings':    return prefix + '1';
    case 'Images':      return prefix + '2';
    case 'Landmarks':   return prefix + '3';
    case 'Lists':       return prefix + '4';
    case 'Interactive': return prefix + '5';
  }

  return 'unrecognizedName';
}
