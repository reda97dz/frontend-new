import styled from 'styled-components';

export const Btn = styled.button<{ color: string }>`
  padding: 0.2em 1em;
  background-color: ${(props) => props.color};
  color: #fff;
  font-family: 'Cairo';
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  :hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.98);
  }
  :disabled {
    background-color: gainsboro;
    cursor: auto;
    color: #1e1e1e;
  }
  border: none;
`;
