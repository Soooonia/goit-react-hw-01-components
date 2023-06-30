import css from './FriendItem.module.css'
import PropTypes from 'prop-types';

function FriendItem({ avatar, name, isOnline}) {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
}

FriendItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;