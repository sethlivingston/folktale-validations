import { isObj } from 'ramda-adjunct';
import typeValidator from '../utils/typeValidator';

export default typeValidator(isObj, `Object`);