import user from 'user.json';
import data from 'data.json';
// import friends from 'friends.json';
import transactions from 'transactions.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
// import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      {/* <FriendList friends={friends} /> */}
      <TransactionHistory transactions={ transactions} />
    </div>
  );
};
