import FriendItem from './FriendItem'
import css from './FriendList.module.css'
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline} />;
      })}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
  
export default FriendList
