import { fetchBooks, selectBooks } from 'app/booksSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addBookOption, removeBook, selectIssue, setBook } from 'app/issueSlice';
import { selectMember } from 'app/memberSlice';
import { FC, useEffect } from 'react';
import { Book as BookType } from 'types';
import { BackButton, ProceedButton } from '..';
import { InfoContainer, StepContent, StepTitle, Title } from '../Issue.style';
import { SelectSearch } from '../SelectSearch';
import { GridContainer, Item, MoreButton } from './Book.style';
import { BookInfo } from './BookInfo/BookInfo';

export const Book: FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks);
  const issue = useAppSelector(selectIssue);
  const member = useAppSelector(selectMember);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    dispatch(fetchBooks());
  }

  const onClick = (book: BookType, index: number) => {
    dispatch(setBook({ book: book.id.toString(), number: index }));
  };

  const onDelete = (index: number) => {
    dispatch(removeBook(index));
  };

  const isNotAvailable = () => {
    const selectedBooks = books.filter((book) => issue.bookIds.includes(book.id.toString()));
    return selectedBooks.some((book) => !book.available);
  };

  return (
    <div>
      <InfoContainer>
        <StepTitle>
          <Title>
            <BackButton />
            <h3>Choosing a book</h3>
          </Title>
          <ProceedButton
            disabled={issue.bookIds.some((element) => element === '') || isNotAvailable()}
          />
        </StepTitle>
        <StepContent>
          {member.first_name} {member.last_name} can borrow {member.Issues.length < 2 && 'up to'}{' '}
          {3 - member.Issues.length} book{member.Issues.length < 2 && 's'}.
          <GridContainer>
            {issue.memberState > 0 &&
              issue.bookIds.map((b, i) => (
                <div>
                  <>
                    {issue.bookIds[i] === '' && (
                      <Item key={Math.random()}>
                        <p>Search for a book #{i + 1} </p>
                        <SelectSearch
                          number={i}
                          onClick={onClick}
                          options={books}
                          type="book"
                          onDelete={onDelete}
                        />
                      </Item>
                    )}
                  </>
                  {b !== '' && (
                    <Item>
                      <BookInfo number={i} book={books.find((book) => book.id === Number(b))} />
                    </Item>
                  )}
                </div>
              ))}
            <Item>
              {issue.memberState > 1 ? (
                <MoreButton text="Issue more" onClick={() => dispatch(addBookOption())} />
              ) : (
                member.Issues.length > 2 && (
                  <p>Member has reached the limit of simultaneous issues</p>
                )
              )}
            </Item>
          </GridContainer>
        </StepContent>
      </InfoContainer>
    </div>
  );
};
