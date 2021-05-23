import React from "react";
import "./App.css";
import CakeShop from "./components/CakeShop";
import IcecreamsShop from "./components/IcecreamsShop";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App-header">
      <Provider store={store}>
        <CakeShop />
        <IcecreamsShop />
      </Provider>
    </div>
  );
}

export default App;
