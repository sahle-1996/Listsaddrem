import React from "react";
import Item from "./Item";

const ItemList = ({ items, deleteItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} item={item} index={index} deleteItem={deleteItem} />
      ))}
    </ul>
  );
};

export default ItemList;