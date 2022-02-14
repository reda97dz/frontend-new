/* eslint-disable camelcase */
import { selectMembers, fetchMembers } from 'app/membersSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { resetIssue, setMemberState } from 'app/issueSlice';
import { fetchMemberById, selectMember } from 'app/memberSlice';
import { FC, useEffect, useMemo, useState } from 'react';
import { notEmpty } from 'utils/misc';
import { Issue, MemberIssue } from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
import Table from 'components/Table';
import TableCard from 'components/Table/TableCard';
import { SelectSearch } from '../SelectSearch';
import { Icon, InfoContainer, StepContent, StepTitle, Title } from '../Issue.style';
import { Icon as Logo } from '../Stepper/Stepper.style';
import { Container, DisplayContainer, SearchContainer, Header } from './Member.style';
import { ProceedButton } from '..';

export const Member: FC = () => {
  const dispatch = useAppDispatch();
  const members = useAppSelector(selectMembers);
  const member = useAppSelector(selectMember);
  const [showIssues, setShowIssues] = useState(false);

  const toggleShowIssues = () => setShowIssues(!showIssues);

  useEffect(() => {
    getMembers();
  }, []);

  async function getMembers() {
    dispatch(fetchMembers());
  }

  const onClick = (m: MemberIssue) => {
    dispatch(resetIssue());
    dispatch(fetchMemberById(Number(m.id)));
    dispatch(setMemberState(3 - m.Issues.length));
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Book Title',
        accessor: 'title',
      },
      {
        Header: 'Issue Date',
        accessor: 'date_issued',
      },
      {
        Header: 'Return Deadline',
        accessor: 'date_due_for_return',
      },
    ],
    []
  );

  const createData = (issues: Issue[]) => {
    const data: {
      title: string;
      bar_code: number;
      date_issued: string;
      date_due_for_return: string;
    }[] = [];
    issues.forEach((issue) => {
      const book: { id: number; title: string; bar_code: number } = JSON.parse(issue.books);
      data.push({
        title: book.title,
        bar_code: book.bar_code,
        date_issued: issue.date_issued,
        date_due_for_return: issue.date_due_for_return,
      });
    });
    return data;
  };

  return (
    <div>
      <InfoContainer>
        <StepTitle>
          <Title>
            <Icon disabled>
              <FontAwesomeIcon icon={faChevronLeft} size="lg" color="#eaeaea" />
            </Icon>
            <h3>Choosing a member</h3>
          </Title>
          <ProceedButton disabled={!notEmpty(member)} />
        </StepTitle>
        <StepContent>
          <Container>
            <SearchContainer>
              <p>Search for a member</p>
              <SelectSearch options={members} onClick={onClick} type="member" />
            </SearchContainer>
            {notEmpty(member) && (
              <DisplayContainer>
                <>
                  <Header>
                    <Logo>
                      <FontAwesomeIcon icon={faUser} />
                    </Logo>
                    <p>
                      {member.first_name} {member.last_name}
                    </p>
                  </Header>
                  <p>
                    {member.membership_number} &#8212; {member.phone_number}
                  </p>
                  <p>
                    {member.Issues.filter((issue) => issue.date_returned === null).length} book
                    {member.Issues.filter((i) => i.date_returned === null).length !== 1 && 's'} currently borrowed.{' '}
                    {member.Issues.filter((i) => i.date_returned === null).length > 0 && (
                      <span>
                        <FontAwesomeIcon
                          icon={showIssues ? faEyeSlash : faEye}
                          onClick={() => toggleShowIssues()}
                        />
                      </span>
                    )}
                  </p>
                  {member.Issues.filter((i) => i.date_returned === null).length > 0 && showIssues && (
                    <Table
                      light
                      pagination={false}
                      columns={columns}
                      data={createData(
                        member.Issues.filter((issue) => issue.date_returned === null)
                      )}
                      style={{
                        minWidth: '35em',
                      }}
                    />
                  )}
                </>
              </DisplayContainer>
            )}
          </Container>
        </StepContent>
      </InfoContainer>
    </div>
  );
};
