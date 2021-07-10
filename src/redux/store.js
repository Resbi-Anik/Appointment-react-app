import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "../redux/reducers";
export const store = createStore(rootReducer);
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
