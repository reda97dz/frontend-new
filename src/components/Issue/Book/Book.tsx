import { fetchBooks, selectBooks } from "app/booksSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { addBookOption, nextStep, previousStep, selectIssue, setBook } from "app/issueSlice";
import React, { FC, useEffect, useState } from "react";

export const Book: FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks)
  const issue = useAppSelector(selectIssue);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    dispatch(fetchBooks())
  }

  return (
    <div>
      <button type="button" onClick={() => dispatch(previousStep())}>
        back
      </button>
      <br />
      {issue.memberState > 0 && (
        issue.bookIds.map((b) => (
          <React.Fragment key={Math.random()}>
            <button type="button" onClick={() => setOpen(!open)}>{`select a book`}</button>
            {open && (
              <ul>
                {books.map((book) => (
                  <li key={book.id}> {book.title} </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        )))}
      <br />
      {issue.memberState > 1 ? (
        <button type="button" onClick={() => dispatch(addBookOption())} >Issue more</button>
      ) : (
        <p>Member has reached maximum borrowed book</p>
      )}
    </div>
  );
};