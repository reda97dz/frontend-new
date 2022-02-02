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

export const MoreButton = styled(Button)`
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
