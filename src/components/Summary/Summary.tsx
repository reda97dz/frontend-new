import { useAppDispatch, useAppSelector } from 'app/hooks';
import { issueBook, previousStep, selectIssue } from 'app/issueSlice';
import { selectMember } from 'app/memberSlice';
import { FC } from 'react';

export const Summary: FC = () => {
  const dispatch = useAppDispatch();
  const issue = useAppSelector(selectIssue);
  const member = useAppSelector(selectMember);
  return (
    <>
      Member {member.firstName} {member.lastName} is borrowing the following books: <br />
      {issue.bookIds.map((b) => (
        <p key={Math.random()}> {b} </p>
      ))}
      <br />
      <button type="button" onClick={() => dispatch(previousStep())}>
        back
      </button>
      <button type="button" onClick={() => dispatch(issueBook())}>
        confirm
      </button>
    </>
  );
};
