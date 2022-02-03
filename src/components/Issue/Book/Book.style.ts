import styled from 'styled-components';
import Button from 'components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  > div + div {
    margin-left: 0.7em;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  grid-gap: 0.5em;
  grid-auto-flow: dense;
`;
export const Item = styled.div`
  min-height: 10em;
  display: flex;
  flex-direction: column;
`;

export const MoreButton = styled(Button)`
  flex: 1;
  background-color: transparent;
  border: 1px dashed #03a10a;
  padding: 0 2em;
  color: #03a10a;
  :hover {
    border: 1px solid #03a10a;
    background-color: #03a10a;
    color: #fff;
  }
`;
