import { faBook, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { clearBook, removeBook, selectIssue } from 'app/issueSlice';
import { Icon } from 'components/Issue/Stepper/Stepper.style';
import { FC, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { Book } from 'types';
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

export const BookMenu: FC<{ number: number }> = (props) => {
  const issue = useAppSelector(selectIssue);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const { number } = props;
  return (
    <MenuContainer>
      <FontAwesomeIcon icon={faEllipsisH} onClick={() => setOpen(!open)} color="#03a10a" />
      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <MenuContent>
            <MenuItem onClick={() => dispatch(clearBook(number))}>Edit</MenuItem>
            {(number !== 0 || issue.bookIds.length > 1) && (
              <MenuItem
                onClick={() => {
                  dispatch(removeBook(number));
                  setOpen(false);
                }}
              >
                Remove
              </MenuItem>
            )}
          </MenuContent>
        </ClickAwayListener>
      )}
    </MenuContainer>
  );
};

interface Info {
  number: number;
  book: Book;
}

export const BookInfo: FC<Info> = (props) => {
  const { number, book } = props;
  return (
    <Tile>
      <Container>
        <Header>
          <Title>
            <Icon>
              <FontAwesomeIcon icon={faBook} color="#dcdfe5" />
            </Icon>
            <p>{book.title}</p>
          </Title>
          <div>
            <BookMenu number={number} />
          </div>
        </Header>
        <Content>
          <p>{book.author}</p>
          <p>{book.year}</p>
        </Content>
        <Footer>
          <p>{book.bar_code}</p>
          {!book.available && <span>(book not available)</span>}
          <p>{book.isbn}</p>
        </Footer>
      </Container>
    </Tile>
  );
};
