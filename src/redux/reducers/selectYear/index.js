import { SET_SELECT_YEAR_VALUE } from "../../constants/selectYear";
const initialState = {
  selectYear: new Date().getFullYear(),
};


export default function userYearReducer(state = initialState, action) {
  // console.log("state",state.user);
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
