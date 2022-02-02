import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { nextStep, previousStep, selectIssue, resetIssue } from 'app/issueSlice';
import { Summary } from 'components/Summary';
import { resetMember } from 'app/memberSlice';
import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Content, Icon, ModalBackdrop } from './Issue.style';
import { Stepper } from './Stepper';
import { Book } from './Book';
import { Member } from './Member';

interface ProceedButtonProps {
  [x: string]: any;
}
/* eslint-disable react/require-default-props */
/**
 * It renders a button that will dispatch an action to the store to move to the next step.
 * @param props - any
 * @returns A button with the text "Proceed" and a color of green.
 */
export const ProceedButton: FC<ProceedButtonProps> = (props) => {
  const dispatch = useAppDispatch();
  return <Button text="Proceed" color="#03a10a" onClick={() => dispatch(nextStep())} {...props} />;
};

/**
 * It returns a button that, when clicked, will dispatch an action that will change the current step to
 * the previous step
 * @returns A button that will dispatch an action to go back to the previous step.
 */
export const BackButton: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Icon onClick={() => dispatch(previousStep())}>
      <FontAwesomeIcon icon={faChevronLeft} size="lg" color="#eaeaea" />
    </Icon>
  );
};

export const Issue: FC = () => {
  const [open, setOpen] = useState(true);
  const toggleIssue = () => setOpen(!open);
  const issue = useAppSelector(selectIssue);
  const dispatch = useAppDispatch();
  /**
   * It renders the component based on the state.
   * @param {number} s - number
   * @returns A switch statement is being used to return a different component depending on the value
   * of the state.
   */
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
    <div>
      <Button text="Issue a book" onClick={toggleIssue} />
      {open && (
        <div>
          <ModalBackdrop onClick={toggleIssue} />
          <Container>
            <Stepper />
            <Content>{renderSwitch(issue.step)}</Content>
          </Container>
        </div>
      )}
    </div>
  );
};
