import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;

  span {
    display: flex;
    justify-content: center;
  }

  background-color: ${p => p.theme.colors.lightcyan};
`;

export const StatsItem = styled.li`
  border-top: 1px solid ${p => p.theme.colors.lightgrey};
  border-left: 1px solid ${p => p.theme.colors.lightgrey};
  width: 100%;
  padding: 10px;
`;

export const ListTitle = styled.span`
  color: ${p => p.theme.colors.grey};
`;
