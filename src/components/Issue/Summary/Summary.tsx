/* eslint-disable camelcase */
import Table from 'components/Table';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectIssue, setIssueDate, setReturnDate } from 'app/issueSlice';
import { selectMember } from 'app/memberSlice';
import { FC, useMemo } from 'react';
import { selectBooks } from 'app/booksSlice';
import { Book } from 'types';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectAlert } from 'app/alertSlice';
import { Alert } from 'components/Alert';
import { isWeekday } from 'utils/misc';
import { BackButton, IssueButton } from '..';
import { InfoContainer, StepContent, StepTitle, Title } from '../Issue.style';
import { DatePickerStyle } from './Summary.style';
import 'react-datepicker/dist/react-datepicker.css';

export const Summary: FC = () => {
  const issue = useAppSelector(selectIssue);
  const member = useAppSelector(selectMember);
  const books = useAppSelector(selectBooks);
  const alert = useAppSelector(selectAlert);
  const dispatch = useAppDispatch();
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
      {
        Header: 'Issue Date',
        accessor: 'issue_date',
      },
      {
        Header: 'Return Deadline',
        accessor: 'return_date',
      },
    ],
    []
  );

  const createData = () => {
    const data: { title: string; bar_code: number; issue_date: string; return_date: string }[] = [];
    const booksList = books.filter((b: Book) => issue.bookIds.includes(b.id.toString()));
    booksList.forEach((book) => {
      data.push({
        title: book.title,
        bar_code: book.bar_code,
        issue_date: new Date(issue.issueDate).toLocaleDateString('en-us'),
        return_date: new Date(issue.returnDate).toLocaleDateString('en-us'),
      });
    });
    return data;
  };

  const onChange = (dates: [Date | null, Date | null]) => {
    dispatch(setIssueDate(moment(dates[0]).toDate().toString()));
    if (dates[1] !== null) dispatch(setReturnDate(moment(dates[1]).toDate().toString()));
  };

  return (
    <div>
      <InfoContainer>
        <StepTitle>
          <Title>
            <BackButton />
            <h3>Summary</h3>
          </Title>
          {issue.issueState === 'pending' ? (
            <FontAwesomeIcon icon={faSpinner} className="fa-pulse" color="gainsboro" />
          ) : (
            <IssueButton
              disabled={issue.issueDate === '' || issue.returnDate === ''}
              books={books.filter((b) => issue.bookIds.includes(b.id.toString()))}
            />
          )}
        </StepTitle>
        <StepContent>
          {issue.issueState === 'failed' && (
            <Alert
              message="Error confirming issue. Please verify connectivity and try again."
              severity="warning"
            />
          )}
          <br />
          Member{' '}
          <strong>
            {member.last_name} {member.first_name} ({member.membership_number})
          </strong>{' '}
          is borrowing the following book{issue.bookIds.length > 1 && 's'}
          <Table pagination={false} columns={columns} data={createData()} light={false} />
          <br />
          Edit the issue period
          <DatePickerStyle>
            <DatePicker
              selected={new Date(issue.issueDate)}
              onChange={onChange}
              startDate={new Date(issue.issueDate)}
              endDate={issue.returnDate === '' ? null : new Date(issue.returnDate)}
              minDate={moment().toDate()}
              filterDate={isWeekday}
              selectsRange
              withPortal
            />
          </DatePickerStyle>
        </StepContent>
      </InfoContainer>
    </div>
  );
};
