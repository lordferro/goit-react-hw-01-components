import styled from '@emotion/styled';

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 15px;

  img {
    margin-top: 15px;
    border-radius: 50%;
  }

  p + p {
    color: ${p => p.theme.colors.grey};
  }
`;

export const NameTitle = styled.p`
  font-size: 24px;
`;
