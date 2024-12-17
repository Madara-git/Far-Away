import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddingItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems(items.filter((items) => items.id !== id));
  }

  function handleToggleItem(id) {
    setItems((item) =>
      item.map((ite) => (ite.id === id ? { ...ite, packed: !ite.packed } : ite))
    );
  }

  function handleDeletedItemes() {
    const alert = window.confirm(
      "ARE YOU YOU SURE YOU WANT TO DELTE ALL THE LIST?"
    );
    alert && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddingItems} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggleItem={handleToggleItem}
        onDeleteAll={handleDeletedItemes}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
