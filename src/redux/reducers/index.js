import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./form";
import userMonthReducer from "./selectMonth";
import userYearReducer from "./selectYear";

const appReducer = combineReducers({
  userReducer,
  userMonthReducer,
  userYearReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer", "userMonthReducer", "userYearReducer"],
};

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default persistReducer(persistConfig, rootReducer);
