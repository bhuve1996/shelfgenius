import { useState, useEffect } from 'react';

async function fetchItems() {
  const res = await fetch('/api/items');
  return res.json();
}

export default function Home() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  return (
    <div>
      <h1>Shelfgeius Inventory</h1>
      <ul>
        {items.map(item => (
          <li key={item.ItemID}>
            {item.ItemName} - {item.Description} (Quantity: {item.Quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}
