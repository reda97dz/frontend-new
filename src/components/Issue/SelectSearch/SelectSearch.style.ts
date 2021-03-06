import styled from 'styled-components';

export const Container = styled.div`
  > svg {
    position: absolute;
    margin-left: 0.5em;
    margin-top: 0.5em;
    cursor: pointer;
    :active {
      transform: scale(0.9);
    }
    color: #294c60;
    :hover {
      color: #f75c03;
    }
  }
`;

export const SelectSearchContainer = styled.div<{ placeholderColor?: boolean }>`
  display: inline-block;
  position: relative;
  input {
    cursor: pointer;
    border-radius: 4px;
    text-align: left;
    padding: 0.2em 2em 0.2em 0.4em;
    font-family: 'Cairo';
    background-color: #dcdfe5;
    border: 0;
    color: #294c60;
    font-weight: bold;
    /* width: 18em; */
    :focus {
      cursor: text;
      outline: none;
      border-radius: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      /* box-shadow: 1px 0 1px rgba(0, 0, 0, 0.5); */
    }
    ::placeholder {
      color: ${(props) => (props.placeholderColor ? '#294c60' : '#1e1e1e')};
      opacity: 1;
    }
  }

  ::after {
    content: '';
    pointer-events: none;
    right: 0.7em;
    top: 43%;
    position: absolute;
    transform: translateY(-20%) rotate(45deg);
    width: 4px;
    height: 4px;
    border-radius: 1px;
    border-right: 2px solid #294c60;
    border-bottom: 2px solid #294c60;
  }
`;

export const Options = styled.ul`
  width: 13.05em;
  position: absolute;
  padding: 0;
  max-height: 12em;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-top: 0;
  background-color: #fff;
  overflow-y: scroll;
  z-index: 1531;
  /* border: solid 1px #294c60; */
  border-top: 0;
  /* box-shadow: 1px 0 1px rgba(0, 0, 0, 0.5); */
`;

export const Option = styled.li<{ selected?: boolean }>`
  list-style: none;
  cursor: pointer;
  margin: 0.2em;
  line-height: 1em;
  border-radius: 2px;
  padding: 0.7em 0.5em;
  font-weight: bold;
  :hover {
    background-color: #dcdfe5;
    /* color: #dcdfe5; */
  }
  background-color: #fff;
  color: #294c60;
  ${(props) => props.selected && 'background-color: #dcdfe5'};
  font-family: 'Cairo';

  span {
    color: #03a10a;
  }
`;
