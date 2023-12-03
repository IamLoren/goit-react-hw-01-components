import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';
import { Profile } from "./Profile/Profile";
import { Stats } from './Profile/Stats';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';
import { Transactions } from './TransactionHistory/Transactions';


export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Profile  
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}>
        <Stats 
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
      </Profile>

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory>
        <Transactions items={transactions}/>
      </TransactionHistory>;
    </div>
  );
};
