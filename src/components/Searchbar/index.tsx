import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container } from './Searchbar.style';

const Searchbar: FC = () => (
  <Container>
    <FontAwesomeIcon icon={faSearch} color="#001b2e" />
    <input type="text" placeholder="Chercher..." />
  </Container>
);

export default Searchbar;
