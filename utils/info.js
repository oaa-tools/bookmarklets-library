var namefrom = require('./namefrom'),
    getAttributeValue = namefrom.getAttributeValue,
    isLabelableElement = namefrom.isLabelableElement;

module.exports = {
  getElementInfo: getElementInfo,
  formatInfo: formatInfo
};

/*
*   info.js: Function for displaying information on highlighted elements
*/

/*
*   getElementInfo: Extract tagName and other attribute information
*   based on tagName and return as formatted string.
*/
function getElementInfo (element) {
  let tagName = element.tagName.toLowerCase(),
      elementInfo = tagName;

  if (tagName === 'input') {
    let type = element.type;
    if (type && type.length) elementInfo += ' [type="' + type + '"]';
  }

  if (tagName === 'label') {
    let forVal = getAttributeValue(element, 'for');
    if (forVal.length) elementInfo += ' [for="' + forVal + '"]';
  }

  if (isLabelableElement(element)) {
    let id = element.id;
    if (id && id.length) elementInfo += ' [id="' + id + '"]';
  }

  if (element.hasAttribute('role')) {
    let role = getAttributeValue(element, 'role');
    if (role.length) elementInfo += ' [role="' + role + '"]';
  }

  return elementInfo;
}

/*
*   formatInfo: Convert info properties into a string with line breaks.
*/
function formatInfo (info) {
  let value = '';
  let title = info.title,
      element = info.element,
      grpLabels = info.grpLabels,
      accName = info.accName,
      accDesc = info.accDesc,
      role = info.role,
      props = info.props;

  value += '=== ' + title + ' ===';

  if (element) value += '\nELEMENT: ' + element;

  if (grpLabels && grpLabels.length) {
    // array starts with innermost label, so process from the end
    for (let i = grpLabels.length - 1; i >= 0; i--) {
      value += '\nGRP. LABEL: ' + grpLabels[i].name + '\nFROM: ' + grpLabels[i].source;
    }
  }

  if (accName) {
    value += '\nACC. NAME: ' + accName.name + '\nFROM: ' + accName.source;
  }

  if (accDesc) {
    value += '\nACC. DESC: ' + accDesc.name + '\nFROM: ' + accDesc.source;
  }

  if (role) value += '\nROLE: ' + role;

  if (props) value += '\nPROPERTIES: ' + props;

  return value;
}
