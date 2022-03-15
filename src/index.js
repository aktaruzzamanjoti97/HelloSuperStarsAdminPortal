import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { userReducer } from "./VideoChatContents/store/reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
export const store = createStore(userReducer);
ReactDOM.render(
<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
