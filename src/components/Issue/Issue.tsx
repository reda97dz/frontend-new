import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectIssue } from 'app/issueSlice';
import { resetIssue } from 'app/issueSlice';
import { Book } from './Book';
import { Member } from './Member';
import { Stepper } from './Stepper';
import { Container, Content } from './Issue.style';
import { Summary } from 'components/Summary';
import { resetMember } from 'app/memberSlice';

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
        return <Summary />
      default:
        return <>Book issued. Done! {setTimeout(() => {
          dispatch(resetIssue());
          dispatch(resetMember());
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
