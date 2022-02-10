import { selectMember } from 'app/memberSlice';
import { useAppSelector } from 'app/hooks';
import { FC, useState } from 'react';
import { Book, Member } from 'types';
import { selectIssue } from 'app/issueSlice';
import ClickAwayListener from 'react-click-away-listener';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container, Option, Options, SelectSearchContainer } from './SelectSearch.style';

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

/**
 * It renders the select search component
 * @param props - SelectSearchProps
 * @returns A function that returns a JSX element.
 */
export const SelectSearch: FC<SelectSearchProps> = (props) => {
  const [open, setOpen] = useState(false);
  const member = useAppSelector(selectMember);
  const issue = useAppSelector(selectIssue);
  const { onClick, type } = props;

  const onClickMember = (m: Member) => {
    onClick(m);
    setOpen(false);
  };

  /**
   * It calls the onClick function with the book id and the number of the book.
   * @param {Book} book - The book that was clicked.
   * @param {number} n - number
   */
  const onClickBook = (book: Book, n: number) => {
    onClick(book.id, n);
    setOpen(false);
  };

  /**
   * It calls the onDelete function passed in as a prop, and passes in the number of the book to be
   * deleted.
   * @param {number} n - The number of the book to delete.
   */
  const onDeleteBook = (n: number) => {
    if (type === 'book') {
      const { onDelete } = props;
      onDelete(n);
    }
  };

  /**
   * It renders the select search component.
   * @returns A function that returns a JSX element.
   */
  function renderSelectSearch() {
    if (type === 'book') {
      const { number, options } = props;
      return (
        <Container>
          <SelectSearchContainer onClick={() => setOpen(true)}>
            <input type="text" value={issue.bookIds[number] || 'select a book'} />
          </SelectSearchContainer>
          {open && (
            <Options>
              {options
                .filter((b: { id: string }) => !issue.bookIds.includes(b.id))
                .map((option: Book) => (
                  <Option key={option.id} onClick={() => onClickBook(option, number)}>
                    {option.title}
                  </Option>
                ))}
            </Options>
          )}
          {(number !== 0 || issue.bookIds.length > 1) && (
            <FontAwesomeIcon icon={faTrash} onClick={() => onDeleteBook(number)} />
          )}
        </Container>
      );
    }
    const { options } = props;
    return (
      <>
        <SelectSearchContainer onClick={() => setOpen(true)}>
          <input type="text" value={member.lastName || 'select a member'} />
        </SelectSearchContainer>
        {open && (
          <Options>
            {options.map((option: Member) => (
              <Option
                key={option.id}
                onClick={() => onClickMember(option)}
                selected={option.membershipNumber === member.membershipNumber}
              >
                {option.firstName} {option.lastName}
              </Option>
            ))}
          </Options>
        )}
      </>
    );
  }

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>{renderSelectSearch()}</div>
    </ClickAwayListener>
  );
};
