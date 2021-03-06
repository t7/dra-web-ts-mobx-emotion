import styled from 'react-emotion';
import { Typography } from '@material-ui/core';

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexColumn = styled(FlexContainer)`
  flex-direction: column;
`;

export const TypographyFlex = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  font-weight: 400;
`;
