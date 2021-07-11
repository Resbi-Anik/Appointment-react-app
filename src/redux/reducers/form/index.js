import { SET_USER_VALUE } from "../../constants/form";
const initialState = {
  user:[],
};


export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_VALUE:
      return {
        ...state,
        user: [...state.user, action.value]
      };
    default:
      return state;
  }
}
