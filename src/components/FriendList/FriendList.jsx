import {FriendListItem} from './FriendListItem';
import s from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => {
                return <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id}/>
            })}
        </ul>
    )
}