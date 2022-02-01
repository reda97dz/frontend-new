import { selectMembers } from "app/membersSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { nextStep, resetIssue, selectIssue, setMember, setMemberState } from "app/issueSlice";
import { fetchMembers } from 'app/membersSlice'
import { fetchMemberById, selectMember } from "app/memberSlice";
import { FC, useEffect, useState } from "react";
import { notEmpty } from "utils/misc";
import { SelectSearch } from "../SelectSearch";
import { Member as MemberType } from "types";

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


  const onClick = (member: MemberType) => {
    dispatch(resetIssue());
    dispatch(fetchMemberById(Number(member.id)));
    dispatch(setMemberState(3 - member.active.length));
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
      <SelectSearch
        options={members}
        onClick={onClick}
        type='member'
      />
    </div>
  );
};
