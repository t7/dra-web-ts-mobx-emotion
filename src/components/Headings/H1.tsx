import React, { SFC } from 'react';
import { css } from 'react-emotion';
import Typography, { TypographyClassKey } from '@material-ui/core/Typography';

const H1Class = css`
  font-size: 3rem;
`;

const TypographyClasses: { [K in TypographyClassKey]?: string } = {
  display1: H1Class,
};

export const H1: SFC<{}> = ({ children }) => (
  <Typography classes={TypographyClasses} variant="display1">
    {children}
  </Typography>
);
