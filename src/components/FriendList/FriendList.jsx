import FriendItem from './FriendItem'
import css from './FriendList.module.css'

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

  
export default FriendList
