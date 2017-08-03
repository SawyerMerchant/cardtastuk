import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.scss";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cardTastukApp from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem("cardTastukState")
  ? JSON.parse(localStorage.getItem("cardTastukState"))
  : {};

const store = createStore(
  cardTastukApp,
  {
    user: persistedState.user,
    listsAll: persistedState.listsAll,
    shoppingCart: persistedState.shoppingCart,
    currentList: persistedState.currentList
  },
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem("cardTastukState", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
