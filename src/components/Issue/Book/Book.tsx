import { useAppDispatch, useAppSelector } from "app/hooks";
import { nextStep, previousStep, selectIssue, setBook } from "app/issueSlice";
import { FC } from "react";

export const Book: FC = () => {
  const issue = useAppSelector(selectIssue);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(previousStep())}>
        back
      </button>
      <input type="text" value={issue.bookId} placeholder='select Book' onChange={(e) => dispatch(setBook(e.target.value))} />
      {issue.bookId.length > 0 ? (
        <button type='button' onClick={() => dispatch(nextStep())}>
          Verify
        </button>
      ) : (
        <>Fill book information to be able to proceed</>
      )}
    </div>
  );
};