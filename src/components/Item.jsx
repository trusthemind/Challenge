import React, { useEffect, useState } from "react";

function Item({ passValue }) {
  const [selectValue, setSelect] = useState("Bike");
  const [InputValue, setInput] = useState("");

  const modules = [
    { name: "Bike", coverage: "0-3k", risk: 0.3 },
    { name: "Jewelry", coverage: "500-10k", risk: 0.05 },
    { name: "Electronics", coverage: "500-6k", risk: 0.35 },
    { name: "Sports Equipment", coverage: "0-20k", risk: 0.3 },
  ];

  useEffect(() => {
  }, [selectValue, InputValue, passValue]);

  const module = modules.find((item) => item.name === selectValue);

  let CountPrice = (obj) => {
    // const price = Math.min(Math.max(inputValue, minCoverage), maxCoverage) * module.risk;
    if (obj.name === "Bike") {
      return Math.floor(Math.min(Math.max(InputValue, 1000), 3000) * module.risk);
    }
    if (obj.name === "Jewelry") {
      return Math.floor(Math.min(Math.max(InputValue, 500), 10000) * module.risk);
    }
    if (obj.name === "Electronics") {
      return Math.floor(Math.min(Math.max(InputValue, 500), 6000) * module.risk);
    }
    if (obj.name === "Sports Equipment") {
      return Math.floor(Math.min(Math.max(InputValue, 0), 20000) * module.risk);
    }

  }
  return (
    <>
      <select value={selectValue} onChange={(e) => setSelect(e.target.value)}>
        {modules.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <br />
      <input type="number" onInput={(e) => setInput(e.target.value)} />
      {selectValue && InputValue && (
        <div>
          <p>Selected Module:</p>
          <h2>{module.name}</h2>
          <b>Coverage: {module.coverage}</b>,
          <b>Risk: {module.risk}</b>
          <p>Price: {CountPrice(module)}</p>
          <button onClick={()=>{passValue({module, price: CountPrice(module)})}}>Add</button>
        </div>
      )}
    </>
  );
}

export default Item;
