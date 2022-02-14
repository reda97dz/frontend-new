import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
`;

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
    @media (max-width: 40em) {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  position: absolute;
  top: 2.8em;
  right: 1em;
  width: 7em;
  max-height: 15em;
  background-color: #294c60;
  border-radius: 4px;
  padding: 0.5em;
  > li + li {
    margin-top: 0.5em;
  }
  > :last-child {
    /* color: #ff2e00; */
    background-color: #f75c03;
    :hover {
      background-color: #eaeaea;
      color: #f75c03;
    }
  }
  @media (max-width: 40em) {
    top: 1.85em;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  padding: 0 1em;
  color: #eaeaea;
  cursor: pointer;
  border-radius: 2px;
  font-weight: bold;
  :hover {
    color: #294c60;
    background-color: #eaeaea;
  }
`;
