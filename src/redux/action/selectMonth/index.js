import { SET_SELECT_MONTH_VALUE } from "../../constants/selectMonth";

export function setSelectMonthValue(value) {
  return {
    type: SET_SELECT_MONTH_VALUE,
    value,
  };
}
