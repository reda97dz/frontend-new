import Table from 'components/Table';
import { useAppSelector } from 'app/hooks';
import { selectIssue } from 'app/issueSlice';
import { selectMember } from 'app/memberSlice';
import { FC, useMemo } from 'react';
import { selectBooks } from 'app/booksSlice';
import { Book } from 'types';
import { BackButton, ProceedButton } from '..';
import { InfoContainer, StepContent, StepTitle, Title } from '../Issue.style';

export const Summary: FC = () => {
  const issue = useAppSelector(selectIssue);
  const member = useAppSelector(selectMember);
  const books = useAppSelector(selectBooks);
  const columns = useMemo(
    () => [
      {
        Header: 'Book Title',
        accessor: 'title',
      },
      {
        Header: 'Bar Code',
        accessor: 'bar_code',
      },
    ],
    []
  );
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
          Member{' '}
          <strong>
            {member.last_name} {member.first_name} ({member.membership_number})
          </strong>{' '}
          is borrowing the following books
          <Table
            pagination={false}
            columns={columns}
            data={books.filter((b: Book) => issue.bookIds.includes(b.id.toString()))}
          />
        </StepContent>
      </InfoContainer>
    </div>
  );
};
