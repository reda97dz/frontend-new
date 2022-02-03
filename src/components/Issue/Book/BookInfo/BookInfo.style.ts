import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  background-color: #294c60;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  padding: 0 0.5em;
  > p {
    margin: 0;
    color: #adb6c4;
  }
`;

export const Header = styled.div`
  padding: 0.2em 0.4em;
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
    color: #03a10a;
    font-weight: bold;
  }
  > * + * {
    margin-left: 0.5em;
  }
`;

export const Footer = styled.div`
  padding: 0.2em 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > p {
    margin: 0;
    color: #03a10a;
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
  padding: 0.5em;
  > li + li {
    margin-top: 0.5em;
  }
  > :nth-child(2) {
    color: red;
    :hover {
      background-color: red;
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
