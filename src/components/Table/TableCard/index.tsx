import { FC } from 'react';
import { Container } from './TableCard.style';

const TableCard: FC<{ title: string; subtitle: string }> = (props) => {
  const { title, subtitle, children } = props;
  return (
    <Container>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {children}
    </Container>
  );
};

export default TableCard;
