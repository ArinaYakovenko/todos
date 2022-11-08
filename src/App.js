import React from "react";
import style from "./index.module.scss";

import Saidbar from "./components/Saidbar";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header";

export default function App() {
  return (
    <div className={style.todo}>
      <Provider store={store}>
        <Header />
        <Saidbar />
      </Provider>
    </div>
  );
}
