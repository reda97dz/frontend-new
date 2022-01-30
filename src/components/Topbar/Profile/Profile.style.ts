import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 1em;
  align-items: center;
  cursor: pointer;
  > * + * {
    margin-left: 0.3em;
  }
  > p {
    color: #001b2e;
    font-weight: bold;
  }
`;

export const Menu = styled.ul`
  position: fixed;
  top: 2.7em;
  right: 0.6em;
  width: fit-content;
  max-height: 15em;
  background-color: #294c60;
  border-radius: 2px;
  padding: 0.5em;
  > li + li {
    margin-top: 0.5em;
  }
  > :last-child:hover {
    color: red;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  padding: 0 1em;
  color: #eaeaea;
  cursor: pointer;
  font-weight: bold;
  :hover {
    color: #44ce42;
  }
`;
