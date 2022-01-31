import { selectMembers } from "app/membersSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { nextStep, selectIssue, setMember, setMemberState } from "app/issueSlice";
import { fetchMembers } from 'app/membersSlice'
import { fetchMemberById, selectMember } from "app/memberSlice";
import { FC, useEffect } from "react";

export const Member: FC = () => {
  const dispatch = useAppDispatch();
  const members = useAppSelector(selectMembers)
  const member = useAppSelector(selectMember)
  const issue = useAppSelector(selectIssue);

  useEffect(() => {
    getMembers()
  }, []);

  async function getMembers() {
    dispatch(fetchMembers())
  }

  const handleChange = (e: any) => {
    console.log(e.target.value);
    fetchMember(e.target.value)
  }

  async function fetchMember(memberId: number) {
    dispatch(fetchMemberById(memberId))
  }

  // const handleClick = () => dispatch(fetchMembers())
  return (
    <div>
      <select name="Member" id="member" defaultValue={'DEFAULT'} onChange={handleChange}>
        <option value="DEFAULT" disabled > -- select an option -- </option>
        {members.map((m) => (
          <option key={Math.random()} value={m.id}> {m.firstName} </option>
        ))}
      </select>
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
