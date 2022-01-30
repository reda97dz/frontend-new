import { useAppDispatch, useAppSelector } from "app/hooks";
import { issueBook, previousStep, selectIssue, setBook } from "app/issueSlice";
import { FC } from "react";

export const Book: FC = () => {
  const issue = useAppSelector(selectIssue);
  const dispatch = useAppDispatch();
  return (
    <div>
      <input type="text" value={issue.bookId} placeholder='select Book' onChange={(e) => dispatch(setBook(e.target.value))} />
      <button type="button" onClick={() => dispatch(previousStep())}>
        back
      </button>
      {issue.bookId.length > 0 ? (
        <button type='button' onClick={() => dispatch(issueBook())}>
          Issue
        </button>
      ) : (
        <>Fill book information to be able to issue</>
      )}
    </div>
  );
};