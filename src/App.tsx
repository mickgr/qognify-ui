import { Button, Checkbox } from "components/FormElements";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text="test"></Button>
        <Checkbox selected={true}></Checkbox>
      </header>
    </div>
  );
}

export default App;
