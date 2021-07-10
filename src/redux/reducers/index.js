// import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./form"

const appReducer = combineReducers({userReducer});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"],
};

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default persistReducer(persistConfig, rootReducer);
