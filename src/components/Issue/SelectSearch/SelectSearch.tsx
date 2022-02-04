import { selectMember } from 'app/memberSlice';
import { useAppSelector } from 'app/hooks';
import { FC, useState } from 'react';
import { Book, Member } from 'types';
import { selectIssue } from 'app/issueSlice';
import ClickAwayListener from 'react-click-away-listener';
import { Option, Options, SelectSearchContainer } from './SelectSearch.style';

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

type SelectSearchProps = SelectSearchBookProps | SelectSearchMemberProps;

export const SelectSearch: FC<SelectSearchProps> = (props) => {
  const [open, setOpen] = useState(false);
  const member = useAppSelector(selectMember);
  const issue = useAppSelector(selectIssue);
  const { onClick, type, options, number } = props;
  const onClickMember = (m: Member) => {
    onClick(m);
    setOpen(false);
  };
  const onClickBook = (book: Book, n: number) => {
    onClick(book.id, n);
    setOpen(false);
  };
  const onDeleteBook = (n: number) => {
    if (type === 'book') {
      const { onDelete } = props;
      onDelete(n);
    }
  };

  return (
    <div>
      {type === 'book' ? (
        <>
          <SelectSearchContainer onClick={() => setOpen(!open)}>
            <input type="text" value={issue.bookIds[number] || 'select a book'} />
          </SelectSearchContainer>
          {open && (
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <Options>
                {options
                  .filter((b) => !issue.bookIds.includes(b.id))
                  .map((option) => (
                    <Option key={option.id} onClick={() => onClickBook(option, number)}>
                      {option.title}
                    </Option>
                  ))}
              </Options>
            </ClickAwayListener>
          )}
          {(number !== 0 || issue.bookIds.length > 1) && (
            <button type="button" onClick={() => onDeleteBook(number)}>
              remove
            </button>
          )}
        </>
      ) : (
        <>
          <SelectSearchContainer onClick={() => setOpen(!open)}>
            <input type="text" value={member.lastName || 'select a member'} />
          </SelectSearchContainer>
          {open && (
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <Options>
                {options.map((option) => (
                  <Option
                    key={option.id}
                    onClick={() => onClickMember(option)}
                    selected={option.membershipNumber === member.membershipNumber}
                  >
                    {option.firstName} {option.lastName}
                  </Option>
                ))}
              </Options>
            </ClickAwayListener>
          )}
        </>
      )}
    </div>
  );
};
