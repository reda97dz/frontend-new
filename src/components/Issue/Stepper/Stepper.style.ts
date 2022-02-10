import styled from 'styled-components';

export const Container = styled.div`
  background-color: #294c60;
  padding: 0.5em;
  border-radius: 6px;
  color: #eaeaea;
  > * + * {
    margin-top: 0.5em;
  }
  @media (max-width: 60em) {
    display: none;
  }
`;

export const Step = styled.div<{ active?: boolean }>`
  background-color: #dcdfe5;
  border-radius: 4px;
  padding: 0.3em 0.5em;
  font-family: 'Cairo';
  opacity: 0.5;
  ${(props) => props.active && 'opacity: 100'};

  display: flex;

  align-items: center;
  justify-content: flex-start;

  > div + p {
    margin-left: 0.5em;
  }

  > p {
    margin: 0;
    color: #294c60;
    font-weight: bold;
  }
`;

export const Icon = styled.div`
  background-color: #03a10a;
  height: 24px;
  width: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;
