/* eslint-disable camelcase */
import { FC, useState, useMemo, useEffect } from 'react';
import Table from 'components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchIssues, selectIssues } from 'app/issuesSlice';
import TableCard from 'components/Table/TableCard';

export const IssueList: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getIssues();
  }, []);

  async function getIssues() {
    dispatch(fetchIssues());
  }
  const issues = useAppSelector(selectIssues);
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
      },
      {
        Header: 'Member',
        accessor: 'membership_number',
      },
      {
        Header: 'Book no.',
        accessor: 'bar_code',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Issue Date',
        accessor: 'issue_date',
      },
      {
        Header: 'Deadline',
        accessor: 'return_date',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Actions',
        Cell: () => <FontAwesomeIcon icon={faEllipsisV} />,
      },
    ],
    []
  );

  const createData = () => {
    const data: {
      id: number;
      membership_number: string;
      title: string;
      bar_code: number;
      issue_date: string;
      return_date: string;
      status: string;
    }[] = [];
    issues.forEach((issue) => {
      const book: { id: number; bar_code: number; title: string } = JSON.parse(issue.books);
      data.push({
        id: issue.id,
        bar_code: book.bar_code,
        title: book.title,
        issue_date: issue.date_issued,
        return_date: issue.date_due_for_return,
        status: 'active',
        membership_number: issue.Member.membership_number,
      });
    });
    return data;
  };

  return (
    <>
      <button type="button" onClick={() => dispatch(fetchIssues())}>
        Update
      </button>
      <Table light={false} columns={columns} data={createData()} pagination />
    </>
  );
};
