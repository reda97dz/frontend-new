import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 2px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: 0.5em;
  }

  h2 {
    color: #001b2e;
    margin: 0;
  }

  p {
    color: #1e1e1e;
    margin: 0;
  }
`;
