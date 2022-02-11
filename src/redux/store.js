import { createStore, applyMiddleware } from "redux";
import persistStore from "redux-persist/es/persistStore";
import appReducer from "./appReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  });

const store = createStore(appReducer, composeEnhancers(applyMiddleware()));

const persistor = persistStore(store);

export { store, persistor };
