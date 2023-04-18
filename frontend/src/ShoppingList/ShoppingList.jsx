import React, { useState, useEffect } from 'react';
import './shoppingList.css';

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('shoppingList'));
    if (storedItems && storedItems.length) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = event.target.item.value;
    if (newItem.trim()) {
      setItems([...items, newItem]);
      event.target.reset();
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className='flex justify-center' id='ShoppingList'>
    <div className="shopping-list flex flex-col justify-center md:w-1/2 w-full">
      <h1 className="title">Shopping List</h1>
      <form className='flex justify-center' onSubmit={handleAddItem}>
        <input type="text" name="item" className="input" placeholder="Add an item" />
        <button type="submit" className="button">Add</button>
      </form>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item}
            <button onClick={() => handleRemoveItem(index)} className="remove-button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </div>

  );
};

export default ShoppingList;
