import { FC } from 'react';
import { Container } from './Form.style';

const FormLayout: FC = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default FormLayout;
