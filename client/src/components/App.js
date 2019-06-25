import React from "react";
import { Provider } from "react-redux";
import store from "../components/redux/store";
import SignUp from "./SignUp/SignUp";
import Test2 from "./SignUp/Test2";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Test2 />
        {/* <SignUp /> */}
      </div>
    </Provider>
  );
}

export default App;
