import { SET_SELECT_YEAR_VALUE } from "../../constants/selectYear";

export function setSelectYearValue(value) {
  // console.log('value', value);
  return {
    type: SET_SELECT_YEAR_VALUE,
    value,
  };
}
