import css from './Profile.module.css';



function Profile({username, tag, location,avatar,stats}){
    return (
      <div className={css.profile}>
      <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className="avatar"
      height="140"
      width="140"
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
        <li className={css.item}>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
    

export default Profile;