import React, { useState } from "react";
import Result from './components/Result';
import './App.css';
import Item from "./components/Item";

function App() {
  const [Status, setStatus] = useState(true);
  const [resultData, setResultData] = useState([]);


  const getValue = (obj) => {
    setResultData(prev => [...resultData, obj]);
  };

  return (
    <div className="App">
      <div>
        {Status ? <Item passValue={getValue} /> : <Result data={resultData} />}
      </div>
      <button onClick={() => setStatus(!Status)}>Card/Add item</button>
    </div>
  );
}

export default App;
