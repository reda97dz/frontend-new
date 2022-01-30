import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  padding: 1em;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: 1em;
  }
  > :first-child {
    position: relative;
  }
`;

export const Content = styled.div`
  flex: 1;
  background-color: #adb6c4;
  padding: 1em;
  border-radius: 4px;
`;

export const Summary = styled.div`
  background-color: #03a10a;
  padding: 1em;
  border-radius: 4px;
`;
