import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1.5em;
  margin-top: 0.7em;
  > * + * {
    margin-left: 0.7em;
  }
  cursor: pointer;
  :hover {
    & > p {
      color: #44ce42;
    }
  }
`;

export const Icon = styled.div`
  height: 27px;
  width: 27px;
  background-color: #294c60;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.p<{ active: boolean }>`
  color: #adb6c4;
  font-size: 15px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bold;
  letter-spacing: 0.07em;
  ${(props) => props.active && 'color: #44ce42;'}
`;
