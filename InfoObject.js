import { getAccessibleName, getAccessibleDesc, getGroupingLabels } from './utils/getaccname';
import { getElementInfo } from './utils/info';
import { getAriaRole } from './utils/roles';

/*
*  nameIncludesDescription: Determine whether accName object's name
*  property includes the accDesc object's name property content.
*/
function nameIncludesDescription (accName, accDesc) {
  if (accName === null || accDesc === null) return false;

  let name = accName.name, desc = accDesc.name;
  if (typeof name === 'string' && typeof desc === 'string') {
    return name.toLowerCase().includes(desc.toLowerCase());
  }

  return false;
}

export default class {
  constructor (element, title) {
    this.title     = title;
    this.element   = getElementInfo(element);
    this.grpLabels = getGroupingLabels(element);
    this.accName   = getAccessibleName(element);
    this.accDesc   = getAccessibleDesc(element);
    this.role      = getAriaRole(element);

    // Ensure that accessible description is not a duplication
    // of accessible name content. If it is, nullify the desc.
    if (nameIncludesDescription (this.accName, this.accDesc)) {
      this.accDesc = null;
    }
  }

  addProps (val) {
    this.props = val;
  }
}
