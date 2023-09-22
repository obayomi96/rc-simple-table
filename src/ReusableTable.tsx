import React, { useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import { ReusableTableTypes } from './types';

const ReusableTable: React.FC<ReusableTableTypes> = ({
  searchFieldPlaceholder = '',
  tableColumns,
  tableData,
  onClick,
  pageSizeCount = 5,
  showTitleHideSearch = false,
  title = '',
  simpleTableContainerClassName = '',
  simpleShadowTableClassName = '',
  simpleTableTopclassName = '',
  simpleSearchDivClassName = '',
  simpleSearchFieldClassName = '',
  simpleTableTitleClassName = '',
  simpleTableTheadThClassName = '',
  simpleTableTbodyTrClassName = '',
  simpleTablePageContainerClassName = '',
  simpleTablePagBtnClassName = '',
  simpleTablePageSpan1ClassName = '',
  simpleTablePageSpan2ClassName = '',
}) => {
  const data = useMemo(() => tableData, [tableData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setGlobalFilter,
    state: { pageIndex, globalFilter },
  }: any = useTable(
    {
      columns: tableColumns,
      data,
      // @ts-ignore
      initialState: { pageIndex: 0, pageSize: pageSizeCount },
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <div className={`simple-table-container ${simpleTableContainerClassName}`}>
      <div
        className={`simple-table-shadow-table ${simpleShadowTableClassName}`}
      >
        {!showTitleHideSearch ? (
          <div className={`simple-table-top ${simpleTableTopclassName}`}>
            <div
              className={`simple-table-search-div ${simpleSearchDivClassName}`}
            >
              <input
                className={`simple-table-search-field ${simpleSearchFieldClassName}`}
                placeholder={searchFieldPlaceholder}
                value={globalFilter || ''}
                onChange={e => setGlobalFilter(e.target.value)}
                name=""
              />
            </div>
          </div>
        ) : title ? (
          <p className={`simple-table-title ${simpleTableTitleClassName}`}>
            {title}
          </p>
        ) : null}
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th
                    className={`simple-table-thead-th ${simpleTableTheadThClassName}`}
                    {...column.getHeaderProps()}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <tr
                  className={`simple-table-tbody-tr ${simpleTableTbodyTrClassName}`}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell: any) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        onClick={() => {
                          onClick(row?.original);
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* TABLE PAGINATION */}
      <div
        className={`simple-table-pag-container ${simpleTablePageContainerClassName}`}
      >
        <button
          className={
            !canPreviousPage
              ? `simple-table-pag-btn-disabled ${simpleTablePagBtnClassName}`
              : `simple-table-pag-btn ${simpleTablePagBtnClassName}`
          }
          disabled={!canPreviousPage}
          onClick={() => previousPage()}
        >
          {'<'}
        </button>
        <div style={{ width: '0.5rem' }} />
        <span
          className={`simple-table-pag-span1 ${simpleTablePageSpan1ClassName}`}
        >
          {pageIndex + 1}
        </span>
        <div style={{ width: '0.5rem' }} />
        of
        <div style={{ width: '0.5rem' }} />
        <span
          className={`simple-table-pag-span2 ${simpleTablePageSpan2ClassName}`}
        >
          {pageOptions.length}
        </span>
        <div style={{ width: '0.5rem' }} />
        <button
          style={{ marginRight: '2rem' }}
          disabled={!canNextPage}
          onClick={() => nextPage()}
          className={
            !canNextPage
              ? `simple-table-pag-btn-disabled ${simpleTablePagBtnClassName}`
              : `simple-table-pag-btn ${simpleTablePagBtnClassName}`
          }
        >
          {'>'}
        </button>
      </div>
      <div style={{ height: '2rem' }} />
    </div>
  );
};

export default ReusableTable;
