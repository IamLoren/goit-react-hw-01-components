
import { Stats } from "./Stats";

export const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <>
       <div className="profile">
        <div className="description">
          <img
            src={avatar}
            alt="User avatar"
            className="avatar"
          />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
        <Stats 
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes} />
      </div>
    </>
  );
};
