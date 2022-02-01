import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { nextStep, previousStep, selectIssue, resetIssue } from 'app/issueSlice';
import { Summary } from 'components/Summary';
import { resetMember } from 'app/memberSlice';
import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Content, Icon } from './Issue.style';
import { Stepper } from './Stepper';
import { Book } from './Book';
import { Member } from './Member';

interface ProceedButtonProps {
  [x: string]: any;
}
/* eslint-disable react/require-default-props */
export const ProceedButton: FC<ProceedButtonProps> = (props) => {
  const dispatch = useAppDispatch();
  return <Button text="Proceed" color="#294c60" onClick={() => dispatch(nextStep())} {...props} />;
};

export const BackButton: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Icon onClick={() => dispatch(previousStep())}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Icon>
  );
};

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
