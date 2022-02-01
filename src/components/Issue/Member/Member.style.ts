import styled from 'styled-components';
import { Step } from '../Stepper/Stepper.style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > div + div {
    margin-top: 1em;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > p {
    margin: 0;
  }
`;

export const DisplayContainer = styled.div`
  display: flex;
  flex: 1;
  border-radius: 4px;
  background-color: #294c60;
  min-height: 5.6em;
  flex-direction: column;
  padding: 0.8em;
  > p {
    margin: 0;
    color: #eaeaea;
  }
`;

export const Header = styled(Step)`
  opacity: 1;
  padding: 0;
  background-color: transparent;
  color: #eaeaea;
  > p {
    color: #03a10a;
  }
`;
