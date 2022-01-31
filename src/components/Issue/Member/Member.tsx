import { selectMemberStatus } from "app/membersSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { nextStep, selectIssue, setMember } from "app/issueSlice";
import { fetchMembers } from 'app/membersSlice'
import { FC } from "react";

export const Member: FC = () => {
  const issue = useAppSelector(selectIssue);
  const status = useAppSelector(selectMemberStatus)
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(fetchMembers())
  return (
    <div>
      {/* <button type="button" onClick={handleClick}>
        {status === 'pending' ? 'loading members' : status === 'failed' ? 'failed' : status === 'succeeded' ? "loaded members" : 'CLick'}
      </button> */}
      <input type="text" value={issue.memberId} placeholder='select Member' onChange={(e) => dispatch(setMember(e.target.value))} />
      {issue.memberId.length > 0 ? (
        <button type='button' onClick={() => dispatch(nextStep())}>
          next
        </button>
      ) : (
        <>Please select a member to continue</>
      )}
    </div>
  );
};
