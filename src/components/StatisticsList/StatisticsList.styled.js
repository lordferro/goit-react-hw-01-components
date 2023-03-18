import styled from '@emotion/styled';

export const StatisticsListStyle = styled.ul`
  color: ${p => p.theme.colors.white};
`;

const setBgColor = props => {
  switch (props.mixcolor) {
    case 'id-1':
      return `${getRandomHexColor()}`;
    case 'id-2':
      return `${getRandomHexColor()}`;
    case 'id-3':
      return `${getRandomHexColor()}`;
    case 'id-4':
      return `${getRandomHexColor()}`;
    case 'id-5':
      return `${getRandomHexColor()}`;
    default:
      return '';
  }
};

export const StatisticsItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: ${setBgColor};
  width: 50px;
  padding: 15px;
`;
function getRandomHexColor() {
 return `#${ [...Array(6)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('')}`;

}



 