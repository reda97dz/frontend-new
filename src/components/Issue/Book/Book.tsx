import { fetchBooks, selectBooks } from 'app/booksSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addBookOption, removeBook, selectIssue, setBook } from 'app/issueSlice';
import { selectMember } from 'app/memberSlice';
import { Alert } from 'components/Alert';
import { FC, useEffect } from 'react';
import { Book as BookType } from 'types';
import { isOverdue } from 'utils/misc';
import { BackButton, ProceedButton } from '..';
import { InfoContainer, StepContent, StepTitle, Title } from '../Issue.style';
import { SelectSearch } from '../SelectSearch';
import { GridContainer, Item, MoreButton } from './Book.style';
import { BookInfo } from './BookInfo/BookInfo';

/**
 * `Returns true if there are any active overdue issues.`
 */
export const verifyOverdues = () => {
  const member = useAppSelector(selectMember);
  return (
    member.Issues.filter(
      (i) => i.date_returned === null && isOverdue(new Date(i.date_due_for_return))
    ).length > 0
  );
};

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

  /**
   * Return a custom info message about the selected member's book issues.
   * @returns A string.
   */
  const renderMessage = () => {
    const name = `${member.first_name}  ${member.last_name} can borrow `;
    let second = '';
    if (member.Issues.filter((i) => i.date_returned === null).length < 2) {
      second = 'up to ';
    }
    const plural =
      3 - member.Issues.filter((i) => i.date_returned === null).length !== 1 ? 's' : '';

    return [
      name,
      second,
      3 - member.Issues.filter((i) => i.date_returned === null).length,
      ' book',
      plural,
    ].join('');
  };

  /**
   * Given a list of selected books, return a true if any of the books in the list is not available
   * @returns A boolean value.
   */
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
          {!verifyOverdues() && member.Issues.filter((i) => i.date_returned === null).length < 3 && (
            <>
              <Alert message={renderMessage()} severity="info" /> <br />
            </>
          )}
          {member.Issues.filter((i) => i.date_returned === null).length > 2 && (
            <Alert
              message="Member has reached the limit of simultaneous issues. Please inform them to return a book before issuing again."
              severity="error"
            />
          )}
          {verifyOverdues() && (
            <Alert
              message="This member has overdue issues. Until they are resolved will he/she be allowed to borrow more books."
              severity="warning"
            />
          )}
          <GridContainer>
            {issue.memberState > 0 &&
              !verifyOverdues() &&
              issue.bookIds.map((b, i) => (
                <div>
                  <>
                    {issue.bookIds[i] === '' && (
                      <Item key={Math.random()} center>
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
            {issue.memberState > 1 && (
              <Item>
                <MoreButton text="Issue more" onClick={() => dispatch(addBookOption())} />
              </Item>
            )}
          </GridContainer>
        </StepContent>
      </InfoContainer>
    </div>
  );
};
