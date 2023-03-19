import { Friend } from 'components/Friend/Friend';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id}>
            <Friend friend={friend} />
          </FriendListItem>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
