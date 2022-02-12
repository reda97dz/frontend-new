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
import { isWeekday } from 'utils/misc';
import { BackButton, IssueButton } from '..';
import { InfoContainer, StepContent, StepTitle, Title } from '../Issue.style';
import { DatePickerStyle } from './Summary.style';
import 'react-datepicker/dist/react-datepicker.css';

export const Summary: FC = () => {
  const issue = useAppSelector(selectIssue);
  const member = useAppSelector(selectMember);
  const books = useAppSelector(selectBooks);
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
    ],
    []
  );

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
          Member{' '}
          <strong>
            {member.last_name} {member.first_name} ({member.membership_number})
          </strong>{' '}
          is borrowing the following book{issue.bookIds.length > 1 && 's'}
          <Table
            pagination={false}
            columns={columns}
            data={books.filter((b: Book) => issue.bookIds.includes(b.id.toString()))}
          />
          <br />
          Edit the date range
          <DatePickerStyle>
            <DatePicker
              selected={new Date(issue.issueDate)}
              onChange={onChange}
              startDate={new Date(issue.issueDate)}
              endDate={issue.returnDate === '' ? '' : new Date(issue.returnDate)}
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
