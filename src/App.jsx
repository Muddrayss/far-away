import { useState } from 'react';
import Form from './components/form.component';
import Logo from './components/logo.component';
import PackingList from './components/packing-list.component';
import Stats from './components/stats.component';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  };

  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
