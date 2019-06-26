import React, { Children } from "react";
import Header from "./Header";

const App = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
};

export default App;
