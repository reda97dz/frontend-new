import styled from 'styled-components';

export const SelectSearchContainer = styled.div`
  display: inline-block;
  position: relative;

  input {
    cursor: pointer;
    border-radius: 4px;
    text-align: left;
    padding: 0.2em 0.7em;
    font-family: 'Cairo';
    border: solid 1px #294c60;
    font-weight: bold;
    /* width: 18em; */
    :focus {
      cursor: text;
      outline: none;
    }
    ::placeholder {
      color: black;
      opacity: 1;
    }
  }

  ::after {
    content: '';
    right: 0.5em;
    top: 43%;
    position: absolute;
    transform: translateY(-20%) rotate(45deg);
    cursor: pointer;
    width: 4px;
    height: 4px;
    border-radius: 1px;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
  }
`;

export const Options = styled.ul`
  width: 12.25em;
  position: absolute;
  padding: 0;
  max-height: 12em;
  border-radius: 4px;
  margin-top: 0.2em;
  background-color: #fff;
  overflow-y: scroll;
  z-index: 1531;
  border: solid 1px #294c60;
`;

export const Option = styled.li`
  list-style: none;
  cursor: pointer;
  margin: 0.2em;
  border-radius: 4px;
  padding: 0.2em 0.5em;
  font-weight: bold;
  :hover {
    background-color: #eaeaea;
  }
  background-color: #fff;
  font-family: 'Cairo';
  color: black;
`;
