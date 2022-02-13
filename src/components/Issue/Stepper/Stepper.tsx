import {
  faCheckSquare,
  faDiceOne,
  faDiceThree,
  faDiceTwo,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { selectMemberStatus } from 'app/membersSlice';
import { selectBookStatus } from 'app/booksSlice';
import { selectIssue, setStep } from 'app/issueSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Container, Step, Icon } from './Stepper.style';
import { verifyOverdues } from '../Book';

export const Stepper: FC = () => {
  const issue = useAppSelector(selectIssue);
  const dispatch = useAppDispatch();
  const membersStatus = useAppSelector(selectMemberStatus);
  const booksStatus = useAppSelector(selectBookStatus);

  return (
    <Container>
      <Step
        active={issue.step > 0}
        clickable={issue.step !== 1}
        onClick={() => issue.step !== 1 && dispatch(setStep(1))}
      >
        <Icon>
          {membersStatus === 'pending' ? (
            <FontAwesomeIcon icon={faSpinner} className="fa-pulse" />
          ) : (
            <FontAwesomeIcon icon={faDiceOne} />
          )}
        </Icon>
        <p>Select a member</p>
      </Step>
      <Step
        active={issue.step > 1}
        clickable={issue.bookIds[0] !== '' && issue.step !== 2}
        onClick={() => issue.bookIds[0] !== '' && dispatch(setStep(2))}
      >
        <Icon>
          {booksStatus === 'pending' ? (
            <FontAwesomeIcon icon={faSpinner} className="fa-pulse" />
          ) : (
            <FontAwesomeIcon icon={faDiceTwo} />
          )}
        </Icon>
        <p>Select a book</p>
      </Step>
      <Step
        active={issue.step > 2}
        clickable={false}
        onClick={() => issue.bookIds[0] !== '' && dispatch(setStep(3))}
      >
        <Icon>
          <FontAwesomeIcon icon={faDiceThree} />
        </Icon>
        <p>Summary</p>
      </Step>
      <Step active={issue.step > 3}>
        <Icon>
          <FontAwesomeIcon icon={faCheckSquare} />
        </Icon>
        <p>All Done!</p>
      </Step>
    </Container>
  );
};
