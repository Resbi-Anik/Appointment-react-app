
import {SET_USER_VALUE} from '../../constants/form';

export function setUserValue(value) {
  return {
    type: SET_USER_VALUE,
    value
  };
}