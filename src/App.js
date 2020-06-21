import React, { useState } from "react";
import "./App.css";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

export default function App() {
  const [items, addItem] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: "", key: "" });

  function onSubmit(e) {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== "") {
      addItem([...items, newItem]);
      const emptyCurrentItem = {
        text: "",
        key: ""
      };
      setCurrentItem(emptyCurrentItem);
    }
  }

  let handleInput = e => {
    setCurrentItem({
      text: e.target.value,
      key: Date.now()
    });
  };

  let deleteItem = key => {
    const filteredItems = items.filter(item => item.key !== key);
    addItem(filteredItems);
  };

  let setUpdate = (text, key) => {
    const items_copy = items;
    items_copy.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    });
    console.log(items_copy);
    addItem([...items_copy]);
  };

  return (
    <div className="app">
      <header>
        <form id="to-do-form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter Text"
            value={currentItem.text}
            onChange={handleInput}
          />
          <button type="submit">Add</button>
        </form>
      </header>
      <ListItems items={items} deleteItem={deleteItem} setUpdate={setUpdate} />
    </div>
  );
}
