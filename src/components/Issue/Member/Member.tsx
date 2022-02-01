import { selectMembers } from "app/membersSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { nextStep, selectIssue, setMember, setMemberState } from "app/issueSlice";
import { fetchMembers } from 'app/membersSlice'
import { fetchMemberById, selectMember } from "app/memberSlice";
import { FC, useEffect, useState } from "react";

export const Member: FC = () => {
  const dispatch = useAppDispatch();
  const members = useAppSelector(selectMembers)
  const member = useAppSelector(selectMember)
  const issue = useAppSelector(selectIssue);

  const [open, setOpen] = useState(false);

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

      <input type="text" value={issue.memberId} placeholder='select Member' onChange={(e) => dispatch(setMember(e.target.value))} />
      {issue.memberId.length > 0 ? (
        <button type='button' onClick={() => dispatch(nextStep())}>
          next
        </button>
      ) : (
        <>Please select a member to continue</>
      )}

      <br />

      <button type='button' onClick={() => setOpen(!open)}>{member.firstName || `select a member`}</button>
      {open && (
        <ul>
          {members.map((m) => (
            <li key={m.id} onClick={() => { dispatch(fetchMemberById(Number(m.id))); dispatch(setMemberState(3 - m.active.length)) }} >{m.firstName}</li>
          ))}
        </ul>
      )}

      {/*
      <button type="button" onClick={handleClick}>
        {status === 'pending' ? 'loading members' : status === 'failed' ? 'failed' : status === 'succeeded' ? "loaded members" : 'CLick'}
      </button> */}
    </div>
  );
};
