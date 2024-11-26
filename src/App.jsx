import React, { useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <h1>React Item List</h1>
      <AddItemForm addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
