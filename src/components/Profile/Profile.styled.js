import styled from "@emotion/styled"

export const Container = styled.div`
background-color: ${p=>p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.lightgrey};
  border-radius: 4px;
  width: 225px;
  overflow: hidden;
`;