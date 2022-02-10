import { selectMembers, fetchMembers } from 'app/membersSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { resetIssue, setMemberState } from 'app/issueSlice';
import { fetchMemberById, selectMember } from 'app/memberSlice';
import { FC, useEffect } from 'react';
import { notEmpty } from 'utils/misc';
import { MemberIssue } from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { SelectSearch } from '../SelectSearch';
import { Icon, InfoContainer, StepContent, StepTitle, Title } from '../Issue.style';
import { Icon as Logo } from '../Stepper/Stepper.style';
import { Container, DisplayContainer, SearchContainer, Header } from './Member.style';
import { ProceedButton } from '..';

export const Member: FC = () => {
  const dispatch = useAppDispatch();
  const members = useAppSelector(selectMembers);
  const member = useAppSelector(selectMember);

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
                      {' '}
                      {member.first_name} {member.last_name}{' '}
                    </p>
                  </Header>
                  <p> {member.membership_number} </p>
                  <p> {member.Issues.length} books currently borrowed. </p>
                </>
              </DisplayContainer>
            )}
          </Container>
        </StepContent>
      </InfoContainer>
    </div>
  );
};
