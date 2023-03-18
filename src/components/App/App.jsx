import user from 'user.json';
import data from 'data.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
    </div>
  );
};
