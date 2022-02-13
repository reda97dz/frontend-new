import styled from 'styled-components';

export const Tile = styled.div`
  border-radius: 6px;
  background-color: #294c60;
  padding: 0.5em 0.8em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  > p {
    margin: 0;
    color: #adb6c4;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Header)`
  justify-content: flex-start;
  > p {
    margin-top: 0;
    margin-bottom: 0;
    color: #dcdfe5;
    line-height: 1em;
    font-weight: bold;
  }
  > * + * {
    margin-left: 0.5em;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > p {
    margin: 0;
    color: #03a10a;
  }

  > span {
    font-weight: bold;
    color: #f75c03;
  }
`;

export const MenuContainer = styled.div`
  cursor: pointer;
  position: relative;
`;

export const MenuContent = styled.ul`
  position: absolute;
  top: 0.5em;
  right: 0;
  background-color: #dcdfe5;
  border-radius: 4px;
  padding: 0.3em;
  > li + li {
    margin-top: 0.1em;
  }
  > :nth-child(2) {
    color: #f75c03;
    :hover {
      background-color: #f75c03;
    }
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  color: #001b2e;
  padding: 0 1em;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  :hover {
    background-color: #03a10a;
    color: #dcdfe5;
  }
`;
