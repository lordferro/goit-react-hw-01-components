import styled from '@emotion/styled';

export const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p => (p.status ? 'green' : 'red')};
`;
