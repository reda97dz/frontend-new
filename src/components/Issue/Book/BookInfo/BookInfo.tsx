import {
  faBook,
  faEdit,
  faEllipsisH,
  faEllipsisV,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { clearBook, removeBook, selectIssue } from 'app/issueSlice';
import { Icon } from 'components/Issue/Stepper/Stepper.style';
import { FC, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import {
  Container,
  Content,
  Footer,
  Header,
  MenuContainer,
  MenuContent,
  MenuItem,
  Title,
  Tile,
} from './BookInfo.style';

interface Info {
  number: number;
}

const BookMenu: FC<Info> = (props) => {
  const issue = useAppSelector(selectIssue);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const { number } = props;
  return (
    <MenuContainer>
      <FontAwesomeIcon icon={faEllipsisH} onClick={() => setOpen(!open)} color="#dcdfe5" />
      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <MenuContent>
            <MenuItem onClick={() => dispatch(clearBook(number))}>Edit</MenuItem>
            {(number !== 0 || issue.bookIds.length > 1) && (
              <MenuItem onClick={() => dispatch(removeBook(number))}>Remove</MenuItem>
            )}
          </MenuContent>
        </ClickAwayListener>
      )}
    </MenuContainer>
  );
};

export const BookInfo: FC<Info> = (props) => {
  const { number } = props;
  return (
    <Tile>
      <Container>
        <Header>
          <Title>
            <Icon>
              <FontAwesomeIcon icon={faBook} color="#fff" />
            </Icon>
            <p>Title right here</p>
          </Title>
          <div>
            <BookMenu number={number} />
          </div>
        </Header>
        <Content>
          <p>Author</p>
          <p>Category</p>
        </Content>
        <Footer>
          <p>ref</p>
          <p>ref</p>
        </Footer>
      </Container>
    </Tile>
  );
};
