import { fetchBooks, selectBooks } from 'app/booksSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addBookOption, removeBook, selectIssue, setBook } from 'app/issueSlice';
import React, { FC, useEffect } from 'react';
import { BackButton, ProceedButton } from '..';
import { InfoContainer, StepContent, StepProceed, StepTitle } from '../Issue.style';
import { SearchContainer } from '../Member/Member.style';
import { SelectSearch } from '../SelectSearch';
import { Container } from './Book.style';

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
          <BackButton />
          <h3>Choosing a book</h3>
        </StepTitle>
        <StepContent>
          <Container>
            <SearchContainer>
              <p>Search for a book</p>
              {issue.memberState > 0 &&
                issue.bookIds.map((_, i) => (
                  <React.Fragment key={Math.random()}>
                    <SelectSearch
                      number={i}
                      onClick={onClick}
                      options={books}
                      type="book"
                      onDelete={onDelete}
                    />
                  </React.Fragment>
                ))}
              {issue.memberState > 1 ? (
                <button type="button" onClick={() => dispatch(addBookOption())}>
                  Issue more
                </button>
              ) : (
                <p>Member has reached maximum borrowed book</p>
              )}
            </SearchContainer>
          </Container>
        </StepContent>
        <StepProceed>
          <ProceedButton disabled={issue.bookIds.some((element) => element === '')} />
        </StepProceed>
      </InfoContainer>
      <br />
      <br />
    </div>
  );
};
