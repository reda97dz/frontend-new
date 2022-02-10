import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 3.2em;
  width: calc(100% - 14em);
  margin-left: 14em;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 40em) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Toggle = styled.button`
  position: aboslute;
  margin: 0;
  padding: 0;
  overflow: hidden;
  line-height: 0.4;
  text-indent: 5em;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  white-space: nowrap;
  font-size: 1.5em;

  ::after {
    position: absolute;
    content: '\\2630';
    display: block;
    margin: auto;
    text-indent: 0;
    top: 0.88em;
    left: 0.5em;
    color: #294c60;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  color: #294c60;
  font-weight: bolder;
  text-transform: capitalize;
`;
