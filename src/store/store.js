import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = [thunk, createLogger({ collapsed: true })];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
