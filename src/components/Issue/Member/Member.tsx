import { selectMembers, fetchMembers } from 'app/membersSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { resetIssue, setMemberState } from 'app/issueSlice';
import { fetchMemberById, selectMember } from 'app/memberSlice';
import { FC, useEffect } from 'react';
import { notEmpty } from 'utils/misc';
import { Member as MemberType } from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { SelectSearch } from '../SelectSearch';
import { Icon, InfoContainer, StepContent, StepProceed, StepTitle } from '../Issue.style';
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

  const onClick = (m: MemberType) => {
    dispatch(resetIssue());
    dispatch(fetchMemberById(Number(m.id)));
    dispatch(setMemberState(3 - m.active.length));
  };

  return (
    <div>
      <InfoContainer>
        <StepTitle first>
          <Icon disabled>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Icon>
          <h3>Choosing a member</h3>
        </StepTitle>
        <StepContent>
          <Container>
            <SearchContainer>
              <p>Search for a member</p>
              <SelectSearch options={members} onClick={onClick} type="member" />
            </SearchContainer>
            <DisplayContainer>
              {notEmpty(member) && (
                <>
                  <Header>
                    <Logo>
                      <FontAwesomeIcon icon={faUser} />
                    </Logo>
                    <p>
                      {' '}
                      {member.firstName} {member.lastName}{' '}
                    </p>
                  </Header>
                  <p> {member.membershipNumber} </p>
                  <p> {member.active.length} books currently borrowed. </p>
                </>
              )}
            </DisplayContainer>
          </Container>
        </StepContent>
        <StepProceed>
          <ProceedButton disabled={!notEmpty(member)} />
        </StepProceed>
      </InfoContainer>
    </div>
  );
};
