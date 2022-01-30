import { FC } from 'react';
import { useAppSelector } from 'app/hooks';
import { selectIssue } from 'app/issueSlice';
import { Book } from './Book';
import { Member } from './Member';
import { Stepper } from './Stepper';
import { Container, Content } from './Issue.style';
import { Summary } from './Summary';

export const Issue: FC = () => {
  const issue = useAppSelector(selectIssue);
  const renderSwitch = (s: number) => {
    switch (s) {
      case 1:
        return <Member />;
      case 2:
        return <Book />;
      default:
        return <>Book issued. Done!</>;
    }
  };
  return (
    <Container>
      <Stepper />
      <Content>
        book: {issue.bookId}
        <br />
        member: {issue.memberId}
        <br />
        {renderSwitch(issue.step)}
      </Content>
      <Summary />
    </Container>
  );
};
