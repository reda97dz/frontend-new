import { fetchBooks, selectBooks } from "app/booksSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { addBookOption, nextStep, previousStep, removeBook, selectIssue, setBook } from "app/issueSlice";
import React, { FC, useEffect } from "react";
import { SelectSearch } from "../SelectSearch";

export const Book: FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks)
  const issue = useAppSelector(selectIssue);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    dispatch(fetchBooks())
  }

  const onClick = (bookId: string, index: number) => {
    dispatch(setBook({ book: bookId, number: index }))
  }

  const onDelete = (index: number) => {
    dispatch(removeBook(index))
  }
  return (
    <div>
      <button type="button" onClick={() => dispatch(previousStep())}>
        back
      </button>
      <br />
      {issue.memberState > 0 && (
        issue.bookIds.map((_, i) => (
          <React.Fragment key={Math.random()}>
            <SelectSearch
              number={i}
              onClick={onClick}
              options={books}
              type='book'
              onDelete={onDelete}
            />
          </React.Fragment>
        )))}
      <br />
      {issue.memberState > 1 ? (
        <button type="button" onClick={() => dispatch(addBookOption())} >Issue more</button>
      ) : (
        <p>Member has reached maximum borrowed book</p>
      )}
      <br />
      {issue.bookIds[0] != '' && <button type="button" onClick={() => dispatch(nextStep())} >verify</button>}
    </div>
  );
};