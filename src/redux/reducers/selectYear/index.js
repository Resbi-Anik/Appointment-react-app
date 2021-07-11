import { SET_SELECT_YEAR_VALUE } from "../../constants/selectYear";
const initialState = {
  selectYear: new Date().getFullYear(),
};


export default function userYearReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECT_YEAR_VALUE:
      return {
        ...state,
        selectYear: action.value
      };
    default:
      return state;
  }
}
