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

StatisticsData.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
