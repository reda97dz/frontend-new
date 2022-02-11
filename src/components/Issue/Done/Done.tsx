import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { createIssue, resetIssue, selectIssue } from 'app/issueSlice';
import { resetMember, selectMember } from 'app/memberSlice';
import { FC, useEffect } from 'react';
import { Book } from 'types';
import { Container } from './Done.style';

interface List {
  // eslint-disable-next-line camelcase
  books: Book[];
}

export const Done: FC<List> = (props) => {
  const dispatch = useAppDispatch();
  const issue = useAppSelector(selectIssue);
  const member = useAppSelector(selectMember);
  const { books } = props;

  books.forEach((book) => {
    dispatch(
      createIssue({
        books: JSON.stringify({ id: book.id, bar_code: book.bar_code, title: book.title }),
        date_issued: issue.issueDate,
        date_due_for_return: issue.returnDate,
        member_id: member.id,
      })
    );
  });

  setTimeout(() => {
    dispatch(resetIssue());
    dispatch(resetMember());
  }, 5000);

  if (issue.issueState === 'pending') {
    return <p>Issuing books</p>;
  }
  if (issue.issueState === 'failed') {
    return <p>There was an error</p>;
  }

  return (
    <Container>
      <h1>All Done!</h1>
      <FontAwesomeIcon icon={faThumbsUp} size="8x" color="#001b2e" />
      <p>Will redirect in a few seconds...</p>
    </Container>
  );
};
