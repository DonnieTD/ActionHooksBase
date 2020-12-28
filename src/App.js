import logo from "./logo.svg";
import "./App.css";
import { useGlobalText } from "./hooks";

import React from "react";

function App() {
  const [text, setGlobalText] = useGlobalText();

  // React.useEffect(
  //   () => {
  //     let timer1 = setTimeout(() => setGlobalText(text + "s"), 1000);

  //     // this will clear Timeout when component unmount like in willComponentUnmount
  //     return () => {
  //       clearTimeout(timer1);
  //     };
  //   } //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  // );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
