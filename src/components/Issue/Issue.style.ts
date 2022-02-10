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
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  @media (max-width: 40em) {
    left: 2em;
    right: 2em;
    top: 5em;
    bottom: 2em;
  }
`;

export const Header = styled.div`
  > h3 {
    margin: 0;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: 0.7em;
    @media (max-width: 60em) {
      margin-left: 0;
    }
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
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px dashed red; */
  /* grid-gap: 1em; */
`;

export const StepContent = styled.div`
  top: 7em;
  left: 13em;
  right: 1em;
  bottom: 1em;
  padding: 1em;
  flex: 1;
  overflow-y: scroll;
  position: absolute;
  @media (max-width: 60em) {
    left: 1em;
  }
`;

export const StepTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em;
  background-color: #001b2e;
  padding: 0.3em 0.5em;
  border-radius: 4px;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin: 0 0.3em;
  }
  > div + h3 {
    margin-left: 0.5em;
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
