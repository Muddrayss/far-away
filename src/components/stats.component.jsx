import PropTypes from 'prop-types';

const Stats = ({ items }) => {
  if (items.length === 0)
    return (
      <footer className='stats'>Start adding some items to your list 🚀</footer>
    );

  const itemsLen = items.length;
  const itemsPacked = items.reduce(
    (acc, curr) => (curr.isPacked ? acc + 1 : acc),
    0
  );
  const percentage = Math.round((itemsPacked / itemsLen) * 100) || 0;

  return (
    <footer className='stats'>
      {percentage === 100
        ? 'You got everything! Ready to go ✈'
        : `🧳 You have ${itemsLen} items on your list, and you already packed ${itemsPacked} (%${percentage})`}
    </footer>
  );
};

Stats.propTypes = {
  items: PropTypes.array,
};

export default Stats;
