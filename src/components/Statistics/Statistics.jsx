import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { StatisticsSection, StatisticsTitle } from './Statistics.styled';

export function Statistics({ title, data }) {
  return (
    <StatisticsSection>
      <div>{title && <StatisticsTitle>{title}</StatisticsTitle>}</div>
      <StatisticsList data={data} />
    </StatisticsSection>
  );
}
