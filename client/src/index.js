import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import "./index.css";
import App from "./components/App";
import Home from "./components/Home";
import Header from "./components/Header";
import SignUp from "./components/SignUp";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
      </App>
    </Provider>
  </Router>,
  document.getElementById("root")
);
