import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch } from 'app/hooks';
import { resetIssue } from 'app/issueSlice';
import { resetMember } from 'app/memberSlice';
import { FC } from 'react';
import { Container } from './Done.style';

export const Done: FC = () => {
  const dispatch = useAppDispatch();

  setTimeout(() => {
    dispatch(resetIssue());
    dispatch(resetMember());
  }, 3000);

  return (
    <Container>
      <h1>All Done!</h1>
      <FontAwesomeIcon icon={faThumbsUp} size="8x" color="#001b2e" />
      <p>Will redirect in a few seconds...</p>
    </Container>
  );
};
