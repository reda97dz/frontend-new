import { FC } from 'react';
import { Container } from './Header.style';

const Header: FC = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default Header;
