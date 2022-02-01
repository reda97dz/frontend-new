import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  > div + div {
    margin-left: 0.7em;
  }
`;
