import styled from 'styled-components';

export const Container = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  > div + p {
    margin-left: 0.5em;
  }
  border-radius: 4px;
  padding: 0.2em;
  flex: 1;
  border: 1px solid ${(props) => props.color};
  > div > svg {
    color: ${(props) => props.color};
  }
  > p {
    color: ${(props) => props.color};
    margin: 0;
    font-weight: bold;
  }
`;

export const Icon = styled.div`
  border-radius: 3px;
  min-height: 2em;
  min-width: 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
