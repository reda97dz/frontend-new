import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Container, Title, Icon } from './Element.style';

export interface IElement {
  title: string;
  location: string;
  path: string;
  icon: any;
}

const Element: FC<IElement> = (props) => {
  const { title, location, path, icon } = props;
  return (
    <Container>
      <Icon>
        <FontAwesomeIcon icon={icon} color="#44ce42" />
      </Icon>
      <Title active={location.includes(path)}>{title}</Title>
    </Container>
  );
};

export default Element;
