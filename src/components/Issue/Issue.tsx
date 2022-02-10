import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { nextStep, previousStep, selectIssue } from 'app/issueSlice';
import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import {
  Container,
  Content,
  ContentContainer,
  Header,
  Icon,
  ModalBackdrop,
  Relative,
} from './Issue.style';
import { Stepper } from './Stepper';
import { Book } from './Book';
import { Member } from './Member';
import { Summary } from './Summary';
import { Done } from './Done';

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
  const [open, setOpen] = useState(false);
  const toggleIssue = () => setOpen(!open);
  const issue = useAppSelector(selectIssue);
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
        return <Done />;
    }
  };
  return (
    <>
      <Button text="Issue a book" onClick={toggleIssue} />
      {open && (
        <Relative>
          <ModalBackdrop onClick={toggleIssue} />
          <Container>
            <Header>
              <h3>Issue a book</h3>
              <FontAwesomeIcon icon={faTimesCircle} onClick={toggleIssue} data-tip="Close" />
              <ReactTooltip place="top" type="dark" effect="solid" />
            </Header>
            <ContentContainer>
              <Stepper />
              <Content>{renderSwitch(issue.step)}</Content>
            </ContentContainer>
          </Container>
        </Relative>
      )}
    </>
  );
};
