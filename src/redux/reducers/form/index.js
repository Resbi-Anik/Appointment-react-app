import { SET_USER_VALUE } from "../../constants/form";
// export
const initialState = {
  user: null,
};

export default function userReducer(state = initialState, action) {
  console.log('action2', action.type);
  switch (action.type) {
    case SET_USER_VALUE:
      return {
        ...state,
        user: action.value,
      };
    default:
      return state;
  }
}
