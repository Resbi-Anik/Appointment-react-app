import { SET_SELECT_MONTH_VALUE} from "../../constants/selectMonth";
const initialState = {
  selectMonth: new Date().getMonth() + 1,
};


export default function userMonthReducer(state = initialState, action) {
  // console.log("state",state.user);
  switch (action.type) {
    case SET_SELECT_MONTH_VALUE:
      return {
        ...state,
        selectMonth: action.value
      };
    default:
      return state;
  }
}
