import PropTypes from 'prop-types';
import { ListTitle, StatsItem, StatsList } from './ProfileStats.styled';

export function ProfileStats({ stats: { followers, views, likes } }) {
  return (
    <StatsList>
      <StatsItem>
        <ListTitle>Followers</ListTitle>
        <span>{followers}</span>
      </StatsItem>
      <StatsItem>
        <ListTitle>Views</ListTitle>
        <span>{views}</span>
      </StatsItem>
      <StatsItem>
        <ListTitle>Likes</ListTitle>
        <span>{likes}</span>
      </StatsItem>
    </StatsList>
  );
}

ProfileStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
