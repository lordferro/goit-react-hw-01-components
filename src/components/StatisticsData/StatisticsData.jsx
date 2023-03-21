import PropTypes from 'prop-types';
import { Label, Percentage } from './StatisticsData.styled';

export function StatisticsData({ data: { label, percentage } }) {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </>
  );
}

StatisticsData.propTypes = PropTypes.shape({
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}).isRequired;
