import styled from 'styled-components';

export const Container = styled.div<{ toggle: boolean }>`
  position: fixed;
  height: 100%;
  width: 14em;
  padding-top: 3em;
  background-color: #001b2e;

  @media (max-width: 40em) {
    ${(props) => (props.toggle ? 'display: block' : 'display: none')};
    z-index: 2;
    box-shadow: 2px 0.3px 2px 0 rgba(0, 0, 0, 0.2);
  }
`;
