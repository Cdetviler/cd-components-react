import {
  faSearch,
  faXmark,
  faTriangleExclamation,
  faCircleExclamation,
  faCheck,
  faMinus,
  faPlus,
  faCircleMinus,
  faCirclePlus,
  faCaretDown,
  faCaretRight,
  faCaretLeft,
  faCaretUp,
  faBars,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { variantType } from './Icon.types';

export const iconVariants = {
  search: faSearch,
  close: faXmark,
  warning: faTriangleExclamation,
  error: faCircleExclamation,
  check: faCheck,
  minus: faMinus,
  minusCircle: faCircleMinus,
  plus: faPlus,
  plusCircle: faCirclePlus,
  caretDown: faCaretDown,
  caretUp: faCaretUp,
  caretRight: faCaretRight,
  caretLeft: faCaretLeft,
  tripleLines: faBars,
  question: faQuestion,
};

const getVariant = (variant: variantType) => {
  const foundVariant = variant in iconVariants ? iconVariants[variant] : false;
  if (foundVariant) {
    return foundVariant;
  }
  console.error(`Variant: ${variant} does not exist in Icon component`);
  return '';
};

export default getVariant;
