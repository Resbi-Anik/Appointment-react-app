// import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default persistReducer(persistConfig, rootReducer);
