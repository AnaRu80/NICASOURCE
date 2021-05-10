import { createStore, combineReducers } from "redux";

import qrReducer from "./reducers/qrReducer";

const rootReducer = combineReducers({
  qrReducer: qrReducer,
});

const store = createStore(rootReducer);

export default store;
