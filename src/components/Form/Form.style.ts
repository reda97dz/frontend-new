import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  h2 {
    font-size: 1.8rem;
    color: #001b2e;
    margin-bottom: 0;
    margin: 0;
  }

  p {
    margin: 0;
    margin-bottom: 2em;
    font-size: 1rem;
    color: #001b2e;
  }

  > input + label {
    margin-top: 1em;
  }
`;

export const Input = styled.input`
  border-radius: 2px;
  padding: 0.2em 1.1em;
  font-size: 1rem;
  text-align: left;
  border: solid 1px #eaeaea;
  font-weight: bold;
  font-family: 'Cairo';
  :focus {
    outline: none;
    border: solid 1px #001b2e;
  }
`;

export const Actions = styled.div`
  margin-top: 1.5em;
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: 1em;
  }
  align-items: center;
  justify-content: flex-start;
  height: fit-content;
`;
