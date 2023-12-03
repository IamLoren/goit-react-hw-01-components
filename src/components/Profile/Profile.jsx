import s from './Profile.module.css';

export const Profile = ({username, tag, location, avatar, children}) => {
  return (
    <>
       <div className={s.profile}>
        <div className={s.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={s.avatar}
          />
          <p className={s.name}>{username}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
        {children}
      </div>
    </>
  );
};
