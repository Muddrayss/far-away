import PropTypes from 'prop-types';

import ListItem from './list-item.component';
import { useState } from 'react';

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearItems }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  else if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
};

PackingList.propTypes = {
  items: PropTypes.array,
  onDeleteItem: PropTypes.func,
  onToggleItem: PropTypes.func,
  onClearItems: PropTypes.func,
};

export default PackingList;
