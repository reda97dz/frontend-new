import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 6em;
  right: 3em;
  left: 17em;
  bottom: 3em;
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

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const Content = styled.div`
  flex: 1;
  background-color: #adb6c4;
  /* padding: 1em; */
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, auto);
  /* grid-gap: 1em; */
`;

export const StepTitle = styled.div`
  grid-row: 1/2;
  display: flex;
  align-items: center;
  /* border: dashed 1px #001b2e; */
  margin: 0.5em;
  background-color: #001b2e;
  padding: 0.5em;
  border-radius: 4px;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  > div + h3 {
    margin-left: 0.8em;
    color: #eaeaea;
  }
  > h3 {
    font-size: 1.2rem;
    margin: 0;
  }
`;

export const Icon = styled.div<{ disabled?: boolean }>`
  border-radius: 5em;
  min-width: 0.7em;
  cursor: pointer;
  ${(props) => props.disabled && 'opacity: 0.2'};
  :active {
    transform: scale(0.95);
  }
  :hover {
    ${(props) => !props.disabled && 'opacity: 0.98'};
  }
`;

export const StepContent = styled.div`
  grid-row: 2/3;
  padding: 1em;
`;
