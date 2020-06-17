import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";
import Spinner from './components/Spinner/Spinner'
import { Provider } from "react-redux";
import { createStore } from "redux";
import { myCombinedReducers } from "./redux/redux_all";
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(myCombinedReducers())}>
      <Spinner/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
