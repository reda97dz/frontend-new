/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTable, usePagination } from 'react-table';
import {
  First,
  Goto,
  Last,
  PageIndex,
  Pagination,
  PreviousNext,
  Show,
  TableStyle,
} from './Table.style';

const Table = ({ columns, data, pagination, light, rowProps = () => ({}), ...rest }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <TableStyle light={light} {...rest}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}> {column.render('Header')} </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps(rowProps(row))}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> {cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {pagination && (
        <Pagination>
          <First onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </First>
          <PreviousNext onClick={() => previousPage()} disabled={!canPreviousPage}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </PreviousNext>
          <PageIndex>
            Page{' '}
            <strong>
              {pageIndex + 1} / {pageOptions.length}
            </strong>
          </PageIndex>
          <PreviousNext onClick={() => nextPage()} disabled={!canNextPage}>
            <FontAwesomeIcon icon={faAngleRight} />
          </PreviousNext>
          <Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </Last>
          <Goto>
            Aller vers
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '100px' }}
            />
          </Goto>
          <Show
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Afficher {pageSize}
              </option>
            ))}
          </Show>
        </Pagination>
      )}
    </TableStyle>
  );
};

export default Table;
