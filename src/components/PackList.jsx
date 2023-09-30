import { useState } from "react";
import { Item } from "./Item";

export const PackList = ({ items, handleDelete, packedChange, onClear }) => {
  const [sort, setSort] = useState("input");
  let sortedItems = items; // Initialize sortedItems with items array by default

  if (sort === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sort === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems &&
          sortedItems.map((item) => {
            return (
              <Item
                item={item}
                key={item.id}
                handleDelete={handleDelete}
                packedChange={packedChange}
              />
            );
          })}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={() => onClear()}>Clear List</button>
      </div>
    </div>
  );
};
