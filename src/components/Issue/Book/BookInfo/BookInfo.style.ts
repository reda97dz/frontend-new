import styled from 'styled-components';

export const Container = styled.div`
  padding: 1em;
  border-radius: 6px;
  background-color: #294c60;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Content = styled.div`
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
    color: #03a10a;
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
`;
