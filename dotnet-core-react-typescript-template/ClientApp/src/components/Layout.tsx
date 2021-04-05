import React, { FC } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export const Layout: FC = (props) => {
  return (
    <div>
      <NavMenu />
      <Container>{props.children}</Container>
    </div>
  );
};
