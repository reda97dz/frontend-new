import { useAppDispatch, useAppSelector } from "app/hooks";
import { nextStep, selectIssue, setMember } from "app/issueSlice";
import { FC } from "react";

export const Member: FC = () => {
  const issue = useAppSelector(selectIssue);
  const dispatch = useAppDispatch();
  return (
    <div>
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
