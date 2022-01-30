import styled from 'styled-components';
import { Icon as IconStyle } from '../Stepper/Stepper.style';

export const Container = styled.div`
  background-color: #001b2e;
  padding: 1em;
  border-radius: 4px;
  min-width: 10em;
`;

export const Header = styled.div`
  padding: 0.3em 0.5em;
  font-family: 'Cairo';
  background-color: #dcdfe5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div + p {
    margin-left: 0.5em;
  }

  > p {
    margin: 0;
    color: #001b2e;
    font-weight: bolder;
  }
`;

export const Icon = styled(IconStyle)`
  background-color: transparent;
`;
