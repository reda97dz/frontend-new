import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
  > h1 {
    font-weight: bolder;
    font-family: 'Cairo';
    color: #001b2e;
  }
  > p {
    margin-top: 2em;
  }
`;
