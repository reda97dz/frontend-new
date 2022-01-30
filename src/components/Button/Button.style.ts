import styled from 'styled-components';

export const Btn = styled.button<{ color: string }>`
  padding: 0.5em 1em;
  background-color: ${(props) => props.color};
  color: #eaeaea;
  font-family: 'Cairo';
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 2px;
  :hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.98);
  }
  border: none;
`;
