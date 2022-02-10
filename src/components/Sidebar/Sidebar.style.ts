import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 14em;
  padding-top: 3em;
  background-color: #001b2e;

  @media (max-width: 40em) {
    display: none;
  }
`;
