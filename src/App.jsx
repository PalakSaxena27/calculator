import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
let [cal, setCal]=useState("");
const onButtonClick = (buttonText) => {
  if(buttonText === "C")
  {
    setCal("");
  }
  else if (buttonText === "=")
  {
    const result = eval(cal);
    setCal(result);
  }
  else{
    const newDisplay = cal + buttonText;
    setCal(newDisplay);
  }
};

  return (
    <>
      <div className={styles.calculator}>
        <Display value={cal}></Display>
        <Buttons onButtonClick={onButtonClick}></Buttons>
      </div>
    </>
  )
}

export default App
