import React, { useState } from "react";

const AddItemForm = ({ addItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(inputValue);
    setInputValue(""); // Clear the input field after adding
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter an item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;