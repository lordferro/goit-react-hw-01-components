import PropTypes from 'prop-types';
import { FriendStatus } from './Friend.styled';

export function Friend({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <FriendStatus status={isOnline}/>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
