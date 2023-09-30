import { useState } from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackList } from "./components/PackList";
import { Stats } from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddedItems(item) {
    setItems((items) => [...items, item]);
  }
  const handleDelete = (id) => {
    setItems((arr) => arr.filter((items) => items.id !== id));
  };
  const handlePacked = (id) => {
    setItems((arr) =>
      arr.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleAddedItems} />
      <PackList
        items={items}
        handleDelete={handleDelete}
        packedChange={handlePacked}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
