import { useAppSelector } from 'app/hooks';
import { selectIssue } from 'app/issueSlice';
import { selectMember } from 'app/memberSlice';
import { FC } from 'react';
import { BackButton, ProceedButton } from '..';
import { InfoContainer, StepContent, StepTitle, Title } from '../Issue.style';

export const Summary: FC = () => {
  const issue = useAppSelector(selectIssue);
  const member = useAppSelector(selectMember);
  return (
    <div>
      <InfoContainer>
        <StepTitle>
          <Title>
            <BackButton />
            <h3>Summary</h3>
          </Title>
          <ProceedButton />
        </StepTitle>
        <StepContent>
          Member {member.lastName} is borrowing the following books <br />
          {issue.bookIds.map((b) => (
            <p key={Math.random()}> {b} </p>
          ))}
        </StepContent>
      </InfoContainer>
    </div>
  );
};
