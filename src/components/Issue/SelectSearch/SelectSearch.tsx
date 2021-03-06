/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { selectMember } from 'app/memberSlice';
import { useAppSelector } from 'app/hooks';
import { FC, useState } from 'react';
import { Book, Member, MemberIssue } from 'types';
import { selectIssue } from 'app/issueSlice';
import ClickAwayListener from 'react-click-away-listener';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { escapeRegExp, notEmpty } from 'utils/misc';
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
  options: MemberIssue[];
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
  const [query, setQuery] = useState('');
  const searchRegex = new RegExp(escapeRegExp(query), 'i');

  const member = useAppSelector(selectMember);
  const issue = useAppSelector(selectIssue);
  const { onClick, type } = props;

  const onClickMember = (m: MemberIssue) => {
    onClick(m);
    setQuery('');
    setOpen(false);
  };

  /**
   * It calls the onClick function with the book id and the number of the book.
   * @param {Book} book - The book that was clicked.
   * @param {number} n - number
   */
  const onClickBook = (book: Book, n: number) => {
    onClick(book, n);
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
            <input
              type="text"
              value={issue.bookIds[number] || query}
              placeholder="Select a book"
              onChange={(event) => setQuery(event.target.value)}
            />
          </SelectSearchContainer>
          {open && (
            <Options>
              {options
                .filter((b: Book) => b.Category.name !== 'REFERENCE')
                .filter((b: Book) => !issue.bookIds.includes(b.id.toString()))
                .filter((b: Book) => {
                  if (query === '') {
                    return b;
                  }
                  if (
                    Object.keys(b).some((field) => {
                      if (b[field as keyof Book]) {
                        return searchRegex.test(b[field as keyof Book].toString());
                      }
                    })
                  ) {
                    return b;
                  }
                })
                .map((option: Book) => (
                  <Option key={option.id} onClick={() => onClickBook(option, number)}>
                    {option.title}
                  </Option>
                ))}
            </Options>
          )}
          {(number !== 0 || issue.bookIds.length > 1) && (
            <FontAwesomeIcon icon={faMinusCircle} onClick={() => onDeleteBook(number)} />
          )}
        </Container>
      );
    }
    const { options } = props;
    const placeholderValue = notEmpty(member)
      ? `${member.membership_number} ${member.first_name} ${member.last_name}`
      : 'Select a member';
    return (
      <>
        <SelectSearchContainer onClick={() => setOpen(true)} placeholderColor={notEmpty(member)}>
          <input
            type="text"
            placeholder={placeholderValue}
            onChange={(event) => setQuery(event.target.value)}
            value={query}
          />
        </SelectSearchContainer>
        {open && (
          <Options>
            {options
              .filter((m: MemberIssue) => {
                if (query === '') {
                  return m;
                }
                if (
                  Object.keys(m).some((field) => {
                    if (m[field as keyof MemberIssue]) {
                      return searchRegex.test(m[field as keyof MemberIssue].toString());
                    }
                  })
                ) {
                  return m;
                }
              })
              .map((option: MemberIssue) => (
                <Option
                  key={option.id}
                  onClick={() => onClickMember(option)}
                  selected={option.membership_number === member.membership_number}
                >
                  <span>{option.membership_number}</span> {option.first_name} {option.last_name}
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
