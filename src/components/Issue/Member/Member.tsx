import { selectMembers } from 'app/membersSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { resetIssue, setMemberState } from 'app/issueSlice';
import { fetchMembers } from 'app/membersSlice';
import { fetchMemberById, selectMember } from 'app/memberSlice';
import { FC, useEffect } from 'react';
import { notEmpty } from 'utils/misc';
import { SelectSearch } from '../SelectSearch';
import { Member as MemberType } from 'types';
import { Icon, InfoContainer, StepContent, StepProceed, StepTitle } from '../Issue.style';
import { Icon as Logo } from '../Stepper/Stepper.style';
import { Container, DisplayContainer, SearchContainer, Header } from './Member.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
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

  async function fetchMember(memberId: number) {
    dispatch(fetchMemberById(memberId));
  }

  const onClick = (member: MemberType) => {
    dispatch(resetIssue());
    dispatch(fetchMemberById(Number(member.id)));
    dispatch(setMemberState(3 - member.active.length));
  };

  return (
    <div>
      <InfoContainer>
        <StepTitle first>
          <Icon />
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
                    <p> {member.firstName} {member.lastName} </p>
                  </Header>
                  <p> {member.membershipNumber} </p>
                  <p> {member.active.length} books currently borrowed. </p>
                </>)}
            </DisplayContainer>
          </Container>
        </StepContent>
        <StepProceed>
          {notEmpty(member) ? (
            <ProceedButton />
          ) : (
            <span>must choose a member to continue</span>
          )}
        </StepProceed>
      </InfoContainer>
    </div>
  );
};
