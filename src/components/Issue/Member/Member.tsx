import { selectMembers } from "app/membersSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { nextStep, reset, selectIssue, setMember, setMemberState } from "app/issueSlice";
import { fetchMembers } from 'app/membersSlice'
import { fetchMemberById, selectMember } from "app/memberSlice";
import { FC, useEffect, useState } from "react";
import { notEmpty } from "utils/misc";

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

  async function fetchMember(memberId: number) {
    dispatch(fetchMemberById(memberId))
  }

  return (
    <div>

      {notEmpty(member) ? (
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
            <li key={m.id} onClick={() => { dispatch(reset()); dispatch(fetchMemberById(Number(m.id))); dispatch(setMemberState(3 - m.active.length)) }} >{m.firstName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
