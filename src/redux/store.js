// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { rootReducer } from "./rootReducer";

// const initialState = {};
// const middlewares = [thunk];
// let devtools = (x) => x;

// if (process.env.NODE_ENV !== "production" && process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
//     devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
// }

// export const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares), devtools));

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const persistConfig = {
    key: "persisted",
    storage,
    whitelist: ["tasks", "tags"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
