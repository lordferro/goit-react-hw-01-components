import PropTypes from 'prop-types';
import { StatisticsData } from 'components/StatisticsData/StatisticsData';
import { StatisticsItem, StatisticsListStyle } from './StatisticsList.styled';

export function StatisticsList({ data }) {
  return (
    <StatisticsListStyle>
      {data.map(item => {
        return (
          <StatisticsItem mixcolor={item.id} key={item.id}>
            <StatisticsData data={item} />
          </StatisticsItem>
        );
      })}
    </StatisticsListStyle>
  );
}

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};
