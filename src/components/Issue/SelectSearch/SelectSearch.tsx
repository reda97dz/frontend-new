import { selectMember } from "app/memberSlice";
import { useAppSelector } from "app/hooks";
import { FC, useState } from "react";
import { Book, Member } from "types";
import { selectIssue } from "app/issueSlice";

interface SelectSearchBookProps {
  type: 'book';
  number: number;
  options: Book[];
  onClick: Function;
  onDelete: Function;
}

interface SelectSearchMemberProps {
  type: 'member';
  options: Member[];
  onClick: Function;
}

type SelectSearchProps = SelectSearchBookProps | SelectSearchMemberProps

export const SelectSearch: FC<SelectSearchProps> = (props) => {
  const [open, setOpen] = useState(false);
  const member = useAppSelector(selectMember);
  const issue = useAppSelector(selectIssue)

  const onClickMember = (member: Member) => {
    props.onClick(member)
    setOpen(false)
  }
  const onClickBook = (book: Book, number: number) => {
    props.onClick(book.id, number)
    setOpen(false)
  }
  const onDeleteBook = (number: number) => {
    if (props.type === 'book') {
      props.onDelete(number)
    }
  }

  return (
    <div>
      {props.type === 'book' ? (
        <>
          ---- {props.number}
          <button type='button' onClick={() => setOpen(!open)}>
            {issue.bookIds[props.number] || 'select a book'}
          </button>
          {open && (
            <ul>
              {props.options.filter((b) => !issue.bookIds.includes(b.id)).map((option) => (
                <li key={option.id} onClick={() => onClickBook(option, props.number)} >
                  {option.title}
                </li>
              ))}
            </ul>
          )}
          {(props.number != 0 || issue.bookIds.length > 1) && <button type="button" onClick={() => onDeleteBook(props.number)}>remove</button>}
        </>
      ) : (
        <>
          <button type="button" onClick={() => setOpen(!open)} > {member.lastName || 'Select a member'} </button>
          {open && (
            <ul>
              {props.options.map((option) => (
                <li key={option.id} onClick={() => onClickMember(option)}> {option.firstName} {option.lastName} </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
};