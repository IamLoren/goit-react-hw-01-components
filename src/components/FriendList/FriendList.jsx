import {FriendListItem} from './FriendListItem'

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => {
                return <FriendListItem avatar={friend.avatar} name={friend.name} isOnline='true' key={friend.id}/>
            })}
        </ul>
    )
}