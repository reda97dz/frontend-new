import styled from 'styled-components';

export const TableStyle = styled.div<{ light?: boolean }>`
  table {
    width: 100%;
    border-collapse: collapse;
    cursor: pointer;

    td,
    th {
      padding: 8px;
      border: 0;
      position: relative;
      span {
        position: absolute;
        left: -0.3em;
      }
      :last-child {
        text-align: center;
        :hover {
          color: green;
        }
      }
      @media (max-width: 60em) {
        :nth-child(4) {
          display: none;
        }
      }

      @media (max-width: 40em) {
        :nth-child(1) {
          display: none;
        }
      }
    }

    tr {
      border-bottom: 1px solid #eaeaea;
      color: ${(props) => props.light && '#eaeaea'};
      line-height: 1em;
    }

    tr:last-child {
      border-bottom: none;
    }

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid #eaeaea;
      text-align: left;
      color: ${(props) => (props.light ? '#eaeaea' : '#001b2e')};
    }
  }
`;

export const Pagination = styled.div`
  padding: 0.5em;
  margin-top: 1.5em;
  background-color: #001b2e;
  border-radius: 2px;
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  > button {
    color: #001b2e;
    border: none;
    cursor: pointer;
    font-weight: bold;
    padding-top: 0.35em;
  }
  > button:hover :not(:disabled) {
    opacity: 0.9;
  }
  > button:active :not(:disabled) {
    background-color: #294c60;
    color: #eaeaea;
  }
`;

export const First = styled.button`
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  padding: 0.2em;
  padding: 0.3em 0.4em;
  font-weight: bold;
`;

export const PreviousNext = styled.button`
  border-radius: 0;
  padding: 0.3em 0.5em;
`;

export const Last = styled.button`
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 0.3em 0.4em;
`;

export const PageIndex = styled.span`
  padding: 0 0.7em;
  background-color: #294c60;
  border-radius: 2px;
  color: #eaeaea;
  cursor: pointer;
  :active {
    transform: scale(0.99);
  }
`;

export const Goto = styled.span`
  margin-left: 1.3em;
  color: #eaeaea;
  > input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  > input {
    margin-left: 0.4em;
    outline: none;
    border: solid 2px #294c60;
    border-radius: 3px;
    font-size: 0.7rem;
    background-color: transparent;
    font-family: 'Cairo';
    color: #eaeaea;
    text-align: center;
    font-weight: bold;
    max-width: 30px;
  }
`;

export const Show = styled.select`
  margin-left: 1.3em;
  outline: none;
  padding: 0 0.7em;
  font-family: 'Cairo';
  color: #eaeaea;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  background-color: #294c60;
  > option {
    font-weight: bold;
  }
`;
