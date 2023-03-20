import PropTypes from 'prop-types';
import { NameTitle, ContainerDescription } from './ProfileDescription.styled';

export function ProfileDescription({ username, tag, location, avatar }) {
  return (
    <ContainerDescription>
      <img src={avatar} alt="User avatar" width={100} />
      <NameTitle>{username}</NameTitle>
      <p>{tag}</p>
      <p>{location}</p>
    </ContainerDescription>
  );
}
ProfileDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
