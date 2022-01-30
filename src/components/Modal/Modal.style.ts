import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const ModalBody = styled.div`
  position: fixed;
  border-radius: 2px;
  top: 6.4em;
  max-height: 28em;
  overflow-y: scroll;
  right: 20%;
  left: calc(14em + 20%);
  padding: 2em 4em;
  background-color: white;
  overflow: auto;
  z-index: 2;
`;
