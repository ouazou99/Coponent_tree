import React, { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import List from "./List";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <Heading />
      <Input
        handleChange={handleChange}
        inputText={inputText}
        addItem={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem) => (
            <List one="red" two="yellow" todoItem={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
