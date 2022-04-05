import React from "react";
import * as ReactDOMClient from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
// ReactDOM.render(
//   // <Provider store={store}>
//   <App />,
//   // </Provider>
//   document.getElementById("root")
// );

root.render(<App />);
