import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Router from "./route";
import "./index.scss";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { myCombinedReducers } from "./redux/redux_all";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(myCombinedReducers())}>
      {Router}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
