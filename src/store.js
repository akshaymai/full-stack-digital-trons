import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { slotListReducer } from "./reducer/slotReducer";
import {
  apponaimentCreateReducer,
  apponaimentUpdateReducer,
} from "./reducer/apponaiment";
const reducer = combineReducers({
  slots: slotListReducer,
  appoiment: apponaimentCreateReducer,
  updateappoiment: apponaimentUpdateReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
