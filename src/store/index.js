import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.warn("cek state store", store.getState());
});
export default store;
