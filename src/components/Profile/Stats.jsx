import s from './Profile.module.css';

export const Stats = ({followers, views, likes}) => {
    return (
        <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{likes}</span>
    </li>
  </ul>
    )
}