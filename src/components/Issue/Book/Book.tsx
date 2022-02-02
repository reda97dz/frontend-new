import { fetchBooks, selectBooks } from 'app/booksSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addBookOption, removeBook, selectIssue, setBook } from 'app/issueSlice';
import React, { FC, useEffect } from 'react';
import { BackButton, ProceedButton } from '..';
import { InfoContainer, StepContent, StepTitle, Title } from '../Issue.style';
import { SearchContainer } from '../Member/Member.style';
import { SelectSearch } from '../SelectSearch';
import { Container, MoreButton } from './Book.style';
import { BookInfo } from './BookInfo/BookInfo';

export const Book: FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks);
  const issue = useAppSelector(selectIssue);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    dispatch(fetchBooks());
  }

  const onClick = (bookId: string, index: number) => {
    dispatch(setBook({ book: bookId, number: index }));
  };

  const onDelete = (index: number) => {
    dispatch(removeBook(index));
  };
  return (
    <div>
      <InfoContainer>
        <StepTitle>
          <Title>
            <BackButton />
            <h3>Choosing a book</h3>
          </Title>
          <ProceedButton disabled={issue.bookIds.some((element) => element === '')} />
        </StepTitle>
        <StepContent>
          <Container>
            <SearchContainer>
              {issue.memberState > 0 &&
                issue.bookIds.map((b, i) => (
                  <React.Fragment key={Math.random()}>
                    {issue.bookIds[i] === '' && (
                      <div>
                        <p>Search for a book</p>
                        <SelectSearch
                          number={i}
                          onClick={onClick}
                          options={books}
                          type="book"
                          onDelete={onDelete}
                        />
                      </div>
                    )}
                    {b !== '' && (
                      <>
                        {' '}
                        <BookInfo onDelete={onDelete} number={i} />{' '}
                      </>
                    )}
                  </React.Fragment>
                ))}
              {issue.memberState > 1 ? (
                <MoreButton text="Issue more" onClick={() => dispatch(addBookOption())} />
              ) : (
                <p>Member has reached maximum borrowed book</p>
              )}
            </SearchContainer>
          </Container>
        </StepContent>
      </InfoContainer>
      <br />
      <br />
    </div>
  );
};
