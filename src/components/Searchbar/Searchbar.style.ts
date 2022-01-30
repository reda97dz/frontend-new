import styled from 'styled-components';

export const Container = styled.div`
  background-color: #eaeaea;
  outline: none;
  border: 0;
  padding: 0.3em 0.2em;
  border-radius: 2px;
  max-width: 20em;
  display: flex;
  flex-direction: row;
  align-items: center;
  > svg {
    margin-left: 0.3em;
  }
  > * + * {
    margin-left: 0.5em;
  }
  > input {
    background-color: transparent;
    outline: none;
    font-size: 15px;
    border: 0;
    color: #001b2e;
    font-weight: bold;
    font-family: 'Cairo';
    width: 100%;
  }
`;
