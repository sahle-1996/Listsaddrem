import React from "react";

const Item = ({ item, index, deleteItem }) => {
  return (
    <li>
      {item}{" "}
      <button onClick={() => deleteItem(index)} aria-label={`Delete ${item}`}>
        Delete
      </button>
    </li>
  );
};

export default Item;