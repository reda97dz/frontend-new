import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { previousStep, selectIssue } from 'app/issueSlice';
import { issueBook, reset } from 'app/issueSlice';
import { Book } from './Book';
import { Member } from './Member';
import { Stepper } from './Stepper';
import { Container, Content } from './Issue.style';

export const Issue: FC = () => {
  const issue = useAppSelector(selectIssue);
  const dispatch = useAppDispatch()
  const renderSwitch = (s: number) => {
    switch (s) {
      case 1:
        return <Member />;
      case 2:
        return <Book />;
      case 3:
        return <> <button type='button' onClick={() => dispatch(previousStep())}>back</button>
          {issue.bookId} by {issue.memberId}
          <button type='button' onClick={() => dispatch(issueBook())}>Confirm</button>
        </>
      default:
        return <>Book issued. Done! {setTimeout(() => {
          dispatch(reset())
        }, 3000)} </>;
    }
  };
  return (
    <Container>
      <Stepper />
      <Content>
        {renderSwitch(issue.step)}
      </Content>
    </Container>
  );
};
