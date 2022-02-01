import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { nextStep, previousStep, selectIssue } from 'app/issueSlice';
import { resetIssue } from 'app/issueSlice';
import { Book } from './Book';
import { Member } from './Member';
import { Stepper } from './Stepper';
import { Container, Content, Icon } from './Issue.style';
import { Summary } from 'components/Summary';
import { resetMember } from 'app/memberSlice';
import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const ProceedButton: FC = () => {
  const dispatch = useAppDispatch()
  return (
    <Button text='Proceed' color="#294c60" onClick={() => dispatch(nextStep())} />
  )
}

export const BackButton: FC = () => {
  const dispatch = useAppDispatch()
  return (
    <Icon onClick={() => dispatch(previousStep())}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Icon>
  )
}

export const Issue: FC = () => {
  const issue = useAppSelector(selectIssue);
  const dispatch = useAppDispatch();
  const renderSwitch = (s: number) => {
    switch (s) {
      case 1:
        return <Member />;
      case 2:
        return <Book />;
      case 3:
        return <Summary />;
      default:
        return (
          <>
            Book issued. Done!{' '}
            {setTimeout(() => {
              dispatch(resetIssue());
              dispatch(resetMember());
            }, 3000)}{' '}
          </>
        );
    }
  };
  return (
    <Container>
      <Stepper />
      <Content>{renderSwitch(issue.step)}</Content>
    </Container>
  );
};
