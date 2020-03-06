import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import createStore from "./redux/store";
import App from "./App";

const { store, persistor } = createStore();

console.log(persistor);

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  rootElement
);

serviceWorker.unregister();
