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

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  height: max-content;
  grid-gap: 1em;
`;

export const StepTitle = styled.div<{ first?: boolean }>`
  grid-row: 1/2;
  display: flex;
  align-items: center;
  & > div + h3 {
    margin-left: 0.5em;
  }
  > div {
    ${(props) => props.first && 'backgroundColor: transparent'};
  }
  > h3 {
    font-size: 1.2rem;
    margin: 0;
  }
`;

export const Icon = styled.div`
  border-radius: 5em;
  min-width: 0.7em;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
  :hover {
    opacity: 0.98;
  }
`;

export const StepContent = styled.div`
  grid-row: 2/3;
`;

export const StepProceed = styled.div`
  grid-row: 3/4;
  > span {
    color: red;
    line-height: 2.05em;
  }
`;
