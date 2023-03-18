import PropTypes from 'prop-types';
import { ProfileDescription } from 'components/ProfileDescription/ProfileDescription';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';
import { Container } from './Profile.styled';

export function Profile({ user }) {
  return (
    <Container>
      <ProfileDescription
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
      />
      <ProfileStats stats={user.stats} />
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
