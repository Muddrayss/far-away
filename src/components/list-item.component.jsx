import PropTypes from 'prop-types';

const ListItem = ({ item, onDeleteItem, onToggleItem }) => {
  const { id, description, quantity, isPacked } = item;

  return (
    <li>
      <input
        type='checkbox'
        checked={isPacked}
        onChange={() => {
          onToggleItem(id);
        }}
      />
      <span style={isPacked ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number,
  isPacked: PropTypes.bool,
  onDeleteItem: PropTypes.func,
  onToggleItem: PropTypes.func,
};

export default ListItem;
